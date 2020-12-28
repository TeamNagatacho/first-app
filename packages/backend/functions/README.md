

# Functions
sendgrid等のapikeyは以下のようにして設定、取得する。

## functions.configへ値を設定
```
$ npx firebase functions:config:set someservice.key="THE API KEY"
```

## functions.configの値を取得
```
$ npx firebase functions:config:get
```
