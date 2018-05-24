<template>
    <div>
        <x-head></x-head>
        <div>
          <router-view>
          </router-view>
        </div>
        <tabbar></tabbar>
    </div>
</template>
<script>
import Tabbar from "@/components/tab/tabbar";
import XHead from "@/components/header/header";
export default {
  mounted(){
    this.$router.push({path: '/showItem'})
  },
  components: {
    Tabbar,
    XHead
  },
  methods:{

  }
};
</script>
<style>
</style>
