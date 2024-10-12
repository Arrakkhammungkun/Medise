<template>
    <div class="flex flex-col items-center bg-[#F0F8FF] h-screen p-2">
        
        <div class="w-full max-w-3xl bg-white rounded-t-lg shadow p- flex items-center justify-between">
         <div class="flex items-center space-x-3">
                
                <img src="https://storage.googleapis.com/fastwork-static/3da37aab-7ccc-4c54-bdff-16c8603e52a9.jpg" alt="Profile" class="w-16 h-16   rounded-full">
            <div>
            <p class="font-bold text-xl mt-10    ">FName LName</p>
            <div class="flex flex-col items-center justify-center text-center pl-56 -mt-7  ">
                <p class="text-gray-500 text-lg font-semibold">เวลาที่ปรึกษาเหลือ</p>
                <p class="text-red-500 text-lg font-bold">19:59 นาที</p>
            </div>
          </div>
        </div>

            <!--Icons-->
            <div class="flex items-center space-x-2">
                <i class=""></i>
                <i class=""></i>
                <i class=""></i>
            </div>
        </div>

        <div class="border-t border-gray-300  "></div>
        <div class="w-full max-w-3xl bg-white flex-1 p-4 space-y-4 overflow-y-auto flex flex-col items-center justify-center">
          
            <div class="flex flex-col items-center mb-4">
                <img src="https://storage.googleapis.com/fastwork-static/3da37aab-7ccc-4c54-bdff-16c8603e52a9.jpg" alt="Profile" class="w-24 h-24 rounded-full mb-2">
                <p class="font-semibold">FName LName</p>
                <p class="text-xs text-gray-500">FName LName</p>
            </div>
            <div class="w-full flex items-start space-x-2">
                <img src="https://storage.googleapis.com/fastwork-static/3da37aab-7ccc-4c54-bdff-16c8603e52a9.jpg" alt="Profile" class="w-8 h-8 rounded-full">
                <div class="bg[#E1F5FE] text-black p-2 rounded-lg max-w-xs">
                    ลูกบอล
                </div>
            </div>
            <div class="w-full flex items-end justify-end space-x-2">
                <div class="bg-[#A8EAFF] text-black p-2 rounded-lg max-w-xs text-right">
                    อ้าวเหรอ 
                </div>
                <img src="https://storage.googleapis.com/fastwork-static/3da37aab-7ccc-4c54-bdff-16c8603e52a9.jpg" alt="Profile" class="w-8 h-8 rounded-full hidden">
            </div>
        </div>
        <div class="w-full max-w-3xl bg-white rounded-b-lg p-2 flex items-center space-x-2 ">
            <input type="text" placeholder="ส่งข้อความ..." class="flex-1 p-2 rounded-full border border-black focus:outline-none focus:ring focus:ring-blue-200">
           <!--Icons-->
                <i class=""></i>   
        </div>

        <button class="mt-4 bg-red-500 text-black font-bold py-2 px-6 rounded-full shadow-md">
            สิ้นสุดการปรึกษา
        </button>
    </div>
</template>

