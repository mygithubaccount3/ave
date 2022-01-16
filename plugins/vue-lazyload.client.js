import Vue from "vue";

const lazy = {
  install: function(app, options) {
    let componentRendered = false;

    app.directive("lazy", {
      bind(el, binding, vnode) {
        componentRendered = false;
        switch (binding.arg) {
          case "src":
          case "srcset":
            const imgObserver = new IntersectionObserver((entry, observer) => {
              entry.forEach(item => {
                if (item.isIntersecting) {
                  el[binding.arg] = binding.value;
                  observer.unobserve(item.target);
                }
              });
            });
            imgObserver.observe(el);
            break;
          case "component":
            const componentObserver = new IntersectionObserver(
              (entry, observer) => {
                entry.forEach(item => {
                  if (item.isIntersecting) {
                    if (!componentRendered) {
                      vnode.context.loadedComponents.push(binding.value);
                      observer.unobserve(item.target);
                      componentRendered = true;
                    }
                  }
                });
              }
            );
            componentObserver.observe(el);
        }
      }
    });
  }
};

Vue.use(lazy);
