import React from 'react';
import Carousel from 'antd/lib/carousel';
import DatePicker from 'antd/lib/date-picker';
import Menu from 'antd/lib/menu';
// import { Menu, Dropdown, Icon } from 'antd/lib/Dropdown;
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
// import {RaisedButton} from 'material-ui';
class App extends React.Component {
  render () {
    return(
      <div>
        <DatePicker />
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <Menu>
     <Menu.Item>
       <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
     </Menu.Item>
     <Menu.Item>
       <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
     </Menu.Item>
     <Menu.Item>
       <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
     </Menu.Item>
   </Menu>
      </div>
    )
  }
}

export default App;
