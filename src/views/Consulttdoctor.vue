<template>
  <div class="flex items-center flex-col justify-center py-6 space-y-5">
    <div class="bg-[#E1F5FE] p-4 rounded-lg shadow-md max-w-xl w-full flex items-center">
      <img
        src="https://www.daodao1.com/wp-content/uploads/2024/01/e2a944b996bbb67aa9cee2a342a7cc3-2048x2048.jpg"
        alt="Profile"
        class="w-32 h-32 rounded-full mr-5"
      />
      <div>
        <h2 class="text-lg font-semibold">ชื่อ :someone</h2>
        <div class="flex items-center gap-2 text-green-500 font-medium">
          <span>ยืนยันตัวตนแล้ว</span>
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p class="text-gray-700">อายุ 20 ปี</p>
        <p class="text-gray-700">เพศ หญิง</p>
        <p class="text-gray-700">โทรศัพท์: 066-666-6666</p>
      </div>
    </div>

    <div class="bg-[#E1F5FE] p-6 rounded-lg shadow-md w-full max-w-xl">
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-1">ระบุอาการเบื้องต้น</label>
        <input
          type="text"
          placeholder="ระบุอาการ เช่น คัน, ผดผื่น ฯลฯ"
          class="w-full p-2 border border-gray-300 rounded"
          v-model="symptoms"
        />
      </div>
      <button @click="save" class="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4 hover:bg-sky-400">บันทึก</button>

      <div class="mb-4">
        <p class="font-medium">โรคประจำตัว:</p>
        <label class="inline-flex items-center">
          <input
            type="radio"
            name="chronicDisease"
            class="form-radio"
            value="yes"
            v-model="hasChronicDisease"
          />
          <span class="ml-2">มี</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="radio"
            name="chronicDisease"
            class="form-radio"
            value="no"
            v-model="hasChronicDisease"
          />
          <span class="ml-2">ไม่มี</span>
        </label>

        <div v-show="hasChronicDisease === 'yes'" class="mt-4">
          <label class="block text-gray-700 font-medium mb-1">
            กรุณาระบุรายละเอียดเพิ่มเติม:
          </label>
          <input
            type="text"
            placeholder="กรอกข้อมูลเพิ่มเติม..."
            class="w-full p-2 border border-gray-300 rounded"
            v-model="chronicDiseaseDetails"
          />
        </div>
      </div>

      <div class="mb-4">
        <p class="font-medium">ยาหรืออาหารที่แพ้:</p>
        <label class="inline-flex items-center">
          <input
            type="radio"
            name="allergy"
            class="form-radio"
            value="yes"
            v-model="hasAllergy"
          />
          <span class="ml-2">มี</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="radio"
            name="allergy"
            class="form-radio"
            value="no"
            v-model="hasAllergy"
          />
          <span class="ml-2">ไม่มี</span>
        </label>

        <div v-show="hasAllergy === 'yes'" class="mt-4">
          <label class="block text-gray-700 font-medium mb-1">
            กรุณาระบุรายละเอียดเพิ่มเติม:
          </label>
          <input
            type="text"
            placeholder="กรอกข้อมูลเพิ่มเติม..."
            class="w-full p-2 border border-gray-300 rounded"
            v-model="allergyDetails"
          />
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-1">รูปที่แนบให้แพทย์:</label>
        <input type="file" class="w-full text-gray-700 bg-white border border-gray-300 rounded p-2" @change="handleFileUpload" />
      </div>

      <div class="mb-3">
        <label class="block text-gray-700 font-medium mb-1">มีอาการแล้วกี่วัน:</label>
        <input
          type="text"
          placeholder="จำนวน"
          class="w-16 p-2 border border-gray-300 rounded mr-2"
          v-model="duration"
        />
        <select class="p-2 border border-gray-300 rounded" v-model="durationUnit">
          <option value="days">วัน</option>
          <option value="weeks">สัปดาห์</option>
          <option value="months">เดือน</option>
        </select>
      </div>

      <button @click="save" class="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4 hover:bg-sky-400">บันทึก</button>
    </div>
  </div>
  <div class="flex justify-center">
    <button @click="save" class="w-44 py-2 bg-[#10DBAC] text-white rounded-lg hover:bg-green-400">ให้คำปรึกษา</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      symptoms: '',
      hasChronicDisease: 'no',
      chronicDiseaseDetails: '',
      hasAllergy: 'no',
      allergyDetails: '',
      duration: '',
      durationUnit: 'days',
      file: null,
    };
  },
  methods: {
    save() {
      console.log('Saved:', {
        symptoms: this.symptoms,
        hasChronicDisease: this.hasChronicDisease,
        chronicDiseaseDetails: this.chronicDiseaseDetails,
        hasAllergy: this.hasAllergy,
        allergyDetails: this.allergyDetails,
        duration: this.duration,
        durationUnit: this.durationUnit,
        file: this.file,
      });
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
  },
};
</script>

<style scoped>
</style>
