<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
    <div class="flex items-center flex-no-shrinkmr-6">
      <router-link to="/">
        <img class="fill-current h-24 w-24 mr-2"  src="../assets/logo.png" alt="logo icon svg" />
      </router-link>
    </div>
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-paleta-sac hover:border-paleta-sac">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <ul class="nav text-sm sm:flex-grow sm: text-right">  
        <li><router-link to="#about-us">Nosotros</router-link></li>
        <li><router-link to="/login">Inicio de Sesión</router-link></li>
        <li><router-link to="/register">Registrar</router-link></li>
        <li><router-link to="#contact">Contacto</router-link></li>
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
    }
  },
  methods: {
  	toggle() {
    	this.open = !this.open
    }
  }
}
</script>

<style scoped>
.nav {
  text-transform: uppercase;
  font-weight: 600;
  padding-top: 10px;
}

.nav * {
  box-sizing: border-box;
  transition: all 0.35s ease;
}

.nav li {
  display: inline-block;
  list-style: outside none none;
  margin: 0.5em 1em;
  padding: 0;
}

.nav a {
  padding: 0.5em 0.8em;
  color: #393e46;
  position: relative;
  text-decoration: none;
  font-size: 20px;
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
  border-top: 3px solid #393e46;
  border-right: 3px solid #393e46;
  transform: translate(-100%, 50%);
}

.nav a:after {
  content: "";
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #393e46;
  border-left: 3px solid #393e46;
  transform: translate(100%, -50%);
}

.nav a:hover:before,
.nav a:hover:after {
  transform: translate(0, 0);
  opacity: 1;
}

.nav a:hover {
  color: #393e46;
}
</style>
