<template>
  <UserLayout>
    <!-- Header Section -->
    <h1 class="text-3xl font-bold mx-32 mb-4 mt-32 border-2 flex p-2 border-[#4285F4]">
      <div class="flex-auto w-1/2">ตะกร้าสินค้า</div>
      <div class="flex-auto w-1/2 text-end">รายการ</div>
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
        <input type="checkbox" class="mr-4" />
        <img src="https://via.placeholder.com/50" alt="Product Image" class="w-12 h-12 mr-4" />
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
      <!-- End of Repeat -->

      <!-- Order Options Section -->
      <h1 class="text-3xl font-bold mb-4 mt-4 border-2 flex p-2 border-[#4285F4] w-2/5">ตัวเลือกการสั่งซื้อ</h1>

      <div class="flex justify-between">
        <!-- Shipping Address -->
        <div class="border-2 p-4 w-2/5">
          <div class="font-bold mb-2">ที่อยู่จัดส่ง</div>
          <div>นางสาว อาริษา คำบังคั่ง</div>
          <div>091 234 4321</div>
          <div>บ้านเลขที่ 1 บ้านธัญญา หมู่14</div>
          <div>ถอยใต้ อำเภอศรีธาตุ</div>
          <div>จังหวัด อุดรธานี รหัสไปรษณีย์ 12345</div>
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
      <div class="border-2 p-4 w-2/5 mt-4">
        <div class="font-bold mb-2">สรุปรายละเอียดรายการ</div>
        <div class="flex justify-between mb-2">
          <span>จำนวนสินค้า (4)</span>
          <span>฿ 286.00</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>ค่าจัดส่ง (1)</span>
          <span>฿ 25.00</span>
        </div>
        <div class="flex justify-between font-bold">
          <span>ราคาที่ต้องชำระ</span>
          <span>฿ 311.00</span>
        </div>
      </div>

      <!-- Checkout Button -->
      <div class="w-full flex flex-col justify-center items-center mt-4 bg-blue-500 h-auto py-4 rounded-lg">
        <div class="w-full flex justify-between px-8">
          <span class="text-white text-2xl font-bold">ราคาที่ต้องชำระ:</span>
          <span class="text-white text-2xl font-bold">฿ 311.00</span>
        </div>
        <div class="w-3/4 mt-4">
          <button class="bg-black text-white w-full rounded-xl h-[3vw] text-2xl">
            ชำระเงิน(5)
          </button>
        </div>
      </div>


    </div>
  </UserLayout>
</template>

<script setup>
import UserLayout from '@/layout/UserLayout.vue';

</script>

<style scoped>
/* Add your styles here */
</style>
