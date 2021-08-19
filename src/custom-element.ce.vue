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
