<template>
  <div>
      <h2>{{obj.title}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: {}
    };
  },
  created() {
    var id = this.$route.params.id;
    this.$axios.get("http://localhost:3003/prolist/" + id).then(res => {
        console.log(res.data)
      this.obj = res.data;
    });
  }
};
</script>