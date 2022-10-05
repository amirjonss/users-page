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
      </div>
      <div class="row justify-center">
        <div class="col-3 q-pa-sm text-center">
          <q-btn
            outline color="grey-8"
            :label="'Показать еще ' + perPage"
            class="full-width" @click="showMore"
            v-if="totalPages !== page"
          />
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
import { useRouter } from "vue-router";

const router = useRouter();
const users = useUserStore();
const usersList = ref();
const page = ref(1);
const perPage = ref(5);
const totalPages = computed(() => {
  return users.getTotalPages;
});

function onUpdateValue(e) {
  perPage.value = e;
  let url = "/";
  if (perPage.value !== 5) {
    url = "/?page=" + page.value + "&per-page=" + perPage.value;
  }
  router.push(url);
}

function onUpdatePagination(e) {
  page.value = e;
  fetch();
  let url = "/";
  if (page.value !== 1 || perPage.value !== 5) {
    url = "/?page=" + page.value + "&per-page=" + perPage.value;
  }
  router.push(url);
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
      usersList.value.push(...users.getUsers);
    });
}

onMounted(() => {
  fetch();
  router.push('/')
});

watch(perPage, () => {
  fetch();
});

</script>

