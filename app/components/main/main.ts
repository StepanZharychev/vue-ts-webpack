import Vue from 'vue'
import Component from 'vue-class-component'
import HelloComponent from '../hello/hello.vue'

@Component({
    components: {
        hello: HelloComponent
    }
})
export default class MainComponent extends Vue {
    public message = 'Hello there, Vue works!'
}