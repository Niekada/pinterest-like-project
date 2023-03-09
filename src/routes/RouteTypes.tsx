export type RouteTypes = {
    routes: {
        path: string;
        Component: () => JSX.Element;
    }[]
  }