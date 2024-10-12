<template>
    <div class="flex flex-col h-screen bg-gray-100">
      <main class="flex-1 flex justify-center items-center">
        <div class="bg-white rounded-lg shadow-lg w-full m-10 flex flex-col h-full">
          <div class="border-b-2">
            <div class="flex items-center py-2 px-4 justify-between">
              
              <!-- Name next to profile -->
              <div class="text-xl font-bold flex items-center">
                <!-- Image preview -->
              <img src="/src/img/User1.png" alt="" class="w-[5vw] h-[5vw] object-cover rounded-full flex mr-4 bg-white">
                <a class="mr-2">Fname</a>
                <a>Lname</a>
              </div>
              <!-- Centered box for time remaining -->
              <div class="ml-4 text-center ">
                <a class="block">เวลาในการปรึกษาเหลือ</a>
                <a class="block text-red-500">19.59 นาที</a>
              </div>

              <!-- Bottom Controls -->
               <div class="flex justify-center space-x-4 ">
                    
                    <!-- Hang Up Button -->
                    <button class="   duration-300">
                        <!-- Hang Up Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" class="w-6 h-6">!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
                            <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"/>
                        </svg>
                    </button>

                    <button class="  duration-300">
                        <!-- Video Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="black" class="w-6 h-6">
                            <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/>
                        </svg>
                    </button>
               </div>

            </div>
          </div>
  
          <div class="overflow-y-auto flex-1 p-4">
            <div v-for="message in messages" :key="message.id" class="mb-4">
              <div :class="message.from === 'me' ? 'text-right' : 'text-left'">
                <div class="inline-block rounded-lg p-2" :class="message.from === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'">
                  {{ message.text }}
                </div>
                <div class="text-xs text-gray-500">{{ message.time }}</div>
              </div>
            </div>
          </div>
  
          <footer class="p-2 bg-gray-50 border-t">
            <div class="flex">
              <input v-model="newMessage" @keyup.enter="sendMessage" type="text" placeholder="Type a message..." class="flex-1 border rounded-lg p-2" />
              <button @click="sendMessage" class="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2">
                Send
              </button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  </template>
  
  
  
  
  <script>
  export default {
    data() {
      return {
        newMessage: '',
        micActive: false,
        videoActive: false,
        messages: [
          { id: 1, from: 'me', text: 'Hello!', time: '10:00 AM' },
          { id: 2, from: 'other', text: 'Hi there!', time: '10:01 AM' },
          { id: 3, from: 'me', text: 'How are you?', time: '10:02 AM' },
          { id: 4, from: 'other', text: 'I am good, thanks!', time: '10:03 AM' },
        ],

      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim()) {
          const newMsg = {
            id: this.messages.length + 1,
            from: 'me',
            text: this.newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };
          this.messages.push(newMsg);
          this.newMessage = '';
        }
      },
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
  /* Optional: You can add custom styles here */
  </style>
  