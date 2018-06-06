<template>
    <div id="profile-page">
        <!-- <section id="profile-option">这是个人信息操作</section>
        <section id="personal-title">这是个人称号</section>
        <section id="about-app">关于app</section> -->
        <div>
            <router-link class="profile_head" :to="username? 'profile/info': '/login'">
                <div class="head_img" v-if="username"><img height="60px" src="@/assets/icon/login.png"/></div>
                <div v-else><img src=""/></div>
                <div class="user_info">
                    <p class="username">username</p>
                    <p class="is_link">查看或编辑个人主页</p>
                </div>
            </router-link>
             <transition name="router-slid" mode="out-in">
                <router-view class="children-view"></router-view>
             </transition>
        </div>
        <group style="margin-top:0px">
            <cell title="帮助与反馈" link>
                 <img slot="icon" width="20" style="display:block;margin-right:10px;" src="@/assets/icon/help.png">
            </cell>
            <cell 
            title="关于"
            is-link
            :arrow-direction="about ? 'up' : 'down'"
            @click.native="about = !about">
            <img slot="icon" width="20" style="display:block;margin-right:10px;" src="@/assets/icon/about.png"></cell>
            <template v-if="about">
                <div class="cell_children">
                <cell-box align-items="center" :border-intent="true" class="sub-item" link="https://cn.vuejs.org/">
                    感谢vue以及vue生态提供的技术支持
                </cell-box>
                <cell-box class="sub-item">
                    项目源码
                </cell-box>
                <cell-box class="sub-item">
                    当前版本
                </cell-box>
                </div>
            </template>
            <cell title="设置">
                <img slot="icon" width="20" style="display:block;margin-right:10px;" src="@/assets/icon/setting.png">
            </cell>
        </group>
    </div>
</template>
<script>
import { Cell, Group, CellBox } from "vux";

export default {
  components: {
    Cell,
    Group,
    CellBox
  },
  data() {
    return {
      username: true,
      about: false
    };
  }
};
</script>
<style scoped>
.children-view {
  position: absolute;
  width: 100%;
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
}
.router-slid-enter-active,
.router-slid-leave-active {
  transition: all 0.4s;
}
.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
.cell_children{
    margin-left: 30px;
    font-size: 0.8em;
    font-weight: 100;
}
.is_link{
font-size: 0.8em;
font-weight: 200;
}
.username{
    font-size: 1em;
    font-weight: border;
}
.user_info{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    color: black;
}
.head_img {
  margin-left: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: aliceblue;
  overflow: hidden;
}
.profile_head {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 100px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #ebebeb;
  border-radius: 8px;
}
</style>

