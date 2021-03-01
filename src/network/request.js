import axios from 'axios'

export default function request(config){
    const instance = new axios.create({
        baseURL: 'http://152.136.185.210:8000',
        timeout: 5000
    })
    return instance(config)
}

export function request1(config){
    const instance1 = new axios.create({
        baseURL: 'https://api.zhimaguche.cn/',
        timeout: 5000
    })
    return instance1(config)
}