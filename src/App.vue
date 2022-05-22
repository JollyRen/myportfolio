<template>
  <div v-if="mode === 'dark'" :class="darkMain">
    <nav :class="navContainer">
      <span v-for="(nav, index) in navs" :key="index"
        ><router-link :to="nav.url" :class="navLinks">{{
          nav.title
        }}</router-link>
        <span v-if="index !== navs.length - 1">&nbsp;|&nbsp;</span>
      </span>
    </nav>
    <router-view />
    <footer
      class="
        flex flex-col
        mt-5
        py-2
        dark:text-gray-200
        text-gray-800 text-center text-xs
      "
    >
      <p>Built using Vue.js 3 and Tailwind CSS and hosted on Github pages.</p>
      <p>©2022 Jeremy Rogers</p>
      <div
        v-if="mode === 'dark'"
        class="flex flex-row h-14 items-start justify-center my-2"
      >
        <a
          :class="iconAnchor"
          href="https://github.com/JollyRen"
          target="_blank"
        >
          <img class="w-9 h-9" :src="DarkModeGithub" alt="Github"
        /></a>
        <a
          :class="iconAnchor"
          href="https://www.linkedin.com/in/jeremy-daniel-rogers/"
          target="_blank"
          ><img class="w-8 h-8" :src="DarkModeLinkedIn" alt="LinkedIn"
        /></a>

        <a
          :class="iconAnchor"
          href="https://twitter.com/JollyRensha"
          target="_blank"
          ><img class="w-9 h-9" :src="DarkModeTwitter" alt="Twitter"
        /></a>
      </div>
    </footer>
  </div>
</template>

<script>
import DarkModeGithub from '@/assets/pics/DarkModeGithub.png'
import DarkModeLinkedIn from '@/assets/pics/DarkModeLinkedIn.png'
import DarkModeTwitter from '@/assets/pics/DarkModeTwitter.png'
import LightModeLinkedIn from '@/assets/pics/LightModeLinkedIn.png'
import LightModeTwitter from '@/assets/pics/LightModeTwitter.png'
import LightModeGithub from '@/assets/pics/LightModeGithub.png'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      DarkModeGithub,
      DarkModeLinkedIn,
      DarkModeTwitter,
      LightModeGithub,
      LightModeLinkedIn,
      LightModeTwitter,
      mode: localStorage.getItem('theme'),
      darkMain: 'dark bg-slate-200 min-h-screen dark:bg-gray-800',
      navContainer:
        'bg-gray-500 flex justify-center box-border p-5 text-gray-100',
      navLinks:
        'hover:text-green-400 hover:text-shadow-md hover:text transition-all duration-250 ease-out hover:ease-in hover:duration-150',
      navs: [
        { title: 'Home', url: '/' },
        { title: 'Portfolio', url: '/portfolio' },
        // { title: 'Blog', url: '/blog' },
        { title: 'About', url: '/about' }
      ],
      iconAnchor:
        'w-12 h-12 p-1 flex justify-center items-center transition-all ease-out duration-250 rounded-full hover:shadow-md hover:shadow-green-400/60 hover:ease-in hover duration-150'
    }
  }
}
</script>
