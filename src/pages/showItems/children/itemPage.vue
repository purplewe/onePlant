<style>
.collect,
.share {
  width: 42px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.oppose {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
  background-color: #ececec;
  border-radius: 8px;
}
.approve {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80px;
  height: 30px;
  background-color: #ececec;
  border-radius: 8px;
}
.bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: white;
}
.bottom p {
  font-size: 0.7em;
  color: gray;
}
.itme_page {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f2f2f2;
  z-index: 202;
}
.editor {
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0px 3px 3px #d8d5d5;
}
.editor_children {
  width: 90%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  color: #888888;
}
.editor_container {
  height: 32px;
  width: 80px;
  background-color: #ececec;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #09bb07;
  font-weight: bolder;
  font-size: 1.2em;
}
.show_container {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #888888;
}
.show_container img {
  height: 30px;
  width: 30px;
}
.show_history {
  text-decoration: none;
  color: #888888;
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
.children-view {
  position: absolute;
  width: 100%;
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
<template>
    <div class="itme_page">
        <x-head  :title="title"></x-head>
        <div class="editor">
          <div class="editor_children">
            <router-link to="/edite">
            <div class="editor_container">
              <span style="height:20px;">
                <img height="20px" src="@/assets/icon/editor.png"/>
              </span>
            <span>编辑</span>
            </div>
            </router-link>
            <div>
              <router-link class="show_history" to="/editeHistory">
              查看编辑历史&nbsp;>
              </router-link>
             <transition name="router-slid" mode="out-in">
                <router-view class="children-view"></router-view>
             </transition>
              </div>
          </div>
        </div>
        <div>
          <x-content>

          </x-content>
        </div>
        <div class="bottom">
            <div class="approve" @click="approveFlag=!approveFlag" >
                <img height="20px" :src="approve"/>
                <p>赞同{{count>1000?count/1000+"K":count}}</p>
            </div>
            <div class="oppose" @click="opposeFlag=!opposeFlag" >
                <img height="20px" :src="oppose"/>
            </div>
            <div class="collect" @click="collectFlag=!collectFlag" >
                <img height="20px" :src="collect"/>
                <p>收藏</p>
            </div>
            <div class="share" @click="showMenus = true">
                <img height="20px" src="@/assets/icon/share.png"/>
                <p>分享</p>
            </div>
        </div>
        <div v-transfer-dom>
           <actionsheet :menus="menus" v-model="showMenus" show-cancel>
             <template slot="header">
               <div class="show_container">
                 <span>分享至~</span>
                 <span>
                 <img src="@/assets/icon/QQ.png"/>
                 </span>
                 <span>
                   <a href="http://service.weibo.com/share/share.php?appkey=&title=&url=&searchPic=false&style=simple" target="_blank">
                 <img src="@/assets/icon/weibo.png"/>
                   </a>
                   </span>
                 <span><img src="@/assets/icon/weixin.png"/></span>
               </div>
             </template>
           </actionsheet>
        </div>
    </div>
</template>
<script>
import XHead from "@/components/header/header";
import XContent from "./xcontent";

import { Actionsheet, TransferDom } from "vux";
export default {
  directives: {
    TransferDom
  },
  components: {
    XHead,
    Actionsheet,
    XContent
  },
  computed: {
    approve: function() {
      return (
        this.parentUrl + (this.approveFlag ? "approve.png" : "Rapprove.png")
      );
    },
    oppose: function() {
      return this.parentUrl + (this.opposeFlag ? "oppose.png" : "Roppose.png");
    },
    collect: function() {
      return (
        this.parentUrl + (this.collectFlag ? "collect.png" : "Rcollect.png")
      );
    }
  },
  data() {
    return {
      title: "水仙",
      count: 1600,
      menus: {},
      parentUrl: "/static/img/",
      showMenus: false,
      approveFlag: true,
      opposeFlag: true,
      collectFlag: true
    };
  },
  methods: {
  }
};
</script>
