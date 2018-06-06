<style>
.img_container {
  background-color: rgba(77, 218, 171, 0.8);
  text-align: center;
  width: 160px;
  height: 200px;
  margin: 0 auto;
  margin-top: 15px;
  box-shadow: 3px 5px #b3b1b1;
}
.img_container img {
  height: inherit;
  width: inherit;
}
.content_detail {
  width: 100%;
  margin-top: 30px;
  background-color: #f2f2f2;
}
.content_detail p {
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.2em;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 80px;
  text-indent: 2em;
  word-break: normal;
  word-wrap: break-word;
}
</style>
<template>
<div>
    <div v-if="imgShow" class="img_container">
      <x-img :src="src" @on-error="error" class="ximg-demo" error-class="ximg-error" ></x-img>
    </div>
    <div class="content_detail">
        <p>{{text}}</p>
    </div>
</div>
</template>
<script>
import { XImg } from "vux";
export default {
  components: {
    XImg
  },
  data() {
    return {
      src: "https://o5omsejde.qnssl.com/demo/test1.jpg",
      imgShow: true,
      text:
        "从康熙中后期开始，漳州府龙溪县水仙开始一枝独秀，产生影响。《（康熙）龙溪县志》（56年刊本）“水仙，岁暮家家互种，土产不给，鬻于苏州”。是说龙溪县水仙种植销售比较兴旺，供不应求。康熙末雍正初出使台湾的黄叔璥在《台海使槎录》写道：“广东市上标写台湾水仙花头，其实非台产也，皆海舶自漳州及苏州转售者，苏州种不及漳州肥大”，可见至迟康熙末年，漳州水仙开始外销，与苏州水仙相媲美，并且形成特色品种，以“鳞茎肥大”著称。到乾隆年间，漳州水仙已超过苏州，《（乾隆）龙溪县志》（27年刊本）：“闽中水仙以龙溪为第一，载其根至吴越，冬发花时人争购之。”说明龙溪水仙开始返销长期以水仙著称的吴越地区。漳州与苏州一起，成了当时最著名的水仙产地，并且有过之无不及。乾隆以来，与漳州府相邻的泉州府各县以及台湾、广东等地每年都从漳州贩购水仙花头。如泉州府属的马巷厅，《（乾隆）马巷厅志》载“水仙花……不留种，花时取诸漳郡”，台湾《（光绪）恒春县志》记载“水仙皆产自闽漳州，他处不能种焉，故只供玩一春”。乾隆以后，漳州成了全国水仙种植、贸易和出口的主要地区。从光绪年间开始，漳州水仙不仅经销国内，还自厦门出口远销至美国、加拿大等海外地区，由此漳州成了国内最著名的水仙产地。宣统三年（1912）厦门海关税务司巴尔称：“水仙球茎种植于两山靠近漳州城的南门，当地存在着引人注目的出口到美国、加拿大的水仙球茎贸易。”（厦门海关《年度贸易报告》）"
    };
  },
  methods: {
    error() {
      this.imgShow = !this.imgShow;
    }
  }
};
</script>
