//用于home页面的防抖封装函数
export function debounce(func,wait){
        var timer = null

        return function(...args){
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(this,args)
            },wait)
    }
}

//用于详情页的评论时间转换函数
export function formatDate(date,fmt){
    //1获取年份
    //y+:1个或者多个y
    //y*:0个或者多个y
    //y?:0个或者1个y
    if(/(y+)/.test(fmt)){
        //此处下面将一个数字加上一个空字符串就变成字符串->简便做法
        fmt = fmt.replace(RegExp.$1,(date.getFullYear()+ '').substr(4-RegExp.$1.length))
    }
    //获取其他
    let o = {
        'M+':date.getMonth()+1,
        'd+':date.getDate(),
        'H+':date.getHours(),
        'm+':date.getMinutes(),
        's+':date.getSeconds()
    }

    for(let k in o){
        if(new RegExp(`(${k})`).test(fmt)){
            let str = o[k]+''
            fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLefZero(str))
        }
    }
    return fmt
}

function padLefZero(str){
    return('00' + str).substr(str.length)
}