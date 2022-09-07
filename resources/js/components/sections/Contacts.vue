<template>
  <section id="contact-us" class="contact-us">
    <div class="container">
      <div class="contact-us__header">
        <h2>Contact us</h2>
        <p>How can we help? Send us a message!</p>
      </div>
      <div class="contact-us__content" v-if="success && !loading">
        <div class="contact-us__form success-message">
          {{ success }}
        </div>
      </div>
      <div class="contact-us__content">
        <div class="contact-us__form">
          <div
            class="contact-us__form-group"
            :class="{
              invalid: errors.name
            }"
          >
            <label for="full-name" class="contact-us__form-label">
              Name *
            </label>
            <input type="text" name="name" v-model="form.name" id="full-name" class="contact-us__form-control" required>
            <span class="error-message" >{{ errors.name }}</span>
          </div>

          <div
            class="contact-us__form-group"
            :class="{
              invalid: errors.email
            }"
          >
            <label for="email" class="contact-us__form-label">
              Email address *
            </label>
            <input type="email" name="email" v-model="form.email" id="email" class="contact-us__form-control" required>
            <span class="error-message" >{{ errors.email }}</span>
          </div>

          <div
            class="contact-us__form-group"
            :class="{
              invalid: errors.service
            }"
          >
            <label for="service" class="contact-us__form-label">
              Service *
            </label>
            <select name="service" v-model="form.service" id="service" class="contact-us__form-control" required>
              <option v-for="(name, service) in services" :key="service" :value="service">
                {{name}}
              </option>
            </select>
            <span class="error-message" >{{ errors.service }}</span>
          </div>

          <div
            class="contact-us__form-group"
            :class="{
              invalid: errors.message
            }"
          >
            <label for="message" class="contact-us__form-label" required>
              Messsage *
            </label>
            <textarea name="message" v-model="form.message" id="message" maxlength="500"  class="contact-us__form-control" required></textarea>
            <span class="error-message" >{{ errors.message }}</span>
          </div>

          <div class="contact-us__form-footer">
            <button
              type="submit"
              @click="submitForm"
              class="contact-us__form-submit"
              :disabled="loading"
            >
              {{ loading ? 'Submitting..' : 'Submit' }}
            </button>
          </div>
        </div>

        <!-- <div class="contact-us__others">
          <a href="#" class="contact-us__social">
            <i class="fa-brands fa-facebook icon"></i>
          </a>
          <a href="#" class="contact-us__social">
            <i class="fa-brands fa-tiktok icon"></i>
          </a>
          <a href="#" class="contact-us__social">
            <i class="fa-solid fa-at icon"></i>
          </a>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import Home from '@services/Home';

export default {
  name: 'app-contact',

  data() {
    return {
      loading: false,
      success: null,
      form: {
        name: null,
        email: null,
        service: null,
        message: null
      },
      errors: {
        name: null,
        email: null,
        service: null,
        message: null,
      },
      services: {
        'WEB_DESIGN': 'Web design and development',
        'CONTENT_MANAGEMENT': 'Content management',
        'MAINTENANCE': 'Website maintenance',
        'OTHER': 'Other'
      }
    }
  },

  methods: {
    async submitForm() {
      this.loading = true;
      this.success = null;

      const response = await Home.contactUs(this.form);

      this.loading = false;

      if (!response.errors) {
        this.success = `Thank you, ${this.form.name}! We'll contact you as soon as possible.`;

        // Reset form and field errors
        return Object.keys(this.errors).forEach(field => {
          this.form[field] = null;
          this.errors[field] = null;
        });
      }

      Object.keys(this.errors).forEach(field => {
        this.errors[field] = response.errors[field]
          ? response.errors[field][0]
          : null;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  span.error-message {
    display: none;
  }

  .invalid {
    input, select, textarea {
      border: solid #ff00007d 1px;
    }

    span.error-message {
      display: block;
      color: red;
      font-size: 13px;
      padding-top: 8px;
    }
  }

  .success-message {
    margin-bottom: 15px;
    color: white;
    font-weight: 600;
  }
</style>