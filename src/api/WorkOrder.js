import request from '@/utils/request'
// 获取工单状态
export const getWorkOrderStatus = () => {
  return request({
    url: '/api/task-service/task/allTaskStatus'
  })
}
// 获取工单列表
export const getWorkOrderList = (params) => {
  return request({
    url: '/api/task-service/task/search',
    params
  })
}
