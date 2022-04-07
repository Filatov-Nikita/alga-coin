<template>
  <q-footer class="footer-landing" v-if="$q.screen.xl">
    <div class="tw-container">
      <div class="footer-landing__content">
        <div>Alga© {{ $fullYear }}</div>

        <AppLink
          class="tw-text-xxs tw-text-white"
          :to="$t('landing.footer.serviceInfoFile')"
          
          >{{ $t('landing.footer.serviceInfo') }}</AppLink
        >

        <q-space />

        <div class="footer-landing__links">
          <div>
            <div class="footer-landing__list">
              <AppLink
                class="tw-text-xxs tw-text-white"
                v-for="link in footer($t)"
                :key="link.label"
                :to="link.to"
                :popup="link.popup"
                :modalMessage="link.modalMessage"
              >
                {{ link.label }}
              </AppLink>
            </div>
          </div>

          <div>
            <div class="footer-landing__soc">
              <AppLink
                v-for="item in soc"
                :key="item.name"
                :to="$app.links[item.name]"
              >
                <InlineSvg
                  width="24px"
                  height="24px"
                  fill="#fff"
                  :src="item.icon"
                />
              </AppLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script>
import { markRaw } from 'vue';
import { mapGetters } from 'vuex';

export default {
  setup() {
    const soc = markRaw(getSoc());

    return {
      soc,
    };
  },
      
  computed: {
    ...mapGetters('landing', ['footer']),
  },
};

function getSoc() {
  return [
    {
      icon: require('assets/twitter-icon.svg'),
      name: 'twitter',
    },
    // {
    //   icon: require('assets/fb-icon.svg'),
    //   name: 'facebook',
    // },
    // {
    //   icon: require('assets/inst-icon.svg'),
    //   name: 'instagram',
    // },
    {
      icon: require('assets/te-icon.svg'),
      name: 'telegram',
    },
  ];
}
</script>

<style scoped lang="scss">
//$

.footer-landing {
  @apply tw-py-2-1 tw-text-xxs tw-opacity-60;

  &::after {
    content: '';
    height: 100px;
    bottom: -50px;
    background: linear-gradient(
      0deg,
      rgba(10, 30, 62, 0.6) 0%,
      rgba(8, 44, 86, 0) 129.17%,
      rgba(10, 30, 62, 0) 129.17%
    );
    filter: blur(60px);
    z-index: -1;
    @apply tw-absolute tw-w-full tw-left-0;
  }

  &__content {
    @include row();
    @include gutter-x(33px);
  }

  &__links {
    @include row();
    @include gutter-x(59px);
  }

  &__soc {
    @include row();
    @include gutter-x(14px);
  }

  &__list {
    @include row();
    @include gutter-x(18px);
  }
}
</style>
