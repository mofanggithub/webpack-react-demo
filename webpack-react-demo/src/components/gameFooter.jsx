import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './component.css';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class Gamefoo extends Component{
	render(){
		return(
			 <Layout className="layout">
			    <Footer style={{ textAlign: 'center' }}>
			      Ant Design ©2018 Created by Ant UED
			    </Footer>
			  </Layout>
		)
	}
}

export default Gamefoo;