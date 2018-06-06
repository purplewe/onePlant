<style>
.potted_plant {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0)
    linear-gradient(rgb(161, 255, 206), rgb(250, 255, 209)) repeat scroll 0% 0%;
  /* 夜晚背景*/
  /* background: rgba(0, 0, 0, 0)
    linear-gradient(
      to right,
      rgb(15, 32, 39),
      rgb(32, 58, 67),
      rgb(44, 83, 100)
    )
    repeat scroll 0% 0%; */
}
.left_container {
  margin-top: 20px;
  width: 42%;
  height: 60px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: rgba(10, 10, 10, 0.2);
}
.head_img {
  height: 50px;
  width: 50px;
  margin: 5px;
  border-radius: 50%;
  background-color: aliceblue;
}
.own_info {
  margin-left: 10px;
  font-size: 10px;
  color: white;
}
.own_info div {
  width: 80px;
  display: flex;
  align-items: center;
}
.own_info img {
  height: 15px;
}
.pottedPlant_container {
}
.sun {
  position: absolute;
  top: 100px;
  right: 50px;
}
.plant_position_setting {
  width: 200px;
  height: 300px;
  margin: 0 auto;
  margin-top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.plant {
  height: 160px;
  margin-bottom: -80px;
  z-index: 2;
}
.pot {
  height: 160px;
}
.home_container {
  position: absolute;
  left: 10px;
  top: 20%;
}
.option_container {
  position: absolute;
  width: 200px;
  bottom: 80px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.option_container div {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
}

.option_show{
  position: absolute;
  top: 30%;
  left: 25%;
  z-index: 100
}
</style>
<template>
    <div class="potted_plant">
      <div class="own_container">
        <div class="left_container container_row_layout">
          <router-link to="/editeInfo">
          <div class="head_img">
            <img height="50px" src="@/assets/icon/login.png"/>
          </div>
          </router-link>
          <div class="own_info">
            <div><img src="@/assets/icon/exp.png"/>&nbsp;{{user.exp}}</div>
            <div><img src="@/assets/icon/money.png"/>&nbsp;{{user.money}}</div>
            <div style="color:yellow"><img src="@/assets/icon/gold.png"/>&nbsp;{{user.title}}</div>
          </div>
        </div>
      </div>
      <div class="pottedPlant_container">
        <div @click="sun_option()" class="sun"><img height="100px" src="@/assets/icon/sun.png"/></div>
        <div class="plant_position_setting">
          <div class="plant"><img height="160px" src="@/assets/`{user.plant.plantUrl}`.png"/></div>
          <div class="pot"><img height="160px" src="@/assets/icon/pot.png"/></div>
        </div>
      </div>
      <div class="home_container">
        <div class="shop" @click="showShop=true">
          <img height="60px" src="@/assets/icon/shop.png" alt="">
        </div>
        <div class="myBag" @click="showBag=true">
          <img height="60px" src="@/assets/icon/bag.png" alt="">
        </div>
      </div>
      <div class="option_container">
        <div @click="option_animation()" class="feed_plant"> 
           <img height="50px" src="@/assets/icon/huafei.png" alt="">
        </div>
        <div @click="option_animation()" class="weed">
           <img height="50px" src="@/assets/icon/spray.png" alt="">
        </div>
        <div @click="option_animation()" class="kettle">
           <img height="50px" src="@/assets/icon/kettle.png" alt="">
        </div>
      </div>

      <transition name="option">
        <div class="option_show" v-if="option_show_flag">
          <img height="100px" src="@/assets/icon/huafei.png" alt="">
        </div>
      </transition>

      <div>
      <x-dialog :dialog-style="{'margin-top': '10%',
      'height': '60%','border-radius': '10%',
      'background': '#41a128', 'mask-z-index': '1000'
      }" v-model="showShop" class="dialog-demo" hide-on-blur>
        <x-shop>

        </x-shop>
      </x-dialog>
    </div>

    <div>
      <x-dialog :dialog-style="{'margin-top': '10%',
      'height': '60%','border-radius': '10%',
      'background': '#41a128'
      }" v-model="showBag" class="dialog-demo" hide-on-blur>
        <x-bag>

        </x-bag>
      </x-dialog>
    </div>

      <div class="news_container">

      </div>
    </div>
</template>
<script>
import { XDialog } from "vux";
import XBag from "@/pages/bag/bag";
import XShop from "@/pages/shop/shop";
import { clearTimeout } from 'timers';

export default {
  components: {
    XDialog,
    XBag,
    XShop
  },
  methods: {
    option_animation() {
      clearTimeout()
      setTimeout(() => {
        this.option_show_flag = false;
      }, 2000);
      this.option_show_flag = true;
    }
  },
  data() {
    return {
      isLogin: false,
      user: {
        headImg: "",
        exp: 200,
        money: 120,
        title: "种植大师",
        plant: {
          name: "兰花",
          plantUrl: "1/5"
        }
      },
      showShop: false,
      showBag: false,
      option_show_flag: false
    };
  }
};
</script>


