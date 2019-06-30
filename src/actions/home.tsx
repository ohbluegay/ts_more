import { createAction } from 'redux-actions'

export const initHome = createAction<any>('home/INIT_HOME')
export const resetHome = createAction('home/RESET_HOME')