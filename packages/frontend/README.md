# Frontend

## Setup

```
$ yarn
```

## Start

```
$ yarn dev
```

## デプロイ

※ Vercel を使うためにアカウントの設定が必要になります

- Step1 フォルダ名の変更

nextjs-vercel-template のフォルダ名を独自のものに変更

- Step2 Vercel に登録

<a href="https://vercel.com/signup">Signup ページ</a>

- Step3 Vercel の設定

vercel の実行。

```
npx vercel
```

`shift`を押す。

```
Set up and deploy “~/Development/フォルダ名”? [Y/n]
```

deploy 先のアカウントを選択する。

```
? Which scope do you want to deploy to? cookunijs
```

新規プロジェクトなので`shift`を押す。

```
Link to existing project? [y/N]
```

プロジェクト名の設定。フォルダ名と同一でいい場合は`shift`を押す。

```
What’s your project’s name?
```

`shift`を押す。

```
? In which directory is your code located? ./
```

`shift`を押す。

```
? Want to override the settings? [y/N]
```

- 2 回目以降のデプロイ

Prod 環境へのデプロイ

```
yarn deploy:prod
```

Dev 環境へのデプロイ

```
yarn deploy:dev
```

- 参考
  <a href="https://vercel.com/docs/cli#commands">Vercel CLI Commands DOCS</a>

<br/>

## フォルダ構成

### src

- components

pages に実装する component ファイルを格納する。
atomic デザインの構成要素毎にフォルダ分けをしている。

- stories

storybook 用のファイルを格納する。
components のフォルダ構成に合わせてフォルダ分けをしている。

- styles

component の style を指定する`.scss`ファイルを格納する。

- pages

page 用のファイルを格納する。

- lib

ライブラリとして component から切り離されている機能ファイルを格納する。

```
  src
  ├── components
  │   ├── atoms/
  │   ├── molecules/
  │   ├── organisms/
  │   └── templates/
  ├── stories
  │   ├── atoms/
  │   ├── molecules/
  │   ├── organisms/
  │   └── templates/
  ├── styles
  │   ├── components
  │   │   ├── atoms/
  │   │   ├── molecules/
  │   │   ├── organisms/
  │   │   └── templates/
  │   └── global.scss
  ├── pages
  │   ├── api/
  │   ├── _app.tsx
  │   ├── index.ts
  │   └── 404.ts
  └── lib
      ├── client.ts
      └── server.ts
```
