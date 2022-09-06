<template>
  <section id="contact-us" class="contact-us">
    <div class="container">
      <div class="contact-us__header">
        <h2>Contact us</h2>
        <p>How can we help? Send us a message!</p>
      </div>
      <div class="contact-us__content">
        <div class="contact-us__form">
          <div class="contact-us__form-group">
            <label for="full-name" class="contact-us__form-label">
              Fullname *
            </label>
            <input type="text" name="full-name" v-model="form.name" id="full-name" class="contact-us__form-control" required>
          </div>

          <div class="contact-us__form-group">
            <label for="email" class="contact-us__form-label">
              Email address *
            </label>
            <input type="email" name="email" v-model="form.email" id="email" class="contact-us__form-control" required>
          </div>

          <div class="contact-us__form-group">
            <label for="service" class="contact-us__form-label">
              Service *
            </label>
            <select name="service" v-model="form.service" id="service" class="contact-us__form-control" required>
              <option v-for="(name, service) in services" :key="service" :value="service">
                {{name}}
              </option>
            </select>
          </div>

          <div class="contact-us__form-group">
            <label for="message" class="contact-us__form-label" required>
              Messsage *
            </label>
            <textarea name="message" v-model="form.message" id="message" maxlength="500"  class="contact-us__form-control" required></textarea>
          </div>

          <div class="contact-us__form-footer">
            <button type="submit" @click="submitForm" class="contact-us__form-submit">Submit</button>
          </div>
        </div>

        <div class="contact-us__others">
          <a href="#" class="contact-us__social">
            <i class="fa-brands fa-facebook icon"></i>
          </a>
          <a href="#" class="contact-us__social">
            <i class="fa-brands fa-tiktok icon"></i>
          </a>
          <a href="#" class="contact-us__social">
            <i class="fa-solid fa-at icon"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app-contact',

  data() {
    return {
      loading: false,
      form: {
        name: null,
        email: null,
        service: null,
        message: null
      },
      services: {
        'web-design': 'Web design and development',
        'content-management': 'Content management',
        'maintenance': 'Website maintenance'
      }
    }
  },

  methods: {
    submitForm() {

    }
  }
}
</script>