<template>
    <router-view></router-view>
    <Footer />
</template>

<script lang="ts">
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: { Footer },
};
</script>

<style lang="scss"></style>
