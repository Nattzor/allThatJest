const priceFormator = (price:number, currency?:string)=> {
    return price.toFixed(2)  + ' ' + (currency? currency:'SEK')
}



export default priceFormator