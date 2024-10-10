# TTTこどもプログラミング教室岡山校用p5.js教材
p5.js教材サイトのフロントエンドリポジトリです

## 技術スタック
- フロントエンド
    - Next.js(CSR)
- バックエンド
    - microCMS

## 作った経緯
来年、アルバイトの講師が5人中3人が卒業する見込みなため、先生が不足と考えました。この問題を解決するためには、生徒が自走できる環境を整える必要があります。そして、教室で扱っているScratch、Viscuit、p5.jsの３つの言語の中でも、まだ教材が充実していないp5.jsに注目し、その教材作成を決定しました。

## 目的
- p5.jsを学ぶ生徒が自走できるような教材を作成する
- 小学校を卒業した生徒が、Scratchから難易度の高いp5.jsへ、スムーズに移行できるようにする
- 他の講師も気軽に、教材を作成できるようにする

## デプロイ先
- フロントエンド
    - Vercel
    - [URL](https://p5js-ttt.vercel.app)

## 大きな変更
#### 2024/06/03 バックエンドをRailsからmicroCMSに変更
**理由**
- RailsをHerokuにデプロイすると月700円かかる。ユーザー機能は、FirebaseなどのBaasの無料枠を使う予定。
- バックエンド開発に時間をかけすぎて、最も重要なp5.jsのテキスト作りが疎かになってしまったため。

**次の予定**
- テキスト記事を種類ごとに分ける

## docker composeコマンド

Dockerfileからイメージの作成
```shell
docker compose build --no-cache
```

イメージをもとにコンテナを起動
```shell
docker compose up -d
```

nextコンテナに入る
```shell
docker compose exec next /bin/bash
```

コンテナの停止
```shell
docker compose down
```