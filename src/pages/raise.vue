<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Daily/>
        <In/>
        <More/>
        <Footor cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../components/public/header.vue"
import Footor from "../components/public/footer.vue"
import Navbar from "../components/public/navbar.vue"
import Slider from "../components/raise/rslider.vue"
import Daily from "../components/raise/daily.vue"
import In from "../components/raise/in.vue"
import More from "../components/raise/more.vue"
export default {
    components: {
        Heador,
        Slider,
        Daily,
        In,
        More,
        Footor,
        Navbar,
    },
}
</script>

<style lang="scss">
  .mfooter{
    margin-top: 0!important;
    ul{
      li:first-child{
        display: none;
      }
    }
  }
</style>
