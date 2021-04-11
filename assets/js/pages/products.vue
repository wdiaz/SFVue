<template>
    <div class="container-fluid">
        <div class="row">
            <aside class="col-xs-12 col-3">
                <!-- <div :class="$style.sidebar"> -->
                <Sidebar />
            </aside>
            <div class="col-xs-12 col-9">
                <div class="row">
                    <Catalog />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Catalog from '../components/catalog';
import Sidebar from '../components/sidebar';

export default {
    name: 'Products',
    //components: { LegendComponent },
    components: {
        Catalog,
        Sidebar,
    },
    /*data() {
        return {
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work',
        };
    }, or*/
    /*data: () => ({
        legend: 'Shipping takes 10-12 weeks. Order now and receive your products!',
    }),*/
};
</script>
