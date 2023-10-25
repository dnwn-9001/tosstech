const RenderDOM = (function () {
  let _container;
  let _elementOrComponent;

  function _render() {
    // const elementTree = OurReact.render();

    const run = (reactElement, parent) => {
      parent = parent || document.createElement("div");
      Object.entries(reactElement).forEach(([key, value]) => {
        if (
          key.includes("div") ||
          key.includes("button") ||
          key.includes("input") ||
          key.includes("h") ||
          key.includes("p")
        ) {
          const _el = document.createElement(key.replace(/[0-9].?/, ""));
          parent.appendChild(_el);
          if (typeof value === "object") {
            run(value, _el);
          }
        } else if (key === "text") {
          parent.innerHTML = parent.innerHTML += value;
        } else if (key === "value") {
          parent.value = value;
        } else if (key === "onClick") {
          parent.addEventListener("click", value);
        } else if (key === "onChange") {
          parent.addEventListener("change", value);
        } else {
          if (typeof value === "function") {
            run(value(), parent);
          }
        }
      });
      return parent;
    };

    _container.innerHTML = "";
    _container.appendChild(run(_elementOrComponent, null));
  }

  return {
    render(elementOrComponent, container) {
      if (!container instanceof Element)
        throw new Error("OurReactDOM should be rendered on DOM Element");

      _container = container;
      _elementOrComponent = elementOrComponent;

      _render();
    },
    _render,
  };
})();

export default RenderDOM;
