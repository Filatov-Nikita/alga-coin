import { onMounted, ref } from "vue";
import { useStore } from "vuex";
export default function () {
  const store = useStore();
  const charts = ref(null);
  onMounted(async () => {
    await store.dispatch("landing/getDerivatives").then((resolve) => {
      const requests = resolve.map((derivative) =>
        store.dispatch("landing/getChartDerivative", derivative.id)
      );

      Promise.all(requests).then((responses) => {
        charts.value = responses;
      });
    });
  });

  const getChart = (id) => {
    if (charts.value) {
      return charts.value.find((chart) => chart["index_derivative_id"] === id);
    }
  };
  return {
    getChart,
    charts,
  };
}
