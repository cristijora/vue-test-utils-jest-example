<template>
    <svg width="100" height="100">

        <path class="path-class" d="M10 10 H 90 V 90 H 10 L 10 10"/>
        <!-- Points -->
        <circle cx="10" cy="10" r="2" fill="red"/>
        <circle cx="90" cy="90" r="2" fill="red"/>
        <circle cx="90" cy="10" r="2" fill="red"/>
        <circle cx="10" cy="90" r="2" fill="red"/>

    </svg>
</template>

<script>
    export default {
        name: 'svg-test'
    }
</script>

<style scoped>

</style>