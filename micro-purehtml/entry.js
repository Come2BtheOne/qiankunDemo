const render = () => {
    return Promise.resolve();
  };
  

((global) => {
    global['purehtml'] = {
      bootstrap: () => {
        console.log('纯HTML子应用: bootstrap');
        return Promise.resolve();
      },
      mount: () => {
        console.log('纯HTML子应用: mount');
        return render();
      },
      unmount: () => {
        console.log('纯HTML子应用: unmount');
        return Promise.resolve();
      },
    };
})(window);