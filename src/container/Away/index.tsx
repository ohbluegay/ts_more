import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'src/actions/away'

interface Props {
    message: string
    actions?: any
}

// @ts-ignore // 暂时处理不允许使用修饰器的问题，可能是版本不兼容
@connect(
    (state: any) => ({
        message: state.away.get('message')
    }),
    (dispatch: any) => ({
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    })
)

export default class Away extends Component<Props, any> {
    constructor(props: Props) {
        super(props)
    }

    componentDidMount() {
      this.props.actions.initAway('123456768')
    }

    render() {
        const { message } = this.props
        return <div>{message}</div>
    }
}