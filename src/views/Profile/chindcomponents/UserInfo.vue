<template>
  <div id="userinfo">
      <a href="#">
          <slot name="user-icon">
              <img class="privateimage left" src="~assets/img/profile/avatar.svg"/>
          </slot>
          <div class="logininfo left">
              <slot name="user-nickname">
                  <div>登陆/注册</div>
              </slot>
              <div class="phone">
                  <span>
                      <img class="icon-mobile" src="~assets/img/profile/phone.svg"/>
                  </span>
                  <slot name="user-phone">暂无绑定手机号</slot>
              </div>
          </div>
          <p class="arrow right">></p>
      </a>
  </div>
</template>

<script>
export default {
    name: 'UserInfo'
}
</script>

<style>
#userinfo{
    background-color: var(--color-tint);
    padding: 15px;
    height: 90px;
    /* border: 1px solid firebrick; */
}
#userinfo .privateimage{
    width: 60px;
    height: 60px;
    /* background-color: #fff; */
    border-radius: 30px;
}
.left{
    float: left;
}
#userinfo .arrow{
    width: 11px;
    height: 22px;
    margin-top: 20px;
    color: #fff;
    font-weight: 400;
}
#userinfo .logininfo{
    color: #fff;
    margin: 10px 0 0 5px;
}
#userinfo .logininfo .phone{
    position: relative;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
}
#userinfo .logininfo .phone .icon-mobile{
    position: absolute;
    width: 18px;
    height: 18px;
    left: -15px;
    top: 0px;
}
</style>