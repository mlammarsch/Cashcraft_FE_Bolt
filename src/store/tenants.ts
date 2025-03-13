import { defineStore } from 'pinia';

export const useTenantsStore = defineStore('tenants', {
  state: () => ({
    tenants: [
      { id: '1', name: 'Tenant 1' }
    ],
    selectedTenantId: '1'
  })
});
