import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Layout, Menu, Breadcrumb, Row, Col, Carousel, Tabs } from 'antd';
import './component.css';
const TabPane = Tabs.TabPane;
const { Header, Content, Footer } = Layout;
function callback(key) {
}
class Sec extends Component{
	constructor(props){
		super(props);
		this.state = {
			interNewsdatas: '',
			enterNewsdatas: '',
			MilitNewsdatas: ''
		}
	}
	
	componentDidMount(){
		axios.get("https://www.apiopen.top/journalismApi") .then( 
			(response)=> {
				let newsdata = response.data.data; 
				this.setState({
					interNewsdatas: newsdata.tech,
					enterNewsdatas: newsdata.auto,
					MilitNewsdatas: newsdata.money,
				})
			})
		    .catch(function (error) {
		        console.log(error);
		    })
	}

	render(){
		let   interNewsdatas = this.state.interNewsdatas,
			  enterNewsdatas = this.state.enterNewsdatas,
			  MilitNewsdatas = this.state.MilitNewsdatas,
			  interNewsdatasHtml = '',
			  enterNewsdatasHtml = '',
			  MilitNewsdatasHtml = '';
		if( interNewsdatas !== ""){
			interNewsdatasHtml = (
				<ul  className="newsul">
	                {interNewsdatas.map((item, index) => {
	                    return <li key={index} className="newsli"><a title={item.source} href={item.link}>{item.digest}</a><span>浏览次数: {item.tcount}</span></li>
	                })}
	            </ul>
			)

	        enterNewsdatasHtml = (
				<ul  className="newsul">
	                {enterNewsdatas.map((item, index) => {
	                    return <li key={index} className="newsli"><a title={item.source} href={item.link}>{item.digest}</a><span>浏览次数: {item.tcount}</span></li>
	                })}
	            </ul>
			)

	        MilitNewsdatasHtml = (
				<ul  className="newsul">
	                {MilitNewsdatas.map((item, index) => {
	                    return <li key={index} className="newsli"><a title={item.source} href={item.link}>{item.digest}</a><span>浏览次数: {item.tcount}</span></li>
	                })}
	            </ul>
			)
		} else{
			interNewsdatasHtml = (
				<div>
					Loading.......
				</div>
			)
			enterNewsdatasHtml = (
				<div>
					Loading.......
				</div>
			)
			MilitNewsdatasHtml = (
				<div>
					Loading.......
				</div>
			)
		}
		return(
			<Layout className="layout">
			 <Content style={{ padding: '0 50px' }}>
			      <Breadcrumb style={{ margin: '16px 0' }}>
			        <Breadcrumb.Item>Home</Breadcrumb.Item>
			        <Breadcrumb.Item>News</Breadcrumb.Item>
			      </Breadcrumb>
		      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
		      	<Row>
			      <Col span={10}>
			      	  <Carousel autoplay>
					    <div className="news">NWES PAGES ONE</div>
					    <div className="news">NWES PAGES TWO</div>
					    <div className="news">NWES PAGES THREE</div>
					    <div className="news">NWES PAGES FOUR</div>
					  </Carousel>
			      </Col>
			      <Col span={1}></Col>
			      <Col span={13}>
			      	  <Tabs defaultActiveKey="1" onChange={callback}>
					    <TabPane tab="International" key="1">
					    	{interNewsdatasHtml}
					    </TabPane>
					    <TabPane tab="Entertainment" key="2">
					    	{enterNewsdatasHtml}
					    </TabPane>
					    <TabPane tab="Military" key="3">
					    	{MilitNewsdatasHtml}
					    </TabPane>
					  </Tabs>
			      </Col>
			    </Row>
		      </div>
		     </Content>
		    </Layout>
		)
	}
}

export default Sec;