import {config} from "./config";

const {
    VUE_MICRO_APP,
    REACT_MICRO_APP,
    VUE3_MICRO_APP,
    PUREHTML_MICRO_APP,
    UMI_MICRO_APP
} = config;

const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用，这里我们使用 config 配置
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "VueMicroApp",
    entry: VUE_MICRO_APP,
    container: "#MicroAppArea",
    activeRule: "/Vue",
  },
  {
    name: "ReactMicroApp",
    entry: REACT_MICRO_APP,
    container: "#MicroAppArea",
    activeRule: "/React",
  },
  {
    name: "Vue3MicroApp",
    entry: VUE3_MICRO_APP,
    container: "#MicroAppArea",
    activeRule: "/Vue3",
  },
  {
    name: "PurehtmlMicroApp",
    entry: PUREHTML_MICRO_APP,
    container: "#MicroAppArea",
    activeRule: "/Purehtml",
  },
  {
    name: "UmiMicroApp",
    entry: UMI_MICRO_APP,
    container: "#MicroAppArea",
    activeRule: "/Umi",
  },
];

export default apps;