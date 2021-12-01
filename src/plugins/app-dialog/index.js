import EventBus from "src/helpers/EventBus";

const evtDialog = new EventBus();

const dialog = {
  bus: evtDialog,
  open(name) {
    evtDialog.trigger("open", name);
  },
  close(name) {
    evtDialog.trigger("close", name);
  },
};

export default {
  install(app) {
    app.config.globalProperties.$aDialog = dialog;
  },
};

export function useDialog() {
  return dialog;
}
