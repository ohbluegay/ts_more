import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'src/actions/home'

interface Props {
    messages: string
    actions?: any
}

interface State {
    init: true
}

// @ts-ignore // 暂时处理不允许使用修饰器的问题，可能是版本不兼容
@connect(
    (state: any) => ({
        messages: state.home.get('message')
    }),
    (dispatch: any) => ({
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    })
)

export default class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    componentDidMount() {
        this.props.actions.initHome('先传过去一个值哦,3秒之后隐藏')
    }

    componentWillReceiveProps(nextProps: Props) {
        console.log(nextProps.messages)
    }

    render() {
        const { messages } = this.props
        return <div>{messages}</div>
    }
}