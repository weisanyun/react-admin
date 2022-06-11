import React, {useState} from 'react';
import {Dropdown, Layout, Menu, Avatar} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined, UserOutlined,
} from '@ant-design/icons';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const {Header} = Layout;

function TopHeader(props) {
    // const [collapsed, setCollapsed] = useState(false)
    const changeCollapsed = () => {
        // setCollapsed(!collapsed)
        props.changeCollapsed()
    }
    const {role: {roleName}, username} = JSON.parse(localStorage.getItem("token"))
    const menu = (
        <Menu>
            <Menu.Item>
                {roleName}
            </Menu.Item>
            <Menu.Item danger onClick={() => {
                localStorage.removeItem("token")
                // console.log(props.history)
                props.history.replace("/login")
            }}>退出</Menu.Item>
        </Menu>
    );

    return (
        <Header className="site-layout-background" style={{padding: '0 16px', background: 'white'}}>
            {
                props.isCollapsed ? <MenuUnfoldOutlined onClick={changeCollapsed}/> :
                    <MenuFoldOutlined onClick={changeCollapsed}/>
            }
            <div style={{float: 'right'}}>
                <span>欢迎<span style={{color: "#1890ff"}}>{username}</span>回来</span>
                <Dropdown overlay={menu} placement={'bottomRight'}>
                    <Avatar size="large" icon={<UserOutlined/>}/>
                </Dropdown>
            </div>
        </Header>
    );
}

/*
 connect(
  // mapStateToProps
  // mapDispatchToProps
 )(被包装的组件)
*/

const mapStateToProps = ({CollApsedReducer: {isCollapsed}}) => {
    // console.log(state)
    return {
        isCollapsed
    }
}

const mapDispatchToProps = {
    changeCollapsed() {
        return {
            type: "change_collapsed"
            // payload:
        }//action
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopHeader))
