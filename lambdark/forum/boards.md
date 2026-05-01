# 所有板块信息

> 获取论坛所有版块信息  
> `/web/forums/boards/simples/all` `GET`

## 返回内容

> 只有一个键：`items`，它的值为一个 List，每一项 JSON 内容如下：

|      key      |     value      |  type   |
| :-----------: | :------------: | :-----: |
|      id       |    板块 ID     | String  |
|     name      |    板块名称    | String  |
|   icon_url    |  板块图标 URL  | String  |
|    is_hot     | 是否为热门板块 | Boolean |
|  has_popular  |     `未知`     | Boolean |
| has_selection |     `未知`     | Boolean |

### 示例

```json
[
  {
    "id": "17",
    "name": "热门活动",
    "icon_url": "https://static.codemao.cn/whale/rJlHNdXlS",
    "is_hot": true,
    "has_popular": true,
    "has_selection": false
  },
  {
    "id": "2",
    "name": "积木编程乐园",
    "icon_url": "https://static.codemao.cn/Fn11e6oT0MuozTRqWWIMKIeUFvP4",
    "is_hot": true,
    "has_popular": false,
    "has_selection": true
  },
  ......
]
```
