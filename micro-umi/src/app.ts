export const qiankun = {
    // 应用加载之前
    async bootstrap(props: any) {
        console.log('umi子应用: bootstrap', props);
    },
    // 应用 render 之前触发
    async mount(props: any) {
        console.log('umi子应用: mount', props);
    },
    // 应用卸载之后触发
    async unmount(props: any) {
        console.log('umi子应用: unmount', props);
    },
};

// export function bootstrap(props: any) {
//     console.log('umi子应用: bootstrap', props);
// }
// // 应用 render 之前触发
// export function mount(props: any) {
//     console.log('umi子应用: mount', props);
// }
// // 应用卸载之后触发
// export function unmount(props: any) {
//     console.log('umi子应用: unmount', props);
// }