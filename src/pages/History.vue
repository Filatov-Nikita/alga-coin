<template>
  <q-page class="app-page-y">
    <div class="tw-container">
      <h1 class="app-h1 app-h1--space">История операций</h1>
      <div class="app-row app-gutter-col-x">
        <div class="app-col-18 xl:app-col-12">
          <HistoryTable />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import HistoryTable from 'src/components/HistoryTable.vue';

export default {
  components: {
    HistoryTable,
  },
};
</script>

<style>
</style>
