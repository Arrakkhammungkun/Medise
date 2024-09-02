<template>
    <UserLayout class="body">
      <!-- Header Section -->
      <h1 class="text-3xl font-bold mx-32 mb-4 mt-32 border-2 flex p-2 border-[#4285F4]">
        <div class="flex-auto w-1/2">สรุปคำสั่งซื้อ</div>
        <div class="flex-auto w-1/2 text-end">1 รายการ</div>
      </h1>
  
      <!-- Cart Items Section -->
      <div class="mx-32">
        <div class="flex border-y-2 p-2">
          <div class="flex-auto w-1/2 font-bold">รายละเอียดสินค้า</div>
          <div class="flex-auto w-16 text-center font-bold">จำนวน</div>
          <div class="flex-auto w-16 text-center font-bold">ราคา</div>
          <div class="flex-auto w-16 text-center font-bold">ทั้งหมด</div>
        </div>
  
        <!-- Repeat this block for each item -->
        <div class="flex items-center border-b-2 p-2">
          <div class="w-3/5 flex">
            <img src="https://via.placeholder.com/50" alt="Product Image" class="w-12 h-12 mr-4 " />
            <div class="flex-auto ">
              <div>Name</div>
              <div class="text-sm text-gray-500">Details</div>
            
            </div>
          </div>
  
          <div class="flex-auto w-16 text-center">1</div>
          <div class="flex-auto w-16 text-center">฿ 130.00</div>
          <div class="flex-auto w-16 text-center">฿ 130.00</div>
        </div>

        <div class="flex items-center border-b-2 p-2">
          <div class="w-3/5 flex">
            <img src="https://via.placeholder.com/50" alt="Product Image" class="w-12 h-12 mr-4 " />
            <div class="flex-auto ">
              <div>Name</div>
              <div class="text-sm text-gray-500">Details</div>
            
            </div>
          </div>
  
          <div class="flex-auto w-16 text-center">1</div>
          <div class="flex-auto w-16 text-center">฿ 130.00</div>
          <div class="flex-auto w-16 text-center">฿ 130.00</div>
        </div>

        <div class="flex items-center border-b-2 p-2">
          <div class="w-3/5 flex">
            <img src="https://via.placeholder.com/50" alt="Product Image" class="w-12 h-12 mr-4 " />
            <div class="flex-auto ">
              <div>Name</div>
              <div class="text-sm text-gray-500">Details</div>
            
            </div>
          </div>
  
          <div class="flex-auto w-16 text-center">1</div>
          <div class="flex-auto w-16 text-center">฿ 130.00</div>
          <div class="flex-auto w-16 text-center">฿ 130.00</div>
        </div>
        <!-- End of Repeat -->
  
        <!-- Order Options Section -->
        <h1 class="text-3xl font-bold mb-4 mt-4 border-2 flex p-2 border-[#4285F4] w-2/5">ตัวเลือกการสั่งซื้อ</h1>
  
        <div class="flex justify-between">
          <!-- Shipping Address -->
          <div class="border-2  w-2/5 ">
            <div class="xBNaac"></div>
            <div class="p-4">
              <div class="font-bold mb-2">ที่อยู่จัดส่ง</div>
              <div>นางสาว อาริษา คำบังคั่ง</div>
              <div>091 234 4321</div>
              <div>บ้านเลขที่ 1 บ้านธัญญา หมู่14</div>
              <div>ถอยใต้ อำเภอศรีธาตุ</div>
              <div>จังหวัด อุดรธานี รหัสไปรษณีย์ 12345</div>
              <div class="text-right">
                <button class="text-sm text-blue-500 ">เปลี่ยน</button>
              </div>
              
            </div>
            
          </div>
  
          <!-- Delivery Method and Payment -->
          <div class="w-2/5">
            <div class="border-2 p-4 mb-4">
              <label class="font-bold mb-2 block">ตัวเลือกจัดส่ง</label>
              <select class="border w-full p-2">
                <option>จัดส่งแบบธรรมดา</option>
                <option>จัดส่งแบบด่วน</option>
              </select>
            </div>
            <div class="border-2 p-4">
              <label class="font-bold mb-2 block">วิธีการชำระเงิน</label>
              <select class="border w-full p-2">
                <option>เก็บเงินปลายทาง</option>
                <option>โอนผ่านธนาคาร</option>
              </select>
            </div>
          </div>
        </div>
  
        <!-- Summary Section -->
        
  
        <!-- Checkout Button -->
        <div class="w-full flex flex-col justify-center items-center my-36  h-auto py-4 rounded-lg">
          <button class="bg-black text-white w-[30%] rounded-xl h-[3vw] text-2xl">
              ชำระเงิน(฿ 311.00)
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
  