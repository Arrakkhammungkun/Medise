<template>
    <div class="min-h-screen">

      <div class="bg-[#E1F5FE] p-36  rounded-b-lg shadow-md">
        <h3 class="text-3xl font-medium ">จัดการสินค้า</h3>
        <p class="mb-4">สามารถเพิ่มแก้ไขข้อมูลสินค้าหรือลบได้</p>
  
      
        <div class="overflow-X-auto">
          <table class="min-w-full   border-collapse border border-gray-300">
            <thead>
              <tr class="bg-[#10DBAC]">
                <th class="border border-gray-400 p-2">ชื่อสินค้า</th>
                <th class="border border-gray-400 p-2">ราคา</th>
                <th class="border border-gray-400 p-2">รายละเอียด</th>
                <th class="border border-gray-400 p-2 w-2 ">ลบ</th>
                <th class="border border-gray-400 p-2 w-2">แก้ไข</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td class="border border-gray-400 p-2 w-40">ครีม</td>
                <td class="border border-gray-400 p-2 w-11 " >100</td>
                <td class="border border-gray-400 p-3  ">lorem...</td>
                <td class="border border-gray-400 p-2">
                  <button
                    class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    ลบ
                  </button>
                </td>
                <td class="border border-gray-400 p-2">
                  <button
                    class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  >
                    แก้ไข
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="mt-4 mx" style="float: right">
          <button
            class="bg-black text-white px-6 py-2 rounded  hover:bg-[#10DBAC]  "
          >
            เพิ่มสินค้า
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: "ครีม", price: 100, detail: "รายละเอียดสินค้า 1" },
          { id: 2, name: "ครีม", price: 150, detail: "รายละเอียดสินค้า 2" },
          { id: 3, name: "ครีม", price: 50, detail: "รายละเอียดสินค้า 3" },
          { id: 4, name: "ครีม", price: 200, detail: "รายละเอียดสินค้า 4" },
          { id: 5, name: "ครีม", price: 120, detail: "รายละเอียดสินค้า 5" },
          { id: 6, name: "ครีม", price: 80, detail: "รายละเอียดสินค้า 6" },
          { id: 7, name: "ครีม", price: 180, detail: "รายละเอียดสินค้า 7" },
        ],
      };
    },
  };
  </script>
  
  