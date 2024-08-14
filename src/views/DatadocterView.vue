<script setup>
import { RouterLink } from 'vue-router';
import UserLayout from '@/layout/UserLayout.vue'
</script>
<template>
    <UserLayout>
      
        <div class="flex justify-center mt-[100px]">
            <div class="flex justify-center flex-col bg-[#E1F5FE] w-full max-w-[800px] h-auto m-[10px]  relative rounded-2xl p-6 shadow-lg">
            <div class=" mb-4 text-center ">
                <span class="font-bold text-xl">ดร.นพ. สาโรช สุวรรณสุทธิ</span>
            </div>
            
            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                <img src="/src/img/profile-user.png"
                    alt="Doctor Image"
                    class="w-full max-w-[15rem] h-auto object-cover object-center rounded-lg">
                
                <div class="flex flex-col flex-grow">
                <div class="flex items-center mb-2">
                    <span class="font-bold mr-2">รพ.ที่สังกัด :</span>
                    <span>โรงพยาบาลสมิติเวช สุขุมวิท</span>
                </div>
                <div class="flex items-center mb-2">
                    <span class="font-bold mr-2">คะแนนรีวิว :</span>
                    <span>4.95 (267 รีวิว)</span>
                </div>
                <div class="flex items-center mb-2">
                    <span class="font-bold mr-2">ประเภทการรักษา :</span>
                    <span>Laser, Ultherapy, ปรับรูปหน้า, ผม-หนังศีรษะ...</span>
                </div>
                <div class="flex flex-col mt-4">
                    <span class="font-bold text-lg">ความชำนาญ</span>
                    <ul class="list-disc list-inside">
                    <li>โรคเส้นผม และการผ่าตัดปลูกถ่ายเส้นผม</li>
                    <!-- Add more specialties here if needed -->
                    </ul>
                </div>
        
                <!-- คุณวุฒิทางการศึกษา Section Moved Here -->
                <div class="flex flex-col mt-6">
                    <span class="font-bold text-lg mb-2">คุณวุฒิทางการศึกษา</span>
                    <ul class="list-disc list-inside">
                    <li>American board of hair restoration surgery, 2017</li>
                    <li>วุฒิบัตรผู้เชี่ยวชาญสาขาตจวิทยา แพทยสภา ปี พ.ศ.2555</li>
                    <li>Doctor of Philosophy in Medical Science (Gene Therapy), Osaka University, 2007</li>
                    <!-- Add more qualifications here if needed -->
                    </ul>
                </div>
        
                <div class="flex flex-col mt-6">
                    <span class="font-bold text-lg mb-2">ค่าบริการ</span>
                    <ul class="list-disc list-inside">
                    <li>แชท: ฿400 (สุงสุด 15 นาทีต่อครั้ง)</li>
                    <li>วิดิโอคอล: ฿500 (สุงสุด 15 นาทีต่อครั้ง)</li>
                    
                    <!-- Add more qualifications here if needed -->
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="flex justify-center items-center w-full max-w-[800px]  mb-[18rem] mt-4 gap-4 mx-auto">
        <button class="bg-green-500 text-white flex items-center justify-center px-6 py-4 rounded-2xl text-xl w-1/2" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-6 h-6 mr-2" fill="currentColor ">
            <path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1 96 192c0 53 43 96 96 96s96-43 96-96l0-120.9-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1L352 192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112l0-70.7c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 70.7c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192L32 71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
        </svg>
        พบแพทย์ทันที
        </button>
        <button class="bg-white border border-green-500 text-green-500 flex items-center justify-center px-6 py-4 rounded-2xl text-xl w-1/2 " >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512 " fill="currentColor" class="w-6 h-6 mr-2">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/></svg>
        นัดแพทย์ล่วงหน้า
        </button>
        </div>        
    </UserLayout>

  </template>
  
  <style scoped>
    
    .flex {
      display: flex;
    }
    .flex-col {
      display: flex;
      flex-direction: column;
    }
    .flex-wrap {
      flex-wrap: wrap;
    }
    .flex-grow {
      flex-grow: 1;
    }
    .items-center {
      align-items: center;
    }
    .justify-center {
      justify-content: center;
    }
    .justify-start {
      justify-content: flex-start;
    }
    .mr-2 {
      margin-right: 0.5rem;
    }
    .mb-2 {
      margin-bottom: 0.5rem;
    }
    .mb-4 {
      margin-bottom: 1rem;
    }
    .mt-4 {
      margin-top: 1rem;
    }
    .mt-6 {
      margin-top: 1.5rem;
    }
    .list-disc {
      list-style-type: disc;
    }
    .list-inside {
      list-style-position: inside;
    }
    .bg-white {
      background-color: #fff;
    }
    .p-6 {
      padding: 1.5rem;
    }
    .rounded-lg {
      border-radius: 0.5rem;
    }
    .rounded-2xl {
      border-radius: 1rem;
    }
    .shadow-lg {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
    /* Responsive Design */
    @media (max-width: 768px) {
      .flex-wrap {
        flex-direction: column;
      }
      .justify-center {
        justify-content: center;
      }
    }
  </style>
  