<template>
  <q-select
    v-model="model"
    :options="options"
    :label="`Показать по ${model} шт`"
    @update:model-value="$emit('onUpdateValue', model)"
  />
</template>

<script setup>
import { ref } from "vue";

const model = ref(5);
const options = ref([2, 5, 10, 20]);

</script>

<style scoped>

</style>
