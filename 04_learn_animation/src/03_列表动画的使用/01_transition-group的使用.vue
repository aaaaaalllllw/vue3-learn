 <template>
    <div>
 <button @click="addNum">添加数字</button>
 <button @click="removeNum">删除数字</button>

 <transition-group>
    <span v-for="item in numbers" :key="item" class="item" name="why">
        {{item}}
    </span>
 </transition-group>
    </div>
 </template>
 
 <script>
    export default {
        data(){
            return{
                numbers:[0,1,2,3,4,5,6,7,8,9],
                numCounter:10
            }
        },
        methods:{
            addNum(){
               
                this.numbers.splice(this.randomIndex(),0,this.numCounter++)
            },
            removeNum(){
                 this.numbers.splice(this.randomIndex(),1)
            },
            randomIndex(){
                return Math.floor(Math.random()*this.numbers.length)
            }
        }
    }
 </script>
 
 <style scoped>
    .item{
        margin-left: 10px;
        display: inline-block;
    }

    .why-enter-from,
    .why-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }

    .why-enter-active,
    .why-leave-active{
        transition: all 1s ease;
    }

    .why-move{
        transition:transform 1s ease;
    }


 </style>