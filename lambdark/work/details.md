# 作品信息

> 获取作品信息  
> `/creation-tools/v1/works/<work_id>` `GET`

## 返回内容

|         key          |                  value                   |  type   |
| :------------------: | :--------------------------------------: | :-----: |
|          id          |                 作品 ID                  | String  |
|      work_name       |                 作品名称                 | String  |
|         type         | 编辑器类型（Kitten2，Kitten3，Kitten4 等） | String  |
|       ide_type       |                编辑器系列                | String  |
|      operation       |                 操作说明                 | String  |
|     description      |                 作品介绍                 | String  |
|     orientation      |                  `未知`                  |   Number   |
|      parent_id       |                  `未知`                  |   Number   |
|   parent_user_name   |                  `未知`                  | String  |
|      player_url      |               player 链接                | String  |
|      share_url       |                 分享链接                 | String  |
|   unify_share_url    |                  `未知`                  | String  |
|     n_tree_nodes     |               作品再创作数               |   Number   |
|      view_times      |                作品浏览量                |   Number   |
|    collect_times     |                作品收藏数                |   Number   |
|     share_times      |                作品分享数                |   Number   |
|     fork_enable      |              是否开放再创作              | Booleanean |
|      fork_scope      |                  `未知`                  |   Number   |
|       preview        |                 作品封面                 | String  |
|     bcm_version      |                编辑器版本                | String  |
|       bcm_url        |                  `未知`                  | String  |
| screenshot_cover_url |           作品社区页启动界面图           | String  |
|       n_roles        |                  `未知`                  |   Number   |
|       n_brick        |                  `未知`                  |   Number   |
|    comment_times     |                  评论数                  |   Number   |
|     publish_time     |               作品发布时间               |   Number   |
|      user_info       |  作品作者信息（[查看详情](#user_info)）  |  JSON   |
|      abilities       |  作品作者信息（[查看详情](#abilities)）  |  JSON   |
|   work_label_list    | 作品标签（[查看详情](#work_label_list)） |  array  |
| player_display_type  |                                          |   Number   |

### user_info

|            key            |    value     |  type  |
| :-----------------------: | :----------: | :----: |
|            id             |   用户 ID    |  Number   |
|         nickname          |   用户昵称   | String |
|          avatar           | 用户头像链接 | String |
|         nickname          |   用户昵称   | String |
|         fork_user         |    `未知`    | String |
|        description        |   个性签名   | String |
|       author_level        |   作者等级   |  Number   |
|       consume_level       |    `未知`    |  Number   |
| is_official_certification |   官方认证   |  Number   |

### abilities

|     key      |      value       |  type   |
| :----------: | :--------------: | :-----: |
| is_collected | 访客是否收藏作品 | Booleanean |
|  is_praised  | 访客是否点赞作品 | Booleanean |
|   is_owned   |  访客是否为作者  | Booleanean |

### work_label_list

|    key     |   value    |  type  |
| :--------: | :--------: | :----: |
| label_type | 标签内部名 | String |
|  label_id  |   `未知`   |  Number   |
| label_name |   标签名   | String |
