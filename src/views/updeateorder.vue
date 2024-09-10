<template>
  <div
    class="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(https://figopara.com/uploads/source/2023/03/ccc.jpg)` }"
  >
    <div class="bg-[#8C8A8A] bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-xl">
      <h2 class="text-white text-2xl font-bold mb-6 text-center">แก้ไขสินค้า</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-white text-md font-bold mb-2" for="productName">
            ชื่อสินค้า
          </label>
          <input
            type="text"
            v-model="productName"
            id="productName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="ชื่อสินค้า"
          />
        </div>

        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="price">
            ราคา
          </label>
          <input
            type="text"
            v-model="price"
            id="price"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="ราคา"
          />
        </div>

        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="description">
            รายละเอียด
          </label>
          <textarea
            v-model="description"
            id="description"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="รายละเอียดสินค้า"
          ></textarea>
        </div>

        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="image">
            ลิงก์รูปภาพ
          </label>
          <input
            type="text"
            v-model="image"
            id="image"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="ใส่ลิงก์รูปภาพ"
          />
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            style="float: right"
          >
            บันทึกข้อมูล
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      price: '',
      description: '',
      image: '', 
    };
  },
  methods: {
    submitForm() {
      console.log('Product Name:', this.productName);
      console.log('Price:', this.price);
      console.log('Description:', this.description);
      console.log('Image URL:', this.image); 
    },
  },
};
</script>

<style scoped>
</style>
