import { defineComponent, createElement } from "@vue/composition-api";

const h = createElement; // required for jsx to work

import Hello from "./Hello.vue";

export default defineComponent({
  components: {
    Hello,
  },
  setup: (props, context) => {
    return () => (
      <div class="app-component">
        <Hello
          props={{
            Message: "Welcome to the Vue composition-api!",
          }}
        ></Hello>
      </div>
    );
  },
});
