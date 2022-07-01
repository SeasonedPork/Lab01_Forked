const app = Vue.createApp({
    data(){
        return {
            product: 'Shoes',
            describetion: 'this socks smell great',
            link: 'https://www.camt.cmu.ac.th' ,
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 100,
            onSale: false
        }
    }
})
