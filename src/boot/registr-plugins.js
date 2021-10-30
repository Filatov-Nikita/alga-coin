import AppAlert from "src/plugins/app-alert";
import AppDialog from "src/plugins/app-dialog";
import AppScroll from "src/plugins/app-scroll";

export default ({ app }) => {
  app.use(AppAlert);
  app.use(AppDialog);
  app.use(AppScroll);
};
