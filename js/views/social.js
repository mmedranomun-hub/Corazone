// Ligas, misiones y tienda.
import { getState, buy, PRICES, MAX_FREEZES, MAX_HEARTS, boostActive } from '../storage.js';
import { LEAGUES, PROMOTE, DEMOTE, leaderboard, settleLeague, msToWeekEnd, weekXp, todaysQuests, claimQuest } from '../game.js';
import { shell, esc, fmtTime, modal } from '../ui.js';
import { cora, sfx, party, flyGems } from '../fx.js';

const shield = (i, cls = '') => `<div class="shield ${cls}" style="--lc:${LEAGUES[i].color}" title="Liga ${LEAGUES[i].name}">🛡️</div>`;

export function viewLeagues() {
  const result = settleLeague();
  const s = getState();
  const tier = s.league.tier;
  const board = leaderboard();
  const rows = board.map((p) => {
    const zone = p.rank === PROMOTE ? '<div class="zone up">⬆ ZONA DE ASCENSO</div>' : p.rank === board.length - DEMOTE ? '<div class="zone down">⬇ ZONA DE DESCENSO</div>' : '';
    const medal = ['🥇', '🥈', '🥉'][p.rank - 1] || p.rank;
    return `<div class="lrow ${p.me ? 'me' : ''} ${p.rank <= PROMOTE ? 'up' : p.rank > board.length - DEMOTE ? 'down' : ''}"><span class="rk">${medal}</span><span class="av">${p.avatar}</span><span class="nm">${esc(p.name)}</span><span class="xp">${p.xp} XP</span></div>${zone}`;
  }).join('');
  shell(`
    <div class="league-head">
      <div class="shields">${LEAGUES.map((_, i) => shield(i, i === tier ? 'cur' : i < tier ? 'past' : 'lock')).join('')}</div>
      <h1>Liga ${LEAGUES[tier].name}</h1>
      <p class="muted">Los ${PROMOTE} primeros ascienden a la siguiente liga</p>
      <p class="timer">⏱ ${fmtTime(msToWeekEnd())}</p>
    </div>
    ${weekXp() ? '' : `<div class="join">${cora('think', 70)}<p>¡Completa una lección para entrar en la clasificación de esta semana!</p></div>`}
    <div class="board">${rows}</div>`, 'leagues');
  if (result) {
    const up = result.to > result.from;
    const down = result.to < result.from;
    if (up) party();
    modal(`${cora(up ? 'cheer' : down ? 'sad' : 'happy', 110)}<h2>${up ? `¡Has ascendido a la Liga ${LEAGUES[result.to].name}!` : down ? `Has bajado a la Liga ${LEAGUES[result.to].name}` : `Sigues en la Liga ${LEAGUES[result.to].name}`}</h2><p class="muted">Terminaste la semana en el puesto ${result.rank}.</p><button class="btn primary" data-close>Continuar</button>`);
  }
}

export function viewQuests() {
  const quests = todaysQuests();
  const end = new Date();
  end.setHours(24, 0, 0, 0);
  const s = getState();
  shell(`
    <div class="quests-head" style="--accent:#ff9600">
      <div><h1>Misiones diarias</h1><p>⏱ ${fmtTime(end - Date.now())} restantes</p></div>${cora('happy', 90)}
    </div>
    <div class="quest-list">${quests.map((q) => `
      <div class="quest ${q.done ? 'done' : ''}">
        <span class="qi">${q.icon}</span>
        <div><b>${esc(q.text)}</b>
          <div class="qbar"><div class="bar"><div class="bar-fill" style="width:${(q.value / q.target) * 100}%"></div></div><small>${q.value} / ${q.target}</small></div>
        </div>
        ${q.claimed ? '<span class="chest">✅</span>' : q.done ? `<button class="btn mini" data-claim="${q.key}">+${q.reward} 💎</button>` : '<span class="chest">🎁</span>'}
      </div>`).join('')}
    </div>
    <h2 class="sec-title">Meta diaria</h2>
    <p class="muted">Tu meta es ${s.dailyGoal} XP al día. Cámbiala en <a href="#/ajustes">Ajustes</a>.</p>
    <a class="practice-card" href="#/logros"><span class="pi">🏅</span><div><b>Logros</b><small>Consulta tus insignias</small></div></a>`, 'quests');
  document.querySelectorAll('[data-claim]').forEach((b) => b.addEventListener('click', async () => {
    if (!claimQuest(b.dataset.claim)) return;
    sfx('Complete');
    party();
    b.disabled = true;
    b.classList.add('pop-in');
    // Las gemas vuelan al contador de la barra superior; al re-pintar, el número sube.
    await flyGems(b, document.querySelector('.tb-stat.gem'), 7);
    if (location.hash.startsWith('#/misiones')) viewQuests();
  }));
}

export function viewShop() {
  const s = getState();
  const item = (id, icon, title, desc, disabled, label) => `
    <div class="shop-item"><span class="si">${icon}</span><div><b>${title}</b><small>${desc}</small></div>
    <button class="btn mini" data-buy="${id}" ${disabled || s.gems < PRICES[id] ? 'disabled' : ''}>${label || `${PRICES[id]} 💎`}</button></div>`;
  shell(`
    <div class="shop-head"><h1>Tienda</h1><div class="gems">💎 ${s.gems}</div></div>
    <h2 class="sec-title">Vidas</h2>
    ${item('hearts', '❤️', 'Recargar vidas', `Tienes ${s.hearts}/${MAX_HEARTS}. Vuelve a tener todas tus vidas.`, s.hearts >= MAX_HEARTS, s.hearts >= MAX_HEARTS ? 'LLENAS' : null)}
    <h2 class="sec-title">Potenciadores</h2>
    ${item('freeze', '🧊', 'Protector de racha', `Protege tu racha si un día no practicas. Equipados: ${s.freezes}/${MAX_FREEZES}.`, s.freezes >= MAX_FREEZES, s.freezes >= MAX_FREEZES ? 'EQUIPADO' : null)}
    ${item('boost', '⚡', 'Doble de XP', boostActive() ? `¡Activo! Quedan ${fmtTime(s.boostUntil - Date.now())}.` : 'Gana el doble de XP durante 15 minutos.', false)}
    <p class="muted center">Consigue gemas completando misiones diarias 🎯</p>`, 'profile');
  document.querySelectorAll('[data-buy]').forEach((b) => b.addEventListener('click', () => {
    if (buy(b.dataset.buy)) { sfx('Complete'); viewShop(); }
  }));
}
