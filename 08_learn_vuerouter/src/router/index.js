
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'


//配置映射关系
const routes = [
    { path: '/', redirect: "/home" },
    { path: '/home',name:"home", component: () => import(/* webpackChunkName:"home- 
chunck"*/"../pages/Home.vue"),
    children:[
        {
            path:'message',
            component:()=>import('../pages/HomePages/Message.vue')
        }
    ]
},
    { path: '/about', component: () => import("../pages/About.vue") },
    {path:"/user/:username",component:()=>import("../pages/User.vue")},
    {
        path:'/:pathMatch(.*)',
        component:()=>import("../pages/NotFound.vue")
    }
]


//动态添加路由
const categoryRoute={
    path:"/category",
    component:()=>import("../pages/Category.vue")
}

//添加顶级路由对象
router.addRoute(categoryRoute)

//添加二级路由对象
router.addRoute("home",{
    path:'moment',
    component:()=>import("../pages/HomePages/Moment.vue")
})

//创建路由对象,选择hash模式还是history模式
const router = createRouter({
    routes,
    history: createWebHashHistory()
})

//to:Route对象，即将跳转的对象
//from：Route对象

/***
 * 返回值问题:
 *  1.false：不进行导航
 *  2.undefined或者不写返回值：进行默认导航
 *  3.字符串：路径，跳转到对应的路径中
 *  4.对象：类似于 router.push({path:"/login",query:...})
 */

router.beforeEach((to,from)=>{
    console.log('进行路由跳转')

    if(to.path.indexOf('/home')!==-1){
        return '/about'
    }
})

export default router