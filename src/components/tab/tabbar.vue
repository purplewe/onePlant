<template>
    <div>
        <tabbar>
            <tabbar-item selected link="/showItem">
                <img slot="icon" src="@/assets/icon/detail.png"/>
                <img slot="icon-active" src="@/assets/icon/over-detail.png"/>
                <span slot="label">词条</span>
            </tabbar-item>
            <tabbar-item link="/pottedPlant">
                <img slot="icon" src="@/assets/icon/flower.png"/>
                <img slot="icon-active" src="@/assets/icon/over-flower.png"/>
                <span slot="label">盆栽</span>
            </tabbar-item>
            <tabbar-item link="/profile">
                <img slot="icon" src="@/assets/icon/mine.png"/>
                <img slot="icon-active" src="@/assets/icon/over-mine.png"/>
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vux";

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  methods:{

  }
};
</script>
<style>
</style>
