<template>
  <div>
    <!-- Trigger the modal with a button -->
    <button
      type="button"
      class="myBtn"
      data-toggle="modal"
      data-target="#modal"
      @click="data.show = !data.show"
    >
      Open Modal
    </button>

    <div class="dialog-backdrop backdrop-in"></div>

    <div id="modal" class="m modalx fade" role="dialogx" v-show="data.show">
      <h4>App Not Available</h4>
      <p class="modal-p">
        This app is currently not available in your country or region.
      </p>

      <span class="dialog-button dialog-button-bold">OK</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  props: {
    Message: {
      type: String,
    },
  },
  setup: (props, context) => {
    const data = reactive({
      show: false,
    });
    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
.m {
  //display: none;
}

/* --- SF UI Display --- */

/** Medium */
@font-face {
  font-family: "SF Display";
  font-weight: 500;
  src: url("https://sf.abarba.me/SF-UI-Display-Medium.otf");
}

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

.dialog-button {
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--f7-dialog-button-text-color);
  font-size: var(--f7-dialog-button-font-size);
  height: var(--f7-dialog-button-height);
  line-height: var(--f7-dialog-button-height);
  letter-spacing: var(--f7-dialog-button-letter-spacing);
  text-align: var(--f7-dialog-button-text-align);
  font-weight: var(--f7-dialog-button-font-weight);
  text-transform: var(--f7-dialog-button-text-transform);
  display: block;
  cursor: pointer;
}

.dialog-backdrop {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
  //visibility: hidden;
  //opacity: 0;
  transition-duration: 0.4s;
}

#modal h4 {
  margin: 0;
  color: #000;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1rem;
}

#modal {
  font-family: "SF Display", sans-serif;
  letter-spacing: 0.04rem;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  //display: none; /* Hidden by default */
  text-align: center;
  padding: 1.4rem 0;
  height: 8rem;
  width: 24rem;
  border-radius: 10px;
  //  background: #e8e8e8;
  background: #fff;
  animation-duration: 0.5s;
  animation-name: popin;
  margin: 50px auto auto;
  opacity: 1;
}

.modal-p {
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
}

@keyframes popin {
  from {
    margin: 100px auto auto;
    opacity: 0;
  }
  to {
    margin: 50px auto auto;
  }
}

.btn-unstyled {
  border-top: 1px solid #ccc;
  border-bottom: 0 !important;
  display: inline-block;
  margin-top: 0.4rem;
  /*margin-bottom: 1rem;*/
  width: 100%;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  font-size: 1.1rem;
  padding: 16px 0;
  color: #2a7cd5;
  cursor: pointer;
  font-weight: 600;
  box-sizing: border-box;
  background: transparent;
  outline: none;
}

@media (max-width: 767px) {
  #modal {
    padding: 1.2rem 0;
    /*height: auto;*/
    width: 20rem;
  }

  .modal-p {
    max-width: 85%;
  }
}
</style>
