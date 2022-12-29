<template>
  <div class="home">
    <h1>{{title}}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
const title = process.env.VUE_APP_TITLE;
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data:function() {
    return {
      title: title
    }
  },
  mounted() {
    let promise = new Promise((resolve, reject) => {
      console.log(100)
      resolve(100);
    });
  },
};
</script>
