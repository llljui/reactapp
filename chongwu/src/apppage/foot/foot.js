import React, { Component } from 'react';
import './foot.css';
import app from  '../../static/app.png';
import weibo from  '../../static/weibo.png';
import weixin from  '../../static/weixin.png';
class foot extends Component{
  constructor(...args) {
  	super(...args);
  	this.state={

  	}
  }
  render() {
  	var stringl="手机靓号网 手工制作 名鞋库 重庆人才网 旅游网 网上114 中型犬 小型犬 大型犬 淘狗网 发型图片 钱香金融 五笔输入法 搞笑图片 加盟网 慧聪网 返利网 影视大全 上海房产网 图库 手表网 免费发布信息 中国品牌网 编织人生 欣欣百宝箱 上海宠物 建材商城 宠物狗 知名宠物 用品商城 时尚宠物 家具城 美食天下 旅游攻略 钓鱼网 狗狗网 上海特卖会 龙鱼之巅 金象网"
  	var foot_l=stringl.split(" ");
  	var _foot_l=[];
  	for(var i=0;i<foot_l.length;i++){
  	_foot_l.push(<li key={i}><a target="_blank" href="#">{foot_l[i]}</a></li>);	
  	}
    var png=[app,weibo,weixin];
    var _p1=["波奇宠物app","官方微信","官方微博"];
    var _png=[];
    for(var p=0;p<png.length;p++){
      _png.push(<li key={p}><img src={png[p]} alt="图片" />
                        <span>{_p1[p]}</span>
</li>);
    }


  	return (<div className="_foot">
  			     <span>友情链接：</span><ul> {_foot_l}</ul>
             <div className="sao"><ul>{_png}</ul></div>
           </div>);
  }
}

export default foot;