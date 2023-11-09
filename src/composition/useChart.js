import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import { useQuasar } from "quasar";
export default function () {
  const store = useStore();
  const charts = ref([]);
  const $q = useQuasar();
  const derivatives = computed(() => store.getters["landing/derivatives"]);
  //   onMounted(async () => {
  //     await store.dispatch("landing/getDerivatives").then((resolve) => {
  //       const requests = resolve.map((derivative) =>
  //         store.dispatch("landing/getChartDerivative", derivative.id)
  //       );

  //       Promise.all(requests).then((responses) => {
  //         charts.value = responses;
  //       });
  //     });
  //   });

  onMounted(async () => {
    try {
      $q.loading.show();
      await store.dispatch("landing/getDerivatives").then(async (resolve) => {
        $q.loading.show();
        const requests = await resolve.map(async (derivative) => {
          $q.loading.show();
          
          return await store.dispatch(
            "landing/getChartDerivative",
            derivative.id
          );
        });
        
        Promise.all(requests).then((responses) => {
          charts.value = responses;
        });
      });
    } catch (e) {
      throw e;
    } finally {
      $q.loading.hide();
    }
  });

  const getChart = (id) => {
    if (charts.value) {
      return charts.value.find((chart) => chart["index_derivative_id"] === id);
    }
  };
  return {
    getChart,
    charts,
    derivatives,
  };
}
