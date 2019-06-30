import { handleActions } from 'redux-actions'
import Immutable from 'immutable'
import * as actions from 'src/actions/away'

const initialState = Immutable.fromJS({
    message: ''
})

export default handleActions({
    [String(actions.initAway)](state, action) {
        return state.set('message', action.payload)
    },
}, initialState)