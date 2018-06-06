<style>
.edite_head{
    height: 44px;
    width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.close_edite{
    height: 25px;
    width: 25px;
    background-image: url(/static/img/quit.png);
    background-size: contain;
}
.publish_edite{
    height: 30px;
    width: 30px;
    background-image: url(/static/img/publish.png);
    background-size: contain;
}
</style>
<template>
    <div>
        <div class="edite_head">
            <div @click="$router.go(-1)" class="close_edite">
            </div>
            <div class="publish_edite">
            </div>
        </div>
        <group :title="option">
            <x-input :placeholder="itemTitle"></x-input>
            <x-textarea :height="450" :max="200" name="description" placeholder="请输入你编辑的内容"></x-textarea>
        </group>
    </div>
</template>
<script>
import {Group, XInput, XTextarea} from 'vux'
export default {
    components:{
        Group,
        XInput,
        XTextarea
    },
    data(){
        return{
            option: "编辑",
            itemTitle: "兰花"
        }
    },
    methods:{
       
    }
}
</script>
