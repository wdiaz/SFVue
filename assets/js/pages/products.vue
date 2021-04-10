<template>
    <div class="container-fluid">
        <div class="row">
            <aside class="col-xs-12 col-3">
                <!-- <div :class="$style.sidebar"> -->
                <div :class="[$style.sidebar, 'p-3', 'mb-5']">
                    <h5 class="text-center">
                        Categories
                    </h5>
                    <ul class="nav flex-column mb4">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="/"
                            >All Products</a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                            >Category A</a>
                        </li>

                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                            >Category B</a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="col-xs-12 col-9">
                <div class="row">
                    <div class="col-12">
                        <h1>
                            Products
                        </h1>
                        <!-- <legend-component v-bind:title="legend" /> -->
                        <legend-component :title="legend" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LegendComponent from '../components/legend';

export default {
    name: 'Products',
    components: { LegendComponent },
    /*data() {
        return {
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
        };
    }, or*/
    data: () => ({
        legend: 'Shipping takes 10-12 weeks!',
    }),
};
</script>
<style lang="scss" module>
@import "../../scss/components/light-component";
.sidebar {
  @include light-component;
  ul {
    li a:hover {
      background: $blue-component-link-hover;
      background: blue;
    }
  }
}
</style>
