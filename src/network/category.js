import request, { request1 } from './request.js'

export function getCategory() {
    return request({
        url: '/api/w6/category'
    })
}

export function getSubcategory(limit) {
    return request1({
        url: '/vehicle_source/agent/get',
        params: {
            limit
        }
    })
}
// export function getSubcategory(maitKey) {
//     return request({
//         url: '/api/w6/subcategory',
//         params: {
//             maitKey
//         }
//     })
// }

// export function getCategoryDetail(miniWallkey,type) {
//     return request({
//         url: '/api/w6/subcategory/detail',
//         params: {
//             miniWallkey,
//             type
//         }
//     })
// }

