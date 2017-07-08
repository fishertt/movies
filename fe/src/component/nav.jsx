import React from 'react'
import {
    NavLink,
    withRouter
} from "react-router-dom"
import { Flex, Icon } from "antd-mobile"

 class Nav extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        const {pathname}=this.props.location
        const homeActive=pathname=='/home'
        return <Flex id="footerNav">
            <Flex.Item>
                <NavLink activeClassName="active home" to="/home" >
                    <Icon type={require('../common/svg/list.svg')} color={homeActive?"#108ee9":"#777"} className="home" size="xxs" />
                    <span className="nav-label">首页</span>
                </NavLink>
            </Flex.Item>
            <Flex.Item>
                <span className="circle">
                    <Icon type={require('../common/svg/edit.svg')}  size="xxs" className="edit" />
                </span>
            </Flex.Item>
            <Flex.Item>
                <NavLink activeClassName="active user" to="/user">
                    <Icon type={require('../common/svg/user.svg')}  color={!homeActive?"#108ee9":"#777"} size="xxs" />
                    <span className="nav-label">我的</span>
                </NavLink>
            </Flex.Item>
        </Flex>
    }

}

export default withRouter(Nav)