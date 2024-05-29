# TTTこどもプログラミング教室岡山校用p5.js教材
p5.js教材サイトのフロントエンドリポジトリです
## 技術スタック
- フロントエンド
    - Next.js(当リポジトリ)
- バックエンド
    - Ruby on Rails
## デプロイ先
- フロントエンド
    - Vercel
    - [URL](https://ttt-games.vercel.app)
- バックエンド
    - Heroku
    - [URL](https://backend-ttt-games-e03fa5aec993.herokuapp.com/api/v1/health_check)

## 画面
### 教材一覧
![教材一覧画面](https://takokke-github-images.s3.ap-northeast-1.amazonaws.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-05-04%2013.27.33.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aDmFwLW5vcnRoZWFzdC0xIkgwRgIhALGVOwfk8ms1KpS%2FPjgzld3tcA05blD05TLd1o5ql2veAiEAzqk03khlb2CflC%2FLfU5k%2B6AXT9Cn1%2BK9dNz9IpONuCcq5AIIeRAAGgw3NjA0MjYyMTkyODIiDOPRHAGWUnkrKr1jISrBAmWbSU0UPCkkcj8dp%2BRb7zBz4yTZgFYH%2FtP0nfmeLrWG%2BIf9BjY21H11vRKWdjpaZ6CihD5%2FitwXKCaTOA%2B8HxcjEYUrBg4UQJUfwrLtDz3O4FtyWi4YKoYBkLsUx8s6T%2B6%2Bng86L48ZCFbVE0YXxlaHBOTVkj8PufOPZDNn5XFsK2Jfi2xtnWZx67gWL%2BigfDDxmGpSH0S%2Bor%2FVaC8gZpZkWB7fE1mHgtF1w0yCnE76NlRmW1EfJpyMWv65JDuKoQZ730iYb8h83eWN8iuIBgiYG54M7cNZSGC6UwdeUE8JEfapPio8F6NRfnY50%2FwbQMA9VudHduzm1TCTQEZo9Z06tU2yyWXTN8kkJHCh051nQnpPJGaCdlHwJYsg7zS39PXIBVVAyDG2%2FwGS5NmEdwqe9g7I%2B4pe7rK4YK6OD381uDCT6IiyBjqyAjwwd32sd3xn6TQ%2BTyNvABINBUMPOc7w0il9pa%2FMQ1KSM7cRyxpPI%2FxBqPfA8rU8EeyA60TG%2FKq7kEOaF3WIV0P1GF1Ct03cyNObEiiMsa%2B8zbeMMjDmps77YtdDo6OiQGGjb7c%2FnvAO0kTwr5Xs6JPuK2TqU9liCIora38Op1Zctoazw97o2ggwBigzUe6p7bs1kOAzrgjDjNhTDSudBoGziph8Skiiq5RK9hQ6agjvPPpN7bPRMk7R9%2Bx3P3wHbG1IBwlJspR2%2F2Bc%2Fnckok3NoizA%2FafDIkxpHwyV0HzErMfT2THk5k2FlEMh50IC5%2BqCimzNlDSLQhlFKGrpTS2J2Tt8h66Jn5ZxpcKW0wCRp5Ja3g2qy5UcIoAJWg%2B2wH8roakYFLR8GvsuGnsCYQDOOg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240513T154045Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3CDHPI4JBFZGWIMW%2F20240513%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=0999566f832672ac718670bef13927872143c6d6dc5c8a52cc33947110ea8eee)

### 教材詳細
![教材詳細画面](https://takokke-github-images.s3.ap-northeast-1.amazonaws.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-05-02%2014.55.03.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aDmFwLW5vcnRoZWFzdC0xIkgwRgIhALGVOwfk8ms1KpS%2FPjgzld3tcA05blD05TLd1o5ql2veAiEAzqk03khlb2CflC%2FLfU5k%2B6AXT9Cn1%2BK9dNz9IpONuCcq5AIIeRAAGgw3NjA0MjYyMTkyODIiDOPRHAGWUnkrKr1jISrBAmWbSU0UPCkkcj8dp%2BRb7zBz4yTZgFYH%2FtP0nfmeLrWG%2BIf9BjY21H11vRKWdjpaZ6CihD5%2FitwXKCaTOA%2B8HxcjEYUrBg4UQJUfwrLtDz3O4FtyWi4YKoYBkLsUx8s6T%2B6%2Bng86L48ZCFbVE0YXxlaHBOTVkj8PufOPZDNn5XFsK2Jfi2xtnWZx67gWL%2BigfDDxmGpSH0S%2Bor%2FVaC8gZpZkWB7fE1mHgtF1w0yCnE76NlRmW1EfJpyMWv65JDuKoQZ730iYb8h83eWN8iuIBgiYG54M7cNZSGC6UwdeUE8JEfapPio8F6NRfnY50%2FwbQMA9VudHduzm1TCTQEZo9Z06tU2yyWXTN8kkJHCh051nQnpPJGaCdlHwJYsg7zS39PXIBVVAyDG2%2FwGS5NmEdwqe9g7I%2B4pe7rK4YK6OD381uDCT6IiyBjqyAjwwd32sd3xn6TQ%2BTyNvABINBUMPOc7w0il9pa%2FMQ1KSM7cRyxpPI%2FxBqPfA8rU8EeyA60TG%2FKq7kEOaF3WIV0P1GF1Ct03cyNObEiiMsa%2B8zbeMMjDmps77YtdDo6OiQGGjb7c%2FnvAO0kTwr5Xs6JPuK2TqU9liCIora38Op1Zctoazw97o2ggwBigzUe6p7bs1kOAzrgjDjNhTDSudBoGziph8Skiiq5RK9hQ6agjvPPpN7bPRMk7R9%2Bx3P3wHbG1IBwlJspR2%2F2Bc%2Fnckok3NoizA%2FafDIkxpHwyV0HzErMfT2THk5k2FlEMh50IC5%2BqCimzNlDSLQhlFKGrpTS2J2Tt8h66Jn5ZxpcKW0wCRp5Ja3g2qy5UcIoAJWg%2B2wH8roakYFLR8GvsuGnsCYQDOOg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240513T153930Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3CDHPI4JBFZGWIMW%2F20240513%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=468dc4d450ea23566c006e374c6fc7c495fc7fc0f453b17fd15986fc016b8925)

### 教材作成
![教材作成画面](https://takokke-github-images.s3.ap-northeast-1.amazonaws.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-05-04%2013.29.18.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aDmFwLW5vcnRoZWFzdC0xIkgwRgIhALGVOwfk8ms1KpS%2FPjgzld3tcA05blD05TLd1o5ql2veAiEAzqk03khlb2CflC%2FLfU5k%2B6AXT9Cn1%2BK9dNz9IpONuCcq5AIIeRAAGgw3NjA0MjYyMTkyODIiDOPRHAGWUnkrKr1jISrBAmWbSU0UPCkkcj8dp%2BRb7zBz4yTZgFYH%2FtP0nfmeLrWG%2BIf9BjY21H11vRKWdjpaZ6CihD5%2FitwXKCaTOA%2B8HxcjEYUrBg4UQJUfwrLtDz3O4FtyWi4YKoYBkLsUx8s6T%2B6%2Bng86L48ZCFbVE0YXxlaHBOTVkj8PufOPZDNn5XFsK2Jfi2xtnWZx67gWL%2BigfDDxmGpSH0S%2Bor%2FVaC8gZpZkWB7fE1mHgtF1w0yCnE76NlRmW1EfJpyMWv65JDuKoQZ730iYb8h83eWN8iuIBgiYG54M7cNZSGC6UwdeUE8JEfapPio8F6NRfnY50%2FwbQMA9VudHduzm1TCTQEZo9Z06tU2yyWXTN8kkJHCh051nQnpPJGaCdlHwJYsg7zS39PXIBVVAyDG2%2FwGS5NmEdwqe9g7I%2B4pe7rK4YK6OD381uDCT6IiyBjqyAjwwd32sd3xn6TQ%2BTyNvABINBUMPOc7w0il9pa%2FMQ1KSM7cRyxpPI%2FxBqPfA8rU8EeyA60TG%2FKq7kEOaF3WIV0P1GF1Ct03cyNObEiiMsa%2B8zbeMMjDmps77YtdDo6OiQGGjb7c%2FnvAO0kTwr5Xs6JPuK2TqU9liCIora38Op1Zctoazw97o2ggwBigzUe6p7bs1kOAzrgjDjNhTDSudBoGziph8Skiiq5RK9hQ6agjvPPpN7bPRMk7R9%2Bx3P3wHbG1IBwlJspR2%2F2Bc%2Fnckok3NoizA%2FafDIkxpHwyV0HzErMfT2THk5k2FlEMh50IC5%2BqCimzNlDSLQhlFKGrpTS2J2Tt8h66Jn5ZxpcKW0wCRp5Ja3g2qy5UcIoAJWg%2B2wH8roakYFLR8GvsuGnsCYQDOOg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240513T154155Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3CDHPI4JBFZGWIMW%2F20240513%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=e3ee99c5ddbae747017d99556f256d34ef1f1a04216d6d48453ee9a86287aef6)

### 記事管理画面
![管理画面](https://takokke-github-images.s3.ap-northeast-1.amazonaws.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-05-04%2013.32.47.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aDmFwLW5vcnRoZWFzdC0xIkgwRgIhALGVOwfk8ms1KpS%2FPjgzld3tcA05blD05TLd1o5ql2veAiEAzqk03khlb2CflC%2FLfU5k%2B6AXT9Cn1%2BK9dNz9IpONuCcq5AIIeRAAGgw3NjA0MjYyMTkyODIiDOPRHAGWUnkrKr1jISrBAmWbSU0UPCkkcj8dp%2BRb7zBz4yTZgFYH%2FtP0nfmeLrWG%2BIf9BjY21H11vRKWdjpaZ6CihD5%2FitwXKCaTOA%2B8HxcjEYUrBg4UQJUfwrLtDz3O4FtyWi4YKoYBkLsUx8s6T%2B6%2Bng86L48ZCFbVE0YXxlaHBOTVkj8PufOPZDNn5XFsK2Jfi2xtnWZx67gWL%2BigfDDxmGpSH0S%2Bor%2FVaC8gZpZkWB7fE1mHgtF1w0yCnE76NlRmW1EfJpyMWv65JDuKoQZ730iYb8h83eWN8iuIBgiYG54M7cNZSGC6UwdeUE8JEfapPio8F6NRfnY50%2FwbQMA9VudHduzm1TCTQEZo9Z06tU2yyWXTN8kkJHCh051nQnpPJGaCdlHwJYsg7zS39PXIBVVAyDG2%2FwGS5NmEdwqe9g7I%2B4pe7rK4YK6OD381uDCT6IiyBjqyAjwwd32sd3xn6TQ%2BTyNvABINBUMPOc7w0il9pa%2FMQ1KSM7cRyxpPI%2FxBqPfA8rU8EeyA60TG%2FKq7kEOaF3WIV0P1GF1Ct03cyNObEiiMsa%2B8zbeMMjDmps77YtdDo6OiQGGjb7c%2FnvAO0kTwr5Xs6JPuK2TqU9liCIora38Op1Zctoazw97o2ggwBigzUe6p7bs1kOAzrgjDjNhTDSudBoGziph8Skiiq5RK9hQ6agjvPPpN7bPRMk7R9%2Bx3P3wHbG1IBwlJspR2%2F2Bc%2Fnckok3NoizA%2FafDIkxpHwyV0HzErMfT2THk5k2FlEMh50IC5%2BqCimzNlDSLQhlFKGrpTS2J2Tt8h66Jn5ZxpcKW0wCRp5Ja3g2qy5UcIoAJWg%2B2wH8roakYFLR8GvsuGnsCYQDOOg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240513T154216Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3CDHPI4JBFZGWIMW%2F20240513%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=e35234ed469a24ed6cd9df972312d0075babd7026b3d876298a0512c5e96bf0c)