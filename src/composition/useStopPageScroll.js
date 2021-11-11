import { onMounted, onUnmounted } from "vue";

export default function () {
  onMounted(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  });

  onUnmounted(() => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  });
}
