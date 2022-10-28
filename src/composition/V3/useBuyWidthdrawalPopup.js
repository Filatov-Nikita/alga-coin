import { ref, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
export default function () {
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
        await store.dispatch("profile/widthdrawalIndex", value);
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
        // window.location = data.payment_url;
        window.open(data.payment_url, "_blank");
      } catch (e) {
        throw e;
      }
    }
  };
  const targetClick = (e) => {
    let currentElem = e.target;
    let open = false;
    // console.log(currentElem);
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
      const popupHeight = popup.value.offsetHeight;
      console.log(pageHeight - windowHeight < popupHeight);
      if (pageHeight - windowHeight < popupHeight) {
        popup.value.style.top =
          positionY -
          currentElem.getBoundingClientRect().height -
          popupHeight +
          "px";
        console.log(popup.value);
      } else {
        popup.value.style.top = positionY + "px";
      }
    }
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
    window.addEventListener("scroll", scollWindow);

    window.addEventListener("click", targetClick);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scollWindow);
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
