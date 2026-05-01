# 收藏作品列表

> 获取任意用户最新收藏的作品的信息  
> `/creation-tools/v1/user/center/collect/list` `GET`

## URL 参数

|   key   |    value     | type |        |
| :-----: | :----------: | :--: | :----: |
| user_id |   用户 ID    | Number  | `必须` |
| offset  |     页码     | Number  | `必须` |
|  limit  | 每一页的数量 | Number  | `必须` |

## 返回内容

|   key   |                      value                       | type |
| :-----: | :----------------------------------------------: | :--: |
|  items  | 由多个 JSON 构成的作品列表（[查看详情](#items)） | list |
| offset  |                       页码                       | Number  |
|  limit  |                   每一页的数量                   | Number  |
|  total  |                     作品总数                     | Number  |
| counted |                      `未知`                      | Boolean |

### items

|        key        |      value       |  type  |
| :---------------: | :--------------: | :----: |
|        id         |     作品 ID      |  Number   |
|       name        |      作品名      | String |
|      preview      | 作品封面图片链接 | String |
|      user_id      |     用户 ID      |  Number   |
|     nickname      |     用户昵称     | String |
|    avatar_url     |   用户头像链接   | String |
|    views_count    |  作品被浏览次数  |  Number   |
|    likes_count    |  作品被点赞次数  |  Number   |
| collections_count |  作品被收藏次数  |  Number   |
|    is_deleted     |      `未知`      |  Boolean  |
|   publish_time    |  作品发布时间戳  |  Number   |
|     work_type     |     作品类型     |  Number   |
|    description    |     作品介绍     | String |
