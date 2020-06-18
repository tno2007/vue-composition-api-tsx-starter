<template>
  <div class="hello-component">
    <h2>{{Message}}</h2>
  </div>
</template>

<script>
import { defineComponent, createElement, PropType } from "@vue/composition-api";

export default defineComponent({
  props: {
    Message: {
      type: String,
      required: true
    }
  },
  setup: (props, context) => {
    return {};
  }
});
</script>

<style>
</style>