// vite.config.mts
import { defineConfig } from "file:///C:/Users/Vitor/Desktop/Vinicius/Escola/web/Trabalho%20final/Sinapse/sinapse_frontend/node_modules/vite/dist/node/index.js";
import solidPlugin from "file:///C:/Users/Vitor/Desktop/Vinicius/Escola/web/Trabalho%20final/Sinapse/sinapse_frontend/node_modules/vite-plugin-solid/dist/esm/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin()
  ],
  server: {
    port: 3e3
  },
  build: {
    target: "esnext"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVml0b3JcXFxcRGVza3RvcFxcXFxWaW5pY2l1c1xcXFxFc2NvbGFcXFxcd2ViXFxcXFRyYWJhbGhvIGZpbmFsXFxcXFNpbmFwc2VcXFxcc2luYXBzZV9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVml0b3JcXFxcRGVza3RvcFxcXFxWaW5pY2l1c1xcXFxFc2NvbGFcXFxcd2ViXFxcXFRyYWJhbGhvIGZpbmFsXFxcXFNpbmFwc2VcXFxcc2luYXBzZV9mcm9udGVuZFxcXFx2aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1ZpdG9yL0Rlc2t0b3AvVmluaWNpdXMvRXNjb2xhL3dlYi9UcmFiYWxobyUyMGZpbmFsL1NpbmFwc2Uvc2luYXBzZV9mcm9udGVuZC92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzb2xpZFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCc7XG4vLyBpbXBvcnQgZGV2dG9vbHMgZnJvbSAnc29saWQtZGV2dG9vbHMvdml0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICAvKiBcbiAgICBVbmNvbW1lbnQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIGVuYWJsZSBzb2xpZC1kZXZ0b29scy5cbiAgICBGb3IgbW9yZSBpbmZvIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhldGFybmF2L3NvbGlkLWRldnRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy9leHRlbnNpb24jcmVhZG1lXG4gICAgKi9cbiAgICAvLyBkZXZ0b29scygpLFxuICAgIHNvbGlkUGx1Z2luKCksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnYyxTQUFTLG9CQUFvQjtBQUM3ZCxPQUFPLGlCQUFpQjtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTVAsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
