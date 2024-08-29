<template >
    <UserLayout>
        <div id="header " class="bg-white">
            <div  class="relative h-screen bg-[url('https://elogic.co/wp-content/uploads/2019/04/istockphoto-1133980246-612x612-1.jpg')]  bg-cover bg-center drop-shadow-md">
                <div>
                    <div class="absolute inset-0 bg-black opacity-50   "></div>
                    <div   div class="relative z-10"></div>
                    
                    <div class="relative w-auto justify-center flex">
                        <div class="justify-center my-[8rem] " >
                            <h1 class="text-[2vw] font-bold tracking-wider text-center text-[#ffffff] ">แบบฟอร์มบันทึกสินค้า</h1>
                            <div class="relative w-auto justify-self-start flex my-[5px]">
                                <div class="justify-center">
                                <a class="text-[1.3vw] font-bold text-white ">ชื่อสินค้า</a>
                                    <br>
                                    <input class="w-[643px] h-[46px] p-[10px] rounded-[10px] border-solid border-2 border-black">
                                </div>
                            </div>
                            <div class="relative w-auto justify-self-start flex ">
                                <div class="justify-center ">
                                <a class="text-[1.3vw] font-bold text-white">ราคา</a>
                                    <br>
                                    <input class="w-[643px] h-[46px] p-[10px] rounded-[10px] border-solid border-2 border-black"
                                    type="number" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                                </div>
                            </div>
                            <div class="relative w-auto justify-self-start flex">
                            <div class="justify-center">
                                <a class="text-[1.3vw] font-bold text-white">รายละเอียด</a>
                                    <br>
                                    <textarea class="w-[643px] h-[97px] p-[10px] rounded-[10px] border-solid border-2 border-black"></textarea>
                                </div>
                            </div>
                            <div class="relative w-auto justify-self-start flex">
                                <div class="justify-center ">
                                <a class="text-[1.3vw] font-bold text-white">รูปภาพ(Link)</a>
                                    <br>
                                    <input class="w-[643px] h-[46px] p-[10px] rounded-[10px] border-solid border-2 border-black">
                                </div>
                            </div>
                            <div class="relative w-auto justify-self-start flex">
                                <div class="justify-center ">
                                <a class="text-[1.3vw] font-bold text-white">หมวดหมู่</a>
                                    <br>
                                    <select class="w-[643px] h-[52px] p-[10px] rounded-[10px] border-solid border-2 border-black">
                                        <option value="skincare">สกินแคร์</option>
                                        <option value="general_medicine">ยาสามัญ</option>
                                        <option value="treatment_medicine">ยารักษาโรค</option>
                                        <option value="supplements">อาหารเสริม</option>
                                        <option value="vitamins">วิตามิน</option>
                                    </select>
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
                </div>
            </div>
        </div>
    </UserLayout>
</template>

<script setup >
    import UserLayout from '@/layout/UserLayout.vue'
</script>

<style scoped>

</style>
