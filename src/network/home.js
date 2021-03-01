import request from './request.js';

export function getHomemultidata(){
    return request({
        url: '/home/multidata'
    });
}

export function getHomeGoods(type,page){
    return request({
        url: '/api/w6/home/data',
        params:{
            type,
            page
        }
    });
}

