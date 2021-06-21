<template>
  <div v-if="result" class="content">
    <p>User ID: {{result.userId}}</p>
    <p>Title: {{result.title}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name:"Main",
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
      console.log(result.data);
    })
  }
};
</script>

<style>
</style>