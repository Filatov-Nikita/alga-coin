<template>
  <AppTimer :seconds="5" v-slot="{ s, restart }" class="tw-text-center">
    <button
      type="button"
      @click="repeat(restart)"
      v-if="s <= 0"
      class="app-link"
    >
      Не получили код?
    </button>
    <span class="tw-text-xxs" v-else>
      Повторная проверка через ({{ s }}s)
    </span>
  </AppTimer>
</template>

<script>
import useAuth from 'src/composition/useAuth';

export default {
  props: {
    cellphone: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { getCode } = useAuth();

    const repeat = async (restart) => {
      await getCode({ cellphone: props.cellphone });
      restart();
    };

    return {
      repeat,
    };
  },
};
</script>
