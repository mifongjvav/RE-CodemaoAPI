# 搜索帖子

> 通过标题搜索帖子  
> `/web/forums/posts/search` `GET`

## URL 参数

|  key  |        value         |  type  |        |
| :---: | :------------------: | :----: | :----: |
| title |       帖子标题       | String | `必须` |
| page  |         页码         | Number | `可选` |
| limit | 每一页的数量`[5,30]` | Number | `可选` |

## 返回内容

|   key   |                      value                       |  type   |
| :-----: | :----------------------------------------------: | :-----: |
|  items  | 由多个 JSON 构成的帖子列表（[查看详情](#items)） |  list   |
| offset  |                      `未知`                      | Number  |
|  limit  |                   每一页的数量                   | Number  |
|  total  |                 查询到的帖子总数                 | Number  |
| counted |                      `未知`                      | Boolean |

### items

|      key      |                         value                          |  type   |
| :-----------: | :----------------------------------------------------: | :-----: |
|      id       |                        帖子 ID                         | String  |
|     user      |            帖子发布者（[查看详情](#user)）             |  JSON   |
|     title     |                        帖子标题                        | String  |
|    content    |                        帖子内容                        | String  |
|   n_replies   |                        回帖数量                        | Number  |
| is_authorized |                      是否为官方贴                      | Boolean |
|  is_featured  |                      是否为精选贴                      | Boolean |
|   is_hotted   |                      是否为热门贴                      | Boolean |
|   is_pinned   |                      是否为置顶帖                      | Boolean |
| tutorial_flag |                      是否为教程帖                      | Number  |
| ask_help_flag |                      是否为求助帖                      | Number  |
|  created_at   |                       发布时间戳                       | Number  |
|  n_comments   |                （每个回帖下的）评论数量                | Number  |
|  reply_user   | 最新回帖的发表者（[查看详情](#reply-or-comment-user)） |  JSON   |
|  replied_at   |           最新回帖时间戳（若无回帖，则为 0）           | Number  |
| comment_user  | 最新回复的发表者（[查看详情](#reply-or-comment-user)） |  JSON   |
| commented_at  |      最新回复时间戳（若无回复，则为 created_at）       | Number  |

#### user

|       key       |                                            value                                             |    type     |
| :-------------: | :------------------------------------------------------------------------------------------: | :---------: |
|       id        |                                              ID                                              |   String    |
|    nickname     |                                             昵称                                             |   String    |
|   avatar_url    |                                           头像链接                                           |   String    |
|   subject_id    |                                        用户工作室 ID                                         |   Number    |
| work_shop_name  |                                         用户工作室名                                         |   String    |
| work_shop_level |                                        用户工作室等级                                        |   Number    |
| ~~wuhan_medal~~ | ~~是否参加武汉爆发疫情时期的[“编程猫健康护航计划”活动](https://shequ.codemao.cn/studio/11)~~ | ~~Boolean~~ |
|   has_signed    |                                            `未知`                                            |   Boolean   |

#### reply-or-comment-user

同 [user](#user) 一致，但部分信息有时存在，有时不存在。
