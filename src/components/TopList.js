import React, {Component} from 'react';
import '../App.css';

class TopList extends React.Component {
	render() {
    return(
			<div>
			<h1>HELLO TOP LIST</h1>
			<list>

			</list>
    <div className="TopList">
 		<div className="T">
     	<ul>
     		<li><p>Buckingham Palace</p></li>
     		<li><p>Big Ben</p></li>
     		<li><p>Westminster Palace </p></li>
     		<li><p>Harrods</p></li>
     		<li><p>London Eye</p></li>
     	</ul>
 	</div>
 	<div className="T">
 		<ul>
 			<li><p>Tower of London</p></li>
 			<li><p>Travalgar Square </p></li>
			<li><p>Piccadily Circus</p></li>
 			<li><p>O2 Arena</p></li>
 			<li><p>Hyde Park</p></li>
     </ul>
 	</div>
 	</div>
	</div>
		)
}
};

export default TopList;