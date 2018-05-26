<template>
    <div>
        <x-head :title="title" :flag="flag"></x-head>
        <div>
          <router-view>
          </router-view>
        </div>
        <tabbar>
            <tabbar-item @on-item-click="changeTitleToItem" selected link="/showItem">
                <img slot="icon" src="@/assets/icon/detail.png"/>
                <img slot="icon-active" src="@/assets/icon/over-detail.png"/>
                <span slot="label">词条</span>
            </tabbar-item>
            <tabbar-item @on-item-click="changeTitleToPotted" link="/pottedPlant">
                <img slot="icon" src="@/assets/icon/flower.png"/>
                <img slot="icon-active" src="@/assets/icon/over-flower.png"/>
                <span slot="label">盆栽</span>
            </tabbar-item>
            <tabbar-item @on-item-click="changeTitleToAboutMe" link="/profile">
                <img slot="icon" src="@/assets/icon/mine.png"/>
                <img slot="icon-active" src="@/assets/icon/over-mine.png"/>
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
import XHead from "@/components/header/header";
import { Tabbar, TabbarItem } from "vux";
export default {
  mounted(){
    this.$router.push({path: '/showItem'})
  },
  components: {
    Tabbar,
    TabbarItem,
    XHead
  },
  data(){
    return{
      title: "词条",
      flag: false
    }
  },
  methods:{
    changeTitleToItem(){this.title="词条", this.flag=true},
    changeTitleToPotted(){this.title="我的盆栽"},
    changeTitleToAboutMe(){this.title="个人"}
  }
};
</script>
<style>
</style>
