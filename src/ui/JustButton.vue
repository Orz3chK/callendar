<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      deafult: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  padding: 5px 16px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  vertical-align: middle;
  border: 1px solid;
  border-radius: 6px;
  color: #24292e;
  background-color: #fafbfc;
  border-color: #1b1f2326;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
}
button.big,
a.big {
  padding: 5rem, 12rem;
}

.black,
a.black {
  background-color: rgb(140, 140, 232);
  border: none;
}
.black:hover,
a:hover {
  background-color: #0242c2;
  transition-duration: 0.1s;
  border: none;
}

.purple,
a.purple {
  background-color: rgb(113, 0, 64);
  border: none;
}
.purple:hover,
a.purple:hover {
  background-color: #1d0c14;
  transition-duration: 0.1s;
  border: none;
}
:hover {
  background-color: #f3f4f6;
  border-color: #1b1f2326;
  transition-duration: 0.1s;
}
</style>
