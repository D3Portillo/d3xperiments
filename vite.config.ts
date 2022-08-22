import type { UserConfig } from "vite"

const config: UserConfig = {
  optimizeDeps: {
    include: ["p5", "lighterhtml"],
  },
  plugins: [],
}

export default config
