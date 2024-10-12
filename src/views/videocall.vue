<template>
    <div class="bg-gray-950 h-screen flex flex-col justify-between">
        <!-- Header -->
        <div class="bg-[#10DBAC] min-h-20 w-full flex justify-center items-center">
            <div class="text-white font-bold text-2xl">Video Chat</div>
        </div>
      
            <!-- Video Grid -->
        <div class="flex justify-center gap-4 p-4 mx-10">
            <!-- Placeholder for Video 1 -->
            <div class="w-[50%] h-[40vw] bg-black rounded-lg flex items-center justify-center">
                <img src="/src/img/User1.png"
                    alt="User 1"
                    class="w-full h-full object-cover object-center rounded-lg">
            </div>
        
            <!-- Placeholder for Video 2 -->
            <div class="w-[50%] h-[40vw] bg-black rounded-lg">
                <img src="/src/img/User1.png" 
                    alt="User 3" 
                    class="w-full h-full object-cover object-center rounded-lg">
            </div>
        

        </div>
  
            <!-- Bottom Controls -->
            <div class="flex justify-center space-x-4 mb-6">
                <!-- Microphone Button -->
                <button 
                    @click="toggleMic" 
                    :class="micActive ? 'bg-red-500 hover:bg-red-800' : 'bg-[#16B37F] hover:bg-[#118c63]'" 
                    class="p-4 rounded-full duration-300">
                    <!-- Microphone Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white" class="w-6 h-6">
                        <path d="M192 0C139 0 96 43 96 96v160c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zm0 400c-70.7 0-128-57.3-128-128v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V480h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c85.8-11.7 152-85.3 152-174.4v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128z"/>
                    </svg>
                </button>

                <!-- Video Button -->
                <button 
                    @click="toggleVideo" 
                    :class="videoActive ? 'bg-red-500 hover:bg-red-800' : 'bg-[#16B37F] hover:bg-[#118c63]'" 
                    class="p-4 rounded-full duration-300">
                    <!-- Video Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="white" class="w-6 h-6">
                        <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/>
                    </svg>
                </button>

                <!-- Hang Up Button -->
                <button class="bg-red-500 p-4 rounded-full hover:bg-red-800 duration-300">
                    <!-- Hang Up Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" class="w-6 h-6">
                        <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24c17.5 4.8 29.6 20.6 29.6 38.6 0 247.4-200.6 448-448 448-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6l23.2 29.3C277.8 353.6 334.8 296.6 368.1 226.2L338.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"/>
                    </svg>
                </button>
            </div>

    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      micActive: false,
      videoActive: false,
    };
  },
  methods: {
    toggleMic() {
      this.micActive = !this.micActive;
    },
    toggleVideo() {
      this.videoActive = !this.videoActive;
    },
  },
};
</script>
  
  <style scoped>
  </style>
  