<script>
    import FilmCard from './FilmCard.vue'

    import { store } from '@/store';

    export default {
        components: {
            FilmCard
        },
        name: 'CardMain',
        data(){
            return{store}
        }
    }  
</script>

<template>
    <section>
        <div class="main-containers">
            <h1>Films:</h1>
            <div class="flex-container">
                <FilmCard v-for="(movie, index) in store.movieList" :key="index" :prop="movie"/>
            </div>
        </div>

        <div class="main-containers">
            <h1>Series:</h1>
            <div class="flex-container">
                <FilmCard v-for="(series, index) in store.seriesList" :key="index" :prop="series"/> 
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../Styles/partials/mixins' as*;

    .main-containers{
        display: flex;
        flex-direction: column;

        h1{
            color: white;
        }
    }

    section{
      @include page-layout;
      display: flex;
      flex-direction: column;
      gap: 70px;
    }

    .flex-container{     
        display: flex;
        overflow-x: scroll;
        gap: 10px;
    }
</style>