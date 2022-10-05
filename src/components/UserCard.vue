<template>
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 q-pa-sm">
    <q-card class="my-card">
      <img :src="user.avatar" :alt="user.first_name">
      <q-card-section>
        <div class="text-h6">{{user.first_name + ' ' + user.last_name}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ user.email }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    avatar: String
  }
})
</script>

<style scoped>

</style>
