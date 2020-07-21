import {
  defineComponent,
  createElement,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  reactive,
} from "@vue/composition-api";

const h = createElement; // required for jsx to work

export default defineComponent({
  props: {},
  components: {},
  setup: (props, context) => {
    const data = reactive({
      width: 0,
      height: 0,
    });

    function getSize() {
      data.height = window.innerHeight;
      data.width = window.innerWidth;
    }

    onBeforeMount(() => {});
    onMounted(() => {
      getSize();
      window.addEventListener("resize", getSize);
    });
    onBeforeUpdate(() => {});
    onUpdated(() => {});
    onBeforeUnmount(() => {
      window.removeEventListener("resize", getSize);
    });
    onUnmounted(() => {});
    onActivated(() => {});
    onDeactivated(() => {});
    onErrorCaptured(() => {});

    return () => (
      <div class="breakpoint-component">
        <span>width: {data.width}</span>
        <br />
        <span>height: {data.height}</span>
      </div>
    );
  },
});
