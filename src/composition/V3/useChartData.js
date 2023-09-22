import { computed } from "vue";
export default function () {
  const dataGenerate = (times, values) =>
    times.map((item, index) => {
      return [item, values[index]];
    });
  const formatingDate = computed(() => timeValues.map((item) => item * 1000));
  const lastTwoMontPresent = (array) =>
    ((array[array.length - 1] / array[0]) * 100 - 100).toFixed(2);

  return {
    btnMainData: computed(() => dataGenerate(formatingDate.value, btnMain)),
    ethMainData: computed(() => dataGenerate(formatingDate.value, ethMain)),
    btcComboData: computed(() => dataGenerate(formatingDate.value, btcCombo)),
    ethComboData: computed(() => dataGenerate(formatingDate.value, ethCombo)),
    stableIndexData: computed(() =>
      dataGenerate(formatingDate.value, stableIndex)
    ),

    btnMainTwoMonthPrecent: computed(() => lastTwoMontPresent(btnMain)),
    ethMainTwoMonthPrecent: computed(() => lastTwoMontPresent(ethMain)),
    btcComboTwoMonthPrecent: computed(() => lastTwoMontPresent(btcCombo)),
    ethComboTwoMonthPrecent: computed(() => lastTwoMontPresent(ethCombo)),
    stableIndexTwoMonthPrecent: computed(() => lastTwoMontPresent(stableIndex)),
  };
}

const timeValues = [
  1656633600, 1656720000, 1656806400, 1656892800, 1656979200, 1657065600,
  1657152000, 1657238400, 1657324800, 1657411200, 1657497600, 1657584000,
  1657670400, 1657756800, 1657843200, 1657929600, 1658016000, 1658102400,
  1658188800, 1658275200, 1658361600, 1658448000, 1658534400, 1658620800,
  1658707200, 1658793600, 1658880000, 1658966400, 1659052800, 1659139200,
  1659225600, 1659312000, 1659398400, 1659484800, 1659571200, 1659657600,
  1659744000, 1659830400, 1659916800, 1660003200, 1660089600, 1660176000,
  1660262400, 1660348800, 1660435200, 1660521600, 1660608000, 1660694400,
  1660780800, 1660867200, 1660953600, 1661040000, 1661126400, 1661212800,
  1661299200, 1661385600, 1661472000, 1661558400, 1661644800, 1661731200,
  1661817600,
];

const btnMain = [
  999.9999905, 999.207942, 1001.804903, 1037.101102, 1036.53432, 1050.570369,
  1092.641806, 1091.556077, 1090.683379, 1061.817564, 1027.341224, 1002.672597,
  1038.532797, 1051.639969, 1061.074465, 1076.031603, 1059.511505, 1127.316159,
  1161.775257, 1154.207972, 1151.786218, 1133.183101, 1124.819874, 1129.583287,
  1079.688708, 1077.642399, 1144.280674, 1178.948906, 1176.051591, 1170.571775,
  1157.692094, 1156.438389, 1145.410343, 1138.902089, 1130.751336, 1157.828922,
  1143.681631, 1152.679498, 1177.661829, 1151.590988, 1183.369692, 1182.345148,
  1200.387602, 1202.067923, 1196.60368, 1188.748833, 1179.188634, 1158.964153,
  1153.731297, 1061.365922, 1073.342312, 1088.071402, 1084.117836, 1088.071402,
  1082.12826, 1089.948066, 1038.729144, 1030.294165, 1011.486361, 1040.516258,
  1020.924192,
];

const ethMain = [
  1000, 1006.631555, 1011.745337, 1067.220464, 1050.364453, 1086.388047,
  1127.789136, 1109.80923, 1113.781986, 1073.33833, 1017.210229, 976.7666418,
  1032.327051, 1083.616739, 1111.478212, 1219.119152, 1234.237692, 1468.686405,
  1442.242301, 1402.023819, 1475.476963, 1432.289014, 1450.657518, 1480.405225,
  1350.554165, 1384.634109, 1604.092282, 1766.837977, 1757.283251, 1727.598889,
  1678.714894, 1628.386485, 1651.172889, 1634.896849, 1611.936983, 1740.436728,
  1704.414506, 1709.554648, 1762.282885, 1693.21427, 1818.616665, 1879.843215,
  1944.766688, 1963.166037, 1905.75921, 1890.136507, 1847.491997, 1827.036722,
  1824.476877, 1588.883679, 1565.589294, 1603.116066, 1614.94192, 1641.640218,
  1649.508396, 1698.022652, 1538.988545, 1516.379286, 1446.826391, 1561.687078,
  1526.886838,
];

const btcCombo = [
  999.9999903, 1000.822771, 1005.282988, 1052.865727, 1043.529244, 1068.900643,
  1111.107302, 1103.42376, 1109.660284, 1072.754467, 1024.567932, 991.114693,
  1039.857516, 1072.801365, 1088.379991, 1138.631579, 1124.709237, 1237.177051,
  1248.601074, 1232.334535, 1248.959274, 1222.655773, 1220.388672, 1239.779097,
  1155.840428, 1159.474574, 1263.353587, 1316.765524, 1315.742038, 1303.463279,
  1288.80904, 1275.684603, 1266.798219, 1265.398657, 1268.103821, 1322.799493,
  1299.447128, 1311.322596, 1348.72745, 1308.207037, 1369.614664, 1373.404397,
  1406.552631, 1413.682044, 1394.601537, 1377.834586, 1366.143543, 1338.208465,
  1332.918933, 1201.042459, 1202.578736, 1232.811368, 1234.871696, 1245.524706,
  1237.262201, 1253.854289, 1161.089123, 1151.81148, 1125.442536, 1181.750569,
  1155.496022,
];

const ethCombo = [
  1000.000004, 1003.704107, 1008.577672, 1061.279808, 1048.161331, 1079.326696,
  1122.512927, 1109.651687, 1114.720563, 1075.090307, 1021.790452, 984.0264254,
  1037.36337, 1079.913707, 1101.931553, 1181.379726, 1181.427155, 1357.1389,
  1350.774159, 1322.276068, 1367.234284, 1331.868455, 1339.640382, 1364.364892,
  1255.813549, 1274.599046, 1438.478903, 1547.720002, 1542.327644, 1521.16676,
  1488.968321, 1457.200108, 1463.785853, 1454.727773, 1444.332068, 1536.8357,
  1506.673492, 1515.481226, 1561.377179, 1505.713637, 1600.177939, 1632.645254,
  1682.282523, 1695.106252, 1656.683781, 1640.230462, 1612.74735, 1587.881361,
  1583.782245, 1396.968561, 1386.488721, 1420.859392, 1427.674035, 1446.478137,
  1446.086206, 1478.896701, 1351.289767, 1335.068487, 1286.477303, 1373.029327,
  1341.848864,
];

const stableIndex = [
  1001.201442, 1001.301692, 1001.301692, 1001.201442, 1001.101211, 1001.101211,
  1000.50025, 1000.70049, 1000.50025, 1000.70049, 1000.900811, 1001.101211,
  1000.800641, 1000.70049, 1000.20004, 1000.30009, 1000.30009, 1000.10001, 1000,
  999.90001, 999.90001, 999.90001, 999.90001, 999.80004, 1000, 999.90001,
  999.6001599, 999.80004, 999.6001599, 999.70009, 999.70009, 999.70009,
  999.80004, 999.70009, 999.80004, 999.90001, 999.80004, 999.80004, 999.70009,
  999.70009, 999.70009, 999.5002499, 999.5002499, 999.6001599, 999.70009,
  999.80004, 999.90001, 1000, 1000, 1000, 1000, 1000, 1000.10001, 1000,
  1000.10001, 1000, 1000, 1000.10001, 1000, 1000, 1000,
];
