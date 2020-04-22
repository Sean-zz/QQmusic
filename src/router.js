import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import List from './components/List'
import Add from './components/Add'
import Update from './components/Update'
import Detail from './components/Detail'
var routes=[
    {path:'/',component:List},
    {path:'/add',component:Add},
    {path:'/update/:id',name:'update',component:Update},
    {path:'/detail/:id',name:'detail',component:Detail}
]
var router=new VueRouter({routes,mode:'history'})
export default router;