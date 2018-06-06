<style>
.show_history_container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f2f2f2;
}
.editor_count {
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  font-size: 1.2em;
}
.editor_detail {
  width: 60%;
  margin: 0 auto;
  margin-top: 80px;
  font-size: 1.2em;
}
p:hover {
  color: #09bb07;
}
.close_edite_history {
  height: 25px;
  width: 25px;
  background-image: url(/static/img/quit.png);
  background-size: contain;
}
</style>
<template>
    <div class="show_history_container">
      <div @click="$router.go(-1)" class="close_edite_history">
      </div>
        <div class="editor_count"><p><span style="color:#09BB07">{{itemName}}</span>
        条目共有<span style="color:#09BB07">{{historyList.length}}</span>人贡献</p></div>
        <timeline class="editor_detail">
          <router-link to="/itemPage">
            <timeline-item v-for="list in historyList">
                <p @click="toSelectedVersion()"><span>贡献者：{{list.name}}</span><br><span>时间：</span></p>
            </timeline-item>
          </router-link>
        </timeline>
    </div>
</template>
<script>
import { Timeline, TimelineItem } from "vux";
export default {
  components: {
    Timeline,
    TimelineItem
  },
  data() {
    return {
      historyList: [
        {
          id: 0,
          name: "zhangsan"
        },
        {
          id: 1,
          name: "lisi"
        },
        {
          id: 2,
          name: "liuwu"
        }
      ],
      itemName: "兰花"
    };
  }
};
</script>
