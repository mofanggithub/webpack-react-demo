import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import axios from 'axios';
import './component.css';

const { Header, Content, Footer } = Layout;

class Last extends Component{
	constructor(props){
		super(props);
		this.state = {
			firstNewsImg: '',
			secondNewsImg: ''
		}
	}
	
	componentDidMount(){
		axios.get("https://www.apiopen.top/journalismApi") .then( 
			(response)=> {
				let newsdata = response.data.data; 
				this.setState({
					firstNewsImg: newsdata.auto,
					secondNewsImg: newsdata.war
				})
			})
		    .catch(function (error) {
		        console.log(error);
		    })
	}


	render(){
		let   firstNewsdatas = this.state.firstNewsImg,
			  secondNewsdatas = this.state.secondNewsImg;

		if( firstNewsdatas !== "" ){
			return(
				<div>
				<Row>
			      {firstNewsdatas.map( (item, index) => {
			      	return <Col key={index} span={3}><a title={item.title} href={item.link}><img src={firstNewsdatas[index].picInfo[0].url} className="newsimg" /></a></Col>
			      })}
			    </Row>
			    <Row>
			      {secondNewsdatas.map( (item, index) => {
			      	return <Col key={index} span={3}><a title={item.title} href={item.link}><img src={secondNewsdatas[index].picInfo[0].url} className="newsimg" /></a></Col>
			      })}
			    </Row>
				<Layout className="layout">
				 <Footer style={{ textAlign: 'center' }}>
				   MoFang ©2018 Created by Antd
				 </Footer>
			    </Layout>
			    </div>
			)
		}else{
			return(
				<div>
				<Row>
				  <div>
			      	load....
			      </div>
			    </Row>
				<Layout className="layout">
				 <Footer style={{ textAlign: 'center' }}>
				   MoFang ©2018 Created by Antd
				 </Footer>
			    </Layout>
			    </div>
			)
		}

		}
	
}

export default Last;