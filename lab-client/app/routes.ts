import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("count-up", "pages/count-up/count-up.tsx")] satisfies RouteConfig;
