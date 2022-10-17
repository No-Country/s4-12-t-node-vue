<template>
  <!-- <section class="text-gray-600 body-font">
  <div class="container px-5 py-5 mx-auto">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-paleta-sac-300 lg:w-1/3 lg:mb-0 mb-4">
        Gestión de Torres
      </h1>
    </div> 
    <section class="  rounded shadow-2xl  text-gray-600 body-font p-4">

      <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded float-right">Nuevo</button>

        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class=" shadow-md h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://res.cloudinary.com/dytpump6i/image/upload/v1666030345/pexels-ikram-shaari-250659_qnhw0w.jpg" alt="blog">
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Yenifer</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Unidad: 01</h1>
                  <p class="leading-relaxed mb-3">Direccion: calle Guemes 2564 barrio Los Cardales.</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-gray-400 to-gray-400 hover:scale-105 drop-shadow-md   px-4 py-1 rounded-lg">Ingresar</button>
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
                <div class=" shadow-md h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://res.cloudinary.com/dytpump6i/image/upload/v1666030345/pexels-ikram-shaari-250659_qnhw0w.jpg" alt="blog">
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Leandro</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Unidad: 02</h1>
                    <p class="leading-relaxed mb-3">Direccion: Calle estradas 7845 barrio Las Toscaditas.</p>
                    <div class="flex items-center flex-wrap ">
                      <button class="bg-gradient-to-r from-gray-400 to-gray-400 hover:scale-105 drop-shadow-md  px-4 py-1 rounded-lg">Ingresar</button>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class=" shadow-md h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://res.cloudinary.com/dytpump6i/image/upload/v1666030345/pexels-ikram-shaari-250659_qnhw0w.jpg" alt="blog">
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Daniel</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Unidad: 03</h1>
                    <p class="leading-relaxed mb-3">Direccion: Calle Santa Maria 5263 barrio El Trebol.</p>
                    <div class="flex items-center flex-wrap ">
                      <button class="bg-gradient-to-r from-gray-400 to-gray-400 hover:scale-105 drop-shadow-md   px-4 py-1 rounded-lg">Ingresar</button>
                     
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-4 md:w-1/3">
                <div class=" shadow-md h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://res.cloudinary.com/dytpump6i/image/upload/v1666030345/pexels-ikram-shaari-250659_qnhw0w.jpg" alt="blog">
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Daniel</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Unidad: 04</h1>
                    <p class="leading-relaxed mb-3">Direccion: Calle La Paz 3258 barrio El Pilar.</p>
                    <div class="flex items-center flex-wrap ">
                      <button class="bg-gradient-to-r from-gray-400 to-gray-400 hover:scale-105 drop-shadow-md   px-4 py-1 rounded-lg">Ingresar</button>
                     
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
  </div>
</section> -->
  <div>
    <div>
      <div v-for="(item, index) in $store.state.products" :key="index">
        <div class="productos">
          <div class="card" style="width: 18rem">
            <h5 class="card-title text-center">{{ item.titulo }}</h5>
            <img class="img-card" :src="item.imagen" alt="" />
            <!-- <img :src="getImgUrl()" class="card-img-top d-block w-50" :alt="titulo"> -->
            <div class="card-body">
              <p class="card-text">${{ item.precio }}</p>
              <button class="btn btn-success text-center">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
.productos {
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-top: 40px;
  margin-right: 30px;
  border-radius: 10px;
  box-shadow: 1px 4px 10px 0 brown;
  float: right;
}
.img-card {
  width: 150px;
  height: 150px;
}
.product {
  margin: 75px;
}
</style>
