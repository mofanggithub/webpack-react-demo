import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './component.css';
import Gameone from './img/game1.jpg';
import Gametwo from './img/game2.jpg';
import Gamethree from './img/game3.jpg';
import Gamelistone from './img/gamelist1.png';
import Gamelisttwo from './img/gamelist2.png';
import Gamelistthree from './img/gamelist3.png';
import Gamelistfour from './img/gamelist4.png';
import Gamezone from './img/c1.png';

import { Carousel, Row, Col } from 'antd';

class Gamecon extends Component{
	render(){
		return(
			<div style={{position: 'relative'}}>
			<h1 className="gamezone">
				Game
				&nbsp;&nbsp;
				<img src={Gamezone} />
				Zone
			</h1>
			  <Carousel autoplay className="game">
			    <div><img src={Gameone} /></div>
			    <div><img src={Gametwo} /></div>
			    <div><img src={Gamethree} /></div>
			  </Carousel>

			  <h1 className="gametitle">New Game</h1>
			  <Row>
			    <Col span={6} className="gamelist">
			    	<h2>Killer Clown</h2>
			    	<img src={Gamelistone} title="This is a game" />
			    </Col>
			    <Col span={6} className="gamelist">
			    	<h2>DIABLO</h2>
			    	<img src={Gamelisttwo} title="This is a game" />
			    </Col>
			    <Col span={6} className="gamelist">
			    	<h2>Elephant Nose</h2>
			    	<img src={Gamelistthree} title="This is a game" />
			    </Col>
			    <Col span={6} className="gamelist">
			    	<h2>Frosty Witch</h2>
			    	<img src={Gamelistfour} title="This is a game" />
			    </Col>
			  </Row>
			</div>
		)
	}
}

export default Gamecon;