<template>
  <div class="login">
    <v-card
      max-width="500"
      class="login-form"
    >
      <div class="title">Đăng cm nhập</div>
      <v-form
        ref="loginForm"
      >
        <v-text-field
          label="name"
          :name="Math.random()"
          v-model="user.name"
          :rules="rules.name"
          autocomplete="username"
        >
        </v-text-field>
        <v-text-field
          label="password"
          :name="Math.random()"
          v-model="user.pass"
          :rules="rules.pass"
          type="password"
          autocomplete="new-password"
        >
        </v-text-field>
      </v-form>
      <div>
        <v-btn
          color="primary"
          class="mr-4"
          small
          @click="login"
        >
          Đăng nhập
        </v-btn>
        <v-btn
          color="primary"
          class="mr-4"
          small
          @click="sigin"
        >
          Đăng ký
        </v-btn>
      </div>
      <div class="forgot" @click="$router.push({ name: 'forgot' })">
        Quên cm mật khẩu
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      user: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          v => !!v || 'Name is required'
        ],
        pass: [
          v => !!v || 'Name is required',
          v => /\d/.test(v) || 'Phải có số'
        ]
      }
    }
  },
  methods: {
    login() {
      if (this.$refs.loginForm.validate()) {
        document.cookie='test'
        this.$router.push({ name: 'home' });
      }
    },
    sigin() {
      this.$router.push({ name: 'sigin' });
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-yellow);
    .login-form {
      padding: 10px;
      .forgot {
        color: var(--color-blue);
        font-size: 14px;
        margin-top: 5px;
        cursor: pointer;
      }
    }
  }
</style>