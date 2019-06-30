import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux' // routerReducer这个由“react-router-redux”提供的reducer来管理路由的状态更新
import home from 'src/reducers/home'
import away from 'src/reducers/away'

export default combineReducers({
    router,
    home,
    away
})
