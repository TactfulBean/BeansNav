import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import viteCompression from "vite-plugin-compression"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": resolve("./src")
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/assets/style/global.scss";'
			}
		}
	},
	plugins: [
		vue(),
		Components({
			resolvers: [AntDesignVueResolver()]
		}),
		viteCompression({
			threshold: 0
		})
	]
})
