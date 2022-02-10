<template>
  <table class="h-table" v-if="transactions.length > 0">
    <thead>
      <tr>
        <th class="h-table__th">{{ t('type') }}</th>
        <th class="h-table__th">{{ t('date') }}</th>
        <th class="h-table__th">{{ t('sum') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr class="h-table__row" v-for="tr in transactions" :key="tr.uuid">
        <td class="h-table__td h-table__td--type">
          <InlineSvg :src="TYPES[tr.type].icon" />
          <span>{{ TYPES[tr.type].text }}</span>
        </td>
        <td class="h-table__td">{{ $localDate(tr.executed_at) }}</td>
        <td class="h-table__td">{{ tr.amount.value }}</td>
      </tr>
    </tbody>
  </table>
  <AppEmptyList v-else :msg="t('noOperations')" />
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const messages = {
  'ru-RU': {
    type: 'Тип операции',
    date: 'Дата',
    sum: 'Сумма, ALG',
    types: {
      outgoing: 'Отправлено с кошелька',
    },
    noOperations: 'У вас нет транзакций',
  },
  'en-US': {
    type: 'Operation type',
    date: 'Date',
    sum: 'Sum, ALG',
    types: {
      outgoing: 'Sent from wallet',
    },
    noOperations: 'You have no operation',
  },
};

export default {
  props: {
    transactions: {
      required: true,
      type: Array,
    },
  },
  setup() {
    const { t } = useI18n({ messages });
    const TYPES = computed(() => ({
      outgoing: {
        text: t('types.outgoing'),
        icon: require('assets/icons/table-output.svg'),
      },
      buying: {
        text: 'Покупка AlgaCoin',
        icon: require('assets/icons/table-buying.svg'),
      },
      present: {
        text: 'Вознаграждение от системы',
        icon: require('assets/icons/table-present.svg'),
      },
    }));

    return {
      t,
      TYPES,
    };
  },
};
</script>

<style scoped lang="scss">
//$

.h-table {
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0 10px;
  @apply tw-text-xxs-2 xl:tw-text-xs tw-w-full;

  &__row {
    .h-table__td {
      @apply tw-bg-dark;
    }

    &:nth-child(2n) {
      .h-table__td {
        background: #001538;
      }
    }

    & + & {
      margin-top: 10px;
    }

    .h-table__td {
      &:first-child {
        padding-left: 10px;
        @apply tw-rounded-bl-base tw-rounded-tl-base;

        @include screen-xl {
          padding-left: 35px;
        }
      }

      &:last-child {
        padding-right: 10px;
        @apply tw-rounded-tr-base tw-rounded-br-base;

        @include screen-xl {
          padding-right: 33px;
        }
      }
    }
  }

  &__th {
    &:first-child {
      padding-left: 10px;
      width: 50%;

      @include screen-xl {
        padding-left: 35px;
      }
    }

    &:nth-child(2) {
      width: 25%;
    }

    &:last-child {
      width: 25%;
      padding-right: 10px;

      @include screen-xl {
        padding-right: 33px;
      }
    }
    @apply tw-text-secondary tw-font-normal tw-text-left;
  }

  &__td {
    @apply tw-py-4 tw-text-left tw-p-2;

    &--type {
      @apply tw-flex tw-items-center;
      @include space-x(10px);

      @include screen-xl {
        @include space-x(18px);
      }

      svg {
        width: 16px;
        height: 16px;
        flex-shrink: 0;

        @include screen-xl {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>
