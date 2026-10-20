import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("components/Layout.tsx", [
    index("routes/home.tsx"),
    route("/auth", "routes/auth.tsx"),
    route("/upload", "routes/upload.tsx"),
    route("/wipe", "routes/wipe.tsx"),
  ]),
  route("/resume/:id", "routes/resume.tsx"),
] satisfies RouteConfig;
