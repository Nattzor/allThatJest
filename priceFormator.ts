const priceFormator = (price:number, currency?:string)=> {

    if(currency?.includes('%PRICE%')){
        return currency.replace('%PRICE%',price.toFixed(2).toString())
        } else{
           return price.toFixed(2).toString() + ' ' + (currency ? currency:'SEK')
        }
}
export default priceFormator
