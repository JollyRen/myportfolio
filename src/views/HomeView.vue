<template>
  <div class="home">
    <img alt="jeremy-pic" src="../assets/profilePic.png" />
  </div>
  <section>
    <article>
      <h1>Welcome!</h1>
      <p>Hello, I'm Jeremy Rogers, a full-stack software developer and graphic designer.</p>
      <p>
        —
        <br />
        Do you need someone able to combine your technology stack, UI/UX, branding, and
        accessibility in one?
      </p>
      <p>
        <strong>Since 2013 I've worked in:</strong>
        <br />
        Graphic Design
        <br />
        Web Design
        <br />
        App Design
        <br />
        SEO Content Writing
        <br />
        Software Development
      </p>
      <p>
        <strong>I'm proficient in JavaScript applications using technologies such as:</strong>
        <br />
        React || Vue || Express.js || Node.js || PostgreSQL || Google Cloud Platform || Firebase ||
        NoSQL || Firestore || Electron.js || Electron.js || Redux || and more...
      </p>
      <p>
        Want to know exactly
        <router-link to="/blog">what all that means</router-link> and what I get up to?
      </p>
      <router-link to="/portfolio">Check out my portfolio!</router-link>
      <p></p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>
