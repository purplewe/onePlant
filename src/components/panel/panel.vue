<template>
    <div>
        <template v-if="type === '1'">
          <a :href="getUrl(item.url)" v-for="item in list" @click.prevent="onItemClick(item)" class="">
            <div class="weui-media-box__hd" vif="item.src">
              <img class="weui-media-box__thumb" :src="item.src" @error="onImgError(item, $event)" alt="">
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title" v-html="item.title"></h4>
              <p class="weui-media-box__desc" v-html="item.desc"></p>
            </div>
          </a>
</template>
    </div>
</template>
<script>
export default {
  name: "panel",
  props: {
    header: String,
    footer: Object,
    list: Array,
    type: {
      type: String,
      default: "1"
    }
  },
  methods: {
    onImgError(item, $event) {
      this.$emit("on-img-error", JSON.parse(JSON.stringify(item)), $event);
      if (item.fallbackSrc) {
        $event.target.src = item.fallbackSrc;
      }
    }
  }
};
</script>
<style>
</style>