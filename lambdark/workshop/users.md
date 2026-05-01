# 成员

> 获取指定工作室的成员  
> `/web/shops/<workshop_id>/users` `GET`

## URL 参数

|  key   |         value         | type |        |
| :----: | :-------------------: | :--: | :----: |
| offset |         页码          | Number  | `可选` |
| limit  | 每一页的数量`[5,200]` | Number  | `可选` |

## 返回内容

|   key   |                      value                       | type |
| :-----: | :----------------------------------------------: | :--: |
|  items  | 由多个 JSON 构成的成员列表（[查看详情](#items)） | list |
| offset  |                       页码                       | Number  |
|  limit  |                   每一页的数量                   | Number  |
|  total  |                 该工作室成员总数                 | Number  |
| counted |                      `未知`                      | Boolean |

### items

|       key       |             value             |  type  |
| :-------------: | :---------------------------: | :----: |
|       id        |            `未知`             |  Number   |
|      name       |           用户昵称            | String |
|     n_works     |            `未知`             |  Number   |
|   avatar_url    |           头像链接            | String |
|     user_id     |            用户 ID            |  Number   |
| work_subject_id |           工作室 ID           |  Number   |
|    object_id    |         工作室识别码          |  Number   |
|      type       |  `未知`（均为`"WORKSHOP"`）   | String |
|      role       |            `未知`             |  Number   |
|    position     | 职位（[查看详情](#position)） | String |
|     status      |            `未知`             |  Number   |
| latest_work_at  |  工作室最新作品的投稿时间戳   |  Number   |
|       qq        |    申请加入时填写的 qq 号     | String |

#### position

|  职位  |      值      |
| :----: | :----------: |
|  室长  |    LEADER    |
| 副室长 | DEPUTYLEADER |
|  室员  |    STAFF     |
