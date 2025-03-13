import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      username: 'TestUser'
    }
  }),
  actions: {
    logout() {
      this.user = null;
    }
  }
});
