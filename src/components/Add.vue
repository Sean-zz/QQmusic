<template>
    <div>
        <input type="text" placeholder="请输入标题" v-model="title">
        <button @click="add()">添加</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:''
        }
    },
    methods:{
        add(){
            this.$axios.post('http://localhost:3003/prolist',{
                title:this.title
            }).then(res=>{
                console.log(res)
                this.$router.push('/')
            })
        }
    }
}
</script>