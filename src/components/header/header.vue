<template>
    <div>
        <x-header :title="title" class="Xheader" style="height:44px;" id="navhead" :left-options="{showBack: arrowFlag,backText: ''}">
        </x-header>
        <section v-if="flag">
          <search
          @result-click="resultClick"
          @on-change="getResult"
          :results="results"
          v-model="value"
          position="absolute"
          auto-scroll-to-top
          @on-focus="onFocus"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
          ref="search">
          </search>
          </section>
        <div v-if="flag">{{flag}}</div>
    </div>
</template>
<style lang="less">

</style>
<script>
import { XHeader, Search } from "vux";
export default {
  components: {
    XHeader,
    Search,
  },
  // props: ['flag', 'title'],
  props: 
    {
    flag: {
      default: false
    },
    title: {
      default: "词条"
    }
    },
  data() {
    return {
      arrowFlag: true,
      value: "水仙"
    };
  }
};
</script>

