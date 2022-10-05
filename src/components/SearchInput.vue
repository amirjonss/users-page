<template>
  <q-input
    v-model="search"
    debounce="500"
    placeholder="Поиск по имени"
    @update:model-value="$emit('onUpdateSearchText', search)"
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped>

</style>
