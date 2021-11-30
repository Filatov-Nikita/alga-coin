import { ref, nextTick } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import loadCritical from "src/store/utilities/load-critical";

export default function () {
  const router = useRouter();
  const store = useStore();
  const curCellphone = ref("");
  const curCode = ref("");
  const invalidCode = ref(false);

  const login = async ({ cellphone, password }) => {
    const res = await store.dispatch("auth/login", {
      password,
      cellphone,
    });

    await loadCritical(store);

    return res;
  };

  const getCode = async ({ cellphone }) => {
    return await store.dispatch("auth/getVerifingCode", {
      cellphone,
    });
  };

  const setPassword = async (
    { password, verification_code = null },
    { setErrors }
  ) => {
    const cellphone = curCellphone.value;
    try {
      await store.dispatch("auth/setPassword", {
        password,
        cellphone,
        verification_code: verification_code || curCode.value,
      });

      await login({ cellphone, password });

      router.push({ name: "wallet" });
    } catch (e) {
      if (!e.response) throw e;
      if (e.response.status === 422) {
        const { errors } = await e.response.json();
        if (errors.verification_code) invalidCode.value = true;
        nextTick(() => {
          setErrors(errors);
        });
      } else throw e;
    }
  };

  return {
    login,
    getCode,
    setPassword,
    invalidCode,
    curCellphone,
    curCode,
  };
}
