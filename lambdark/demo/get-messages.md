# 获取新消息数量

> 难度系数：:star:
>
> - [登录](../user/login.md)
> - [获取新消息数量](../user/message-count.md)

登录用户，然后获取信息并打印

```python
from requests import Session


# 使用session，调用登录api后将自动在以后的请求中携带cookie
session = Session()

# 登录
login_data = {'pid': '65edCTyg',
              'identity': 'api_learning',
              'password': '123456'}
res_login = session.post(
    'https://api.codemao.cn/tiger/v3/web/accounts/login', json=login_data)

# 判断是否登录成功
if res_login.status_code == 200:
    nickname = res_login.json()['user_info']['nickname']
    print(f'用户：{nickname}')

    res_message = session.get(
        'https://api.codemao.cn/web/message-record/count')
    message_list = res_message.json()
    for message in message_list:
        print(f"{message['query_type']}：{message['count']}")

```

## 运行示例

```txt
用户：API学习
COMMENT_REPLY：2
LIKE_FORK：1
SYSTEM：0
```
