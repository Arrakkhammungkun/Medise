<template>
    <AdminLayout>
      <div id="header" class="bg-white">
        <div class="relative h-[100vh] mt-[6rem] bg-[url('https://elogic.co/wp-content/uploads/2019/04/istockphoto-1133980246-612x612-1.jpg')] bg-cover bg-center drop-shadow-md">
          <div>
            
            <div class="absolute inset-0 bg-black opacity-50"></div>
            
            
            <div class="relative z-10 flex justify-center">
              <form class="z-10 w-[50rem]">
                <div class="relative w-auto flex justify-center mt-10 ">
                  
                  <div class="absolute inset-0 bg-[#AAA8A8] opacity-50 z-0  rounded-xl"></div>
                  
                  
                  <div class="relative z-10 p-10">
                    <h1 class="text-[2.5vw] mt-[-2rem] mb-5 font-bold tracking-wider text-center text-[#ffffff]">
                      แบบฟอร์มบันทึกสินค้า
                    </h1>
                    
                    <div class="relative w-auto flex my-[5px]">
                      <div class="justify-center mb-1">
                        <label for="name" class="text-[1.3vw] ml-[2px] font-bold text-white">ชื่อสินค้า</label>
                        <br>
                        <input type="text" id="name" required class="w-[643px] h-[46px] p-[10px] rounded-[10px] border-solid border-2 border-black">
                      </div>
                    </div>
                    
                    <div class="relative w-auto flex">
                      <div class="justify-center mb-1">
                        <label for="price" class="text-[1.3vw] ml-[2px] font-bold text-white">ราคา</label>
                        <br>
                        <input type="number" id="price" required min="1" class="w-[643px] h-[46px] p-[10px] rounded-[10px] border-solid border-2 border-black">
                      </div>
                    </div>
                    
                    <div class="relative w-auto flex">
                      <div class="justify-center mb-1">
                        <label for="description" class="text-[1.3vw] ml-[2px] font-bold text-white">รายละเอียด</label>
                        <br>
                        <textarea id="description" class="w-[643px] h-[97px] p-[10px] rounded-[10px] border-solid border-2 border-black"></textarea>
                      </div>
                    </div>
                    
                    <div class="relative w-auto flex">
                      <div class="justify-center mb-2">
                        <label for="category" class="text-[1.3vw] ml-[2px] font-bold text-white">หมวดหมู่สินค้า</label>
                        <br>
                        <select id="category" class="w-[643px] h-[52px] p-[10px] rounded-[10px] border-solid border-2 border-black">
                          <option></option>
                        </select>
                      </div>
                    </div>
                    
                    <div class="relative w-auto flex">
                      <div class="justify-center mb-1">
                        <label for="img" class="text-[1.3vw] ml-[2px] font-bold text-white">ลิงก์รูปภาพ</label>
                        <br>
                        <input type="url" id="img" class="w-[643px] h-[46px] p-[10px] rounded-[10px] border-solid border-2 border-black">
                      </div>
                    </div>
                    
                    <div class="text-end">
                      <button class="text-white bg-[#34A853] w-auto h-auto p-[10px] rounded-[10px] border-solid my-[20px] text-[1.3vw] hover:bg-[#25823e]">
                        บันทึกข้อมูล
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
</template>
  
  
<script >

import AdminLayout from '@/layout/AdminLayout.vue';

export default {
  components: {
    AdminLayout,
  },
}
</script>
  
  <style scoped>
  
  </style>
  