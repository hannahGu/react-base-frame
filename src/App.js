import React from "react";
import {TabBar} from 'antd-mobile';
import Basic from './Basic';
const items =[{title:'外卖',icon:'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',key:'/main'},
{title:'订单',icon:'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',key:'/order'},
{title:'我的',icon:'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',key:'/mine'},];
export default class App extends Basic {
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'main'
    };
  }
  render() {
    return <div>
    <div style={{ height: '100%', width: '100%',position:'fixed',zIndex:999 } }>
     <TabBar
       unselectedTintColor="#949494"
       tintColor="#33A3F4"
       barTintColor="white"
      //  hidden={this.state.hidden}
     >
     {items.map((item,i)=>(
       <TabBar.Item
         title={item.title}
         key={item.title}
         icon={<div style={{
           width: '22px',
           height: '22px',
           background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
         />
         }
         selectedIcon={<div style={{
           width: '22px',
           height: '22px',
           background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
         />
         }
         selected={this.state.selectedTab === item.key}
         onPress={() => {
           this.setState({
             selectedTab: item.key,
           });
           this._forward(item.key);
         }}
        //  data-seed="logId"
       >
         {this.props.children}
       </TabBar.Item>
     ))}
       </TabBar>
       </div>
    </div>;
  }
}
