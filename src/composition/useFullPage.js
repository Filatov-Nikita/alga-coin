import { ref, onMounted, computed, provide, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import useStopPageScroll from "./useStopPageScroll";
import swipe from "src/helpers/swipe";

export default function (page) {
  useStopPageScroll();
  const route = useRoute();
  const router = useRouter();
  const sections = ref(new Set());
  const current = ref(route.query.section || "");

  watchEffect(() => {
    router.push({ query: { section: current.value } });
  });

  provide("registrSection", (name) => {
    if (!current.value) current.value = name;
    sections.value.add(name);
  });

  provide("removeSection", (name) => {
    sections.value.delete(name);
  });

  const containerH = () => {
    return document.documentElement.clientHeight;
  };

  const sectionList = computed(() => {
    return Array.from(sections.value.keys());
  });

  watchEffect(() => {
    current.value = route.query.section || sectionList.value[0];
  });

  const mapIndex = computed(() => {
    const keys = sections.value.keys();
    return Array.from(keys).reduce((acc, name, i) => {
      acc[name] = i;
      return acc;
    }, {});
  });

  const currentIndex = computed(() => {
    return mapIndex.value[current.value];
  });

  const calcYByIndex = (index) => {
    const windowH = containerH();
    return windowH * index * -1;
  };

  const calcYByName = (name = "") => {
    const index = mapIndex.value[name] || 0;
    return calcYByIndex(index);
  };

  const y = computed(() => {
    return calcYByIndex(currentIndex.value);
  });

  const throttle = (f) => {
    let curTime = Date.now();
    let long = curTime;

    return function () {
      const now = Date.now();
      const diff = now - curTime;
      if (diff > 200 || now - long > 1400) {
        f.apply(this, arguments);
        long = now;
      }

      curTime = now;
    };
  };

  const processedDecorator = (f) => {
    let processing = false;

    page.value.addEventListener("transitionend", () => {
      processing = false;
    });

    return function decorator() {
      if (processing) return;
      const prev = current.value;
      f.apply(this, arguments);
      if (prev !== current.value) processing = true;
    };
  };

  const next = () => {
    const nextIndex = Math.min(currentIndex.value + 1, sections.value.size - 1);
    current.value = sectionList.value[nextIndex];
  };

  const prev = () => {
    const prevIndex = Math.max(0, currentIndex.value - 1);
    current.value = sectionList.value[prevIndex];
  };

  const toggle = function (e) {
    if (e.deltaY > 0) {
      prev();
    } else {
      next();
    }
  };

  onMounted(() => {
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    const smartToggle = throttle(processedDecorator(toggle));
    page.value.addEventListener("wheel", smartToggle);
    swipe(page.value, next, prev);
  });

  const styles = computed(() => {
    return {
      transform: `translate3d(0, ${y.value}px, 0)`,
    };
  });

  const sectionIndex = computed(() => {
    return Math.abs(y.value) / containerH();
  });

  const toByIndex = (index) => {
    current.value = sectionList.value[index];
  };

  return {
    styles,
    sectionIndex,
    toByIndex,
    sections,
  };
}
