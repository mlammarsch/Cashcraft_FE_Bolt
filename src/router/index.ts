import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AccountsView from '../views/AccountsView.vue';
import AccountTypesView from '../views/AccountTypesView.vue';
import AccountCategoriesView from '../views/AccountCategoriesView.vue';
import BudgetsView from '../views/BudgetsView.vue';
import ReportingView from '../views/ReportingView.vue';
import TagsView from '../views/TagsView.vue';
import CategoriesView from '../views/CategoriesView.vue';
import SettingsView from '../views/SettingsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: HomeView
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: AccountsView
  },
  {
    path: '/account-types',
    name: 'AccountTypes',
    component: AccountTypesView
  },
  {
    path: '/account-categories',
    name: 'AccountCategories',
    component: AccountCategoriesView
  },
  {
    path: '/budgets',
    name: 'Budgets',
    component: BudgetsView
  },
  {
    path: '/reporting',
    name: 'Reporting',
    component: ReportingView
  },
  {
    path: '/tags',
    name: 'Tags',
    component: TagsView
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesView
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
