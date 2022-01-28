import useLoading from "./useLoading";
import { ref, computed } from "vue";

export default function (fetcher) {
  const loading = useLoading();
  const meta = ref(null);
  const data = ref(null);

  const nextPage = computed(() => {
    if (!meta.value) return null;
    const { last_page, current_page } = meta.value;
    return last_page <= current_page ? current_page : current_page + 1;
  });

  const complete = computed(() => {
    if (!nextPage.value || !meta.value) return false;
    return nextPage.value <= meta.value.current_page;
  });

  const setData = (d, reload) => {
    if (!data.value || reload) {
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

      const isReload = stg?.reload === true;

      const filter = getFilter();
      const { meta: m, data: d } = await fetcher(filter, ...args);

      meta.value = m;
      setData(d, isReload);

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
  };
}
