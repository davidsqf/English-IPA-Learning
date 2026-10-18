#!/bin/bash
set -e
cd "$(dirname "$0")"
ipa_node="$(command -v node || true)"
ipa_supported() {
  [ -n "$1" ] && "$1" -e 'const [a,b]=process.versions.node.split(".").map(Number);process.exit(a>22||(a===22&&b>=12)?0:1)' 2>/dev/null
}
if ! ipa_supported "$ipa_node"; then
  ipa_node="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
fi
if ! ipa_supported "$ipa_node"; then
  echo 'IPA 入门需要 Node.js 22.12 或更新版本（推荐 24）。安装后请再次打开。'
  read -r -p '按回车退出。'
  exit 1
fi
export PATH="$(dirname "$ipa_node"):$PATH"
if [ ! -x node_modules/.bin/vite ]; then npm ci; fi
if ! npm run samples; then echo '部分录音暂未下载成功，仍可使用音标说明。'; fi
echo '正在打开 IPA 入门。关闭此终端窗口即可停止本地网站。'
exec npm run dev -- --open
