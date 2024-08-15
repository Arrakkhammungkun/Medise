<script setup>
import { RouterLink } from 'vue-router';
import UserLayout from '@/layout/UserLayout.vue'
</script>

<template>

    <div >
      
    
        <div class="grow flex justify-center mt-[100px]" >
              <!-- Left column (menu) -->
              <div class="left grid grid-cols-1 divide-y divide-black " style="background-color: antiquewhite;" >
                
                <ul class="menu-list grid grid-cols-1 divide-y divide-black">
                  <li v-for="(item, index) in filteredMenu" :key="index">
                    <a href="#">{{ item }}</a>
                  </li>
                </ul>
              </div>
        
              <!-- Right column (page content) -->
            <div>
                <div class="bg-[#E1F5FE] w-full max-w-[800px] h-auto mb-10 inline-block relative rounded-2xl p-6 shadow-lg">
                    <div class="flex justify-between items-start mb-4 text-left text-xl">
                        <div>
                            <span class="font-bold mr-2">ชื่อ :</span>
                            <span class="font-bold">ทัช</span>
                        </div>
                        <div class="flex items-center gap-1 px-2 py-2 bg-[#10DBAC]/25 text-black/25 rounded-full shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#10DBAC" class="w-6 h-6 mr-3">
                                <!-- SVG Path -->
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                            </svg>
                            <span class="mr-2 text-base">ยืนยันตัวตนแล้ว</span>
                        </div>
                    </div>

                    <div class="flex flex-row gap-4">
                        <img src="/src/img/User1.png"
                            alt="User Image"
                            class="w-full max-w-[15rem] h-auto object-cover object-center rounded-lg">

                        <div class="flex flex-col justify-center whitespace-nowrap">
                            <div class="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" class="w-6 h-6 mr-3">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                                    <path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z"/></svg>
                                <span class="font-bold mr-2">อายุ </span>
                                <span>20 ปี</span>
                            </div>
                            <div class="flex items-center mb-2 whitespace-nowrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-6 h-6 mr-3">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                                    <path d="M337.8 14.8C341.5 5.8 350.3 0 360 0L472 0c13.3 0 24 10.7 24 24l0 112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-24.7 24.7C407 163.3 416 192.6 416 224c0 80.2-59 146.6-136 158.2l0 25.8 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-25.8C155 370.6 96 304.2 96 224c0-88.4 71.6-160 160-160c39.6 0 75.9 14.4 103.8 38.2L382.1 80 343 41c-6.9-6.9-8.9-17.2-5.2-26.2zM448 48s0 0 0 0s0 0 0 0s0 0 0 0zM352 224a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z"/></svg>
                                <span class="font-bold mr-2">เพศ </span>
                                <span>หญิง</span>
                            </div>
                            <div class="flex items-center mb-2 whitespace-nowrap">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-5 h-5 mr-3">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                                <span class="font-bold mr-2">โทรศัพท์ </span>
                                <span >066-666-6666</span>
                            </div>
                        </div>
                    </div>
                </div>


        
        <!-- Move this section below -->
        <div class="max-w-lg mx-auto p-6 bg-blue-100 rounded-lg shadow-md">
            <!-- Header -->
            <div class="mb-6 text-center">
                <label for="symptoms" class="text-lg font-semibold">ระบุอาการเบื้องต้น</label>
                    <input type="text" id="symptoms" v-model="symptoms" placeholder="ระบุอาการ เช่น คัน, ผดผื่น ฯลฯ"
                    class="block w-full mt-2 p-2 border border-gray-300 rounded-lg" />
                <button @click="saveSymptoms" class="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg">บันทึก</button>
            </div>

            <!-- Chronic Disease Section -->
            <div class="mb-4">
                <label class="block font-medium">โรคประจำตัว :</label>
                <div class="flex items-center space-x-4 mt-2">
                    <label class="flex items-center">
                        <input type="checkbox" v-model="chronicDisease" value="yes" class="mr-2" /> มี
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" v-model="chronicDisease" value="none" class="mr-2" /> ไม่มี
                    </label>
                </div>
                <div v-if="chronicDisease.includes('yes')" class="mt-2">
                    <input type="text" v-model="chronicDiseaseDetail" placeholder="ระบุโรคประจำตัว"
                        class="block w-full p-2 border border-gray-300 rounded-lg" />
                    <button @click="saveChronicDisease" class="mt-2 w-full bg-blue-500 text-white p-2 rounded-lg">บันทึก</button>
                </div>
            </div>

            <!-- Allergies Section -->
            <div class="mb-4">
                <label class="block font-medium">ยาหรืออาหารที่แพ้ :</label>
                <div class="flex items-center space-x-4 mt-2">
                    <label class="flex items-center">
                        <input type="checkbox" v-model="allergy" value="yes" class="mr-2" /> มี
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" v-model="allergy" value="none" class="mr-2" /> ไม่มี
                    </label>
                </div>
                <div v-if="allergy.includes('yes')" class="mt-2">
                    <input type="text" v-model="allergyDetail" placeholder="ระบุยาหรืออาหารที่แพ้"
                        class="block w-full p-2 border border-gray-300 rounded-lg" />
                    <button @click="saveAllergy" class="mt-2 w-full bg-blue-500 text-white p-2 rounded-lg">บันทึก</button>
                </div>
            </div>

            <!-- Upload Image Section -->
            <div class="mb-4">
                <label class="block font-medium">รูปที่แนปให้แพทย์  :</label>
                <input type="file" @change="selectPhoto" accept="image/*"
                    class="block w-full text-gray-500 p-2 border border-gray-300 rounded-lg" />
                <div v-if="selectedPhoto" class="mt-4">
                    <img :src="selectedPhoto" alt="Selected Image" class="w-full max-w-[800px] h-auto rounded-lg" />
                </div>
            </div>

            <!-- Duration Section -->
            <div class="mb-4">
                <label class="block font-medium">มีอาการมาแล้วกี่วัน :</label>
                <div class="flex items-center space-x-2 mt-2">
                    <input type="number" v-model="duration" min="1"
                        class="block w-20 p-2 border border-gray-300 rounded-lg text-center" />
                    <select v-model="durationUnit" class="block p-2 border border-gray-300 rounded-lg">
                        <option value="วัน">วัน</option>
                        <option value="สัปดาห์">สัปดาห์</option>
                        <option value="เดือน">เดือน</option>
                    </select>
                </div>
                <button @click="saveDuration" class="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg">บันทึก</button>
            </div>

            <!-- Summary Section -->
            <div v-if="showSummary" class="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
                <h2 class="text-lg font-semibold text-center mb-4">สรุปข้อมูล</h2>
                <p><strong>อาการเบื้องต้น:</strong> {{ symptoms }}</p>
                <p><strong>โรคประจำตัว:</strong> {{ chronicDiseaseDetail }}</p>
                <p><strong>ยาหรืออาหารที่แพ้:</strong> {{ allergyDetail }}</p>
                <p><strong>ระยะเวลาที่มีอาการ:</strong> {{ duration }} {{ durationUnit }}</p>
                <div v-if="selectedPhoto" class="mt-2">
                    <p><strong>รูปที่แนปให้แพทย์:</strong></p>
                    <img :src="selectedPhoto" alt="Selected Image" class="w-full h-auto rounded-lg" />
                </div>
            </div>

            

        </div>
        <div class="flex justify-center items-center w-full mt-4 gap-4 mb-5">

            <button class="bg-green-500 border border-green-500 text-white flex items-center justify-center px-6 py-4 rounded-2xl text-xl w-1/2 " @click="confirmAppointment" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" class="w-6 h-6 mr-3">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            ยืนยันการบันทึก
            </button>
            
      </div>



                
          </div>
    
      </div>
  
      </div>
    </template>

<script>
export default {
  data() {
    return {
      symptoms: '',
      chronicDisease: [],
      chronicDiseaseDetail: '',
      allergy: [],
      allergyDetail: '',
      duration: 1,
      durationUnit: 'days',
      selectedPhoto: null,
      showSummary: false,
    };
  },
  watch: {
    chronicDisease(val) {
      if (val.includes('none')) {
        this.chronicDisease = ['none'];
        this.chronicDiseaseDetail = '';
      } else if (val.includes('yes')) {
        this.chronicDisease = ['yes'];
      }
    },
    allergy(val) {
      if (val.includes('none')) {
        this.allergy = ['none'];
        this.allergyDetail = '';
      } else if (val.includes('yes')) {
        this.allergy = ['yes'];
      }
    },
  },
  methods: {
    saveSymptoms() {
      // Logic to save symptoms
      this.showSummary = true;
    },
    saveChronicDisease() {
      // Logic to save chronic disease details
      this.showSummary = true;
    },
    saveAllergy() {
      // Logic to save allergy details
      this.showSummary = true;
    },
    selectPhoto(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedPhoto = URL.createObjectURL(file);
      }
      this.showSummary = true;
    },
    saveDuration() {
      // Logic to save duration
      this.showSummary = true;
    },
  },
};
</script>