import EventBus from "src/helpers/EventBus";

const evtDialog = new EventBus();

export default {
  install(app) {
    const dialog = (app.config.globalProperties.$aDialog = {});

    dialog.bus = evtDialog;

    dialog.open = (name) => {
      evtDialog.trigger("open", name);
    };

    dialog.close = (name) => {
      evtDialog.trigger("close", name);
    };
  },
};
