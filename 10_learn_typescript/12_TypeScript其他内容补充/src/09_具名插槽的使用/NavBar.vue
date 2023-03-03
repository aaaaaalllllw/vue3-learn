<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
             <slot name="center"></slot>
        </div>
        <div class="right">
             <slot name="right"></slot>
        </div>
        <div class="addtion">
            <slot :name=name>

            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            name:{
                type:String
            }
        }
    }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
    }
    .left,.right,.addtion  {
        width: 80px;
        background: red;
    }
    .center{
        flex: 1 ;
        background: blue;
    }
</style>