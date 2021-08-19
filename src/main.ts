import { defineCustomElement } from 'vue'
import Component from './custom-element.ce.vue'
const CustomComponent = defineCustomElement(Component);

// Registers the custom element if its' not yet registered
try {
    const isDefined = customElements.get(Component.name);
    if (!isDefined) {
        console.log('defining custom-element');
        customElements.define(Component.name, CustomComponent);
    }

} catch (error) {
    console.error(error);
}



