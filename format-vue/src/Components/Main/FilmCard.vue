<script>
import { store } from '@/store'

    export default {
        name: 'FilmCard',
        props: [
            'prop',
        ],
        data(){
            return{
            }
        },
        methods: {
            changeFlag(language){

                switch (language){
                    case 'en':
                        return 'us'
                    case 'ja':
                        return 'jp'
                    case 'he':
                        return 'il'
                    case 'zh':
                        return 'cn'
                    case 'ko':
                        return 'kr'
                    case 'hi':
                        return 'in'
                    default:
                        return language
                }
            },
            
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
            <div id="flag">
                <span>Original Language:</span><img :src="`https://flagsapi.com/${changeFlag(prop.original_language).toUpperCase()}/flat/24.png`" :alt="prop.original_language" style="width: 25px; border: none;">
            </div>
                <ul>
                    <li><span>Average Vote: </span></li>
                    <li v-for="(element, index) in 5" :key="index">
                        <i
                            class="fa-star"
                            :class="(element <= Math.ceil(( prop.vote_average / 2 ))) ? 'fas' : 'far'"
                            ></i>
                    </li>
                </ul>
            <p><span>Overview:</span> {{ prop.overview }}</p>
        </div>
        </div>
</template>

<style lang="scss" scoped>
    .card, .info-card{
        min-width: 350px;
        max-width: 360px;
        background-color: black;
        color: white;
        height: 550px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        cursor: pointer;

        
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

            #flag{
                display: flex;
                align-items: center;
                gap: 5px;
            }

            ul{
                list-style-type: none;
                display: flex;
                color: gold;
            }
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

    .starActive{
        color: yellow;
    }
</style>