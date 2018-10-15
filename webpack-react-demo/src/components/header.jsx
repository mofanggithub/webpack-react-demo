import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './component.css';
import Userimg from './img/user.jpg';
import { Layout, Menu, Breadcrumb, Avatar, Modal, Button } from 'antd';
const { Header, Content, Footer } = Layout;

class Fir extends Component{
	constructor(props){
		super(props);
		this.state = {
	    ModalText: 'Are you sure you want to quit the current user?',
	    visible: false,
	    confirmLoading: false,
	    user: false
	  }

	}


  showModal() {
    this.setState({
      visible: true,
      ModalText: 'Are you sure you want to quit the current user?'
    });
  }

  handleOk(){
    this.setState({
      ModalText: 'Being withdrawn......',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
        user: false
      });
    }, 2000);
  }

  handleCancel(){
    this.setState({
      visible: false,
    });
  }

  signIn(){
  	this.setState({
  		user: true
  	})
  }

	render(){
		const { visible, confirmLoading, ModalText } = this.state;
		let userHtml = '';
		if( this.state.user ){
			userHtml = (
				<Menu.Item key="4" className="header_user"><Avatar id="user" src={Userimg} /></Menu.Item>
			)
		}else{
			userHtml = (
				<Menu.Item key="4" className="header_user" onClick={this.signIn.bind(this)}>登录</Menu.Item>
			)
		}

		return(
			 <Layout className="layout">
			    <Header>
			      <div className="logo" />
			      <Menu
			        theme="dark"
			        mode="horizontal"
			        defaultSelectedKeys={['']}
			        style={{ lineHeight: '64px' }}
			      >
				      <Menu.Item key="0">LOGO</Menu.Item>
			          <Menu.Item key="3" className="header_user" type="primary" onClick={this.showModal.bind(this)}>EXIT</Menu.Item>
			          {userHtml}
			      </Menu>
			      <Modal title="Title"
			          visible={visible}
			          onOk={this.handleOk.bind(this)}
			          confirmLoading={confirmLoading}
			          onCancel={this.handleCancel.bind(this)}
			      >
			          <p>{ModalText}</p>
			      </Modal>
			    </Header>
			 </Layout>
		)
	}
}

export default Fir;