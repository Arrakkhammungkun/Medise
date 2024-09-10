<template>
  <div>
    <!-- Navbar -->
    <header
      class="navbar z-50 fixed top-0 left-0 w-screen h-24 bg-[#046588] shadow-md transition-transform duration-100 ease-out p-6 px-14 flex justify-between items-center"
      :class="{ 'navbar--hidden translate-y-[-100%] shadow-none': !showNavbar }"
    >
    
      <div class="flex items-center">
        <RouterLink :to="{ name: 'home' }" class="ml-24">
          <img class="w-20 h-20" src="../img/iconLogo.png" alt="icon" />
        </RouterLink>
        <div class="text-3xl font-bold ml-4">จัดการระบบหลังบ้าน</div>
      </div>

      <ul class=" flex list-none p-0 m-0">
        
        <li class=" flex-1">
          <button @click="toggleDropdown" @mouseover="hover = true" @mouseleave="hover = false"
            :class="{'bg-none': isActive, 'text-black': hover, 'text-white': !hover && !isActive}"
            class="py-4 px-6 block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" :class="{'fill-black': hover, 'fill-white': !hover && !isActive}" class="w-[2vw] h-[2vw]">
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
            </svg>
            <span></span>
          </button>
          <div v-if="isDropdownOpen" class="absolute bg-[#B3E5FC] shadow-lg mt-1 min-w-[160px] text-xl">
            <a href="#" class="block text-black py-3 px-4 hover:bg-gray-200">หน้าบ้าน</a>
            <a href="#" class="block text-black py-3 px-4 hover:bg-gray-200">จัดการแพทย์</a>
            <a href="#" class="block text-black py-3 px-4 hover:bg-gray-200">จัดการสินค้า</a>
          </div>
        </li>
      </ul>
    </header>

    <!-- Main Content (Slot for dynamic content) -->
    <slot></slot>

    <!-- Footer -->
    <footer class="footer min-w-min bg-[#046588] text-base-content p-10">
      
    </footer>
  </div>
</template>



<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      isDropdownOpen: false,
      hover: false,
      isActive: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }

      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
    showDropdown() {
      this.dropdownOpen = true;
    },
    hideDropdown() {
      this.dropdownOpen = false;
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector('.relative > div');
      if (dropdown && !dropdown.contains(event.target)) {
        this.dropdownOpen = false;
      }
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.isActive = !this.isActive;
    }
  },
};
</script>



<style scoped>
.navbar--hidden {
  transform: translateY(-100%);
}

.relative {
  position: relative;
}

.relative > div {
  position: absolute;
}


</style>


