import { defineComponent, createElement, reactive } from "@vue/composition-api";

const h = createElement; // required for jsx to work

import Hello from "./Hello.vue";
import Breakpoint from "./Breakpoint";

import F7Dialog from "./F7Dialog.vue";

export default defineComponent({
  name: "App",
  components: {
    Hello,
  },
  setup: (props, context) => {
    const data = reactive({
      show: false,
    });
    function toggle() {
      console.log("toggling");
      data.show = !data.show;
    }
    return () => (
      <div class="app-component">
        <button onClick={toggle}>Tap</button>
        <transition name="fade">
          <F7Dialog v-show={data.show} eventClick={toggle}></F7Dialog>
        </transition>
      </div>
    );
  },
});
