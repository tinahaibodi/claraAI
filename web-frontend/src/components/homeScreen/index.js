import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { inject, observer } from 'mobx-react';
import ClaraMain from "../claraMain";
import TileList from "../tileList";
const { Header, Sider, Content } = Layout;

@inject("appState") @observer
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            collapsed: false
        };
    }

    componentDidMount() {
        setTimeout(() => {this.setState({loading: false, collapsed: this.state.collapsed})}, 3000);
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Layout className="layout">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{width: 150}}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <a href='/'>
                                <Icon type="home" />
                                <span>Home</span>
                            </a>
                        </Menu.Item>
                        {/*<Menu.Item key="2">*/}
                            {/*<a href='/history'>*/}
                                {/*<Icon type="switcher" />*/}
                                {/*<span>History</span>*/}
                            {/*</a>*/}
                        {/*</Menu.Item>*/}
                        <Menu.Item key="3">
                            <a href='/setting'>
                                <Icon type="user" />
                                <span>Account</span>
                            </a>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            style={{marginLeft: 16}}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', position: "relative"}}>
                        <div style={{justifyContent: 'center'}}>
                            <ClaraMain/>
                            <TileList home={true} loading={this.state.loading}/>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}