
import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("components/Layout.tsx", [
    index("routes/home.tsx"),
    
    layout("components/ProtectedLayout.tsx", [
      route("/upload", "routes/upload.tsx"),
      route("/wipe", "routes/wipe.tsx"),
      route("/resume/:id", "routes/resume.tsx"),
    ]),
  ]),
  route("/auth", "routes/auth.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
