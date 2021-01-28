import axios from 'axios'

export function request(config){
    const instance = new axios.create({
        baseURL: 'http://152.136.185.210:8000',
        timeout: 5000
    })
    return instance(config)
}