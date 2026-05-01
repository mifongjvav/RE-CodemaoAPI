# 荣誉信息

> 获取任意用户荣誉信息  
> `/creation-tools/v1/user/center/honor` `GET`

## URL 参数

|   key   |  value  | type |        |
| :-----: | :-----: | :--: | :----: |
| user_id | 用户 ID | Number  | `必须` |

## 返回内容

|            key            |              value               |  type  |
| :-----------------------: | :------------------------------: | :----: |
|          user_id          |                ID                |  Number   |
|         nickname          |               昵称               | String |
|        avatar_url         |             头像链接             | String |
|        user_cover         |              `未知`              | String |
|     user_description      |             自我描述             | String |
|           doing           |            正在做的事            | String |
|     attention_status      |          是否关注该用户          |  Boolean  |
|        block_total        |        nemo 作品积木总数         |  Number   |
|     re_created_total      |         作品被再创作总数         |  Number   |
|      attention_total      |        该用户关注的人总数        |  Number   |
|        fans_total         |         该用户的粉丝总数         |  Number   |
|      collected_total      |          作品被收藏总数          |  Number   |
|       collect_times       |              `未知`              |  Number   |
|        liked_total        |          作品被点赞总数          |  Number   |
|        view_times         |          作品被浏览总数          |  Number   |
|       author_level        |            该用户等级            |  Number   |
|       consume_level       |              `未知`              |  Number   |
| is_official_certification | 是否为官方帐户（0 为否，1 为是） |  Number   |
|        subject_id         |          用户工作室 ID           |  Number   |
|      work_shop_name       |           用户工作室名           | String |
|      work_shop_level      |          用户工作室等级          |  Number   |
|        like_score         |            用户点赞分            |  Number   |
|       collect_score       |            用户收藏分            |  Number   |
|        fork_score         |           用户再创作分           |  Number   |
