# HTML Demo

これはhtml-demoリポジトリです。スクロールエフェクトのデモが含まれています。

20250712
claude code 学習用のリポジトリとして再利用

## GitHub Actions ワークフロー

### `.github/workflows/claude.yml`
**Claude Code Action**: Issue/PRのコメントで `@claude` にメンションすると、ClaudeがAIアシスタントとしてコード生成や問題解決を自動実行します。Issue本文やタイトルに `@claude` を含めると自動でトリガーされ、作業完了後に「Create PR」ボタンが表示されます。

### `.github/workflows/slack-notify.yml`
**Slack通知**: Claudeの作業が完了（Issueが`completed`でクローズ）したタイミングでSlackに自動通知を送信します。通知にはIssueのURLが含まれ、「Create PR」ボタンをクリックするための案内が表示されます。

## ファイル構成

- index.html … メインのHTMLファイル
- css/
  - style.css … カスタムスタイル
  - framework.css … フレームワーク用スタイル
- js/
  - scroll.js … スクロールエフェクト用JavaScript
- img/ … 画像ファイル

## 機能

- スクロールに連動したフェードイン・スライドインエフェクト（`inview`関数）
- スクロール位置に応じたアニメーション表示（`fromtop`関数）
- パララックススクロール効果（`parallaxScroll`関数）
- シンプルなフレームワークCSSによるレイアウト

