import { inject } from "vue";

export default function (name, type, opts = {}) {
  const step = inject("step") || "root";
  const prev = inject("prev");
  const registrStep = inject("registrStep");

  if (step !== "root") {
    registrStep({ name, type, ...opts });
  }

  return {
    step,
    parentPrev: prev,
  };
}
