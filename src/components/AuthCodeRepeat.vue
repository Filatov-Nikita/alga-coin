<template>
  <AppTimer :seconds="60" v-slot="{ s, restart }" class="tw-text-center">
    <button
      type="button"
      @click="repeat(restart)"
      v-if="s <= 0"
      class="app-link"
    >
      {{ t('getCode') }}
    </button>
    <span class="tw-text-xxs" v-else> {{ t('repeat', { s }) }} </span>
  </AppTimer>
</template>

<script>
import useAuth from 'src/composition/useAuth';
import { useI18n } from 'vue-i18n';

export default {
  props: {
    mail: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { t } = useI18n({
      messages: {
        'ru-RU': {
          repeat: 'Повторная проверка через ({s}s)',
          getCode: 'Не получили код?',
        },
        'en-US': {
          repeat: 'Resend code ({s}s)',
          getCode: "Didn't receive a code?",
        },
      },
    });
    const { getCode } = useAuth();

    const repeat = async (restart) => {
      await getCode({ mail: props.mail });
      restart();
    };

    return {
      t,
      repeat,
    };
  },
};
</script>
