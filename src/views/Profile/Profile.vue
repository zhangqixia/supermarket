<template>
    <div id="profile">
        <nav-bar class="navbar">
            <template v-slot:center>
                <div>购物商城</div>
            </template>
        </nav-bar>
        <user-info></user-info>

        <section class="account">
            <div class="account-item">
                <div class="number">
                    <span class="balance">0.00</span>元
                </div>
                <div class="account-info">我的余额</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>个
                </div>
                <div class="account-info">我的优惠</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>分
                </div>
                <div class="account-info">我的积分</div>
            </div>
        </section>

        <list-view :listdata="orderlist" class="orderlist"></list-view>
        <list-view :listdata="servicelist" class="servicelist"></list-view>
    </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar.vue'
import UserInfo from './chindcomponents/UserInfo.vue'
import ListView from './chindcomponents/ListView.vue'
export default {
    name: 'Profile',
    components: {
        NavBar,
        UserInfo,
        ListView
    },
    data: function() {
        return {
            orderlist:[
                {icon: '#order',iconColor: '#ff8198',info: '我的消息'},
                {icon: '#point', iconColor: '#fc7b53',info: '积分商城'},
                {icon: '#vip', iconColor: '#ffc636', info: '会员卡'}
            ],
            servicelist:[
                {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
                {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'}
            ]
        }
    }
}
</script>
<style scoped>
#profile{
    background-color: #f2f2f2;
}
#profile .navbar{
    background-color: var(--color-tint);
    color: #fff;
    font-size: 900;
    font-size: 20px;
}
.account{
    display: flex;
}
.account-item{
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
}
.account-item:last-of-type{
    margin-right: 0;
}
.account-item{
    color: #666;
    font-size: 13px;
    padding: 18px;
}
.account-item .balance{
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
}
.account-info{
    margin-top: 6px;
}
.orderlist,.servicelist{
    margin-top: 12px;
}
</style>