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
      <template v-for="tr in transactions" :key="tr.uuid">
          <tr class="h-table__row" v-if="tr.uuid === id">
            <td class="h-table__td h-table__td--type" >
            <span>Адрес:</span>
            <span  ref="address"   >{{tr.src_address}}</span>
            </td>
          </tr>
        <tr class="h-table__row" >
          
          <td class="h-table__td h-table__td--type">
            
            
              <InlineSvg   :src="tr.type == 'incoming' ? TYPES['outgoing'].icon : TYPES[tr.type].icon" />
            
            <span class="history-text" @click="openAddress(tr.uuid, tr.src_address)">{{ tr.type == 'incoming' ? TYPES['outgoing'].text : TYPES[tr.type].text }}</span>
          </td>
          <td class="h-table__td">{{ $localDate(tr.executed_at) }}</td>
          <td class="h-table__td">{{ tr.amount.value }}</td>
        </tr>
      </template>
      
    </tbody>
  </table>
  <AppEmptyList v-else :msg="t('noOperations')" />
</template>

<script>
import { ref, computed, onUpdated } from 'vue';
import { useI18n } from 'vue-i18n';

const messages = {
  'ru-RU': {
    type: 'Тип операции',
    date: 'Дата',
    sum: 'Сумма, ALG',
    types: {
      outgoing: 'Отправлено с кошелька',
      incoming: 'Пришло с кошелька',
      refill: 'Пополнение кошелька',
      withdrawal: 'Снятие средств',
      present: 'Вознаграждение от системы',
      buying: 'Покупка AlgaCoin'
    },
    noOperations: 'У вас нет транзакций',
  },
  'en-US': {
    type: 'Operation type',
    date: 'Date',
    sum: 'Sum, ALG',
    types: {
      outgoing: 'Sent from wallet',
      incoming: 'Sent to wallet',
      refill: 'Refill',
      withdrawal: 'Withdrawal',
      present: 'Remuneration from the system',
      buying: 'Buying  AlgaCoin'
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
    const id = ref(null)
    const address = ref(null)
    const { t } = useI18n({ messages });
    const TYPES = computed(() => ({
      outgoing: {
        text: t('types.outgoing'),
        icon: require('assets/icons/table-output.svg'),
      },
      buying: {
        text: t('types.buying'),
        icon: require('assets/icons/table-buying.svg'),
      },
      present: {
        text: t('types.present'),
        icon: require('assets/icons/table-present.svg'),
      },
      incoming: {
        text: t('types.incoming'),
        icon: require('assets/icons/table-output.svg'),
      },
      refill: {
        text: t('types.refill'),
        icon: require('assets/icons/table-present.svg'),
      },
      withdrawal: {
        text: t('types.withdrawal'),
        icon: require('assets/icons/table-output.svg'),
      }
      
    }));
    
    const openAddress = (uuid, src_address)=>{
      if(src_address !== '0000000000000000000000000000000000000000')id.value = uuid
      else {
        id.value = null
      }

    }

    // onUpdated(()=>{
      
      
    //         // document.addEventListener('click', function () {
    //           // //  vm.toggleDropdown();
    //         // });
    // })
    // openAddress()
    document.addEventListener('click', (e)=>{
      if(e.target.className !== 'history-text' && e.target !== address.value)id.value=null
      // console.log(icon.value)
    })
              // document.onclick = function(e){
              //   console.log(e.target.className)
              //   if(e.target.className !== 'uuid'){
              //     id.value = null
              //   }
              //     // if ( e.target.className != id.value ) {
              //     //     document.getElementById(id.value).style.display = 'none';
              //     // };
              // };
    return {
      t,
      TYPES,
      openAddress,
      id,
      address
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
