const App={
    template:'#my-app',
    data(){
      return{
        
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2006-09',
                price:85.00,
                count:1
            },
            {
                id:1,
                name:'《算法导论》2',
                date:'2006-09',
                price:85.00,
                count:1
            },
            {
                id:1,
                name:'《算法导论》3',
                date:'2006-09',
                price:85.00,
                count:1
            }
        ]
      }
    },
    computed:{
        totalPrice(){
            let finalPrice=0
            for(let book of this.books){
                finalPrice+=book.count*book.price
            }
            return finalPrice
        },
        //Vue3不支持过滤器，推荐两种做法 计算属性/全局方法
        filterBooks(){
            return this.books.map(item=>{
                const newItem=Object.assign({},item)
                newItem.price="$"+item.price
                return newItem
            })
        }
    },
    methods: {
        increment(index){
            this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
        },
        remove(index){
            this.books.splice(index,1)
        },
        formatPrice(price){
            return '$'+price
        }
    },
  }

  Vue.createApp(App).mount('#app')