<template>
  
  <!-- <template v-else>
    <a :href="to" v-if="isExternalLink">
      <slot>{{ label }}</slot>
    </a>
    <router-link v-else v-bind="$props">
      <slot>{{ label }}{{link}}</slot>  
    </router-link>
  </template> -->
  
  <a :href="to" v-if="isExternalLink">
      <slot>{{ label }}</slot>
    </a>
    <router-link v-else v-bind="$props">
      
      <span v-if="popup" @click="()=>modal=true">
    <slot>{{label}}</slot>
    <AppModal
      v-model="modal"
      contentClass="tw-w-full xl:tw-w-1/2 tw-mx-auto tw-flex tw-flex-col"
      design="max-height"
    > 
      
      <div class="tw-p-4" @click="()=>modal=false">{{$t('actions.back')}}</div>
      <div class="tw-text-center tw-p-4">{{modalMessage}}</div>
    </AppModal>
  </span>
  <slot v-else>{{ label }}{{link}}</slot>  
    </router-link>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'AppLink',
  props: {
    ...RouterLink.props,
    label: {
      default: undefined,
      type: String,
    },
    popup: {
      default: false,
      type: Boolean
    },
    modalMessage: {
      default: undefined,
      type: String
    }
  },
  data() {
    return {
      modal: false,
    };
  },
  computed: {
    isExternalLink() {
      return typeof this.to === 'string' && (this.to.startsWith('http') || this.to.startsWith('/')) ;
    },
  },
};
</script>
