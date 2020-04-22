<template>
  <div>
    <button @click="add()">新增</button>
    <ul v-for="item in arr" :key="item.id">
      <li>
        <span @click="jump(item.id)">{{item.title}}</span>
        <button @click="update(item.id)">修改</button>
        <button @click="del(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [],
      id: 0
    };
  },
  created() {
      this.fn()
  },
  methods: {
    fn() {
      this.$axios.get("http://localhost:3003/prolist").then(res => {
        this.arr = res.data;
      });
    },
    add() {
      this.$router.push("/add");
    },
    update(id) {
      this.$router.push({ name: "update", params: { id: id } });
    },
    del(id) {
      this.$axios.delete("http://localhost:3003/prolist/" + id).then(res=>{
          if(res.status==200){
          this.fn()
        }
      });
    },
    jump(id){
        this.$router.push({name:'detail',params:{id:id}})
    }
  }
};
</script>