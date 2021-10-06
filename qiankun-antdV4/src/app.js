export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('app1 bootstrap', props);
    window.fromSource = props.fromSource
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('app1 mount', props);
    window.fromSource = props.fromSource
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('app1 unmount', props);
    window.fromSource = ''
  },
};