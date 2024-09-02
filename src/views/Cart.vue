<template>
  <UserLayout class="body">
    <!-- Header Section -->
    <h1 class="text-3xl font-bold mx-32 mb-4 mt-32 border-2 flex p-2 border-[#4285F4]">
      <div class="flex-auto w-1/2">ตะกร้าสินค้า</div>
      <div class="flex-auto w-1/2 text-end">1 รายการ</div>
    </h1>

    <!-- Cart Items Section -->
    <div class="mx-52">
      <div class="flex border-y-2 p-2">
        <input type="checkbox" class="mr-4" />
        <div class="flex-auto w-10/12 font-bold">รายละเอียดสินค้า</div>
        <div class="flex-auto w-1/6 text-center font-bold">จำนวน</div>
        <div class="flex-auto w-1/6 text-center font-bold">ราคา</div>
        <div class="flex-auto w-1/6 text-center font-bold">ทั้งหมด</div>
      </div>

      <!-- Repeat this block for each item -->
      <div class="flex items-center border-b-2 p-2">
        <input type="checkbox" class="mr-4" />
        <img src="https://down-th.img.susercontent.com/file/a5c3ba96b85a55fe2d23df122c54805e" alt="Product Image" class="w-36 h-36 mr-4" />
        <div class="flex-auto w-5/12">
          <div>Name</div>
          <div class="text-sm text-gray-500">Details</div>
          <button class="text-sm text-red-500">Remove</button>
        </div>
        <div class="flex-auto w-16 text-center flex items-center justify-center">
          <button class="border px-2">-</button>
          <input type="text" value="1" class="border w-8 text-center mx-1" />
          <button class="border px-2">+</button>
        </div>
        <div class="flex-auto w-16 text-center">฿ 130.00</div>
        <div class="flex-auto w-16 text-center">฿ 130.00</div>
      </div>

      <div class="flex items-center border-b-2 p-2">
        <input type="checkbox" class="mr-4" />
        <img src="https://down-th.img.susercontent.com/file/a5c3ba96b85a55fe2d23df122c54805e" alt="Product Image" class="w-36 h-36 mr-4" />
        <div class="flex-auto w-5/12">
          <div>Name</div>
          <div class="text-sm text-gray-500">Details</div>
          <button class="text-sm text-red-500">Remove</button>
        </div>
        <div class="flex-auto w-16 text-center flex items-center justify-center">
          <button class="border px-2">-</button>
          <input type="text" value="1" class="border w-8 text-center mx-1" />
          <button class="border px-2">+</button>
        </div>
        <div class="flex-auto w-16 text-center">฿ 130.00</div>
        <div class="flex-auto w-16 text-center">฿ 130.00</div>
      </div>

      <div class="flex items-center border-b-2 p-2">
        <input type="checkbox" class="mr-4" />
        <img src="https://down-th.img.susercontent.com/file/a5c3ba96b85a55fe2d23df122c54805e" alt="Product Image" class="w-36 h-36 mr-4" />
        <div class="flex-auto w-5/12">
          <div>Name</div>
          <div class="text-sm text-gray-500">Details</div>
          <button class="text-sm text-red-500">Remove</button>
        </div>
        <div class="flex-auto w-16 text-center flex items-center justify-center">
          <button class="border px-2">-</button>
          <input type="text" value="1" class="border w-8 text-center mx-1" />
          <button class="border px-2">+</button>
        </div>
        <div class="flex-auto w-16 text-center">฿ 130.00</div>
        <div class="flex-auto w-16 text-center">฿ 130.00</div>
      </div>
      
      <div class="flex items-center border-b-2 p-2">
        <input type="checkbox" class="mr-4" />
        <img src="https://down-th.img.susercontent.com/file/a5c3ba96b85a55fe2d23df122c54805e" alt="Product Image" class="w-36 h-36 mr-4" />
        <div class="flex-auto w-5/12">
          <div>Name</div>
          <div class="text-sm text-gray-500">Details</div>
          <button class="text-sm text-red-500">Remove</button>
        </div>
        <div class="flex-auto w-16 text-center flex items-center justify-center">
          <button class="border px-2">-</button>
          <input type="text" value="1" class="border w-8 text-center mx-1" />
          <button class="border px-2">+</button>
        </div>
        <div class="flex-auto w-16 text-center">฿ 130.00</div>
        <div class="flex-auto w-16 text-center">฿ 130.00</div>
      </div>


      


      <h1 class="text-3xl font-bold  mb-4 mt-4 border-y-2 flex p-2 border-[#4285F4] border-dotted">
      <div class="flex-auto w-1/2">รวมทั้งหมด</div>
      <div class="flex-auto w-1/2 text-end">1 รายการ</div>
      </h1>

    
      <div class="w-full flex flex-col justify-center items-center my-36  h-auto py-4 rounded-lg ">
        <button class="bg-black text-white w-[30%] rounded-xl h-[3vw] text-2xl">
            สั่งสินค้า(฿ 311.00)
        </button>
      </div>


    </div>
  </UserLayout>
</template>

<script setup>
import UserLayout from '@/layout/UserLayout.vue';

</script>

<style scoped>
.xBNaac {
    background-image: repeating-linear-gradient(45deg, #6fa6d6, #6fa6d6 33px, transparent 0, transparent 41px, #f18d9b 0, #f18d9b 74px, transparent 0, transparent 82px);

    height: 3px;
    
    
    
}

.body {
  font-family: 'Prompt', sans-serif;
}
</style>
