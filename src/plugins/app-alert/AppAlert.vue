<template>
  <teleport to="body">
    <transition-group tag="div" name="alerts" class="app-alerts">
      <div v-for="alert in alerts" :key="alert.id" class="tw-px-6">
        <AlertMessage
          @dblclick="removeByClick(alert.id)"
          v-bind="{
            message: alert.message,
            icon: alert.icon,
            type: alert.type,
          }"
        />
      </div>
    </transition-group>
  </teleport>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
import alertEvent from './alert-event';
import AlertMessage from './AlertMessage.vue';

let ID = 0;

export default {
  setup() {
    const alerts = ref([]);
    const timeouts = {};

    const setTimer = (id) => {
      const timeout = setTimeout(() => {
        delete timeouts[id];
        remove(id);
      }, 3000);

      timeouts[id] = timeout;
    };

    const show = (alert) => {
      const id = ID++;
      alerts.value.push({ ...alert, id });
      setTimer(id);
    };

    const remove = (id) => {
      alerts.value = alerts.value.filter((alert) => alert.id !== id);
    };

    const removeByClick = (id) => {
      if (timeouts[id]) {
        clearTimeout(timeouts[id]);
        delete timeouts[id];
      }

      remove(id);
    };

    onMounted(() => {
      alertEvent.on('show', show);
    });

    onUnmounted(() => {
      alertEvent.off('show', show);
    });

    return {
      alerts,
      removeByClick,
    };
  },
  components: {
    AlertMessage,
  },
};
</script>

<style scoped lang="scss">
//$

.app-alerts {
  position: fixed;
  width: 100%;
  bottom: 70px;
  z-index: 9990;
  @include space-y(10px);
  @include screen-xl {
    top: 35px;
    right: 50px;
    bottom: initial;
    max-width: 500px;
  }
}

.alerts {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s ease-in-out;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
