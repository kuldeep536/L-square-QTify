export function sortByGenre(data, genreType){
    if(genreType === 'all'){
        console.log(data)
        return data;
    }
    return data.filter((item)=>{
        return item.genre.key === genreType;
    })
}