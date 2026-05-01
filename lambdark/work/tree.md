# 作品继承树

> 获取作品再创作的情况  
> `/tiger/work/tree/<work_id>` `GET`

## 返回内容

|       key        |                      value                      |  type  |
| :--------------: | :---------------------------------------------: | :----: |
|        id        |                     作品 ID                     |  Number   |
|       name       |                    作品名称                     | String |
|     preview      |                 作品封面图 URL                  | String |
|   publish_time   |                 作品发布时间戳                  |  Number   |
|      status      |                     `未知`                      |  Number   |
|   is_published   |        是否发布（0 为 flase，1 为 true）        |  Number   |
|    is_deleted    |                是否删除（同上）                 |  Number   |
| collection_times |                  作品被收藏数                   |  Number   |
|   praise_times   |                  作品被点赞数                   |  Number   |
|    view_times    |                   作品浏览量                    |  Number   |
|    parent_id     | 继承自（父）作品的 ID（如果为原创，值为`null`） |  Number   |
|     children     |  所有再创作作品（列表内 JSON 格式同这里一样）   |  list  |
|      author      |         作者信息（[查看详情](#author)）         |  JSON  |

### author

|    key    |       value        |  type  |
| :-------: | :----------------: | :----: |
|  user_id  |      用户 ID       |  Number   |
| user_name | 用户名（不是昵称） | String |
| nickname  |      用户昵称      | String |
