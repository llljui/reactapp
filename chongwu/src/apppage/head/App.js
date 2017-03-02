import React, { Component } from 'react';
import './App.css';
import logo from '../../static/logo.svg';
class App extends Component {
  constructor(...args) {
    super(...args);
   this.state={

   }
  }
  render() {
    var nav=["波奇网","波奇商城","波奇服务","波奇论坛","宠物百科"];
    var _nava=["http://www.boqii.com","http://shop.boqii.com","http://vet.boqii.com",
    "http://bbs.boqii.com","http://www.boqii.com/baike/"]
    var _nav=[];
    var list=["登陆","注册","微博","微信","手机版"];
    var _list=[];
    var _lista=["http://www.boqii.com/user/login","http://www.boqii.com/user/register","http://e.weibo.com/boqii","","http://www.boqii.com/subject/mobile/"]
    for(var i=0;i<nav.length;i++){
      _nav.push( <li key={i}><a href={_nava[i]} target="_blank"><h5>{nav[i]}</h5></a></li>);
    }

    for(var j=0;j<list.length;j++){
      _list.push(<li key={j}><a href={_lista[j]} target="_blank"><h5>{list[j]}</h5></a></li>);
    }

    return (
      <div className="App" >
          <img src={logo} className="App-logo" alt="logo" />
          <ul className='nava_l'>
            {_nav}
          </ul>
          <ul className='nava_r'>
            {_list}
          </ul>
      </div>
    );
  }
}

export default App;
