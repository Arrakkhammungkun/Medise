<template>
  <UserLayout class="body bg-[#E1F5FE] min-h-screen">
    <div class="pt-32 bg-[#E1F5FE] mb-10">
      <h1 class="text-3xl font-bold mx-32 mb-4 border-2 flex p-2 border-[#4285F4] w-[70%] bg-white">
        ข้อมูลส่วนตัว
      </h1>
      
      <div class="flex mx-44 mb-4 h-[32vw]">
        
        <div class="flex w-[25%] ">
          <div class="row  mb-5">
            <div class="flex mb-5">
              <div  >
                <!-- Image preview -->
                <img :src="imageSrc || 'src/img/user.png'" alt="" class="w-[5vw] h-[5vw] object-cover rounded-full flex mr-4 bg-white">
              </div>
              <div>
                <div :class="{'text-black': isEditing, 'text-[#4285F4]': !isEditing}" class="link link-hover font-bold text-[#4285F4]" @click="cancelEditing">อนุรักษา คำมุงคุล</div>
                <div class="link link-hover font-normal text-base text-[#7F7F7F]" @click="startEditing">แก้ไขข้อมูลส่วนตัว</div>
              </div>
              <!-- Hidden file input -->
              <input type="file" ref="fileInput" @change="onImageChange" accept="image/*" class="hidden">
            </div>

            <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[2vw] h-[2vw] object-cover flex mx-4">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
              </svg>
              <div>
                <div class="link link-hover font-bold text-black">บัญชีของฉัน</div>
                <div class="ml-2">
                  <div :class="{'text-[#7F7F7F]': !isEditing, 'text-[#4285F4]': isEditing}" class="link link-hover font-normal text-base " @click="startEditing">ข้อมูลส่วนตัว</div>
                  <div class="link link-hover font-normal text-base text-[#7F7F7F]">บัญชีธนาคาร&บัตร</div>
                  <div class="link link-hover font-normal text-base text-[#7F7F7F]">การตั้งค่าความเป็นส่วนตัว</div>
                  <div class="link link-hover font-normal text-base text-[#7F7F7F]">เปลี่ยนรหัสผ่าน</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Information Display -->
        <div v-if="!isEditing" class="flex w-[75%]">
          <div class="w-[40%] h-full bg-white p-8 rounded shadow-md flex flex-col items-center justify-center">
            <div class=" mb-4">
              <img :src="imageSrc || 'src/img/user.png'" alt="" class="w-[13vw] h-[13vw] object-cover rounded-full bg-white">
            </div>
            <div class="text-center font-bold">
              <a>อนุรักษา</a>
              <a> คำมุงคุล</a>
            </div>
          </div>
          
          <div class="ml-2 w-[60%] bg-white p-20 rounded shadow-md">
            <div class="font-bold text-black">ชื่อจริง
              <p class="font-normal text-[#7F7F7F] ml-4 my-2">อนุรักษา</p>
            </div>
            <div class="font-bold text-black">นามสกุล
              <p class="font-normal text-[#7F7F7F] ml-4 my-2">คำมุงคุล</p>
            </div>
            <div class="font-bold text-black">อายุ
              <p class="font-normal text-[#7F7F7F] ml-4 my-2">35 ปี</p>
            </div>
            <div class="font-bold text-black">เพศ
              <p class="font-normal text-[#7F7F7F] ml-4 my-2">หญิง</p>
            </div>
            <div class="font-bold text-black">อีเมล์
              <p class="font-normal text-[#7F7F7F] ml-4 my-2">Anuraksa65412@gmail.com</p>
            </div>
          </div>
          
        </div>
        

        <!-- Profile Edit Mode -->
        <div v-if="isEditing" class="flex w-[75%]">
          <div class="w-[40%] h-full bg-white p-8 rounded shadow-md flex flex-col items-center justify-center">
            <div  class=" mb-4">
              <img :src="imageSrc || 'src/img/user.png'" alt="" class="w-[13vw] h-[13vw] object-cover rounded-full bg-white">
            </div>
            <div class="text-center font-bold">
              <button @click="triggerFileInput" class="text-black border-2 p-2">เลือกรูป</button>
            </div>
          </div>

          <div class="ml-2 w-[60%] bg-white p-20 rounded shadow-md">
            <!-- Add input fields for editing -->
            <div class=" text-black">ชื่อจริง
              <input type="text" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full">
            </div>
            <div class=" text-black">นามสกุล
              <input type="text" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full">
            </div>
            <div class=" text-black">อายุ
              <input type="number" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full">
            </div>
            <div class=" text-black">เพศ
              <input type="text" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full">
            </div>
            <div class=" text-black">อีเมล์
              <input type="email" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full">
            </div>

            <div class="flex justify-end">
              <button @click="isEditing = false" class="flex text-white text-xl font-bold  bg-[#4285F4] rounded-lg p-2 w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[1.1vw] h-[1.1vw] mr-2">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                <path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
                บันทึก
            </button>
            </div>
            
          </div>

        </div>
      </div>

      <div v-if="!isEditing" class="flex mx-44 justify-end ">
        <div class=" w-[75%] h-[32vw]  bg-white p-8 rounded shadow-md ">
          <h2 class="text-xl font-bold mb-4 border-b-2 pb-2 border-[#4285F4]">ที่อยู่ของฉัน</h2>
          <h2 class="text-xl font-bold pb-2">ที่อยู่</h2>
          <div class="p-2 border-custom border-2 w-fit">
            <div>นางสาว อาริษา คำบังคั่ง</div>
            <div>091 234 4321</div>
            <div>บ้านเลขที่ 1 บ้านธัญญา หมู่14</div>
            <div>ถอยใต้ อำเภอศรีธาตุ</div>
            <div>จังหวัด อุดรธานี รหัสไปรษณีย์ 12345</div>

            
          </div>
          
        </div>
        
      </div>

      <div v-if="isEditing" class="flex mx-44 justify-end">
        <!-- Edit address form -->
        <div class=" w-[75%] h-[32vw]  bg-white p-8 rounded shadow-md ">
          <h2 class="flex text-xl font-bold mb-4 border-b-2 pb-2 border-[#4285F4] justify-between">
            <div class="font-bold p-2">ที่อยู่ของฉัน</div>
            <div>
              <button @click="isModalOpen = true" class="flex text-white text-xl font-bold  bg-[#4285F4] rounded-lg p-2 w-auto ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[1.1vw] h-[1.1vw] mr-2"> 
                  <path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
                เพิ่มที่อยู่
              </button>
            </div>
          </h2>
          <h2 class="text-xl font-bold pb-2">ที่อยู่</h2>
          <div class="flex  justify-between">
            <div class="p-2 border-custom border-2 w-fit">
            <div>นางสาว อาริษา คำบังคั่ง</div>
            <div>091 234 4321</div>
            <div>บ้านเลขที่ 1 บ้านธัญญา หมู่14</div>
            <div>ถอยใต้ อำเภอศรีธาตุ</div>
            <div>จังหวัด อุดรธานี รหัสไปรษณีย์ 12345</div>
          </div>

          </div>
          
        </div>
      </div>
      
    </div>
    <div>
      <div v-if="isModalOpen" class="Detail-modal" >
        <div class="modal-bgm " ></div>
        <div class="modal-page ">
          <h2 class="text-3xl font-bold pb-2 mb-5 ml-4">ที่อยู่ใหม่</h2>
          <div>
            <!-- Add input fields for new address -->
            <div class="font-semibold text-black ml-4">ชื่อจริง
              <input type="text" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full">
            </div>
            <div class="font-semibold text-black ml-4">นามสกุล
              <input type="text" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full">
            </div>
            <div class="font-semibold text-black ml-4">จังหวัด
              <input type="text" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full">
            </div>
            <div class="font-semibold text-black ml-4">อำเภอ
              <input type="text" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full">
            </div>
            <div class="font-semibold text-black ml-4">ตำบล
              <input type="text" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full">
            </div>
            <div class="font-semibold text-black ml-4">บ้านเลขที่ ซอย,หมู่,ถนน แขวง/ตำบล
              <input type="text" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full">
            </div>
            <div class="font-semibold text-black ml-4">รหัสไปรษณีย์
              <input type="number" pattern="\d{5}" title="กรุณาใส่รหัสไปรษณีย์ 5 หลัก" class="block font-normal text-[#7F7F7F] my-2 border-2 w-full" required>
            </div>

            <div class="flex justify-end mt-10">
              <button @click="closeModal" class="btn-close flex text-black text-xl font-bold hover:bg-[#C4C4C4] rounded-lg p-2 w-auto mr-4">
                ยกเลิก
              </button>
              <button @click="closeModal" class="flex text-white text-xl font-bold bg-[#4285F4] hover:bg-[#337cf1] rounded-lg p-2 w-auto">
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </UserLayout>
</template>

<script>
import UserLayout from '@/layout/UserLayout.vue';

export default {
  components: {
    UserLayout,
  },
  data() {
    return {
      isEditing: false, // For toggling between edit mode and view mode
      isModalOpen: false,
      imageSrc: null, // For storing the profile image
      firstName: '', // For storing the first name
      lastName: '', // For storing the last name
      age: '', // For storing the age
      gender: '', // For storing the gender
      email: '', // For storing the email
    };
  },
  methods: {
  startEditing() {
    this.isEditing = true;
  },
  cancelEditing() {
    this.isEditing = false;
  },
  triggerFileInput() {
    this.$refs.fileInput.click();
  },
  onImageChange(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.imageSrc = URL.createObjectURL(file);
    }
  },
  saveChanges() {
    this.isEditing = false;
  },
  closeModal() {
    this.isModalOpen = false; // ปิด modal
  },
},

  computed: {
  isFormValid() {
    // Check if all fields have valid values
    return this.firstName.trim() !== '' &&
           this.lastName.trim() !== '' &&
           this.age.trim() !== '' &&
           this.gender.trim() !== '' &&
           this.email.trim() !== '';
  },
},
};
</script>


<style scoped>
.border-custom {
    border-width: 2px;
    border-image: repeating-linear-gradient(45deg, #6fa6d6, #6fa6d6 33px, transparent 0, transparent 41px, #f18d9b 0, #f18d9b 74px, transparent 0, transparent 82px) 1;
}

.Detail-modal{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-page{
  min-width: 35vw;
  min-height: auto;
  max-width: 55vw;
  max-height: 55vw;
  
  background-color: white;
  border-radius:15px ;
  padding: 20px;
  
}

.btn-close {
    cursor: pointer;
    transition: 0.3s;
    width: auto;
height: auto;
  }
</style>