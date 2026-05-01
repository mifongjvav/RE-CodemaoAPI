# 其他用户信息

> 获取其他用户的信息  
> `/api/user/info/detail/<user_id>` `GET`

## 返回内容

> data.userInfo 内的数据

|       key       |             value             |   type   |
| :-------------: | :---------------------------: | :------: |
|      user       | 用户信息（[查看详情](#user)） |   JSON   |
|    ~~work~~     |         ~~封面作品~~          | ~~JSON~~ |
| collectionTimes |        作品被收藏次数         |  Number  |
|   forkedTimes   |       作品被再创作次数        |  Number  |
|   isFollowing   |            `未知`             |   JSON   |
|   praiseTimes   |        作品被点赞次数         |  Number  |
|    viewTimes    |        作品被浏览次数         |  Number  |

### user

|         key         |          value           |    type    |
| :-----------------: | :----------------------: | :--------: |
|         id          |         用户 ID          |   Number   |
|      nickname       |           昵称           |   String   |
|         sex         | 性别（`0`为女，`1`为男） |   String   |
|     description     |         自我描述         |   String   |
|        doing        |        正在做的事        |   String   |
| ~~preview_work_id~~ |     ~~封面作品 ID~~      | ~~Number~~ |
|        level        |         用户等级         |   Number   |
|       avatar        |         头像 URL         |   String   |

### 示例

```json
{
  "code": 200,
  "msg": "成功",
  "description": "Http request finish without mistake",
  "data": {
    "userInfo": {
      "user": {
        "id": 123456,
        "nickname": "无昵称",
        "sex": 1,
        "description": "描述一下自己",
        "doing": "在做",
        "preview_work_id": 12345678,
        "level": 1,
        "avatar": "https://example.com/xxx"
      },
      "work": {
        "id": 12345678,
        "name": "Hello World!",
        "preview": "https://example.com/xxx"
      },
      "collectionTimes": 1234,
      "forkedTimes": 1234,
      "isFollowing": {},
      "praiseTimes": 1234,
      "viewTimes": 1234
    }
  }
}
```
