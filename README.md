# next-ts-radixui-stitches-starter

## 開発環境

### git clone

```bash
git clone https://github.com/miyasan31/twitter-theme-next-starter.git
```

### dependencies install

```bash
yarn
```

### start

```bash
yarn dev
```

## 技術選定

- TypeScript
- Next.js
- React
- Stitches
- RadixUI
- React-Hot-Toast
- React-Error_Boundary
- ESLint
- Prettier
- Jest

## アーキテクチャ

## ブランチルール

- main（本番環境用）
  - develop ブランチのみ、PullRequest & merge 可能
- develop（開発環境用）
  - main ブランチ以外、PullRequest & merge 可能
- 命名規則は以下に従う

`[feature, fix, refactor, doc, test]/zzz-zzzXzz`

例： feature/ui-button

## コミットルール

- Gitmoji を使用する

> https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode

例： ✨ Button コンポーネント作成

## 命名規則

### 関数

**イベント系**

`const handleXzzXzz = () => {};`

### 変数

`const zzzXzz = '';`

### 型定義

`type XzzXzz = {};`

## ディレクトリ構成

> https://zenn.dev/yoshiko/articles/99f8047555f700

- 🗂 src
  - 🗂 components
    - 🗂 page
      - 🗂 XzzXzz
        - index.ts
        - XzzXzz.tsx
        - XzzXzz.page.tsx
        - useXzzXzz.hook.ts
      - 🗂 User
    - 🗂 model
      - 🗂 Xzz
        - index.ts
        - Xzz.tsx
        - Zzz.tsx
      - 🗂 User
        - Xxx.tsx
    - 🗂 ui
      - XzzXzz.tsx
      - XzzZzz.tsx
      - 🗂 Button
        - index.ts
        - XxxButton.tsx
        - ZzzButton.tsx
      - 🗂 Layout
    - 🗂 functional
      - 🗂 Xzz
        - index.ts
        - Xzz.tsx
      - 🗂 AuthProvider
      - 🗂 ErrorBoundary
  - 🗂 constants
    - 🗂 zzzXzz
      - index.ts（zzzXzz 配下のファイルを export）
      - XXX_XXX.ts
    - XXX_XXX.ts
  - 🗂 pages
    - 🗂 zzz_zzz
      - index.page.tsx
    - 🗂 [zzz_zzz]
      - zzz.page.tsx
    - \_app.page.tsx
    - zzz_zzz.page.tsx
  - 🗂 types
    - Xzz.ts
  - 🗂 utils
    - 🗂 zzzXzz
      - index.ts（zzzXzz 配下のファイルを export）
      - zzzXzz.ts
    - zzzXzz.ts
  - 🗂 stores
    - zzzXzz.ts
