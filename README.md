# ReChat
Elixir/PhoenixとReactをWebsocketで接続するサンプル

事前にMySQLをインストール・スタートさせておいてください

依存関係の解決
```console
$ mix deps.get && cd assets && npm install
```

Phoenixサーバの起動

```
$ mix phx.server
```

dev-serverの起動
websocketを使用するので事前にPhoenixサーバの起動が必要です

```
$ npm start
```

スタートしたら http://localhost:8080 に接続するとチャット画面が見れます
