<template>
    <div>
        <x-header class="Xheader" style="height:44px;" id="navhead" :left-options="{showBack: arrowFlag,backText: ''}">
        </x-header>
        <search v-if="showSearch"
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
    </div>
</template>
<style lang="less">

</style>
<script>
import { XHeader, Search } from "vux";
export default {
  components: {
    XHeader,
    Search
  },
  data() {
    return {
      arrowFlag: true,
      showSearch: true,
      value: "水仙"
    };
  }
};
</script>

