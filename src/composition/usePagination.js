import useLoading from "./useLoading";
import { ref, computed } from "vue";

export default function (fetcher) {
  const loading = useLoading();
  const meta = ref(null);
  const data = ref(null);

  function reset() {
    data.value = null;
    meta.value = null;
  }

  const updateData = (val) => {
    data.value.map((item) => {
      if (item.id === val) item.is_voted = true;
      return item;
    });
  };

  const nextPage = computed(() => {
    if (!meta.value) return null;
    const { last_page, current_page } = meta.value;
    return last_page <= current_page ? current_page : current_page + 1;
  });

  const complete = computed(() => {
    if (!nextPage.value || !meta.value) return false;
    return nextPage.value <= meta.value.current_page;
  });

  const setData = (d) => {
    if (!data.value) {
      data.value = d;
    } else {
      data.value = [...data.value, ...d];
    }
  };

  const getFilter = () => {
    if (!nextPage.value) return {};
    return { page: nextPage.value };
  };

  const wrapped = async (index, done, stg, ...args) => {
    try {
      loading.startLoading();

      const params = (stg?.params && typeof stg?.params === "object") || {};
      const filter = { ...params, ...getFilter() };
      const { meta: m, data: d } = await fetcher(filter, ...args);

      meta.value = m;
      setData(d);

      if (done) done();
    } catch (e) {
      throw e;
    } finally {
      loading.stopLoading();
    }
  };

  return {
    meta,
    data,
    nextPage,
    complete,
    isLoading: loading.isLoading,
    fetcher: wrapped,
    reset,

    updateData,
  };
}
