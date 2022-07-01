const app = Vue.createApp({
    data(){
        return {
            product: 'Shoes',
            describetion: 'this socks smell great',
            link: 'https://www.camt.cmu.ac.th' ,
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 100,
            details: ['50% cotton','30% wool','20% polyster'],
            variants: [
                { id: 2234, color: 'green' , size:'  S  ' },
                { id: 2235, color: 'blue', size:'  M  '},
                { id: 69, color: 'null', size:' L '}
            ],
            cart: 0,
            onSale: false
        }
    }
})
