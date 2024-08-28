import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Устанавливаем корневую папку, где находится index.html
  build: {
    outDir: '../dist', // Указываем, куда помещать собранные файлы
  },
});
