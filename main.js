const app = Vue.createApp({
	data() {
		return{
			//this gonna change from 'Socks' to 'Boots' use Live Html for result
			product: 'Shoes',
			image: './assets/images/socks_green.jpg',
			inStock: true,
			inventory: 100,
			details: ['50% cotton' , '30% wool' , '20% polyester'],
			variants: [
				{ id: 2234, color: 'green',image: './assets/images/sock_green.jpg'},
				{ id: 2235, color: 'blue',image: './assets/images/sock_blue.jpg'}
			],
			cart: 0
			//product: 'Socks',
			//image: './assets/images/socks_green.jpg'
		}
	},
	methods:{
		addToCart() {
			this.cart += 1
		},
		updateImage(variantImage){
			this.image = variantImage
		}
	}
})
