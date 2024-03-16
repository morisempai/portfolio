<script>
import Header from './components/AppHeader.vue'
import Projects from './components/AppProjectList.vue'
import Carousel from './components/basic/AppCarousel.vue'
import Certs from './components/basic/AppCertificates.vue'
import { isDark} from "@/components/basic/AppDarkToggle.vue";
import BodyCard from "@/components/basic/AppBodyCard.vue";
import Body from "@/components/AppBody.vue";
import Footer from "@/components/AppFooter.vue";

export default {
  name: 'App',
  components: {
    Header, Body, Footer,
    BodyCard, Projects,
    Carousel, Certs
  },
  data() {
    return {
      isDark
    }
  }
}
</script>

<template>
  <div :class="isDark?'dark':'light'">
    <Header/>
    <Carousel/>
  <Body>
    <BodyCard>
      <Projects/>
    </BodyCard>
    <BodyCard>
      <h3 class="p-4">About this page</h3>
      <p>Hello! This web page was created to implement and test my knowledge of DevOps processes and instruments at AWS</p>
    </BodyCard>
    <BodyCard>
      <Certs/>
    </BodyCard>
  </Body>
    <Footer/>
  </div>
</template>

<style>
.light{
  background: rgb(242, 244, 245)
}
.dark{
  background: rgba(52, 58, 64, 0.89)
}
</style>