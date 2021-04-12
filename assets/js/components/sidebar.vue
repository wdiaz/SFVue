<template>
    <div
        :class="componentClass"
        >
        <div v-show="!collapsed">
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

                <li
                    v-for="(category, index) in categories"
                    :key="index"
                    class="nav-item"
                >
                    <a
                        class="nav-link"
                        :href="category.link"
                    >{{ category.name }}</a>
                </li>
            </ul>
            <hr>
        </div>
        <div class="d-flex justify-content-end">
            <button
                class="btn btn-secondary btn-sm"
                @click="toggleCollapsed"
                v-text="collapsed ? '>>' : '<< Collapse'"
            />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Sidebar',
    components: {

    },
    props: {
        testProp: {
            type: String,
            default: 'I am a default value',
        },
    },
    data() {
        return {
            collapsed: false,
            categories: [
                {
                    name: 'Appliances',
                    link: '#',
                },
                {
                    name: 'Apps & Games',
                    link: '#',
                },
                {
                    name: 'Arts, Crafts, & Sewing',
                    link: '#',
                },
                {
                    name: 'Automotive Parts & Accessories',
                    link: '#',
                },
            ],
        };
    },
    computed: {
    /**
     * Compute the component classes depending on collapsed
     *
     * @returns {string[]}
     */
        componentClass() {
            const classes = [this.$style.component, 'p-3', 'mb-5'];
            if (this.collapsed) {
                classes.push(this.$style.collapsed);
            }
            return classes;
        },
    },
    created() {

    },
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
    },
};
</script>

<style lang="scss" module>
@import "../../scss/components/light-component";
.component {
  @include light-component;

  &.collapse {
    width: 70px;
  }
  ul {
    li a:hover {
      background: $blue-component-link-hover;
    }
  }
}
</style>
