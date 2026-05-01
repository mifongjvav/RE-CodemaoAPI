# 板块信息

> 获取论坛单个版块详细信息  
> `/web/forums/boards/<board_id>` `GET`

## 返回内容

|      key      |       value        |  type  |
| :-----------: | :----------------: | :----: |
|      id       |      板块 ID       | String |
|     name      |      板块名称      | String |
|  description  |      板块描述      | String |
|   icon_url    |    板块图标 URL    | String |
|    is_hot     |   是否为热门板块   |  Boolean  |
|  has_popular  |       `未知`       |  Boolean  |
| has_selection |       `未知`       |  Boolean  |
|    n_posts    |   板块中帖子总数   |  Number   |
| n_discussions | 板块中帖子回复总数 |  Number   |
