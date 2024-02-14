import { reactive } from 'vue'

export const store = reactive({
    selectValue: '',
    movieList: [],
    seriesList: [],
    movieKey: 'https://api.themoviedb.org/3/search/movie?api_key=3a02d674602b23cd1cd8c98c35dbfac2',
    seriesKey: 'https://api.themoviedb.org/3/search/tv?api_key=3a02d674602b23cd1cd8c98c35dbfac2'
})
