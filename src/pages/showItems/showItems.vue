<style>
.panel {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
<template>
    <div>
         <panel class="panel" :header="'推荐阅读'" :list="list" :type="type"></panel>
    </div>
</template>
<script>
import { Panel } from "vux";

export default {
  components: {
    Panel
  },
  data() {
    return {
      type: "1",
      list: [
        {
          src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528175035032&di=80c42dbe36103623f68ecefacf85e9c1&imgtype=0&src=http%3A%2F%2Fimg2.ddove.com%2Fupload%2F20130327%2F271200116086.jpg",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "兰花",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/itemPage"
        },
        {
          src: "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=97ac50b23e6d55fbc5c6712055192877/a686c9177f3e67097806799338c79f3df8dc5553.jpg",
          title: "仙人掌",
          desc:
            "分枝狭椭圆形、狭倒卵形或倒卵形，长15-25厘米，宽7-13厘米；刺不发育或单生于分枝边缘的小窠上。",
          url: {
            path: "/itemPage",
            replace: false
          }
        },
        {
          src: "http://img.plantphoto.cn/image2/b/2510536",
          title: "文竹",
          desc:
            "攀援植物，高可达几米。根稍肉质，细长。茎的分枝极多，分枝近平滑。",
          url: {
            path: "/itemPage",
            replace: false
          },
          meta: {
            source: "来源信息",
            date: "时间",
            other: "其他信息"
          }
        }
      ]
    };
  },
  methods: {}
};
</script>

