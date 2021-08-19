<template>
  <div>hello {{ dataName }} and type of prop {{ typeof dataName }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ce-test',
  props: {
    dataName: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log(typeof this.dataName);
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
