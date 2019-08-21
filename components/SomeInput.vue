<template>
  <div class="some-input">
    <input type="text" @input="inputChange($event)" v-model="text" />
    <div class="error-message" :class="{'vissible': error}">Must be a valid integer</div>
    <keyboard :input.sync="text" />
  </div>
</template>

<script>
import keyboard from "./keyboard/kbapp";
var kb;

export default {
  name: "some-input",
  components: {
    keyboard
  },
  data() {
    return {
      text: "",
      error: false
    };
  },
  methods: {
    onChange(value) {
      this.text = value.replace(/[^0-9]/g, "");
      this.error = this.text !== value;
      kb.setInput(this.text);
    },
    inputChange(event) {
      let val = event.target.value.replace(/[^0-9]/g, "");
      this.error = event.target.value !== val;
      event.target.value = val;
      this.text = val;
      kb.setInput(val);
    }
  },
  created() {
    if (typeof window !== "undefined") {
      import("simple-keyboard").then(KeyboardClass => {
        const Keyboard = KeyboardClass.default;

        kb = new Keyboard({
          onChange: input => this.onChange(input)
        });
      });
    }
  }
};
</script>
