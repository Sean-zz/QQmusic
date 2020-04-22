<template>
    <div>
        <input type="text" v-model="title">
        <button @click="update()">修改</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'',
            id:0
        }
    },
    created(){
        this.id=this.$route.params.id;
        this.$axios.get('http://localhost:3003/prolist/'+this.id).then(res=>{
            this.title=res.data.title
        })
    },
    methods:{
        update(){
            this.$axios.put('http://localhost:3003/prolist/'+this.id,{
                title:this.title
            }).then(res=>{
                console.log(res)
                this.$router.push('/')
            })
        }
    }
}
</script>