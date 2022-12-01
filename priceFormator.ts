const priceFormator = (price:number, currency?:string)=> {
    return currency?.includes('%PRICE%')? currency?.replace('%PRICE%',price.toFixed(2).toString()):price.toFixed(2) + ' ' +(currency?currency:'SEK')
}

// return currency?.replace('%PRICE%',price.toString())  


export default priceFormator

// roundPrice(232.10542, '%PRICE% kr') → "232.11 kr"
// roundPrice(14, '$%PRICE%') → "$14.00"
// roundPrice(1024.2048, 'USD %PRICE%') → "USD 1024.20 SEK"