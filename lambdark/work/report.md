# 举报作品

> `/nemo/v2/report/work` `POST` `需要cookies`

::: warning
慎用此 api，多次恶意举报他人可能会造成封号！
:::

## POST 请求信息

|       key       |     value      |  type  |
| :-------------: | :------------: | :----: |
| report_describe | 举报的详细信息 | String |
|  report_reason  |    举报类型    | String |
|     work_id     |    作品 id     | Number |

## 返回内容

::: tip
如果请求信息正确，此请求无返回内容
:::
