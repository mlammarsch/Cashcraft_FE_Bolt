import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      darkMode: false
    };
  },
  actions: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.toggle('dark', this.darkMode);
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
    }
  }
});
