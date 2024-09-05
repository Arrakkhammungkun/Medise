<template >
    <Nevbar>
    <div id="header " class="bg-white ">
        <div  class="relative h-[100vdh] mt-[6rem] bg-[url('https://elogic.co/wp-content/uploads/2019/04/istockphoto-1133980246-612x612-1.jpg')]  bg-cover bg-center drop-shadow-md">
            <div >
                <div class="absolute inset-0 bg-black opacity-50   "></div>
                <div   div class="relative z-10"></div>
                <div class="flex justify-center ">
                  <form  class=" z-9  w-[50rem]"> 
                  <div class="relative w-auto justify-center    flex">
                      <div class="justify-center my-[8rem]  " >
  
                              <h1 class="text-[2.5vw] mt-[-2rem] mb-5 font-bold tracking-wider text-center text-[#ffffff] ">แบบฟอร์มบันทึกสินค้า</h1>

                              <div class="relative w-auto justify-self-start flex my-[5px]">
                                  <div class="justify-center mb-1">
                                      <label for="name" class="text-[1.3vw] ml-[2px] font-bold text-white ">ชื่อสินค้า</label>
                                      <br>
                                      <input type="text"
                                      
                                      id="name"
                                      required
                                      class="w-[643px] h-[46px] p-[10px] rounded-[10px] border-solid border-2 border-black">
                                  </div>
                              </div>
                              <div class="relative w-auto justify-self-start flex ">
                                  <div class="justify-center mb-1">
                                      <label for="name" class="text-[1.3vw] ml-[2px] font-bold text-white ">ราคา</label>
                                      <br>
                                      <input type="number"
                                      
                                      id="price"
                                      required
                                      min="1"
                                      
                                      class="w-[643px] h-[46px] p-[10px] rounded-[10px] border-solid border-2 border-black">
                                  </div>
                              </div>
                              <div class="relative w-auto justify-self-start flex">
                              <div class="justify-center mb-1">
                                  <label class="text-[1.3vw] ml-[2px] font-bold text-white ">รายละเอียด</label>
                                      <br>
                                      <textarea  id="description" class="w-[643px] h-[97px] p-[10px] rounded-[10px] border-solid border-2 border-black"></textarea>
                                  </div>
                              </div>
                              <div class="relative w-auto justify-self-start flex">
                                  <div class="justify-center mb-2 ">
                                  <label class="text-[1.3vw] ml-[2px] font-bold text-white ">หมวดหมู่สินค้า</label>
                                      <br>
                                      <select  id="category" class="w-[643px] h-[52px] p-[10px] rounded-[10px] border-solid border-2 border-black">
                                          <option >
                                              
                                          </option>
                                      </select>
                                  </div>
                              </div>
                              <div class="relative w-auto justify-self-start flex">
                                  <div class="justify-center mb-1 ">
                                  <label class="text-[1.3vw] ml-[2px] font-bold text-white ">ลิงก์รูปภาพ</label>
                                      <br>
                                      <input                   
                                          type="url"
                                         
                                          id="img"
                                          class="w-[643px] h-[46px] p-[10px] rounded-[10px] border-solid border-2 border-black">
                                          
                                  </div>
                              </div>
  
                              <div>
                                  <button class="text-white bg-[#34A853] 
                                  w-[154px] h-[48px] p-[10px] rounded-[10px] border-solid 
                                  my-[20px] ml-[490px] text-[1.3vw] hover:bg-[#25823e]">
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
  </Nevbar>
  </template>
<!--   
  <script>
  import axios from 'axios';
  import Nevbar from '@/layout/Nevbar.vue';
  import Swal from 'sweetalert2';
  
  export default {
    components: { Nevbar },
  data() {
  return {
  name: '',
  description: '',
  price: '',
  img: '',
  category: '',
  errors: [],
  categories: []
  };
  },
  async mounted() {
  try {
  // ดึงข้อมูลหมวดหมู่จาก API
  const response = await axios.get('http://localhost:3000/api/categories/add');
  this.categories = response.data;
  } catch (error) {
  console.error('Failed to fetch categories', error);
  }
  },
  methods: {
  async handleSubmit() {
  this.errors = [];
  try {
    
    const response = await axios.post('http://localhost:3000/api/product/add', {
      name: this.name,
      description: this.description,
      price: this.price,
      img: this.img,
      category: this.category
    });
    Swal.fire({
          title: 'บันทึกสินค้าสำเร็จ',
          text: 'ข้อมูลสินค้าของคุณถูกบันทึกเรียบร้อยแล้ว',
          icon: 'success',
          confirmButtonText: 'ตกลง'
        });
    
    this.name = '';
    this.description = '';
    this.price = '';
    this.img = '';
    this.category = '';
  } catch (error) {
    if (error.response && error.response.data.errors) {
      this.errors = error.response.data.errors;
    } else {
      console.error(error);
    }
  }
  }
  }
  };
  </script>
  
  <style scoped>
  
  </style>
   -->