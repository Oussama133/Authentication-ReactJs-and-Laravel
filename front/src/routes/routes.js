import Profile from "../components/admin/Profile"
import Dashboard from "../components/admin/Dashboard"

const routes = [
    { path: '/admin', exact: true, name:'Admin'},
    { path: '/admin/dashboard', exact: true, name:'Dashboard', component: Dashboard},
    { path: '/admin/profile', exact: true, name:'Profile', component: Profile},
]

export default routes;