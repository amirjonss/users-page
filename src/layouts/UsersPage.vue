<template>
  <div class="row justify-center q-mt-lg">
    <div class="col-10">
      <div class="row justify-end">
        <div class="col-3 q-pa-sm">
          <ShowSelect @onUpdateValue="test" />
        </div>
      </div>
      <div class="row items-start">
        <UserCard
          v-for="user in getUsers"
          :key="user.id"
          :user="user"
        />
        <div class="col-12 q-pa-sm">
          <q-btn outline color="primary" label="Show more" class="full-width" />
        </div>
      </div>
      <PaginationRow :max-page="totalPages" @onUpdatePagination="test2" />
    </div>
  </div>
</template>
<script setup>
import PaginationRow from "components/PaginationRow.vue";
import ShowSelect from "components/ShowSelect.vue";
import { useUserStore } from "stores/user";
import { computed, onMounted, ref, watch } from "vue";
import UserCard from "components/UserCard.vue";

const users = useUserStore();

const getUsers = computed(() => {
  return users.getUsers;
});

const totalPages = computed(() => {
  return users.getTotalPages;
});

const page = ref(1);

const perPage = ref(5);

function test(e) {
  perPage.value = e;
}

function test2(e) {
  page.value = e;
}

function fetch() {
  users.fetchUsers(page.value, perPage.value);
}

onMounted(() => {
  fetch();
});

watch([page, perPage], () => {
  fetch();
});

</script>

<style scoped>

</style>
