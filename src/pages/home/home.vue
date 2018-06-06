<template>
    <div>
        <x-head :arrowFlag="{showBack: false}" :title="title" :flag="flag"></x-head>
        <div>
          <router-view>
          </router-view>
        </div>
        <tabbar style="z-index:100; position: fixed">
            <tabbar-item @on-item-click="changeTitleToItem" selected link="/showItems">
                <img slot="icon" src="@/assets/icon/detail.png"/>
                <img slot="icon-active" src="@/assets/icon/over-detail.png"/>
                <span slot="label">词条</span>
            </tabbar-item>
            <tabbar-item @on-item-click="changeTitleToPotted">
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
    this.$router.push({path: '/showItems'}),
    this.flag=true
  },
  components: {
    Tabbar,
    TabbarItem,
    XHead
  },
  data(){
    return{
      title: "词条",
      flag: false,
      isLogin: true
    }
  },
  methods:{
    changeTitleToItem(){this.title="词条", this.flag=true},
    changeTitleToPotted(){
      this.title="我的盆栽"
      this.flag=false
      this.$router.push({name: this.isLogin?'pottedPlant':'login', params: {back: '/pottedPlant'}})
    },
    changeTitleToAboutMe(){this.title="个人", this.flag=true}
  }
};
</script>
<style>
.container_row_layout{
  display: flex;
  flex-flow: row wrap;
  align-items: center; 
}
.container_column_layout{
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
}
</style>
