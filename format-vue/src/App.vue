<script>
    import SearchBar from './Components/SearchBar.vue';

    export default {
        components: {
            SearchBar
        },
        data(){
            return{}
        }
    }
</script>

<template>
    <header>
        <SearchBar/>
    </header>
</template>

<style lang="scss">
    @use './Styles/main.scss';

    header{
        background-color: black;
        padding-block: 1%;
    }
</style>
