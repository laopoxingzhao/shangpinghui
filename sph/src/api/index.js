import requests  from "./request";

export const reqCategory = () => requests({ method: 'get', url: '/product/getBaseCategoryList' })
 
 