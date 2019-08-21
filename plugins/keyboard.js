import Keyboard from "simple-keyboard";

Vue.component('keyboard', {
  template: `
    <div :class="keyboardClass"></div>
  `,
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String
    },
    input: {
      type: String
    }
  },
  data: () => ({
    keyboard: null
  }),
  mounted() {
    this.keyboard = new Keyboard({
      // onChange: this.onChange,
      // onKeyPress: this.onKeyPress
    });
  },
  methods: {
    // onChange(input) {
    //   this.$emit("onChange", input);
    // },
    // onKeyPress(button) {
    //   this.$emit("onKeyPress", button);

    //   /**
    //    * If you want to handle the shift and caps lock buttons
    //    */
    //   if (button === "{shift}" || button === "{lock}") this.handleShift();
    // },
    // handleShift() {
    //   let currentLayout = this.keyboard.options.layoutName;
    //   let shiftToggle = currentLayout === "default" ? "shift" : "default";

    //   this.keyboard.setOptions({
    //     layoutName: shiftToggle
    //   });
    // }
  },
  watch: {
    // input(input) {
    //   this.keyboard.setInput(input);
    // }
  }
});
