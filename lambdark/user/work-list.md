# 作品列表

> 获取任意用户最新作品的信息  
> `/creation-tools/v1/user/center/work-list` `GET`

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
|  total  |                  该用户作品总数                  | Number  |
| counted |                      `未知`                      | Boolean |

### items

|      key      |                      value                       |  type  |
| :-----------: | :----------------------------------------------: | :----: |
|      id       |                     作品 ID                      |  Number   |
|     type      |                       类型                       |  Number   |
|   work_name   |                      作品名                      | String |
|    preview    |                   封面图片链接                   | String |
|  view_times   |                    被浏览次数                    |  Number   |
| collect_times |                    被收藏次数                    |  Number   |
|  liked_times  |                    被点赞次数                    |  Number   |
|   parent_id   |            原创：0；再创作：原作品 ID            |  Number   |
|  fork_enable  |                  是否允许再创作                  |  Boolean  |
|  fork_times   |                   被再创作次数                   |  Number   |
| publish_time  |                  作品发布时间戳                  |  Number   |
|  description  |                     作品介绍                     | String |
|     role      | 在作品创作中的角色（此处似乎只可能为`"AUTHOR"`） | String |
| is_coll_work  |                  是否为协作作品                  |  Boolean  |
