const loader = (context: string|HTMLElement = 'body') => {

  let components: object|string;
  if (typeof context === 'object') {
    components = context.querySelectorAll<HTMLElement>('[data-component]');
  }
  else {
    const querySelector: string = `${context} [data-component]`;
    components = document.querySelectorAll<HTMLElement>(querySelector);
  }

  [].forEach.call(components, (componentWrapper:HTMLElement) => {
    const component: string|null = componentWrapper.getAttribute('data-component');
    const params: string = componentWrapper.getAttribute('data-component-params') || '{}';

    import(/* webpackChunkName: "[request]" */ `../components/${component}`)
      .then(Module => {
        new Module.default({context: componentWrapper, params: JSON.parse(params)});
        componentWrapper.setAttribute('data-initialized', 'true');
      })
      .catch(error => {
        componentWrapper.setAttribute('data-initialized', 'false');
        console.log(error);
      });
  });
};



export default loader;
