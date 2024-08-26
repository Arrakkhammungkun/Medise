<script setup>
import UserLayout from '@/layout/UserLayout.vue'
import { ref, onMounted, onUnmounted, computed} from 'vue';

const currentIndex = ref(0);
const totalSlides = ref(3); // You can adjust this based on the number of slides
let intervalId = null;

const goToSlide = (index) => {
  currentIndex.value = index;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value;
};

const startAutoScroll = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 5000); // Auto-scroll every 5 seconds
};

const stopAutoScroll = () => {
  clearInterval(intervalId);
};

onMounted(() => {
  startAutoScroll();
  
});

onUnmounted(() => {
  stopAutoScroll();
});
const searchValue = ref('')
const products = ref([
  { id: 1,
    name: 'OLAY Regenerist Micro-Sculpting Cream',
    img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/lay/lay19049/g/27.jpg',
    price: 999,
    type: 'skincare' },
  { id: 2,
    name: 'TYLENOL Paracetamol',
    img: 'https://punsuk.com/2623-6737-large_default/tylenol-paracetamol-500-100-.jpg',
    price: 140,
    type: 'Common-medicine' },
  { id: 3,
    name: 'Alcohol ALSOFF  70% Ethyl Alcohol Solution 60 ml.',
    img: 'https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2F698bfec7187d481b890e6ecd70f50f4f&w=640&q=75',
    price: 12,
    type: 'Common-medicine' },
    { id: 4,
    name: 'Hemomin Strawberry Flavoured egg with powder beverage  400g.',
    img: 'https://www.fascino.co.th/fasue-img/600/744/resize/2/3/235547_1__1.png',
    price: 849,
    type: 'protein' },
    { id: 5,
    name: 'Vistra acerola cherry ',
    img: 'https://www.fascino.co.th/fasue-img/600/744/resize/img_hq/154857-1.jpg',
    price: 632,
    type: 'vitamins' },
    { id: 6,
    name: 'NIVEA Extra Bright 10 Super Vitamins & Skin Foods Body Serum 320ml',
    img: 'https://img.lazcdn.com/g/p/e21f919bbcd52f1926c3456f25141739.jpg_720x720q80.jpg_.webp',
    price: 233,
    type: 'skincare' },
    { id: 7,
    name: 'Vistra Whey Protein Plus Powder ',
    img: 'https://www.fascino.co.th/fasue-img/600/744/resize/img_hq/201286-1.jpg',
    price: 463,
    type: 'protein' },
    { id: 8,
    name: 'Gaviscon Peppermint  150 ml ',
    img: 'https://down-th.img.susercontent.com/file/a5378c059e5e327b9983a82c91b23f8f',
    price: 265,
    type: 'Personal-medicine' },
    { id: 9,
    name: 'SK-ll GenOptics Aura Essence',
    img: 'https://image-optimizer-th.production.sephora-asia.net/images/product_images/closeup_1_Product_4979006085747-SKII-Genoptics-Ultraura-Essence-50ml_36986ee0365ce913965c2ef4f5e91dd1cebd0335_1702969981.png',
    price: 5300,
    type: 'skincare' },
    { id: 10,
    name: 'Vistra Gotu Kola Extract Plus Zinc',
    img: 'https://www.fascino.co.th/fasue-img/600/744/resize/2/1/214221.png',
    price: 243,
    type: 'vitamins' },
    { id: 11,
    name: 'Strepsils Honey Lemon 24s',
    img: 'https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/40/88/8850360310040/thumbnail/8850360310040_4.jpg',
    price:  24,
    type: 'Common-medicine' },
    { id: 12,
    name: 'ยาธาตุน้ำขาว ตรากระต่ายบิน 200 ml.',
    img: 'https://cx.lnwfile.com/_/cx/_raw/xo/m0/lg.jpg',
    price: 60,
    type: 'Common-medicine' },
    { id: 13,
    name: 'Centrum Silver 50+ Dietary Supplement ',
    img: 'https://www.fascino.co.th/fasue-img/600/744/resize/2/1/218073_1.png',
    price: 356,
    type: 'vitamins' },
    { id: 14,
    name: 'BEPANTHEN OINTMENT ',
    img: 'https://down-th.img.susercontent.com/file/2fe2ab2e2b9edd2366c83e96589e37d5',
    price: 174,
    type: 'Personal-medicine' },
    { id: 15,
    name: 'Royal-D Whey protein ',
    img: 'https://www.fascino.co.th/fasue-img/600/744/resize/img_hq/252288_1.jpg',
    price: 780,
    type: 'protein' },
    { id: 16,
    name: 'ENO Fruit Salt ',
    img: 'https://img.lazcdn.com/g/p/bbb1069aeb2f7d107005cf05ec8b1c92.jpg_720x720q80.jpg_.webp',
    price: 10,
    type: 'Personal-medicine' },
    { id: 17,
    name: 'Mega Ultrapro (Vanilla) ',
    img: 'https://www.fascino.co.th/fasue-img/600/744/resize/2/3/236306.png',
    price: 1794,
    type: 'protein' },
    { id: 18,
    name: 'Lancôme New Advanced Génifique Serum ',
    img: 'https://image-optimizer-th.production.sephora-asia.net/images/product_images/closeup_3614272623545-GNF30ml_3622b22eb000ef8ed0101b2a8a5eafba9ef1eda0_1619266614.png',
    price: 3600,
    type: 'skincare' },
    { id: 19,
    name: 'Za True White EX Essence Lotion',
    img: 'https://down-th.img.susercontent.com/file/483ae61bd4524737a0e2386212399b20',
    price: 420,
    type: 'skincare' },
    { id: 20,
    name: 'Vistra Cla&L-Carnitine 1100MG Plus Vitamin E',
    img: 'https://www.fascino.co.th/fasue-img/600/744/resize/img_hq/224278-1.jpg',
    price: 643,
    type: 'vitamins' },
]);

const selectedCategory = ref('All');
const filteredProducts = computed(() => {
  return products.value.filter(product =>
    (selectedCategory.value === 'All' || product.type === selectedCategory.value) &&
    product.name.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});
function searchmedic(param) {
  selectedCategory.value = param;
}
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchmedicine(event) {
  // console.log(event.target.id);
  searchValue.value = event.target.value;
}
const noProductsFound = computed(() => filteredProducts.value.length === 0);



</script>

<template>
    <UserLayout>
        <div class="relative w-full max-w-[1024px] mx-auto overflow-hidden m-4 mt-32">
            <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="min-w-full h-[400px] bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
                <img src="/src/img/Promotion 1.png" alt="Promotion 1" class="object-cover h-full w-full" />
            </div>
            <div class="min-w-full h-[400px] bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
                <img src="/src/img/Promotion 2.png" alt="Promotion 2" class="object-cover h-full w-full" />
            </div>
            <div class="min-w-full h-[400px] bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
                <img src="/src/img/Promotion 3.png" alt="Promotion 3" class="object-cover h-full w-full" />
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
        <div class="flex container w-[90vw]  mx-auto">
          <div class="sidebar">
            <div class="relative mx-10">
              <input
                v-model="searchValue"
                @input="searchmedicine"
                id="txt_search"
                type="text"
                class="w-full p-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search blocks..."
              />
              <span class="absolute right-3 top-3">
                <!-- Magnifying glass icon -->
                
              </span>
            </div>
            <h2 class="text-[1.2vw] font-semibold mb-1 pl-5">รายการสินค้า</h2>

            <div  class="grid grid-cols-3 gap-4 mx-4 text-[0.9vw]">
              <a @click="searchmedic('All')"  class="bg-blue-500 text-black flex flex-col justify-center items-center p-4 rounded-md h-[vw] hover:bg-[#3E296A] hover:text-white duration-300 ">
                <!-- Icon for สินค้าทั้งหมด -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="w-[2.2vw] h-[2.2vw]">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <span class="mt-2 ">ทั้งหมด</span>
              </a>
              <a @click="searchmedic('skincare')" class="bg-blue-500 text-black flex flex-col justify-center items-center p-4 rounded-md h-[7vw] hover:bg-[#3E296A] hover:text-white duration-300">
                <!-- Icon for สกินแคร์ -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="w-[2.2vw] h-[2.2vw]">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                  <path d="M224 24l0 56-56 0c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l56 0 0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56 56 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-56 0 0-56c0-13.3-10.7-24-24-24L248 0c-13.3 0-24 10.7-24 24zM559.7 392.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416 272 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-16 0-78.3 0c-29.1 0-57.3 9.9-80 28L68.8 384 32 384c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l160 0 160.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-367-8.2l.9 0c0 0 0 0 0 0c-.3 0-.6 0-.9 0z"/></svg>
                <span class="mt-2">สกินแคร์</span>
              </a>
              <a @click="searchmedic('Common-medicine')" class="bg-blue-500 text-black flex flex-col justify-center items-center p-4 rounded-md h-[7vw] hover:bg-[#3E296A] hover:text-white duration-300">
                <!-- Icon for ยาสามัญ -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-[2.2vw] h-[2.2vw]">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                  <path d="M504.3 11.1C493.3-1.6 474.5-3.7 461 6.2L252.3 160l144.9 0L502.6 54.6c11.8-11.8 12.6-30.8 1.6-43.5zM32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 82.5 43.4 147.7 123.9 176.2c-11.1 13.9-19.4 30.3-23.9 48.1C127.6 497.4 142.3 512 160 512l192 0c17.7 0 32.4-14.6 28.1-31.7c-4.5-17.8-12.8-34.1-23.9-48.1C436.6 403.7 480 338.5 480 256c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 192z"/></svg>
                
                <span class="mt-2">ยาสามัญ</span>
              </a>
              <a @click="searchmedic('Personal-medicine')" class="bg-blue-500 text-black flex flex-col justify-center items-center p-4 rounded-md h-[7vw] hover:bg-[#3E296A] hover:text-white duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" class="w-[2.2vw] h-[2.2vw]">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                  <path d="M320 64c-27.2 0-53.8 8-76.4 23.1l-37.1 24.8c-15.8 10.5-34.3 16.1-53.3 16.1l-9.2 0-16 0-72 0c-30.9 0-56 25.1-56 56l0 85c0 55.1 37.5 103.1 90.9 116.4l108 27C233.8 435 275.4 448 320 448s86.2-13 121.1-35.5l108-27C602.5 372.1 640 324.1 640 269l0-85c0-30.9-25.1-56-56-56l-72 0-16 0-9.2 0c-19 0-37.5-5.6-53.3-16.1L396.4 87.1C373.8 72 347.2 64 320 64zM132.3 346.3l-29.8-7.4C70.5 330.9 48 302.1 48 269l0-85c0-4.4 3.6-8 8-8l40 0 0 48c0 45.1 13.4 87.2 36.3 122.3zm405.1-7.4l-29.8 7.4c23-35.2 36.3-77.2 36.3-122.3l0-48 40 0c4.4 0 8 3.6 8 8l0 85c0 33-22.5 61.8-54.5 69.9zM192 208c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zm16 48l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 80c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16z"/></svg>
                
                <span class="mt-2">รักษาโรค</span>
              </a>
              <a @click="searchmedic('protein')" class="bg-blue-500 text-black flex flex-col justify-center items-center p-4 rounded-md h-[7vw] hover:bg-[#3E296A] hover:text-white duration-300">
                <!-- Icon for อาหารเสริม -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" class="w-[2.2vw] h-[2.2vw]">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                  <path d="M0 32C0 14.3 14.3 0 32 0L352 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64L0 32zm32 96l320 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zM160 240l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>
                
                <span class="mt-2">โปรตีน</span>
              </a>
              <a @click="searchmedic('vitamins')" class="bg-blue-500 text-black flex flex-col justify-center items-center p-4 rounded-md h-[7vw] hover:bg-[#3E296A] hover:text-white duration-300">
                <!-- Icon for วิตามิน -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="w-[2.2vw] h-[2.2vw]">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                  <path d="M64 144c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112-96 0 0-112zM0 144L0 368c0 61.9 50.1 112 112 112s112-50.1 112-112l0-178.4c1.8 19.1 8.2 38 19.8 54.8L372.3 431.7c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 113.3C391.8 61.5 321.9 49 271.3 85.2c-28 20-44.3 50.8-47.3 83l0-24.2c0-61.9-50.1-112-112-112S0 82.1 0 144zm296.6 64.2c-16-23.3-10-55.3 11.9-71c21.2-15.1 50.5-10.3 66 12.2l67 97.6L361.6 303l-65-94.8zM491 407.7c-.8 .6-1.6 1.1-2.4 1.6l4-2.8c-.5 .4-1 .8-1.6 1.2z"/></svg>
                
                <span class="mt-2 ">วิตามิน</span>
              </a>
            </div>
        </div>
          <div class="w-[70%]  p-[10px]   ">
            <div v-if="!noProductsFound" id="productlist" class="grid grid-cols-4 gap-[20px]  ">
              <div
                v-for="(product) in filteredProducts"
                :key="product.id"
                :class="['product-items my-3', product.type]"

              >
              
                <img class="product-img object-scale-down" :src="product.img" :alt="product.name" />
                <p class="text-[1.2vw] truncate">{{ product.name }}</p>
                <p class="text-[1vw]">{{ numberWithCommas(product.price) }} บาท</p>
              </div>
              
            </div>
            <div v-else class="text-center text-red-500 font-semibold">
              ขออภัยไม่พบสินค้า
            </div>
            <!-- <div class="product-items ">
              <img class="product-img" src="https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/lay/lay19049/g/27.jpg" alt="">
              <p class="text-[1.2vw]">ชื่อสินค้า</p>
              <p class="text-[1vw]">ราคา</p>
            </div>
            <div class="product-items">
              <img class="product-img" src="https://img.lazcdn.com/g/p/e21f919bbcd52f1926c3456f25141739.jpg_720x720q80.jpg_.webp" alt="">
              <p class="text-[1.2vw]">ชื่อสินค้า</p>
              <p class="text-[1vw]">ราคา</p>
            </div>
            <div class="product-items">
              <img class="product-img"  src="https://image-optimizer-th.production.sephora-asia.net/images/product_images/closeup_1_Product_4979006085747-SKII-Genoptics-Ultraura-Essence-50ml_36986ee0365ce913965c2ef4f5e91dd1cebd0335_1702969981.png" alt="">
              <p class="text-[1.2vw]">ชื่อสินค้า</p>
              <p class="text-[1vw]">ราคา</p>
            </div>
            <div class="product-items">
              <img class="product-img"  src="https://down-th.img.susercontent.com/file/483ae61bd4524737a0e2386212399b20" alt="">
              <p class="text-[1.2vw]">ชื่อสินค้า</p>
              <p class="text-[1vw]">ราคา</p>
            </div>
            <div class="product-items">
              <img class="product-img"  src="https://punsuk.com/2623-6737-large_default/tylenol-paracetamol-500-100-.jpg" alt="">
              <p class="text-[1.2vw]">ชื่อสินค้า</p>
              <p class="text-[1vw]">ราคา</p>
            </div>
            <div class="product-items">
              <img class="product-img"  src="https://cx.lnwfile.com/_/cx/_raw/xo/m0/lg.jpg" alt="">
              <p class="text-[1.2vw]">ชื่อสินค้า</p>
              <p class="text-[1vw]">ราคา</p>
            </div>
            <div class="product-items">
              <img class="product-img"  src="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2F698bfec7187d481b890e6ecd70f50f4f&w=640&q=75" alt="">
              <p class="text-[1.2vw]">ชื่อสินค้า</p>
              <p class="text-[1vw]">ราคา</p>
            </div>
            <div class="product-items">
              <img class="product-img"  src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/40/88/8850360310040/thumbnail/8850360310040_4.jpg" alt="">
              <p class="text-[1.2vw]">ชื่อสินค้า</p>
              <p class="text-[1vw]">ราคา</p>
            </div> -->
            
          </div>
        </div>
    </UserLayout>

</template>

<style scoped>

.search-shop{
  padding: 5px;
  border-radius: 20px;
  width: 100%;
  outline: none;
}
.w-3 {
  width: 12px;
  height: 12px;
}
.sidebar {
  width: 30%;
  padding: 10px;
  
  border-radius: 20px;
  
}
.product-items {
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  height: 17vw;
  
}
.product-items:hover {
  transform: scale(1.03);
}
.product-img {
  width: 100%;
  height: 15vw;
  border-radius: 10px;
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  background-color: white;
  
}
</style>
