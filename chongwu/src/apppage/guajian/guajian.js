import React, {Component} from 'react';
import  './guajian.css';
import cat from '../../static/cat.png';
import dog from '../../static/dog.png';
import yu from '../../static/yu.png';
import ro from '../../static/ro.png';
import wu from '../../static/wu.png';
import go from '../../static/go.png';
class guajian extends Component{
constructor(...props) {
	super(...props);
	this.state={
		show:"none"

	}
	 var goes=document.querySelectorAll("li")[5];
  	    goes.style.display=this.state.show;

}
  fn(){
  		this.setState({
                
  		});
  }

  componentDidMount() {
		  	var bd=document.querySelector('body');
		  	 bd.onwheel=function(){console.log('滚了');
		    	 var scrolltop=window.pageYOffset;//返回到窗口顶端的距离
		  	 		 console.log(scrolltop);
		  	 if (scrolltop>100) {		 	
		     	console.log("距离顶端高于100");
		  	  }
		  	}
 		 } 
render() {
	var an=[cat,dog,yu,ro,wu,go];
	var _an=[];
		for(var n=0;n<an.length;n++){
			_an.push(<li key={n}><img src={an[n]} alt="图片"/></li>);};
	return(
		<div className="guajian" ><ul>{_an}</ul></div>
			

		);
}
}
export default guajian;