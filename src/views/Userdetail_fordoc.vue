<template>
  <UserLayout>
    <div class=" mx-32 p-4 mt-32 body">
      <!-- Profile Section -->
      <div class="flex items-center space-x-4">
        <img
          class="w-60 h-60 rounded-full"
          src="/src/img/User1.png"
          alt="Profile Image"
        />
        <div>
          <h1 class="text-2xl font-bold   border-2 flex p-1 border-[#4285F4]">รายละเอียด</h1>
          <h2 class="ml-4 text-base " ><br>
            <div class="font-bold">นางสาว อนุรักษา คำมุงคุล</div>
            <div class="ml-4">
              <p>อายุ: 32 ปี</p>
              <p>น้ำหนัก: 55 กิโลกรัม</p>
              <p>ส่วนสูง: 165 เซนติเมตร</p>
            </div>
          </h2>
          
          

          <h2 class="ml-4 text-base ">
            <div class="font-bold">โรคประจำตัว</div>
            <div class="ml-4">
              <p>หอบหืด (Asthma)</p>
            </div>
          </h2>
          <h2 class="ml-4 text-base ">
            <div class="font-bold">แพ้ยา</div>
            <div class="ml-4">
              <p>แพ้ยาปฏิชีวนะกลุ่มเพนิซิลิน (Penicillin)</p>
            </div>
            
          </h2>
        </div>
      </div>

      <!-- Symptoms Section -->
      <div class="mt-6 border-y-2 py-4">
        <h3 class="text-lg font-semibold">อาการเบื้องต้น</h3>
        <textarea class="w-full h-24 my-2 p-2 border rounded-lg text-left" readonly
         >เป็นโรคภูมิแพ้ ผื่นคันและจมูกแห้ง มักจะมีอาการมากและคัดจมูกในช่วงเช้า หรือเมื่ออากาศเปลี่ยนแปลง
        </textarea>
      </div>

      <!-- Image Section -->
      <div class="mt-6">
        <h3 class="text-lg font-semibold">รูปภาพที่แนบ</h3>
        <div class="grid grid-cols-4 gap-4 mt-4">
          <img
            class="border rounded-lg"
            src="https://www.saiwink.com/wp-content/uploads/2022/11/%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B9%81%E0%B8%9E%E0%B9%89%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A1%E0%B8%B5%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B8%B0%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3.jpg"
            alt="Sample Image 1"
          />
          <img
            class="border rounded-lg"
            src="https://www.saiwink.com/wp-content/uploads/2022/11/%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B9%81%E0%B8%9E%E0%B9%89%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A1%E0%B8%B5%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B8%B0%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3.jpg"
            alt="Sample Image 2"
          />
          <img
            class="border rounded-lg"
            src="https://www.saiwink.com/wp-content/uploads/2022/11/%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B9%81%E0%B8%9E%E0%B9%89%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A1%E0%B8%B5%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B8%B0%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3.jpg"
            alt="Sample Image 3"
          />
          <img
            class="border rounded-lg"
            src="https://www.saiwink.com/wp-content/uploads/2022/11/%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B9%81%E0%B8%9E%E0%B9%89%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A1%E0%B8%B5%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B8%B0%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%A3.jpg"
            alt="Sample Image 4"
          />
        </div>
      </div>

      <!-- Consultation Button -->
      <div class="mt-6 text-center">
        <button
          class="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 w-1/3"
        >
          ให้คำปรึกษา
        </button>
      </div>
    </div>
    
  </UserLayout>
  
</template>

<script setup>
import UserLayout from '@/layout/UserLayout.vue';

</script>

<style scoped>
.body {
  font-family: 'Prompt', sans-serif;
}

</style>
