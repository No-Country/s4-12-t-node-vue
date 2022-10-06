<template>
  <footer class="bg-paleta-sac-50">
    <div class="container text-paleta-sac">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-3">
        <div class="p-4 flex items-center justify-center">
          <img src="../assets/logo.png" alt="logo" style="width: 100px" />
        </div>
        <div class="p-4 flex items-center justify-center">
          <p>&copy;No-Country 2022</p>
        </div>
        <div class="p-4 flex items-center justify-center">
          <router-link
            to="#"
          >
            <button type="button" class="text-paleta-sac bg-paleta-sac-50 hover:bg-paleta-sac-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
              <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
            </button>
          </router-link>
          <router-link
            to="#"
          >
            <button type="button" class="text-paleta-sac bg-paleta-sac-50 hover:bg-paleta-sac-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
              <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView",
};
</script>

<style scoped>

img {
  padding: 0.6em;
  position: relative;
  height: 84px;
}

.footer-bottom p {
  text-align: center;
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
  text-transform: uppercase;
  opacity: 0.4;
  font-weight: 200;
  margin: 0;
}

.redes :hover {
  color: #d6efed;
}
.twiter {
  margin: 5px;
}
.instagram {
  margin: 5px;
}
.facebook {
  margin: 5px;
  margin-left: 4px;
}
</style>
