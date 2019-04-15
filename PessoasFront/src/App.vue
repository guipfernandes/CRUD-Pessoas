<template>
  <div id="app">
      <nav-bar/>
    <section class="container">
      <div id="body-component">
        <transition name="moveInUp">
          <router-view/>
        </transition>
      </div>
      <footer class="footer fixed-bottom font-small">
        <div class="container text-center">
            <strong>Project CRUD Pessoas</strong>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  #app {
    background-color: white
  }
  .footer {
    color: #4682B4;
    background-color: #D3D3D3;
    bottom:0;
    width:100%;
  }
  .moveInUp-enter-active{
  opacity: 1;
  animation: fadeIn 1.5s ease-in;
  }
  @keyframes fadeIn{
    0%{
      opacity: 0;
    }
    50%{
      opacity: 0.5;
    }
    100%{
      opacity: 1;
    }
  }
  .moveInUp-leave-active{
  animation: moveInLeft .3s ease-in;
  }
  @keyframes moveInLeft{
  0%{
    transform: translateX(0);
  }
    100%{
    transform: translateX(-1400px);
  }
  }
</style>
