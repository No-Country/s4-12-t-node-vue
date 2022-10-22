<template>
  <nav class="font-mono flex items-center justify-between flex-wrap bg-teal p-2 mx-auto">
    <div class="flex items-center flex-no-shrinkmr-6">
      <router-link to="/">
        <img
          class="fill-current h-24 w-24 mx-2"
          src="../../assets/logo.png"
          alt="logo icon svg"
        />
      </router-link>
    </div>
    <div class="block sm:hidden">
      <button
        @click="toggle"
        class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-paleta-sac hover:border-paleta-sac"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
    >
      <ul class="nav hidden md:block sm:block lg:block xl:block text-sm sm:flex-grow sm: text-right">
        <li class="text-sac hover:text-sac-300"><router-link to="#somos">Nosotros</router-link></li>
        <li class="hover:text-sac"><router-link to="/login">Iniciar Sesión</router-link></li>
        <li class="border border-sac hover:border-transparent hover:bg-sac-300 hover:text-white p-3 rounded-full"><router-link to="/register">Registrar</router-link></li>
      </ul>
      <ul class="nav block md:hidden sm:hidden lg:hidden xl:hidden text-sm sm:flex-grow sm: text-right">
        <li class="text-sac hover:text-sac-300"><router-link to="#somos">Nosotros</router-link></li>
        <li class="text-sac hover:text-sac-300"><router-link to="/login">Iniciar Sesión</router-link></li>
        <li class="text-sac hover:text-sac-300"><router-link to="/register">Registrar</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarVue",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>

.nav * {
  box-sizing: border-box;
  transition: all 0.35s ease;
}

.nav li {
  display: inline-block;
  list-style: outside none none;
}

.nav a {
  padding: 0.5em 0.8em;
  position: relative;
  text-decoration: none;
}

.nav a::before,
.nav a::after {
  content: "";
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all 0.35s ease;
  opacity: 0;
}

.nav a::before {
  content: "";
  right: 0;
  top: 0;
  color: #393e46;
  transform: translate(-100%, 50%);
}

.nav a:after {
  content: "";
  left: 0;
  bottom: 0;
  color: #393e46;
  transform: translate(100%, -50%);
}

.nav a:hover:before,
.nav a:hover:after {
  transform: translate(0, 0);
  opacity: 1;
}
</style>
