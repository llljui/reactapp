import React, {Component} from 'react';
import  './content.css';
import lun1 from "../../static/lun1.png";
class content extends Component{
constructor(...props) {
	super(...props);
	this.state={

	}
}

render() {
	var nav=[ "","首页","狗狗","猫咪","小宠","水族","爬虫","波奇服务","波奇商城","","波奇无线"];
	var navl=["http://www.boqii.com","http://www.boqii.com/dog/","http://www.boqii.com/cat/","http://www.boqii.com/small/","http://www.boqii.com/fish/","http://www.boqii.com/reptile/","http://vet.boqii.com","http://shop.boqii.com","http://www.boqii.com/subject/mobile/"];
    var _nav=[];
    var newh=["狗狗聪明度排行榜TOP30全解析","冬季到了，巧主人为狗狗量体裁衣","我很二，但是我很温柔——哈士奇","贵宾犬养护不得不知道的事"];
    var newa=["http://www.boqii.com/zhuanti/28.html","http://www.boqii.com/zhuanti/27.html","http://www.boqii.com/zhuanti/26.html","http://www.boqii.com/zhuanti/1.html"]
    var newb=["相信养狗的主人一定都会非常关心自家的狗宝贝...","有一种冷，叫主人觉得你很冷。 冬季到了...","哈士奇又叫西伯利亚雪撬犬，是比较常见的中...","贵宾犬是目前国内最受欢迎的犬种之一，它们以其..."]
    var _new=[];
	for(var i=0;i<nav.length;i++){_nav.push(<li key={i}><a href={navl[i]}>{nav[i]}</a></li>);}
	for(var j=0;j<newh.length;j++){_new.push(<dl key={j}><dt><a href={newa[j]}><h4>{newh[j]}</h4></a></dt><dd>{newb[j]}</dd></dl>);}	

	return(
		<div className="content">
          <div><ul className='navbar'>{_nav}</ul></div>
          <div className="lunbo"><span></span><img src={lun1} alt="图片" className="lun"/><span></span></div>
          <div className="news"><span><h3>热门专题</h3></span>{_new}</div>
		</div>
		);
}
}
export default content;