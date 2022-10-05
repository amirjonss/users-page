<template>
  <div class="row justify-center q-mt-lg">
    <div class="col-10">
      <div class="row justify-end">
        <div class="col-sm-3 col-xs-12 q-pa-sm">
          <ShowSelect @onUpdateValue="onUpdateValue" />
        </div>
      </div>
      <div class="row items-start">
        <UserCard
          v-for="user in usersList"
          :key="user.id"
          :user="user"
        />
        <div class="col-12 q-pa-sm">
          <q-btn outline color="primary" :label="'Показать еще ' + perPage" class="full-width" @click="showMore" v-if="totalPages !== page" />
        </div>
      </div>
      <PaginationRow :max-page="totalPages" @onUpdatePagination="onUpdatePagination" />
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

const usersList = ref();

const totalPages = computed(() => {
  return users.getTotalPages;
});

const page = ref(1);

const perPage = ref(5);

function onUpdateValue(e) {
  perPage.value = e;
}

function onUpdatePagination(e) {
  page.value = e;
  fetch()
}

function fetch() {
  users.fetchUsers(page.value, perPage.value)
    .then(() => {
      usersList.value = users.getUsers;
    });
}

function showMore() {
  page.value++;
  users.fetchUsers(page.value, perPage.value)
    .then(() => {
      usersList.value.push(...users.getUsers)
    });
}

onMounted(() => {
  fetch();
});

watch([perPage], () => {
  fetch();
});

</script>

<style scoped>

</style>
