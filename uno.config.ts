import extractorSvelte from '@unocss/extractor-svelte';
import presetUno from '@unocss/preset-uno';
import { defineConfig } from 'unocss';

export default defineConfig({
	presets: [presetUno()],
	extractors: [extractorSvelte()],
});
