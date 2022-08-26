import AppAlert from "src/plugins/app-alert";
import AppDialog from "src/plugins/app-dialog";
import AppScroll from "src/plugins/app-scroll";
import AppCopy from "src/plugins/app-copy";
import ClickOutside from "src/directives/click-outside";
import AppLocaleApi from "src/plugins/app-locale-api";
import DatePrettier from "src/plugins/date-prettier";
import VueApexCharts from "vue3-apexcharts";
export default ({ app }) => {
  app.use(AppAlert);
  app.use(AppDialog);
  app.use(AppScroll);
  app.use(ClickOutside);
  app.use(AppCopy);
  app.use(AppLocaleApi);
  app.use(DatePrettier);
  app.use(VueApexCharts);
};
