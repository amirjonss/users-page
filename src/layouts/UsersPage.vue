<template>
  <div class="row justify-center q-mt-lg">
    <div class="col-10">
      <div class="row justify-end">
        <div class="col-3 q-pa-sm">
          <ShowSelect />
        </div>
      </div>
      <div class="row items-start">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        <div class="col-12 q-pa-sm">
          <q-btn outline color="primary" label="Show more" class="full-width"/>
        </div>
      </div>

      <PaginationRow />
    </div>
  </div>
</template>
<script>
import UserCard from "components/UserCard.vue";
import PaginationRow from "components/PaginationRow.vue";
import ShowSelect from "components/ShowSelect.vue";
export default {
  name: "UsersPage",
  components: { ShowSelect, PaginationRow, UserCard }

};
</script>

<style scoped>

</style>
