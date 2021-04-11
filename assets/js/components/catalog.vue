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
                TODO: Load more products
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
            legend: 'tu nana was here',
        };
    },
};
</script>

<style scoped>

</style>
