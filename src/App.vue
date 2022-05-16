<template>
  <div :class="main">
    <nav :class="navContainer">
      <span v-for="(nav, index) in navs" :key="index"
        ><router-link :to="nav.url" :class="navLinks">{{
          nav.title
        }}</router-link>
        <span v-if="index !== navs.length - 1">&nbsp;|&nbsp;</span>
      </span>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      main: 'bg-slate-200 min-h-screen dark:bg-gray-800',
      navContainer:
        'bg-gray-500 flex justify-center box-border p-5 text-gray-100',
      navLinks:
        'hover:text-green-400 hover:text-shadow-md hover:text transition-all duration-250 ease-out hover:ease-in hover:duration-150',
      navs: [
        { title: 'Home', url: '/' },
        { title: 'Portfolio', url: '/portfolio' },
        { title: 'Blog', url: '/blog' },
        { title: 'About', url: '/about' }
      ]
    }
  }
}
</script>
