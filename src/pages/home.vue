<template >
    <div>
        <Heador/>
        <Slider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../components/public/header.vue"
import Footor from "../components/public/footer.vue"
import Navbar from "../components/public/navbar.vue"
import Slider from "../components/home/hslider.vue"
import Novice from "../components/home/novice.vue"
import Borrow from "../components/home/borrow.vue"
import Money from "../components/home/money.vue"
import Product from "../components/home/product.vue"
import Life from "../components/home/life.vue"
export default {
    components: {
        Heador,
        Slider,
        Novice,
        Borrow,
        Money,
        Product,
        Life,
        Footor,
        Navbar,
    },
}
</script>
