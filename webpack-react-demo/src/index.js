import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/header.jsx';
import Newscontent from './components/newsContent.jsx';
import Newsfooter from './components/newsFooter.jsx';
import Gamescontent from './components/gameContent.jsx';
import Gamesfooter from './components/gameFooter.jsx';
import Contectcontent from './components/contectContent.jsx';
import 'antd/dist/antd.css';
import './index.css';

class News extends Component{

	render(){
		return(
			<div>
			 	<Newscontent />
				<Newsfooter />
			 </div>
		)
	}
}

class Games extends Component{

	render(){
		return(
			<div>
			 	<Gamescontent />
				<Gamesfooter />
			 </div>
		)
	}
}

class Contect extends Component{

	render(){
		return(
			<div>
			 	<Newscontent />
				<Newsfooter />
			 </div>
		)
	}
}

class App extends Component{
	render(){
		return(
				<div>
					<Header />
					<BrowserRouter>
						<div className="route">
							导航：
							<Link to="/" className="tworoute">NEWS</Link>
						    <Link to="/game" className="tworoute">GAMES</Link>
						    <Link to="/contect" className="tworoute">CONTECT</Link>
							<Route path="/" component={News} exact />
							<Route path="/game" component={Games} />
							<Route path="/contect" component={Contectcontent} />
						</div>
					</BrowserRouter>
				</div>
		)
	}
}

ReactDOM.render(
	<App />,
    document.getElementById('root')
)