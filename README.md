# deno-api

Deno + Oak を使ったクリーンアーキテクチャのサンプル REST API です。

## アーキテクチャ

クリーンアーキテクチャに基づいた4層構造になっています。

```
presenter/     ... Controller（HTTPリクエスト/レスポンス）
application/   ... Interactor（ユースケース実装）
domain/        ... Model・Repository/UseCase インターフェース
repository/    ... Repository 実装（外部APIアクセスなど）
```

## エンドポイント

| メソッド | パス | 説明 |
|--------|------|------|
| GET    | `/`  | 投稿一覧を取得（JSONPlaceholder から取得） |

## 必要環境

- [Deno](https://deno.land/) v1.x 以上

## 起動方法

### ローカル

```bash
deno task dev
```

ホットリロード付きで起動します。`http://localhost:8080` でアクセスできます。

### Docker

```bash
docker-compose up
```

## テスト・ベンチマーク

```bash
# テスト
deno test

# ベンチマーク
deno bench
```

## 使用ライブラリ

| ライブラリ | 用途 |
|-----------|------|
| [oak](https://deno.land/x/oak) | HTTPサーバー・ルーティング |
| [inject](https://deno.land/x/inject) | DI（依存性注入）デコレータ |
| [reflect_metadata](https://deno.land/x/reflect_metadata) | デコレータ用メタデータ |
