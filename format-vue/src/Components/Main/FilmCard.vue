<script>
    export default {
        name: 'FilmCard',
        props: [
            'prop',
        ],
        data(){
            return{}
        }
    }  
</script>

<template>
    <div class="main-card">
        <div class="card">
            <img :src="`${ 'https://image.tmdb.org/t/p/w300' + prop.poster_path}`" alt="cover">
            <h4>{{ prop.original_title ? prop.original_title : prop.original_name}}</h4>
        </div>

        <div class="info-card">
            <p><span>Title:</span> {{ prop.title ? prop.title : prop.name }}</p>
            <p><span>Original Title:</span> {{ prop.original_title ? prop.original_title : prop.original_name }}</p>
            <p><span>Original Language:</span> {{ prop.original_language }}</p>
            <p><span>Average Vote:</span> {{ prop.vote_average }}</p>
            <p><span>Overview:</span> {{ prop.overview }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card, .info-card{
        min-width: 350px;
        background-color: black;
        color: white;
        height: 550px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 15px;

        
        img{
            border: 2px solid gray;
        }
        
        h4{
            margin-bottom: 20px;
        }
    }

    .main-card:hover{
        .card{
            display: none;
        }

        .info-card{
            display: block;
        }
    }

    .info-card{  
        display: none;
        font-size: 20px;
        overflow-y: scroll;

        span{
            color: cyan;
        }
    }
</style>