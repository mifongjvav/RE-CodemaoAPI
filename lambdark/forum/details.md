# 帖子信息

> 获取帖子信息  
> `/web/forums/posts/<post_id>/details` `GET`

## 返回内容

|      key      |          value           |  type   |
| :-----------: | :----------------------: | :-----: |
|      id       |         帖子 ID          | String  |
|     title     |         帖子标题         | String  |
|    content    |         帖子内容         | String  |
|   board_id    |     帖子所在板块 ID      | String  |
|  board_name   |     帖子所在板块名称     | String  |
|  updated_at   |        更新时间戳        | Number  |
|  created_at   |        发布时间戳        | Number  |
|    n_views    |         浏览次数         | Number  |
|   n_replies   |         回帖数量         | Number  |
|  n_comments   | （每个回帖下的）评论数量 | Number  |
| is_authorized |       是否为官方贴       | Boolean |
|  is_featured  |       是否为精选贴       | Boolean |
|   is_hotted   |       是否为热门贴       | Boolean |
|   is_pinned   |       是否为置顶帖       | Boolean |
| tutorial_flag |       是否为教程帖       | Number  |
| ask_help_flag |       是否为求助帖       | Number  |
