<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Welfare/>
        <Service/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../components/public/header.vue"
import Footor from "../components/public/footer.vue"
import Navbar from "../components/public/navbar.vue"
import Slider from "../components/ious/islider.vue"
import Welfare from "../components/ious/welfare.vue"
import Service from "../components/ious/service.vue"
export default {
    components: {
        Heador,
        Slider,
        Welfare,
        Service,
        Footor,
        Navbar,
    },
}
</script>
