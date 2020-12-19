import axios from "axios";

//对axios进行封装
//使用响应拦截器对返回结果进行处理

axios.interceptors.response.use(ret => {
    return ret.data || ret;
})

//导出
export default axios;