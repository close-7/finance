<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Ada/>
        <Money/>
        <Adb/>
        <Finance/>
        <Adc/>
        <Footor cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../components/public/header.vue"
import Footor from "../components/public/footer.vue"
import Navbar from "../components/public/navbar.vue"
import Slider from "../components/money/mslider.vue"
import Ada from "../components/money/ada.vue"
import Money from "../components/money/money.vue"
import Adb from "../components/money/adb.vue"
import Finance from "../components/money/finance.vue"
import Adc from "../components/money/adc.vue"
export default {
    components: {
        Heador,
        Slider,
        Ada,
        Money,
        Adb,
        Finance,
        Adc,
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
