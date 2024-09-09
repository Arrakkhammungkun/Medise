<template>
    <UserLayout>
      <div class="relative w-[80%]   mx-auto overflow-hidden m-4 mt-32">
        <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="min-w-full h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
                <img src="/src/img/advertgif1.gif" alt="Promotion 1" class="object-cover h-full w-full" />
            </div>
            <div class="min-w-full h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
                <img src="/src/img/advertgif2.gif" alt="Promotion 2" class="object-cover h-full w-full" />
            </div>
            <div class="min-w-full h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
                <img src="/src/img/advertgif3.gif" alt="Promotion 3" class="object-cover h-full w-full" />
            </div>
        </div>

        <!-- Left Arrow -->
        <button @click="prevSlide" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
            &#10094;
        </button>

        <!-- Right Arrow -->
        <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">
            &#10095;
        </button>

        <!-- Dots Navigation -->
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <span v-for="n in totalSlides" :key="n"
                @click="goToSlide(n - 1)"
                :class="{ 'bg-orange-500': currentIndex === n - 1, 'bg-gray-500': currentIndex !== n - 1 }"
                class="w-3 h-3 rounded-full cursor-pointer"></span>
        </div>
      </div>
      <div class="flex justify-center my-8 mx-36">
          <div class="bg-[#E1F5FE] p-6 rounded-2xl shadow-lg w-[70%]">
            <button class="bg-white p-6 rounded-2xl w-full mb-4 transition ease-out delay-150 hover:-translate-y-2 hover:scale-100 duration-300">
              <div class="w-3/5 flex">
                <img src="/src/img/doctor.png" alt="Product Image" class="w-[10vw] h-[11vw] mr-4 drop-shadow-xl object-cover object-top rounded-2xl" />
                <div class="flex-auto ">
                  <div class="text-xl font-bold  items-center text-left mb-5">ดร.นพ. สาโรช สุวรรณสุทธิ</div>

                  <div class="flex mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-[1.1vw] h-[1.1vw]  mr-2" fill="#16B37F">
                      <path d="M192 48c0-26.5 21.5-48 48-48L400 0c26.5 0 48 21.5 48 48l0 464-80 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-80 0 0-464zM48 96l112 0 0 416L48 512c-26.5 0-48-21.5-48-48L0 320l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 288l0-64 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 192l0-48c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 48-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 144c0 26.5-21.5 48-48 48l-112 0 0-416 112 0zM312 64c-8.8 0-16 7.2-16 16l0 24-24 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0z"/>
                    </svg>โรงพยาบาลศรีธัญญา</div>
                  <div class="flex mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[1.1vw] h-[1.1vw]  mr-2">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                      <path fill="#9575CD" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/>
                    </svg>
                    โรคเส้นผม และการผ่าตัดปลูกถ่ายเส้นผม
                  </div>
                  <div class="flex mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[1.1vw] h-[1.1vw]  mr-2">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                      <path fill="#F9A825" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    </svg>
                    4.95 (267 รีวิว)
                  </div>
                  <div class="flex mb-4">
                    <div class="mr-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[1.1vw] h-[1.1vw]  mr-2">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                        <path fill="#d1c4e9" d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                      </svg>
                      ฿ 400
                    </div>
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[1.1vw] h-[1.1vw]  mr-2">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                        <path fill="#d1c4e9" d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/>
                      </svg>  
                      ฿ 500
                    </div>
                  </div>
                
                </div>
              </div>
            </button>


          </div>
        </div>
    </UserLayout>
  </template>
  
<script setup>
  import UserLayout from '@/layout/UserLayout.vue';
  import { ref, onMounted, onUnmounted, computed, watch} from 'vue';

  const currentIndex = ref(0);
const totalSlides = ref(3); 
let intervalId = null;

const goToSlide = (index) => {
  currentIndex.value = index;
  resetAutoScroll();
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
  resetAutoScroll();
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value;
  resetAutoScroll();
};

const startAutoScroll = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 10000); // Auto-scroll every 10 seconds
};

const stopAutoScroll = () => {
  clearInterval(intervalId);
};

const resetAutoScroll = () => {
  stopAutoScroll();
  startAutoScroll();
};

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  stopAutoScroll();
});
</script>
  
<style scoped>

</style>
  