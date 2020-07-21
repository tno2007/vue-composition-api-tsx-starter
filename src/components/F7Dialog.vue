<template>
  <div>
    <div class="dialog-backdrop backdrop-in "></div>
    <div class="dialog dialog-buttons-1 modal-in" style="display: block;">
      <div class="dialog-inner">
        <div class="dialog-title">Framework7</div>
        <div class="dialog-text">Hello!</div>
      </div>
      <div class="dialog-buttons">
        <span class="dialog-button dialog-button-bold" @click="eventClick"
          >OK</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  PropType,
} from "@vue/composition-api";

export default defineComponent({
  name: "F7Dialog",
  props: {
    eventClick: {
      type: (null as unknown) as PropType<(event: MouseEvent) => void>,
    },
  },
  setup: (props, context) => {
    const data = reactive({
      show: false,
    });
    onMounted(() => {
      console.log("mounted");
    });

    function dismissClick() {
      console.log("emiting");
      context.root.$emit("dismissClick");
    }

    return {
      dismissClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.dialog {
  font-family: "SF Display", sans-serif;
}
.dialog-backdrop.backdrop-in {
  visibility: visible;
  opacity: 1;
}
.dialog-backdrop {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 13000;
  visibility: hidden;
  opacity: 0;
  transition-duration: 4.4s;
}
.dialog.modal-in {
  opacity: 1;
  transform: translate3d(0, -50%, 0) scale(1);
}

/** Medium */

/** Regular */
@font-face {
  font-family: "SF Display";
  font-weight: 400;
  src: url("https://sf.abarba.me/SF-UI-Display-Regular.otf");
}

/** Semibold */
@font-face {
  font-family: "SF Display";
  font-weight: 600;
  src: url("https://sf.abarba.me/SF-UI-Display-Semibold.otf");
}

$--f7-theme-color: #007aff;
$ios--f7-dialog-border-divider-color: rgba(0, 0, 0, 0.2);
$ios--f7-device-pixel-ratio: 1;
$ios--f7-dialog-button-text-color: $--f7-theme-color;
$ios--f7-dialog-button-text-align: center;

$ios--f7-dialog-box-shadow: none;
$ios--f7-dialog-width: 270px;
$ios--f7-dialog-inner-padding: 16px;
$ios--f7-dialog-border-radius: 13px;
$ios--f7-dialog-text-align: center;
$ios--f7-dialog-font-size: 14px;
$ios--f7-dialog-title-text-color: inherit;
$ios--f7-dialog-title-font-size: 18px;
$ios--f7-dialog-title-font-weight: 600;
$ios--f7-dialog-title-line-height: inherit;
$ios--f7-dialog-button-font-size: 17px;
$ios--f7-dialog-button-height: 44px;
$ios--f7-dialog-button-letter-spacing: 0;
$ios--f7-dialog-button-font-weight: 400;
$ios--f7-dialog-button-text-transform: none;
$ios--f7-dialog-input-border-radius: 4px;
$ios--f7-dialog-input-font-size: 14px;
$ios--f7-dialog-input-height: 32px;
$ios--f7-dialog-input-border-width: 1px;
$ios--f7-dialog-input-placeholder-color: #a9a9a9;
$ios--f7-dialog-preloader-size: 34px;
$ios--f7-dialog-bg-color: rgba(255, 255, 255, 0.95);
$ios--f7-dialog-bg-color-rgb: 255, 255, 255;
$ios--f7-dialog-text-color: #000;
$ios--f7-dialog-button-pressed-bg-color: rgba(0, 0, 0, 0.1);
$ios--f7-dialog-input-border-color: rgba(0, 0, 0, 0.3);
$ios--f7-dialog-border-divider-color: rgba(0, 0, 0, 0.2);

.dialog {
  position: absolute;
  z-index: 13500;
  left: 50%;
  margin-top: 0;
  top: 50%;
  overflow: hidden;
  opacity: 0;
  transform: translate3d(0, -50%, 0) scale(1.185);
  transition-property: transform, opacity;
  display: none;
  transition-duration: 0.4s;
  box-shadow: $ios--f7-dialog-box-shadow;
  width: $ios--f7-dialog-width;
  margin-left: calc(-1 * #{$ios--f7-dialog-width} / 2);
  border-radius: $ios--f7-dialog-border-radius;
  text-align: $ios--f7-dialog-text-align;
  color: $ios--f7-dialog-text-color;
  font-size: $ios--f7-dialog-font-size;
  background: $ios--f7-dialog-bg-color;
  will-change: transform, opacity;
}

.dialog-inner {
  border-radius: $ios--f7-dialog-border-radius $ios--f7-dialog-border-radius 0 0;

  &::after {
    content: "";
    position: absolute;
    background-color: $ios--f7-dialog-border-divider-color;
    display: block;
    z-index: 15;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    transform-origin: 50% 100%;
    transform: scaleY(calc(1 / #{--f7-device-pixel-ratio}));
  }
}

.dialog-inner {
  position: relative;
  padding: $ios--f7-dialog-inner-padding;
}

.dialog-title {
  color: $ios--f7-dialog-title-text-color;
  font-size: $ios--f7-dialog-title-font-size;
  font-weight: $ios--f7-dialog-title-font-weight;
  line-height: $ios--f7-dialog-title-line-height;
}

.dialog-text {
  margin-top: 5px;
}

.dialog-buttons {
  height: 44px;
  justify-content: center;
}
.dialog-buttons {
  position: relative;
  display: flex;
}

.dialog-button:first-child:last-child {
  border-radius: 0 0 $ios--f7-dialog-border-radius $ios--f7-dialog-border-radius;
}
.dialog-button.dialog-button-bold {
  font-weight: 500;
}

.dialog-button {
  width: 100%;
  padding: 0 5px;
  -webkit-box-flex: 1;
  flex: 1;
  -ms-flex: 1;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: $ios--f7-dialog-button-text-color;
  font-size: $ios--f7-dialog-button-font-size;
  height: $ios--f7-dialog-button-height;
  line-height: $ios--f7-dialog-button-height;
  letter-spacing: $ios--f7-dialog-button-letter-spacing;
  text-align: $ios--f7-dialog-button-text-align;
  font-weight: $ios--f7-dialog-button-font-weight;
  text-transform: $ios--f7-dialog-button-text-transform;
  display: block;
  cursor: pointer;
}

.ios .theme-dark,
.ios.theme-dark {
  --f7-dialog-bg-color: rgba(45, 45, 45, 0.95);
  --f7-dialog-bg-color-rgb: 45, 45, 45;
  --f7-dialog-button-pressed-bg-color: rgba(0, 0, 0, 0.2);
  --f7-dialog-border-divider-color: rgba(255, 255, 255, 0.15);
  --f7-dialog-input-border-color: rgba(255, 255, 255, 0.15);
  --f7-dialog-input-bg-color: rgba(0, 0, 0, 0.5);
}
.md {
  --f7-dialog-box-shadow: var(--f7-elevation-24);
  --f7-dialog-width: 280px;
  --f7-dialog-inner-padding: 24px;
  --f7-dialog-border-radius: 4px;
  --f7-dialog-text-align: left;
  --f7-dialog-font-size: 16px;
  --f7-dialog-title-font-size: 20px;
  --f7-dialog-title-font-weight: 500;
  --f7-dialog-title-line-height: 1.3;
  --f7-dialog-button-font-size: 14px;
  --f7-dialog-button-height: 36px;
  --f7-dialog-button-letter-spacing: 0.03em;
  --f7-dialog-button-font-weight: 500;
  --f7-dialog-button-text-transform: uppercase;
  --f7-dialog-input-border-radius: 0px;
  --f7-dialog-input-font-size: 16px;
  --f7-dialog-input-height: 36px;
  --f7-dialog-input-border-color: transparent;
  --f7-dialog-input-border-width: 0px;
  --f7-dialog-preloader-size: 32px;
  --f7-dialog-bg-color: #fff;
  --f7-dialog-text-color: rgba(0, 0, 0, 0.54);
  --f7-dialog-title-text-color: #212121;
  --f7-dialog-button-pressed-bg-color: rgba(0, 0, 0, 0.1);
  --f7-dialog-input-placeholder-color: rgba(0, 0, 0, 0.35);
}
</style>
