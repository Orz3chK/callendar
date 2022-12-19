<template>
  <relative-container>
    <form @submit="login - form">
      <div>
        <label for="email">Email</label>
        <input type="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" />
      </div>
      <div>
        <just-button>Login</just-button>
      </div>
    </form>
  </relative-container>
</template>
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
