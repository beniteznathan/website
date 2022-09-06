<template>
  <AppHeader/>

  <main>
    <section id="banner" class="banner">
      <div class="container banner__content">
        <img src="@images/illustration1.svg" alt="" class="banner__image" tabindex="-1">
        <p class="banner__hero">Take your business to the Next Level</p>
        <p class="banner__lead">We build affordable and efective websites that works for you!</p>
      </div>
    </section>

    <AppServices/>

    <AppProcess/>

    <AppContacts/>
  </main>

  <AppFooter/>
</template>

<script>
import AppHeader from '@components/layouts/Header.vue';
import AppServices from '@components/sections/Services.vue';
import AppProcess from '@components/sections/Process.vue';
import AppContacts from '@components/sections/Contacts.vue';
import AppFooter from '@components/layouts/Footer.vue';

export default {
  name: 'home',

  components: {
    AppHeader,
    AppServices,
    AppProcess,
    AppContacts,
    AppFooter
  }
}
</script>