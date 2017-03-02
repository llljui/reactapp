import React,{ Component } from 'react';
import "./logo.css";
import logos from "../../static/logos.jpg";
import logos1 from "../../static/logos1.jpg";
class logo extends Component {
	constructor(...args) {
		super(...args);
		this.state={
			
		}
	}
	render() {
        	
		var list=["狗粮","宠物用品","比熊","贵宾","金毛","哈士奇","贵兵犬","雪瑞纳","更多"];
		var _list=[];
		var li=["http://www.boqii.com/keywords/2.html","http://www.boqii.com/keywords/17.html","http://www.boqii.com/keywords/47.html","http://www.boqii.com/keywords/65.html","http://www.boqii.com/keywords/36.html","http://www.boqii.com/keywords/34.html","http://www.boqii.com/keywords/40.html","http://www.boqii.com/keywords/56.html","http://www.boqii.com/keywords/"];
        for(var j=0;j<list.length;j++){
        	_list.push(<ul key={j}><li><a href={li[j]}><h5>{list[j]}</h5></a></li></ul>);
        }



		return (
		<div className="logo_1">
		 <img src={logos} className="logo_1-logo" alt="logo" />
		 <div className="search"><input type="text" placeholder="请输入关键字" className="put"/><span><strong>搜索</strong></span>
		  <h5>热门搜索:</h5><div className="list">{_list}</div></div>
		  <img src={logos1} className="logo_1-logo-1" alt="logo" />
		</div>);
	}
}
export default logo;