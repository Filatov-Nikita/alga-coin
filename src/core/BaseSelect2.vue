<template>
<div class="select" ref="select" :class="{active:isActive}" >
  <div class=" select__head" @click=" toggleSelect() ">
    <span>

      test
    </span>
    <q-icon name="r_keyboard_arrow_down" size="15px" class="arrow-icon" />
  </div>
  <div class=" select__body">
    <div class="child">

      <div v-for="n in 15" @click="selectOption">
        test
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { ref, watch } from 'vue';


export default {
setup(){
  const select = ref(null)
  const isActive = ref(false)
  const selectOption = (opt)=>{

    isActive.value = false
  }
  const toggleSelect = ()=>{
    isActive.value = !isActive.value
  if(isActive.value) window.addEventListener('click',closeSelect)
  }
  const closeSelect = (e)=>{
    if(!e.composedPath().includes(select.value)) {
      isActive.value = false
      window.removeEventListener('click', closeSelect)
      return;
    }
    
  }
return { isActive,select,toggleSelect}
}
}
</script>
<style lang='scss' scoped> 
 .select {
  @apply tw-relative;
  &__head {
    @apply tw-py-4 tw-px-5 tw-flex tw-justify-between tw-cursor-pointer;
    border-radius: 8px;
    border: 1px solid #707173;
    background: rgba(217, 217, 217, 0.08);
  }
  &__body {
    @apply tw-absolute tw-w-full tw-overflow-hidden tw-z-10  tw-grid tw-gap-3 ;
    @apply tw-transition-all tw-duration-300 tw-ease-out;
    border-radius: 8px;
    background: #1F2124;
    max-height: 0;
    .child {
      border-radius: 8px;
      border: 1px solid #707173;
      @apply tw-grid  tw-overflow-auto;
      @apply tw-min-h-0;
      max-height: 300px;
      & > div {
        @apply  tw-px-5 tw-py-2 tw-cursor-pointer;
        &:hover {
          background: rgba(217, 217, 217, 0.08);
        }
      }
    }
  }
  .arrow-icon {
    @apply tw-transition-transform tw-duration-300  tw-ease-out;
  }
  &.active .arrow-icon {
    @apply tw-transform tw-rotate-180;
  }
  &.active &__body {
    max-height: 300px;
  }
 }
</style>