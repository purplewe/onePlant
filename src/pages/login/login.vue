<style>

</style>
<template>
    <div>
        登陆页面，成功后跳转到{{$route.params.back}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            url: this.$route.params.back,
        }
    }
}
</script>
