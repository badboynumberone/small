import ajax from './ajax'

let baseUrl = '/api'
//获取食品列表
export const reqFoods = ()=>ajax(`${baseUrl}/foods`);

