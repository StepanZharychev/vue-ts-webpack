import Vue from 'vue'
import MainComponent from './components/main/main.vue'

class AppCore {
    private instance: Vue;

    private init() {
        this.instance = new Vue({
            el: '#appContainer',
            render: h => h(MainComponent),
        })
    }

    constructor() {
        this.init();
    }
}

new AppCore();