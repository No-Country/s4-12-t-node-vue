<template>
  <ul class="nav">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/login">Inicio sesion</router-link></li>
    <li><router-link to="/register">Registrar</router-link></li>
    <li><router-link to="#">Contacto</router-link></li>
    <li><router-link to="#">Nosotros</router-link></li>
  </ul>
</template>

<script>
export default {
  name: "NavBarVue",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Titillium+Web:400,600");

/* .Navbar {
  background-image: url("https://res.cloudinary.com/dytpump6i/image/upload/v1665008942/Mundo_mascota_7_ihuurq.png");
  background-repeat: no-repeat;

  background-position: left;
  width: 75px;
  height: 75px;
} */

.nav {
  font-family: "Titillium Web";
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  padding-top: 15px;
}

.nav * {
  box-sizing: border-box;
  transition: all 0.35s ease;
}

.nav li {
  display: inline-block;
  list-style: outside none none;
  margin: 0.5em 1em;
  paddin: 0;
}

.nav a {
  padding: 0.5em 0.8em;
  color: black;
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
  border-top: 3px solid black;
  border-right: 3px solid black;
  transform: translate(-100%, 50%);
}

.nav a:after {
  content: "";
  left: 0;
  bottom: 0;
  border-bottom: 3px solid black;
  border-left: 3px solid black;
  transform: translate(100%, -50%);
}

.nav a:hover:before,
.nav a:hover:after {
  transform: translate(0, 0);
  opacity: 1;
}

.nav a:hover {
  color: black;
}
</style>
