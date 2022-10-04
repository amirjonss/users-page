<template>
  <q-layout view="hHh lpR fff">
    <HeaderRow />

    <q-page-container>
      <router-view />
    </q-page-container>

    <FooterRow />
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderRow from "components/HeaderRow.vue";
import FooterRow from "components/FooterRow.vue";

export default defineComponent({
  name: 'App',
  components: { FooterRow, HeaderRow }

})
</script>
