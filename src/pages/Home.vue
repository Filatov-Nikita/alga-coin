<template>
  <q-page>
    <div class="tw-container">
      <div class="tw-mb-2">2</div>
      <div class="test">
        <div class="test1">1</div>
        <div class="test1">1</div>
        <div class="test1">1</div>
        <div class="test1">1</div>
      </div>
    </div>
  </q-page>
</template>
<style scoped lang="scss">
//$

.test {
  @include gutter(30px);
  @include row();
}

.test1 {
  @include col(24);
  @include col-xl(12);

}
</style>
