import {
  defineComponent,
  createElement,
  onMounted,
} from "@vue/composition-api";

const h = createElement; // required for jsx to work

import { f7, f7ready, f7App } from "framework7-vue";

export default defineComponent({
  components: {},
  setup: (props, context) => {
    function showDialog() {}

    onMounted(() => {
      f7ready(() => {
        f7.dialog.alert("Component mounted");
      });
    });

    return () => (
      <div class="app-component">
        <h1>Helo</h1>
        <button onClick={showDialog()}>Tap</button>
        <div class="dialog dialog-buttons-1 modal-in" style="display: block;">
          <div class="dialog-inner">
            <div class="dialog-title">Framework7</div>
            <div class="dialog-text">Hello!</div>
          </div>
          <div class="dialog-buttons">
            <span class="dialog-button dialog-button-bold">OK</span>
          </div>
        </div>
      </div>
    );
  },
});
