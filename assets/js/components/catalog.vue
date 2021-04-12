<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h1>
                    Products
                </h1>
                <!-- <legend-component v-bind:title="legend" /> -->
                <legend-component :title="legend" />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-6 mb-2 pb-2">
                <p>TODO: Load more products</p>
            </div>
        </div>
    </div>
</template>

<script>
import legendComponent from './legend';

export default {
    name: 'Catalog',
    components: {
        legendComponent,
    },
    data() {
        return {
            legend: 'Shipping takes 10-12 weeks, and products probably won\'t work!',
        };
    },
};
</script>
