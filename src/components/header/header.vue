<template>
    <div>
        <x-header :title="title" class="Xheader" style="height:44px; z-index:1" id="navhead" :left-options="arrowFlag">
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
  // props: ['flag', 'title'],
  props: {
    flag: {
      default: false
    },
    //改变对象
    title: {
      default: ""
    },
    arrowFlag: {
      type: Object,
      default: function() {
        return {
          showBack: true,
          backText: ""
        }
      }
    }
  },
  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$router.push("/itemPage")
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
  data() {
    return {
      value: "水仙",
      results: []
    };
  }
};
</script>

