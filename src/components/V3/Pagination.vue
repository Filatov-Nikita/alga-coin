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
  console.log(items.value);
  if(index >= active.value){
    active.value = index;
    if(index >=  max.value-1)
    pos.value.left = pos.value.left + items.value[index + 1 - max.value].getBoundingClientRect().left - items.value[index - max.value].getBoundingClientRect().left
    content.value.scrollLeft = pos.value.left
  }
  if (index < active.value) {
    active.value = index;
    console.log(index);
    console.log(index !==(items.value.length - (max.value-1)) );
    if (index !== (items.value.length - (max.value - 1)) ){
      
      pos.value.left = pos.value.left - items.value[index-1 + (max.value)].getBoundingClientRect().left + items.value[(index - 2) + (max.value )].getBoundingClientRect().left
      content.value.scrollLeft = pos.value.left  
    }else {
      console.log(items.value[items.value.length-1]);
      console.log(items.value[index - 2 + (max.value)]);
      pos.value.left = pos.value.left - items.value[items.value.length - 2].getBoundingClientRect().left + items.value[items.value.length - 3].getBoundingClientRect().left
      content.value.scrollLeft = pos.value.left  
    }
  }
}
const next = ()=>{
  console.log('next');
  setActiveItem(active.value +1)
}
const prev = () => {
  setActiveItem(active.value - 1)
}


// const mouseDownHandler = function (e) {

//   content.value.style.cursor = 'grabbing';
//   content.value.style.userSelect = 'none';
//   pos.value = {
//     // The current scroll
//     left: content.value.scrollLeft,
//     top: content.value.scrollTop,
//     // Get the current mouse position
//     x: e.clientX,
//     y: e.clientY,
//   };

//   console.log(e.clientX);

//   document.addEventListener('mousemove', mouseMoveHandler);
//   document.addEventListener('mouseup', mouseUpHandler);
// };


// const mouseMoveHandler = function (e) {
//   // How far the mouse has been moved
//   const dx = e.clientX - pos.value.x;
//   const dy = e.clientY - pos.value.y;
//   console.log(dx);
//   // Scroll the element
//   content.value.scrollTop = pos.value.top - dy;
//   content.value.scrollLeft = pos.value.left - dx;
// };

// const mouseUpHandler = function () {
//   document.removeEventListener('mousemove', mouseMoveHandler);
//   document.removeEventListener('mouseup', mouseUpHandler);

//   content.value.style.cursor = 'grab';
//   content.value.style.removeProperty('user-select');
// };

const widthMax = computed(()=>{
  // if (items.value?.length > 0){
  //   if(items.value.length <= max.value){
  //     console.log(items.value[items.value.length-1])
  //   }else {
  //     console.log(items.value[max.value - 1 + active.value].getBoundingClientRect().right - items.value[active.value].getBoundingClientRect().left);
  //     return {
  //       width: items.value[max.value - 1 + active.value ].getBoundingClientRect().right- items.value[active.value].getBoundingClientRect().left  + 'px'
  //     }
  //     // console.log(items.value[max.value - 1].getBoundingClientRect())
  //   }
  // }
  return {width: '120px'}
})
onBeforeMount((()=>items.value = []))
onMounted(() => {
  wMiddle.value = content.value.getBoundingClientRect().right - content.value.getBoundingClientRect().left
  add.value =false
  // content.value.addEventListener('mousedown', mouseDownHandler);
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