<script>
import projects from '../assets/data/projects.json'

export default {
  name: 'PortfolioView',
  components: {},
  data() {
    return {
      projects,
      main: 'flex flex-col md: justify-center items-center dark:text-gray-200',
      card: 'pl-5 py-5 mt-5 mb-2 h-auto w-3/4 md:w-3/5 lg:w-1/2 bg-slate-400/50 border-[1px] border-slate-400/50 hover:border-green-400 transition-colors duration-250 ease-out hover:ease-in hover:duration-250 rounded-md shadow-lg shadow-green-400/50',
      anchor:
        'hover:text-green-400 hover:text-shadow-md transition-all duration-250 ease-out hover:ease-in hover:duration-150'
    }
  }
}
</script>

<template>
  <div :class="main">
    <article v-for="project in projects" :class="card" :key="project.id">
      <h1 class="text-2xl text-center font-bold">
        <a :class="anchor" :href="project.uri" target="_blank">
          {{ project.title }}
        </a>
      </h1>
      <div v-for="(summary, index) in project.summaries" :key="index">
        <p v-if="index < 1" class="indent-8 mb-2">
          {{ summary }}
        </p>
        <p v-else class="mb-2">
          {{ summary }}
        </p>
      </div>
      <p class="text-center">
        <span
          class="text-sm text-green-400"
          v-for="(tech, index) in project.technologies"
          :key="index"
        >
          {{ tech }}
          <span
            class="text-gray-200 text-base"
            v-if="index !== project.technologies.length - 1"
            >&nbsp;|&nbsp;</span
          >
        </span>
      </p>
    </article>
  </div>
</template>
