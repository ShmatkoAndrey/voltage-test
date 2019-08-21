<template>
  <section>
    <div>
      <KeyboardApp :input.sync="input" :onInputChange="onInputChange"/>
    </div>
  </section>
</template>

<script>
import "simple-keyboard/build/css/index.css";
import KeyboardApp from "./kbapp.vue";
// import "./index.css";

let keyboard;

let app = {
  components: {
    KeyboardApp
  },
  data: function() {
    return { input: "" };
  },
  methods: {
    update(input) {
      // NOT WORKING ***********************
      this.input = input;
      console.log("update", this.input);
      this.$emit('input', input)
    },
    onInputChange(e) {
      let input = e.target.value;
      console.log("onInputChange", input);
      keyboard.setInput(input);
    }
  }
};

let onChange = input => {
  app.methods.update(input);
  console.log("Input changed", input);
};

let onKeyPress = button => {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") handleShift();
};

let handleShift = () => {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
};

if (typeof window !== "undefined") {
  import("simple-keyboard").then(KeyboardClass => {
    const Keyboard = KeyboardClass.default;

    keyboard = new Keyboard({
      onChange: input => onChange(input),
      onKeyPress: button => onKeyPress(button)
    });
  });
}

export default app;
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #526488;
  letter-spacing: 1px;
  font-size: 6em;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
