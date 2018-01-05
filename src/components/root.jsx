import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {button} from 'antd';
import PCIndex from './common/pc_index';
import 'antd/dist/antd.css';

export default class Root extends React.Component {
	render() {
		return (
          <div>
            <PCIndex/>
          </div>
		);
	};
}

ReactDom.render(
   <Root/>, document.getElementById('mainContainer'));
