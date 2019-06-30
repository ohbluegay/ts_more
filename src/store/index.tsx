import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware  from 'redux-saga'
import rootSaga from 'src/sagas'
import reducers from 'src/reducers'

const sagaMiddleware = createSagaMiddleware() //执行得到saga中间件
const store = createStore(reducers, applyMiddleware(sagaMiddleware)) //使用中间件
sagaMiddleware.run(rootSaga) // 执行saga

export default store