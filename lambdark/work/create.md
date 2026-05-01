# 创建作品

> 创建一个作品  
> `https://api-creation.codemao.cn/kitten/work` `POST` `需要cookies`

## POST 请求信息

|        key        |            value            |  type  |        |
| :---------------: | :-------------------------: | :----: | :----: |
|     bcmc_url      |       bcmc 文件的 URL       | String | `必须` |
|       name        |          作品名称           | String | `必须` |
|    orientation    |        `未知`（>=1）        | Number | `必须` |
|      preview      |          封面图片           | String | `必须` |
|     sample_id     |           `无用`            | String | `可选` |
|      version      | kitten 版本（默认当前最高） | String | `可选` |
| work_source_label |           `未知`            | Number | `可选` |
|     work_url      |   作品（.bcm4 文件） URL    | Number | `必须` |

## 返回内容

| key |  value  |  type  |
| :-: | :-----: | :----: |
| id  | 作品 ID | Number |
