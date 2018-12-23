

/* 
向后台请求数据的方法
*/
function request(url,methods='get') {
    return new Promise((resolve,reject)=>{
        wx.request({
            url:url,
            methods:methods,
            success:(res)=>{
                resolve(res);
            }
        })
    })
}

export default request;