<template>
  <q-select
    v-model="model"
    :options="options"
    :label="`Показать по ${model} шт`"

  />
</template>

<script>
export default {
  name: "ShowSelect",
  data() {
    return {
      options: [2, 5, 10, 20],
      model: 5
    }
  }
};
</script>

<style scoped>

</style>
