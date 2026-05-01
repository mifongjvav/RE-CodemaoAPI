# 个人信息

> 获取个人信息  
> `/web/users/details` `GET` `需要cookies`

## 返回内容

|           key           |                              value                              |  type   |
| :---------------------: | :-------------------------------------------------------------: | :-----: |
|           id            |                               ID                                | String  |
|        nickname         |                              昵称                               | String  |
|       avatar_url        |                            头像链接                             | String  |
|          email          |                            邮箱地址                             | String  |
|          gold           |                             金币数                              | Number  |
|           qq            |                             QQ 号码                             | String  |
|        real_name        |                            真实姓名                             | String  |
|           sex           |                性别（`FEMALE`为女，`MALE`为男）                 | String  |
|        username         |                             用户名                              | String  |
|     voice_forbidden     |                           是否被禁言                            | Boolean |
|        birthday         |                           生日时间戳                            | Number  |
|       description       |                            自我描述                             | String  |
|      phone_number       |                 手机号（格式：123\*\*\*\*4567）                 | String  |
|       create_time       |                         用户创建时间戳                          | Number  |
|         oauths          | 由多个 JSON 构成的第三方账号绑定情况列表（[查看详情](#oauths)） |  list   |
|      has_password       |                          是否设置密码                           | Boolean |
|        user_type        |                             `未知`                              | Number  |
|     show_guide_flag     |            是否在首页显示创作教程（0 为否，1 为是）             | Number  |
|       has_signed        |                      是否签订《友好契约》                       | Boolean |
| has_seen_primary_course |           是否上过编程猫课程（1 上过为，2 没上过为）            | Number  |
|      author_level       |     [用户等级](https://shequ.codemao.cn/friendly_protocol)      | Number  |

### oauths

列表中有很多项，只有前两项（wechat，qq）是编程猫社区支持绑定的，其余无实际用途。

|   key    |      value       |  type   |
| :------: | :--------------: | :-----: |
|    id    |        ID        | Number  |
|   name   |     平台名称     | String  |
| is_bound | 是否绑定了该平台 | Boolean |
