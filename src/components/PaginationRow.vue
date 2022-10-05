<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      color="grey-8"
      v-model="current"
      :max="maxPage"
      @update:model-value="$emit('onUpdatePagination', current)"
    />
  </div>
</template>

<script setup>
import { computed, ref} from "vue";

const current = ref(1);
const maxPage = computed(() => {
  return prop.maxPage;
});

const prop = defineProps({
  maxPage: {
    type: Number,
    default: 1,
    required: true
  }
});
function log() {
  console.log(123);
}

</script>

<style scoped>

</style>
