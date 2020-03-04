export default{
    path:'/cinema',
    component : () => import('@/views/Cinema'),
    children:[
        {
            path:'allCity',
            component : () => import('@/components/AllCity')
        },{
            path:'brand',
            component : () => import('@/components/Brand')
        },{
            path:'feature',
            component : () => import('@/components/Feature')
        },{
            path:'/cinema',
            redirect: '/cinema/allCity'
        }
    ]
}