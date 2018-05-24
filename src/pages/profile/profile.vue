<template>
    <div id="profile-page">
        这是用户个人信息页面
        <!-- <section id="profile-option">这是个人信息操作</section>
        <section id="personal-title">这是个人称号</section>
        <section id="about-app">关于app</section> -->
        <group>
            <cell>
                <router-link :to="username? '/info': '/login'">
                    <img/>
                    <div class="user-info">
                        <p>username</p>
                    </div>
                </router-link>
            </cell>
            <cell></cell>
            <cell 
            title="about"
            is-link
            :arrow-direction="about ? 'up' : 'down'"
            @click.native="about = !about"></cell>

            <template v-if="about">
                <cell-box align-items="center" :border-intent="true" class="sub-item" link="https://cn.vuejs.org/">
                    感谢vue以及vue生态提供的技术支持
                </cell-box>
                <cell-box class="sub-item">
                    项目源码
                </cell-box>
                <cell-box class="sub-item">
                    当前版本
                </cell-box>
            </template>
        </group>
    </div>
</template>
<script>
import { Cell, Group, CellBox} from "vux";

export default {
  components: {
    Cell,
    Group,
    CellBox
  },
  data(){
      return{
          username: true,
          about: false
      }
  }
};
</script>
<style>
</style>

