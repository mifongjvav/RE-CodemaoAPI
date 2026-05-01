# 关注列表

> 获取任意用户所关注的用户  
> `/creation-tools/v1/user/followers` `GET`

## URL 参数

|   key   |    value     |  type  |        |
| :-----: | :----------: | :----: | :----: |
| user_id |   用户 ID    | Number | `必须` |
| offset  |     页码     | Number | `必须` |
|  limit  | 每一页的数量 | Number | `必须` |

## 返回内容

|   key   |                      value                       |  type   |
| :-----: | :----------------------------------------------: | :-----: |
|  items  | 由多个 JSON 构成的用户列表（[查看详情](#items)） |  list   |
| offset  |                       页码                       | Number  |
|  limit  |                   每一页的数量                   | Number  |
|  total  |                     作品总数                     | Number  |
| counted |                      `未知`                      | Boolean |

### items

|     key     |     value      |  type   |
| :---------: | :------------: | :-----: |
|     id      |    用户 ID     | Number  |
|  nickname   |    用户昵称    | String  |
| avatar_url  |  用户头像链接  | String  |
|   n_works   |   用户作品数   | Number  |
| total_likes | 用户被点赞总数 | Number  |
| is_followed | 是否关注该用户 | Boolean |
| description |  用户自我描述  | String  |
