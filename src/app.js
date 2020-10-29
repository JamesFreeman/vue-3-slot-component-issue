window.Vue = require('vue');

const app = Vue.createApp({});

app.component('wrapper', require('./components/Wrapper.vue').default);
app.component('global', require('./components/Global.vue').default);

app.mount('#app');