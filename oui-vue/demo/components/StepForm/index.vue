<template>
    <div class="oil-step-form">
        step form
    </div>
</template>
<script>

import logo from '../../assets/logo.png';

export default {
    name: 'StepForm',
    props: {
      
    },
    data() {
        return {
            logo,
        }
    },
    computed: {
        color() {
            return this.$store.getters.color;
        }
    },
    methods: {
       
    }
};
</script>

<style lang="less" scoped>
    .oil-step-form{

    }
</style>
