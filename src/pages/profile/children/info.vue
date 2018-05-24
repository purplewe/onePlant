<template>
    <div>
        <blur class="blurBg" :height="160" :blur-amount=10 :url="picUrl">
            <p class="center"><img :src="picUrl"></p>
         </blur>
         <div class="username">
             <span>{{username}}</span>
         </div>
         <div class="editeProfile">
             <x-button mini plain type="primary" link="/info/editeInfo">编辑个人资料</x-button>
         </div>
         <group class="someDetail">
             <cell :title="profileDetail" link>
                <img slot="icon" width="20" style="display:block;margin-right:10px;" src="@/assets/icon/location.png">
             </cell>
         </group>
         <group>
             <cell class="followers">
                <div slot="child" style="width:50%">{{follow}}<span>我关注的人</span></div>
                <div slot="child" style="width:50%">{{followed}}<span>关注我的人</span></div>
             </cell>
         </group>
         <group>
             <cell title="历史">
                 <img slot="icon" width="20" style="display:block;margin-right:10px;" src="@/assets/icon/history.png">
             </cell>
             <cell title="收藏">
                 <img slot="icon" width="20" style="display:block;margin-right:10px;" src="@/assets/icon/collection.png">
             </cell>
             <cell title="我的词条">
                 <img slot="icon" width="20" style="display:block;margin-right:10px;" src="@/assets/icon/myItem.png">
             </cell>
         </group>
         
    </div>
</template>
<script>
import { Blur, XButton, Group, Cell } from "vux";

export default {
  data() {
    return {
      picUrl: "https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg",
      username: "peng",
      profileDetail: "计算机软件",
      follow: 10,
      followed: 20
    };
  },
  components: {
    Blur,
    XButton,
    Group,
    Cell
  },
  methods:{
      toEditeInfo(){
          console.log("here")
          this.$router.push({path:'/info/editeInfo'})
      }
  }
};
</script>

<style scoped>
.followers span{
    margin-left: 5px;
    color: gray;
}
.followers div {
  width: 50%;
  text-align: center;
}
.editeProfile {
  margin-top: 10px;
  text-align: center;
}
.username {
  margin-top: 10px;
  text-align: center;
}
.username span {
  font-size: 1.2em;
  font-weight: bold;
}
.blurBg {
  overflow: auto;
}
.center {
  text-align: center;
  color: #fff;
  font-size: 18px;
}
.center img {
  margin-top: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #ececec;
}
</style>
