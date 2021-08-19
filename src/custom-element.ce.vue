<template>
  <div>
    <p>Test {{ dataName }}</p>
    <!-- <div>
      <img height="100" width="100" src="@/assets/vue.svg" />
    </div> -->

    <!-- <div class="has-background" :style="backgroundStyle">has background</div> -->
    <div class="has-background">has background</div>
  </div>
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
  computed: {
    // This works
    // backgroundStyle(): any {
    //   return {
    //     'background-image': `url(${require('@/assets/vue.svg')})`,
    //     'background-repeat': 'no-repeat',
    //   };
    // },
  },
});
</script>

<style lang="scss">
// @import '@/assets/style.css';
// @import '~@/assets/style.css';
@import './assets/style.css';
// @import '/assets/style.css';
@import '~intl-tel-input/build/css/intlTelInput.css'; // Works in Vue 2 with target wc

div {
  font-family: 'tahoma';
}

.has-background {
  height: 20rem;
  width: 30vw;
  background-image: url('./assets/vue.svg'); // does not work
  background-image: url('@/assets/vue.svg'); // does not work
}
</style>