<template>
  <relative-container>
    <form @submit.prevent="loginForm">
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" placeholder="test@test.com" />
      </div>
      <p v-if="!emailIsValid">Please enter a valid email adress!</p>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" placeholder="**********" />
      </div>
      <p v-if="!passwordIsValid">
        Your password must be at least 6 characters long!
      </p>
      <div>
        <just-button mode="black" type="submit">Login</just-button>
        <div>or</div>
        <just-button mode="purple" to="/register" link
          >Register now!</just-button
        >
      </div>
    </form>
  </relative-container>
</template>

<script async setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const emailIsValid = ref("false");
const passwordIsValid = ref("false");

function loginForm() {
  emailIsValid.value = true;
  if (email.value === "" || !email.value.includes("@")) {
    emailIsValid.value = false;
  }
  passwordIsValid.value = true;
  if (password.value === "" || password.value.length < 6) {
    passwordIsValid.value = false;
  }
}
</script>

<style scoped>
form {
  margin: 0;
  padding: 0;
}
label {
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: block;
}
input:focus,
textarea:focus {
  border-color: #f3f4f6;
  background-color: #f3f4f6;
}
</style>
