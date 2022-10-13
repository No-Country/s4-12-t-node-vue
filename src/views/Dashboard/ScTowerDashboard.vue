<template>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-5 mx-auto">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-paleta-sac-300 lg:w-1/3 lg:mb-0 mb-4">
        Gestión de Torres
      </h1>
    </div> 
    <div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="w-1/3 bg-cover" style="background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"></div>

      <div class="w-2/3 p-4 md:p-4">
          <h1 class="text-2xl font-bold text-paleta-sac-300">Torre 1</h1>
          <div class="flex items-center mt-4 text-paleta-sac-300">
            <svg aria-label="suitcase icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 11H10V13H14V11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"/>
            </svg>
            <h1 class="px-2 text-sm">J-0000000-0</h1>
          </div>

        <div class="flex items-center mt-4 text-paleta-sac-300">
          <svg aria-label="location pin icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"/>
          </svg>
          <h1 class="px-2 text-sm">Dirección</h1>
        </div>

        <div class="flex items-center mt-4 text-paleta-sac-300">
            <svg aria-label="suitcase icon" class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 11H10V13H14V11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"/>
            </svg>
            <h1 class="px-2 text-sm">23</h1>
        </div>
        <div class="flex justify-end mt-3 item-center">
            <a class="mr-2 text-paleta-sac-300 cursor-pointer hover:text-paleta-sac dark:hover:text-gray-300" tabindex="0" role="link" aria-label="share link">
                <svg aria-hidden="true" class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                    <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                    <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                </svg>
            </a>
        </div>
      </div>
    </div>   
  </div>
</section>
</template>

<script>
  import TowerIcon from "../../icons/notification.svg";
  import OwnersIcon from "../../icons/notification.svg";
  import PayIcon from "../../icons/notification.svg";
  import PaymentIcon from "../../icons/notification.svg";
  export default {
  components: {
    OwnersIcon,
    TowerIcon,
    PaymentIcon,
    PayIcon,
  },
};
</script>

<style scoped>
</style>
