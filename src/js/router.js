const createRouter = () => {
  const routes = [];

  const router = {
    addRoute(fragement, component) {
      routes.push({ fragement, component });
      return this;
    },

    start() {
      const checkRoutes = () => {
        const currentRoute = routes.find(
          (route) => route.fragement === window.location.hash
        );
        currentRoute.component();
      };
      window.addEventListener("hashchange", checkRoutes);
      checkRoutes();
    },
  };

  return router;
};

export default createRouter;
