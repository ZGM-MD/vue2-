import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import BlogHeader from './components/BlogHeader.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog.vue'

export default[
    {path:"/show",component:ShowBlogs},
    {path:"/add",component:AddBlog},
    {path:"/home",component:BlogHeader},
    {path:"/blog/:id",component:SingleBlog},
    {path:"/edit/:id",component:EditBlog}
]