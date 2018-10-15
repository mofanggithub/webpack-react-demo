import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './component.css';
import Gamesfooter from './gameFooter.jsx';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class Contectcon extends Component{
	render(){
		return(
			<div>
			 <Layout className="layout">
			    <Content style={{ padding: '0 50px' }}>
			      <Breadcrumb style={{ margin: '16px 0' }}>
			        <Breadcrumb.Item>Home</Breadcrumb.Item>
			        <Breadcrumb.Item>Contect</Breadcrumb.Item>
			      </Breadcrumb>
			      <div style={{ background: '#fff', padding: 24, minHeight: 280, textAlign: 'center' }}>
			      	My Phone: 180****0028 <br />
			      	My Wechat: q69177****<br />
			      	My QQ: 69177****<br />
			      	My Github: https://github.com/**********?tab=repositories<br />
			      	<br />
			      	<br />
			      	This is a demo of my beginner's react. I hope I can take this as a springboard and move towards a higher place.<br />
			      	There are many flaws in this demo. I hope you will not mind.
			      </div>
			    </Content>
			  </Layout>
			  <Gamesfooter />
			 </div>
		)
	}
}

export default Contectcon;