#!/usr/bin/env bash
# Al cerrar sesión de Claude Code: commit de todo lo pendiente y push a GitHub.
# Registro en .claude/hooks/sync.log (ignorado por git).
cd "$(dirname "$0")/../.." || exit 0
LOG=.claude/hooks/sync.log
{
  echo "=== $(date '+%Y-%m-%d %H:%M:%S') ==="
  BRANCH=$(git rev-parse --abbrev-ref HEAD)
  if [ -n "$(git status --porcelain)" ]; then
    git add -A
    git commit -q -m "Sync automático al cerrar sesión ($(date '+%Y-%m-%d %H:%M'))

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
  fi
  git -c credential.interactive=never pull -q --rebase --autostash origin "$BRANCH" || git rebase --abort
  git -c credential.interactive=never push origin "$BRANCH"
} >>"$LOG" 2>&1
exit 0
