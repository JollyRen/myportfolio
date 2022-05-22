<template>
  <div :class="main">
    <div :class="imgDiv">
      <img
        class="float-right md:h-full md:max-h-min"
        alt="jeremy-pic"
        src="../assets/pics/profilePic.png"
      />
    </div>
    <h1 class="text-2xl font-bold mt-5">About Me</h1>
    <ul :class="ulVertical">
      <li class="text-sm">Palm Beach Gardens, Florida 33418</li>
      <li class="text-sm">
        561-320-7875<span class="text-green-300 font-bold">&emsp;|&emsp;</span>
        <a
          :class="anchor"
          href="mailto:jollyren@gmail.com?subject=Let's Talk About A Job!"
          >jollyren@gmail.com</a
        >
      </li>
    </ul>
    <h2 :class="h2">My Story</h2>
    <article class="w-full md:w-[65ch] px-10">
      <div v-for="(paragraph, index) in aboutMe" :key="index">
        <p
          class="my-2"
          v-if="paragraph.includes('http://') || paragraph.includes('https://')"
          v-html="paragraph"
        />
        <p class="my-2 indent-8" v-else-if="index === 1">{{ paragraph }}</p>
        <p v-else-if="index === 0" class="my-2 font-bold text-lg text-center">
          {{ paragraph }}
        </p>
        <p class="my-2" v-else>
          {{ paragraph }}
        </p>
      </div>
    </article>
    <h2 :class="h2">Tech Stack</h2>
    <section
      v-for="(section, idx) in techStack"
      :class="techSection"
      :key="idx"
    >
      <div :class="techDiv">
        <h3 :class="techH3">
          {{ section.title }}
        </h3>
        <ul :class="ulHorizontal">
          <li><span :class="spanGreen">»&emsp;</span></li>
          <li v-for="(tech, index) in section.list" :key="index">
            {{ tech }}
            <span v-if="index !== section.list.length - 1" :class="spanGreen"
              >|&nbsp;</span
            >
          </li>
        </ul>
      </div>
      <div v-if="idx === techStack.length - 1" class="techSeparator"></div>
    </section>
    <h2 :class="h2">Technical Projects</h2>
    <span class="font-bold hover:animate-bounce"
      ><router-link :class="anchor" to="/portfolio"
        >See my portfolio</router-link
      ></span
    >
    <h2 :class="h2">Experience</h2>
    <section
      :class="mainSection"
      v-for="(section, idx) in experience"
      :key="idx"
    >
      <h3 :class="h3">{{ section.title }}</h3>
      <ul :class="ulVertical2">
        <li class="text-sm" v-for="(item, index) in section.list" :key="index">
          <span :class="spanGreen">»&emsp;</span>{{ item }}
        </li>
      </ul>
      <div
        v-if="idx !== experience.length - 1"
        :class="lightGreenSeparator"
      ></div>
      <div v-else :class="darkGreenSeparator"></div>
    </section>
    <h2 :class="h2">Education</h2>
    <section
      :class="mainSection"
      v-for="(section, idx) in education"
      :key="idx"
    >
      <h3 :class="h3">{{ section.title }}</h3>
      <article class="flex flex-row justify-between w-full">
        <div class="mr-5 text-green-300">{{ section.type }}</div>
        <div class="ml-5 text-green-300">{{ section.year }}</div>
      </article>
      <p class="text-sm" v-if="section.desc">
        <span :class="spanGreen">»&emsp;</span>­{{ section.desc }}
      </p>
      <div
        v-if="idx !== education.length - 1"
        :class="lightGreenSeparator"
      ></div>
      <div v-else :class="darkGreenSeparator"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  components: {},
  data() {
    return {
      main: 'flex flex-col md:justify-center items-center dark:text-gray-200 text-gray-800',
      imgDiv:
        'w-3/4 mr-[25%] md:mr-[50%] md:min-h-min lg:mr-[55%] border-r border-b border-green-400 rounded-tr-full rounded-br-full mt-5',
      mainSection: 'flex flex-col justify-center items-center w-3/4 md:w-1/2',
      techSection:
        'flex flex-col justify-center items-center w-full md:w-3/4 lg:w-3/5',
      techDiv:
        'flex flex-col justify-center items-center w-full md:mb-2 md:flex-row px-10 md:px-20',
      techH3:
        'text-sm font-bold text-green-400 text-center md:text-left md:self-start w-2/5',
      techSeparator:
        'w-3/5 border-b border-green-700 shadow shadow-green-400/70 my-3',
      anchor:
        'text-green-700 hover:text-green-400 hover:text-shadow-md transition-all duration-250 ease-out hover:ease-in hover:duration-150',
      h2: 'text-xl font-bold my-3 text-green-400',
      h3: 'text-l font-bold',
      pCentered: 'text-center text-base w-1/2',
      ulHorizontal:
        'ml-2 mb-2 w-full justify-center md:justify-start list-none flex flex-row flex-wrap',
      ulVertical: 'list-none flex flex-col text-center w-1/2',
      ulVertical2: 'flex flex-col w-full',
      spanGreen: 'text-green-400 text-l',
      lightGreenSeparator: 'w-1/2 border-b border-green-300 my-2',
      darkGreenSeparator:
        'w-3/4 shadow shadow-green-400/70 border-b border-green-700 my-3',
      aboutMe: [
        'Hello, my name is Jeremy.',
        "I wanted to do something different than I usually do, so I'm building my site with Vue.js 3 from the ground up, also using Tailwind CSS for styles. I've been wanting to use both for a project for a while now, but always get roped into React with other developers. So far, I have to say learning Vue is mostly good stuff — you get to work with HTML on your own terms and can make it more semantic.",
        'Tailwind CSS and Vue look like a good fit for semantic HTML, which React using something like MUI doesn\'t seem to always be. If you want to get a little sense of me, though, check out my <a class="text-green-700 hover:text-green-400 hover:text-shadow-md transition-all duration-250 ease-out hover:ease-in hover:duration-150" href="https://www.linkedin.com/in/jeremy-daniel-rogers/LinkedIn">LinkedIn</a> and <a class="text-green-700 hover:text-green-400 hover:text-shadow-md transition-all duration-250 ease-out hover:ease-in hover:duration-150" href="https://github.com/JollyRen">Github</a> profiles. I don\'t believe in hiding things, so if there\'s something that\'s not clear, let me know and I can tell you straight up over a <a class="text-green-700 hover:text-green-400 hover:text-shadow-md transition-all duration-250 ease-out hover:ease-in hover:duration-150" href="https://calendly.com/jollyren/15min" target="_blank">coffee chat</a>.',
        "TLDR; My coding history is strange and winding. I've had an on and off relationship since my childhood, never thinking I was worthy. I've gotten over that and love it unequivocally now. I'm always learning.",
        "Long Version: Starting back in the mid-90s, I was enamored with HTML. As a youth, I found as much enjoyment in managing and modifying existing gaming clan pages (Starcraft: Broodwar) as I did playing the game. I'm a community type of person as much as a techie kind of person. Of course, mySpace gave the world it's (probably) first look at CSS pages. I loved it (still kinda do to be honest).",
        'Eventually, I wandered around until I was 20 and had to work, as I was a newlywed. Thus started a long span of (at the time) pointless jobs just to make some money. However, I eventually realized a narrative had played out. I went into graphic design just in time for print media to die and digital media to birth itself painfully into the world — and nearly invalidate all my design experience in its current form. As a new graduate in a world where everyone wanted me to make their pages, not just design them, I was lost.',
        "I turned to WordPress and WAMPserver to help me understand how to design and create sites. I was so fed up with WordPress, but felt like I had no choice but to edit CSS myself. That was fine, and I made some great pages along the way. But the problem with it all was functionality (and working with PHP I didn't understand well).",
        'After about 10 years of solid travel around the world, some online english teaching, and freelance graphic design, I started to feel the ache of not pursuing my dreams in career as much as I had hoped.',
        "For me, money isn't the main draw (or I wouldn't have wanted to go into branding and graphic design). But as you get older, you realize, you have to at least make some. I've never met a teacher that didn't struggle, and frankly I was tired of struggling.",
        'After years of HTML, CSS, and just getting to understand what some jQuery or JS was doing I pulled the trigger and decided to enter a Bootcamp to really get to know what software engineering is all about. I was tired of using things other people made and wanted to make it myself. If I could be paid well along the way, why not?',
        "I have a passion for pretty much everything programming stands for. Solving problems, solving people's problems, teaching others, being taught, and helping the world no matter where you're from.",
        "So here I am, now a software developer and engineer, using JS and its various frameworks and databases. I'm looking to get into Python, Solidity, and Rust eventually, but one thing at a time.",
        "While traveling in Asia (India, Thailand, Laos, etc.), Europe, USA, and Oceania I was struck by the disparity in resources and what it wrought on the people. I wanted to do something but as one person (one not-so-naive person) with limited resources, I didn't know what I could accomplish.",
        "It warms my heart to know that I could help that goal get met as I work, if I'm working with the right company. I don't know if I could help everyone, but I'd like to help as many as I can, wherever I am. I live a very modest life, always trying to give back to others and help where I can.",
        "I want to be a success on my terms. Help my wife, my family, my husky, and as many people that need it as possible. That's success to me. I love to learn, I love to teach, and I love to travel. Recreation is great, but I get more fulfillment out of doing something important for others.",
        "I know it's quite a read. The journey part especially, so don't feel obliged 😁",
        "If you've read up until here, thank you very much for all you do. Regardless of whether you believe any of the roles are a match for me, the company looks like it's doing a lot of good work.",
        'Sincerely,',
        'Jeremy Rogers'
      ],
      experience: [
        {
          title: 'Full Stack Software Developer',
          list: [
            'Web and Desktop apps with Agile methodologies — solo or with a team',
            'APIs and CRUD development based on wireframing and user-story generation',
            'Modern front end JS frameworks like React-Redux and Vue.js 3'
          ]
        },
        {
          title: 'Graphic Designer',
          list: [
            'Created several websites on WordPress using Affinity Design and Photo suite for asset creation',
            'Logos, branding, style guides, app/website UI/UX, marketing materials, photo manipulation, etc.',
            'GIF, MP4, and animations'
          ]
        },
        {
          title: 'SEO Content Writer',
          list: [
            'Ghostwrite content in SEO formatting (Search Engine Optimization)',
            'Technical writing on IT, software, hardware, optics, physics'
          ]
        }
      ],
      techStack: [
        {
          title: 'Languages & Frameworks',
          list: [
            'JavaScript',
            'HTML',
            'CSS',
            'PHP',
            'Python',
            'TypeScript',
            'React (hooks',
            'Vue.js 3'
          ]
        },
        {
          title: 'CSS Frameworks',
          list: ['SCSS', 'PostCSS', 'Tailwind CSS', 'Material UI', 'Bootstrap']
        },
        {
          title: 'Databases',
          list: ['PostgreSQL', 'Firestore', 'NoSQL']
        },
        {
          title: 'Environments',
          list: [
            'Electron.js',
            'Node.js',
            'Google Cloud Platform',
            'Firebase',
            'WSL',
            'AWS Cloud9',
            'Windows 10 & 11'
          ]
        },
        {
          title: 'Testing Frameworks',
          list: ['Jasmine', 'Mocha', 'Chai']
        },
        {
          title: 'Other Dev Tools',
          list: [
            'Git',
            'Github',
            'Webpack',
            'Babel',
            'Express',
            'Sequelize',
            'Heroku',
            'Vite',
            'ESLint',
            'Prettier',
            'VScode',
            'XAMPP',
            'WAMP server',
            'Redux',
            'React-Redux (hooks)',
            'Bash',
            'Zsh',
            'PowerShell'
          ]
        }
      ],
      education: [
        {
          title: 'Fullstack Academy, New York, NY',
          type: 'Certificate in Software Engineering',
          year: '04/2022',
          desc: '17-Week Full Stack JavaScript Web Development Immersive Course'
        },
        {
          title:
            'United States Institute of Language and Cultural Studies, Miami, FL',
          type: 'Bachelor of Arts in TESOL fundamentals and methodology',
          year: '10/2019'
        },
        {
          title: 'Colorado Mountain College, Spring Valley, CO',
          type: 'Associate of Applied Science in Graphic Design',
          year: '04/2015',
          desc: 'Web and UI/UX design, Branding and Style Guides, Logo Design, Advertising'
        }
      ]
    }
  }
}
</script>
