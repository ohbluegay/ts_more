import { handleActions } from 'redux-actions'
import Immutable from 'immutable'
import * as actions from 'src/actions/home'

const initialState = Immutable.fromJS({
    message: ''
})

export default handleActions({
    [String(actions.initHome)](state, action) {
        return state.set('message', action.payload)
    },
    [String(actions.resetHome)](state) {
        return state.set('message', '')
    }
}, initialState)