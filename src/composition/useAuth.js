import { ref, nextTick } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import loadCritical from "src/store/utilities/load-critical";
import { AppAlert } from "src/plugins/app-alert";
export default function () {
  const router = useRouter();
  const store = useStore();
  const mail = ref("");
  const curCode = ref("");
  const invalidCode = ref(false);

  const login = async ({ mail, password }) => {
    const res = await store.dispatch("auth/login", {
      password,
      mail,
    });

    await loadCritical(store);

    return res;
  };

  const getCode = async ({ mail }) => {
    return await store.dispatch("auth/getVerifingCode", {
      mail,
    });
  };

  const setPassword = async (
    { password, verification_code = null },
    { setErrors }
  ) => {
    try {
      await store.dispatch("auth/setPassword", {
        password,
        email: mail.value,
        verification_code: verification_code || curCode.value,
      });

      await login({ mail: mail.value, password });

      router.push({ name: "index-directive" });
    } catch (e) {
      if (!e.response) throw e;
      if (e.response.status === 422) {
        const { errors } = await e.response.json();
        AppAlert({
          message: () => errors.cellphone[0],
          type: "negative",
        });
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
    mail,
    curCode,
  };
}
