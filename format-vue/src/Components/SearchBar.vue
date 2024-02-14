<script>
    import { store } from '@/store';

    export default {
        name: 'SearchBar',
        data(){
            return{store}
        }
    }  
</script>

<template>
    <div class="flex-container-main">
        <div class="flex-container-section">
            <div>
                <h1>BOOLFLIX</h1>
            </div>
            <div id="links">
                <a href="#">Home</a>
                <a href="#">Serie TV</a>
                <a href="#">Film</a>
                <a href="#">Nuovi e popolari</a>
                <a href="#">La mia lista</a>
                <a href="#">Sfoglia per lingua</a>
            </div>
        </div>
        <div class="flex-container-section">
            <div id="ricerca">
                <input v-model="store.selectValue" type="text" name="" id="" placeholder="Cosa desideri vedere ?">
                <button @click="$emit('ricerca')"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <a href="#"><i class="fa-solid fa-bell"></i></a>
            <a href="#"><i class="fa-solid fa-user"></i></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../Styles/partials/mixins' as*;

    .flex-container-main{
        @include page-layout;
        display: flex;
        justify-content: space-between;

        .flex-container-section{
            display: flex;
            gap: 15px;
            align-items: center;

            #links{
                display: flex;
                gap: 15px;
            }

            h1{
                color: red;
                cursor: pointer;
            }

            a{
                text-decoration: none;
                color: white;
            }

            a:hover{
                color: gray;
            }

            #ricerca{
                display: flex;
                margin-right: 20px;

                input{
                    padding: 3%;
                }

                button{
                    padding: 3%;
                }
            }
        }
    }
</style>
