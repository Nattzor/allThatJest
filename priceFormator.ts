const priceFormator = (price:number, currency?:string)=> {
    
    if(currency?.includes('%PRICE%')){
        console.log(currency.replace('%PRICE%',price.toFixed(2).toString()))
        return currency.replace('%PRICE%',price.toFixed(2).toString())
        
       
        } else{

           return price.toFixed(2).toString() + ' ' + currency?currency:'SEK'

        }

        
    
}

// return currency?.replace('%PRICE%',price.toString())  


export default priceFormator

// roundPrice(232.10542, '%PRICE% kr') → "232.11 kr"
// roundPrice(14, '$%PRICE%') → "$14.00"
// roundPrice(1024.2048, 'USD %PRICE%') → "USD 1024.20 SEK"