import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入相关进度条的样式
import "nprogress/nprogress.css";
let request = axios.create({
    //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
    baseURL: "/api",
    //超时的设置
    timeout: 5000
})

request.interceptors.request.use((config)=>{
    // config 配置对象

        //进度条开始
        nprogress.start();
    return config;
})

request.interceptors.response.use((res)=>{
    //res:实质就是项目中发请求、服务器返回的数据
    //进度条结束
    nprogress.done();
    return res.data
},
(error)=>{
    console.error('cuo')
    return new Promise();
})

export default request