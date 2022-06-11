import React, {useEffect} from 'react';
import SideMenu from "../../components/sandBox/SideMenu";
import TopHeader from "../../components/sandBox/TopHeader";
import NewsRouter from '../../components/sandBox/NewsRouter'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import {Layout} from "antd";
import './NewsSandBox.css'

const {Content} = Layout;


function NewsSandBox() {
    NProgress.start()
    useEffect(() => {
        NProgress.done()
    })
    return (
        <Layout>
            <SideMenu/>
            <Layout>
                <TopHeader/>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        overflow: "auto"
                    }}
                >
                    <NewsRouter/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default NewsSandBox;
