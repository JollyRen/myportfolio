<template>
  <div :class="mainDiv">
    <div :class="imgDiv">
      <img
        class="float-right md:w-full md:h-full"
        alt="jeremy-pic"
        src="../assets/pics/profilePic.png"
      />
    </div>
    <article class="mx-5 text-center min-w-min w-full">
      <h1 class="text-2xl font-bold">Welcome!</h1>
      <p>
        Hello, I'm Jeremy Rogers, a full-stack software developer and graphic
        designer.
      </p>
      <p>—</p>
      <p>
        Do you need an all-in-one employee to combine your technology stack,
        UI/UX, branding, and accessibility requirements?
      </p>
      <h2 class="text-2xl font-bold mt-3">Since 2013 I've worked in:</h2>
      <p class="text-green-400">
        Graphic Design || Web Design || App Design || SEO Content Writing
      </p>
      <p class="animate-bounce text-lg text-green-400 font-bold">
        Software Development & Engineering
      </p>
      <p class="text-xl font-bold mt-3">
        I'm proficient in designing JavaScript applications<br />
        using technologies like:
      </p>
      <p class="text-green-400">
        Electron.js || Express || React Hooks || Redux || Vue.js 3 || and
        more...
      </p>
      <p class="mt-3">
        Want to know exactly
        <router-link :class="link" to="/blog">what all that means</router-link>
        and what I get up to?
      </p>
      <router-link :class="link" to="/portfolio"
        >Check out the rest of my portfolio!</router-link
      >
    </article>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      link: 'text-green-700 hover:text-green-400 hover:text-shadow-md transition-all duration-250 ease-out hover:ease-in hover:duration-150',
      imgDiv:
        'w-3/4 mr-[25%] md:w-1/2 md:mr-auto md:min-h-min lg:w-2/5 xl:w-1/3 border-r border-b border-green-400 rounded-tr-full rounded-br-full',
      mainDiv:
        'flex flex-col md:flex-row items-center md:justify-center dark:text-gray-200'
    }
  }
}
</script>
