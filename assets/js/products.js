import Vue from 'vue';

new Vue({
    el: '#app',
    data() {
        return {
            firstName: 'Walter Diaz',
        };
    },
    template: '<h1>Hello {{firstName }}, welcome!</h1>',
    render(h) {
        return Vue.compile(this.$options.template).render.call(this, h);
    },
});