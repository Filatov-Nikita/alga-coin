<template>
  <div class=" tw-flex tw-gap-5 tw-items-center">
    <span @click="prev">prev</span>
    <div class="pagination-list " ref="content" :style="widthMax" style="cursor: grab;" >
      <span :ref="navigationItem" @click="setActiveItem(1)" :class="{active:active===1}">1</span>
      <span :ref="navigationItem" @click="setActiveItem(2)" :class="{active:active===2}">2</span>
      <span :ref="navigationItem" @click="setActiveItem(3)" :class="{active:active===3}">3</span>
      <span :ref="navigationItem" @click="setActiveItem(4)" :class="{active:active===4}">4</span>
      <span :ref="navigationItem" @click="setActiveItem(5)" :class="{active:active===5}">50</span>
      <span :ref="navigationItem" @click="setActiveItem(6)" :class="{active:active===6}">10</span>
      <!-- <span :ref="navigationItem" @click="setActiveItem(7)" :class="{active:active===7}">20</span> -->
      <span :ref="navigationItem" @click="setActiveItem(8)" :class="{active:active===8}">3</span>
      <span :ref="navigationItem" @click="setActiveItem(9)" :class="{active:active===9}">4</span>
      <span :ref="navigationItem" @click="setActiveItem(10)" :class="{active:active===10}">5</span>
      
    </div>
    <span @click="next">next</span>
    
  </div>
</template>
<script setup >
import { computed } from '@vue/reactivity';
import {onBeforeMount, onMounted, ref} from 'vue'
const max = ref(4)
const active = ref(1)
const content = ref()
const items = ref([])
const activeItem = ref()
const wMiddle = ref(0)
const pos = ref({left:0})
const add=ref(true)
const navigationItem = (e)=>{
  if(add.value)
  items.value.push(e)
}

const setActiveItem = (index)=>{
  if(index >= active.value){
    active.value = index;
    if(index >=  max.value-1)
    pos.value.left = pos.value.left + items.value[index + 1 - max.value].getBoundingClientRect().left - items.value[index - max.value].getBoundingClientRect().left
    content.value.scrollLeft = pos.value.left
  }
  if (index < active.value) {
    active.value = index;
    if (index !== (items.value.length - (max.value - 1)) ){
      
      pos.value.left = pos.value.left - items.value[index-1 + (max.value)].getBoundingClientRect().left + items.value[(index - 2) + (max.value )].getBoundingClientRect().left
      content.value.scrollLeft = pos.value.left  
    }else {
      pos.value.left = pos.value.left - items.value[items.value.length - 2].getBoundingClientRect().left + items.value[items.value.length - 3].getBoundingClientRect().left
      content.value.scrollLeft = pos.value.left  
    }
  }
}
const next = ()=>{
  setActiveItem(active.value +1)
}
const prev = () => {
  setActiveItem(active.value - 1)
}



const widthMax = computed(()=>{
  return {width: '120px'}
})
onBeforeMount((()=>items.value = []))
onMounted(() => {
  wMiddle.value = content.value.getBoundingClientRect().right - content.value.getBoundingClientRect().left
  add.value =false
}
  )


</script>
<style scoped lang="scss">
.pagination-list {
  @apply tw-flex tw-gap-2.5 tw-items-center tw-justify-between tw-overflow-x-auto;
  cursor: grab;
  // width: 120px;
  &::-webkit-scrollbar {
    display: none;
  }

  & > span {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border-radius: 99999px;
    background-color: #141734;
    color: #5C5D9B;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
      background-color: #333653;
      color: #fff;
      // font-size: 12px;
      //   line-height: 160%;
        // width: 30px;
        // height: 30px;
    }
  }
}
</style>