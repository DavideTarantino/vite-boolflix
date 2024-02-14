<script>
    import SearchBar from './Components/SearchBar.vue';

    import { store } from './store';
    import axios from 'axios'

    export default {
        components: {
            SearchBar
        },
        data(){
            return{store}
        },
        methods: {
            getMovie(){
                if( store.selectValue ){
                    
                    axios.get(`${store.movieKey}&query=${store.selectValue}`)
                        .then((res) => {
                            console.log( res.data.results )
                            store.movieList = res.data.results
                        })
                }
            },
            getSeries(){
                if( store.selectValue ){
                    
                    axios.get(`${store.seriesKey}&query=${store.selectValue}`)
                        .then((res) => {
                            console.log( res.data.results )
                            store.seriesList = res.data.results
                        })
                }
            },
            search(){
                this.getMovie()
                this.getSeries()
            }
        }
    }
</script>

<template>
    <header>
        <SearchBar @ricerca="search"/>
    </header>
</template>

<style lang="scss">
    @use './Styles/main.scss';

    header{
        background-color: black;
        padding-block: 1%;
    }
</style>
