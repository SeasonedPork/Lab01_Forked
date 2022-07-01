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
                { id: 2234, color: 'green' , size:'  S  ' , image: './asset/images/socks_green.jpg'},
                { id: 2235, color: 'blue', size:'  M  ' , image: './asset/images/socks_blue.jpg'},
                { id: 69, color: 'null', size:' L ' , image: './asset/images/socks_green.jpg'}
            ],
            cart: 0,
            onSale: true
        }
        
    },
    methods: {
        addToCart() {
            this.cart +=1
        },
        invert(){
            if (this.inventory > 1){
                this.inventory -= 90
            }
        },
        back(){
            this.inventory +=100
        }
    } 
})
