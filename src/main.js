/* global window document f7 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Import F7
/* eslint-disable no-unused-vars */
import Framework7 from 'framework7';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';

// Import Routes
import Routes from './routes';

// Import App
import App from './App';

// Set up some useful globals
window.isMaterial = !window.Framework7.prototype.device.ios;
window.isiOS = window.Framework7.prototype.device.ios;

// Import F7 iOS Theme Styles
/* eslint-disable global-require */
if (window.isiOS) {
  const Framework7Theme =
    require('framework7/dist/css/framework7.ios.min.css');
  const Framework7ThemeColors =
    require('framework7/dist/css/framework7.ios.colors.min.css');
} else {
  /* OR for Material Theme: */
  const Framework7ThemeMaterial =
    require('framework7/dist/css/framework7.material.min.css');
  const Framework7ThemeColorsMaterial =
    require('framework7/dist/css/framework7.material.colors.min.css');
}
require('framework7-icons/css/framework7-icons.css');

import { todoStorage } from './utils/todos';

if ('serviceWorker' in navigator) {
  console.log('Calling to register service worker ');
  navigator.serviceWorker.register('./my-service-worker.js');
} else console.log('Service worker not found in navigator');

window.store = {
  todos: todoStorage.fetch(),
  state: {
    selectedCategory: 'ALL',
    categories: todoStorage.categories
    // selectedItem: {id: todoStorage.fetch().length,
    //   title: '',
    //   category: 'NO CATEGORY',
    //   desc: '',
    //   highlight: false,
    //   urgent: false,
    //   completed: false
    // },
    // isUpdate: false
  },
  changeSelectedItem (item) {
    this.state.selectedItem = item;
  },
  changeCategory (category) {
    this.state.selectedCategory = category;
    console.log('Changed category to ' + category + ' store category is ' + this.state.selectedCategory);
  }
  // },
  // getCategories () {
  //   this.todos.filter((todo) => {
  //     console.log('Filtering the Todo category ' + todo.category);
  //     if (this.state.categories.indexOf(todo.category.toUpperCase()) === -1) {
  //       this.state.categories.push(todo.category.toUpperCase());
  //     }
  //   });
  // }
};

// Init F7 Vue Plugin
Vue.use(Framework7Vue);

// Init App
var vu1 = new Vue({ // eslint-disable-line no-new
  el: '#app',
  template: '<app />',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    swipePanel: 'left',
    routes: Routes,
    material: window.isMaterial,
    animateNavBackIcon: window.isiOS,
    pushState: true,
    pushStateNoAnimation: true
  },
  // app initial state
  // data: {
  //   newTodo: '',
  //   editedTodo: null,
  //   visibility: 'all'
  // },
  // Register App Component
  components: {
    app: App
  }
});

// Ye olde Device Ready
document.addEventListener('deviceready', () => {
  // Bind to the back button for Android
  document.addEventListener('backbutton', () => {
    f7.mainView.router.back();
  });
});
