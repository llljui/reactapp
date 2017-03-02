import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//初始化的样式
import App from './apppage/head/App';//导入需要的模块
import Foot from './apppage/foot/foot';
import Logo from './apppage/logo/logo';
import Con from './apppage/content/content';
import Cat from './apppage/cat/cat';
import Xiao from './apppage/xiaochon/xiaochon';
import Dog from './apppage/dog/dog';
import Shui from './apppage/shuizu/shuizu';
import Pa from './apppage/pachon/pachon';
import Gua from './apppage/guajian/guajian';
var top=document.getElementById('top');
ReactDOM.render(
  <App />,
  top
);
var ofoot=document.getElementById('foot');
ReactDOM.render(
  <Foot />,
  ofoot
);
var ologo=document.getElementById('logo');
ReactDOM.render(
  <Logo />,
  ologo
);
var content1=document.getElementById('content');
ReactDOM.render(
  <Con />,
  content1
);
var cat=document.getElementById('cat');
ReactDOM.render(
  <Cat />,
  cat
);
var dog=document.getElementById('dog');
ReactDOM.render(
  <Dog />,
  dog
);
var xiaochon1=document.getElementById('xiaochon');
ReactDOM.render(
  <Xiao />,
  xiaochon1
);

var shui=document.getElementById('shuizu');
ReactDOM.render(
  <Shui />,
  shui
);
var pa=document.getElementById('pachon');
ReactDOM.render(
  <Pa />,
  pa
);
var gua=document.getElementById('guajian');
ReactDOM.render(
  <Gua />,
  gua
);