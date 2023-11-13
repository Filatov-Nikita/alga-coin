import { ref, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { AppAlert } from "src/plugins/app-alert";
export default function () {
  const router = useRouter();
  const popup = ref(null);
  const isPopup = ref(false);
  const popupContent = ref({
    popup_name: undefined,
    id: undefined,
  });
  const store = useStore();
  const scollWindow = (e) => {
    if (isPopup.value) {
      isPopup.value = false;
      popupContent.value = {
        popup_name: undefined,
        id: undefined,
      };
    }
  };
  const popupAction = async (value, { resetForm }) => {
    if (popupContent.value.popup_name === "widthdrawal") {
      try {
        await store.dispatch("profile/widthdrawalIndex", {
          ...value,
          inder_id: popupContent.value.id,
        });
        resetForm();
        isPopup.value = false;
      } catch (e) {
        throw e;
      }
    }
    if (popupContent.value.popup_name === "buy") {
      const obj = {
        ...value,
        inder_id: popupContent.value.id,
      };

      try {
        const data = await store.dispatch("profile/buyIndex", obj);
        resetForm();
        isPopup.value = false;
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = data.payment_url;
        } else {
          var newWin = window.open(data.payment_url, "_blank");

          if (!newWin || newWin.closed || typeof newWin.closed == "undefined") {
            window.location.href = data.payment_url;
          }

          router.push({ name: "history" });
        }
      } catch (e) {
        if (!e.response) throw e;
        if (e.response.status === 422) {
          const { errors } = await e.response.json();
          AppAlert({
            message: () => errors.amount[0],
            type: "negative",
          });
        } else throw e;
      }
    }
  };
  const targetClick = (e) => {
    let currentElem = e.target;
    let open = false;
    while (currentElem) {
      if (currentElem.hasAttribute("data-index")) {
        open = true;
        break;
      } else currentElem = currentElem.parentElement;
    }
    if (!open && isPopup.value && !e.composedPath().includes(popup.value)) {
      isPopup.value = false;
      popupContent.value = {
        popup_name: undefined,
        id: undefined,
      };
    }
  };
  const targetPopup = (e) => {
    let currentElem = e.target;
    let open = false;
    while (currentElem) {
      if (currentElem.hasAttribute("data-index")) {
        isPopup.value = true;
        break;
      } else currentElem = currentElem.parentElement;
    }
    if (isPopup.value) {
      const pageHeight = window.innerHeight + window.pageYOffset;
      const windowHeight =
        currentElem.getBoundingClientRect().height +
        currentElem.getBoundingClientRect().top +
        window.pageYOffset;
      const positionY =
        currentElem.getBoundingClientRect().top + window.pageYOffset;
      popup.value.style.display = "block";
      setTimeout(() => {
        const popupHeight = popup.value.offsetHeight;

        popup.value.style.top =
          positionY -
          currentElem.getBoundingClientRect().height -
          popupHeight +
          "px";
      }, 0);
    }
    console.log(isPopup.value);
  };
  const buy = (e, id) => {
    popupContent.value = { popup_name: "buy", id: id };

    targetPopup(e);
  };
  const widthdrawal = (e, id) => {
    popupContent.value = { popup_name: "widthdrawal", id: id };
    targetPopup(e);
  };
  onMounted(async () => {
    window.addEventListener("click", targetClick);
  });
  onUnmounted(() => {
    window.removeEventListener("click", targetClick);
  });
  return {
    popup,
    isPopup,
    popupContent,
    buy,
    widthdrawal,
    targetClick,
    popupAction,
  };
}
