<template>
  <div class="min-h-screen bg-[#F0F8FF] flex flex-col items-center">
    
    <section class="relative p-6 bg-[#E1F5FE] shadow-md rounded-lg w-10/12 border border-blue-300 mt-16">
      
      <div class="flex items-start relative">
        <div class="flex-shrink-0  ">
          <img src="https://static.vecteezy.com/system/resources/previews/038/512/906/original/illustration-women-portrait-free-vector.jpg" alt="Profile" class="w-48 h-48 rounded-full border-4 border-white shadow-lg">
        </div>
        
        <div class="flex-grow  mt-20  ml-6"> 
          <h2 class="text-xl font-bold">แพทย์หญิง อุรานีย์ อินชนะ</h2>
          <div class="flex items-center space-x-2 mt-2">
            <span class="text-gray-500">Status:</span>
            <span class="text-green-500 font-medium">Online</span>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center mt-6 border-2 border-blue-400 p-4">
        <h3 class="text-lg font-semibold">Queue Room (1)</h3>
        <button class="text-blue-500 hover:underline flex items-center ml-4">
          ดูทั้งหมด
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <div class="space-y-4 mt-8">
        <div class="flex items-start justify-between bg-white p-4 rounded-lg shadow-md border border-black">
          <div class="flex items-start">
            <img src="https://cdn.pixabay.com/photo/2022/10/19/01/02/woman-7531315_1280.png" alt="Patient Avatar" class="w-16 h-16 border rounded-full">
            <div class="ml-4">
              <p class="font-semibold">นางสาว อนุรักษา คำมุกดา</p>
              <p class="text-sm text-gray-500">อายุ: 32 ปี</p>
              <p class="text-sm text-gray-500">น้ำหนัก: 55 กิโลกรัม</p>
              <p class="text-sm text-gray-500">ส่วนสูง: 165 เซนติเมตร</p>
              <p class="text-sm text-gray-500 mt-2">อาการเบื้องต้น: เมื่อการอาการเจ็บและคัดจมูกในช่วงเช้า</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-red-500 font-semibold">00:20:00</span>
            <i class="fas fa-hourglass-half text-gray-500"></i>
            <span class="text-gray-500">Waiting</span>
          </div>
        </div>

        <div class="flex items-start justify-between bg-white p-4 rounded-lg shadow-md border border-black">
          <div class="flex items-start">
            <img src="https://i.pinimg.com/564x/5f/86/c7/5f86c7bd996953e34601ca594d754a2b.jpg" alt="Patient Avatar" class="w-16 h-16 border rounded-full">
            <div class="ml-4">
              <p class="font-semibold">นาย กษมน์ทร์ เรืองรุ่ง</p>
              <p class="text-sm text-gray-500">อายุ: 45 ปี</p>
              <p class="text-sm text-gray-500">น้ำหนัก: 78 กิโลกรัม</p>
              <p class="text-sm text-gray-500">ส่วนสูง: 175 เซนติเมตร</p>
              <p class="text-sm text-gray-500 mt-2">อาการเบื้องต้น: ปวดหลังเรื้อรัง อาการเบาหวานชนิดที่ 2 ความดันโลหิตสูง</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-orange-500 font-semibold">00:50:00</span>
            <i class="fas fa-hourglass-half text-gray-500"></i>
            <span class="text-gray-500">Waiting</span>
          </div>
        </div>

        <div class="flex items-start justify-between bg-white p-4 rounded-lg shadow-md border border-black">
          <div class="flex items-start">
            <img src="https://i.pinimg.com/564x/14/ea/83/14ea839c03c3260eb4191d1d745a9827.jpg" alt="Patient Avatar" class="w-16 h-16 border rounded-full">
            <div class="ml-4">
              <p class="font-semibold">นาย อารักษ์ คำมุกดา</p>
              <p class="text-sm text-gray-500">อายุ: 32 ปี</p>
              <p class="text-sm text-gray-500">น้ำหนัก: 85 กิโลกรัม</p>
              <p class="text-sm text-gray-500">ส่วนสูง: 180 เซนติเมตร</p>
              <p class="text-sm text-gray-500 mt-2">อาการเบื้องต้น: ไข้หวัด ปวดศีรษะเรื้อรัง ภูมิแพ้</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-green-500 font-semibold">03:00:00</span>
            <i class="fas fa-hourglass-half text-gray-500"></i>
            <span class="text-gray-500">Waiting</span>
          </div>
        </div>
      </div>
    </section>


    
    

    <section class="mt-4 p-4 bg-[#E1F5FE] shadow-md rounded-lg w-10/12  border border-black">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold">Open for queues</h3>
        <label class="flex items-center">
          <input type="checkbox" class="form-checkbox">
          <span class="ml-2">Toggle</span>
        </label>
      </div>

      <div class="border-t border-black my-2"></div>

      <h3 class="text-lg font-semibold">Today's upcoming</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        
        <div class="bg-white p-4 rounded-lg shadow-md border border-black ">
          <img src="https://i.pinimg.com/564x/f3/a1/8b/f3a18b98068beaa9fc9e178a8cf20800.jpg" alt="Upcoming Avatar" class="w-16 h-16 border rounded-full">
          <div class="ml-4">
            <p class="font-semibold">นางสาว กัลยารัต ยิ้มยอ</p>
            <p class="text-sm text-gray-500">อายุ: 27 ปี</p>
            <p class="text-sm text-gray-500">น้ำหนัก: 60 กิโลกรัม</p>
            <p class="text-sm text-gray-500">ส่วนสูง: 158 เซนติเมตร</p>
            <hr class="my-2">
            <p class="text-sm text-gray-700">อาการเบื้องต้น: มีปัญหาเกี่ยวกับกระเพาะอาหาร เช่น โรคกระเพาะอาหารอักเสบเป็นบางครั้ง โดยเฉพาะเมื่อรับประทานอาหารที่มีเผ็ดจัดหรือมีน้ำแกงมากเกินไป</p>
          </div>
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md border border-black ">
          <img src="https://i.pinimg.com/564x/a6/ae/76/a6ae761996c705601f09e8f7ccbadfe0.jpg" alt="Upcoming Avatar" class="w-16 h-16 border rounded-full">
          <div class="ml-4">
            <p class="font-semibold">นางสาว วศิกา เรืองรุ่ง</p>
            <p class="text-sm text-gray-500">อายุ: 29 ปี</p>
            <p class="text-sm text-gray-500">น้ำหนัก: 50 กิโลกรัม</p>
            <p class="text-sm text-gray-500">ส่วนสูง: 170 เซนติเมตร</p>
            <hr class="my-2">
            <p class="text-sm text-gray-700">อาการเบื้องต้น: มีปัญหาเกี่ยวกับการนอนหลับ ไม่ค่อยนอนหลับสนิท ทำให้ตื่นขึ้นมาแล้วยังรู้สึกง่วงเพลียในบางวัน และมักจะมีอาการปวดหัวจากการพักผ่อนไม่เพียงพอ</p>
          </div>
        </div>
        
      </div>
    </section>
  </div>
  
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
</style>
