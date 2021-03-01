import request from './request.js';

export function getdetaildata(iid) {
    return request({
        url: '/api/w6/detail',
        params: {
            iid
        }
    })
}
//商品信息封装
export class Goodsinfo {
    constructor(itemInfo,columns,services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newprice = itemInfo.price
        this.oldprice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.reaprice = itemInfo.lowNowPrice

    }
}

//店家信息封装
export class Shops{
    constructor(ShopInfo){
        this.logo = ShopInfo.shopLogo
        this.name = ShopInfo.name
        this.cfans = ShopInfo.cFans
        this.sells = ShopInfo.cSells
        this.score = ShopInfo.score
        this.goodcount = ShopInfo.cGoods
    }
}

//商品参数封装
export class Params{
    constructor(info,rule){
        this.image = info.images ? info.images[0] : ''//images有些商品可能没有图片
        this.infos = info.set
        this.sizes = rule.tables
        this.desc = rule.disclaimer
    }
}


export function getRecommend(){
    return request({
        url: '/api/w6/recommend'
    })
}