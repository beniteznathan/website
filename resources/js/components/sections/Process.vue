<template>
  <section class="container">
    <div id="process" class="process">
      <h2 class="process__header">Process</h2>
      <div class="process__content">
        <div class="process-item">
          <img src="@images/illustration2.svg" alt="" class="process-item__image">
          <div class="process-item__text-wrapper">
            <div class="process-item__number"><small>Step</small>1</div>
            <h3 class="process-item__title">Kickoff</h3>
            <p class="process-item__text">Discussion of project  requirements, timelines, and specifications.</p>
          </div>
        </div>
        <div class="process-item">
          <img src="@images/illustration3.svg" alt="" class="process-item__image">
          <div class="process-item__text-wrapper">
            <div class="process-item__number"><small>Step</small>2</div>
            <h3 class="process-item__title">Development</h3>
            <p class="process-item__text">Planning on project needed/required tools, mockups, actual development, testings and staging deployment.</p>
          </div>
        </div>
        <div class="process-item">
          <img src="@images/illustration4.svg" alt="" class="process-item__image">
          <div class="process-item__text-wrapper">
            <div class="process-item__number"><small>Step</small>3</div>
            <h3 class="process-item__title">Finalize</h3>
            <p class="process-item__text">Project demonstration , verification/checking of requirements and live/production deployment.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app-process'
}
</script>