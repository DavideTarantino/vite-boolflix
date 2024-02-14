<script>
    export default {
        name: 'FilmCard',
        props: [
            'prop',
            'imgProp'
        ],
        data(){
            return{}
        }
    }  
</script>

<template>
    <div class="card">
        <img :src="`${ 'https://image.tmdb.org/t/p/w300' + prop.poster_path}`" alt="cover">
        <h4>{{ prop.original_title ? prop.original_title : prop.original_name}}</h4>
    </div>
</template>

<style lang="scss" scoped>
    .card{
        width: calc((100% / 5) - 10px);
        background-color: black;
        color: white;
        height: 550px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img{
            border: 2px solid gray;
        }
    }
</style>