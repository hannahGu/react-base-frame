import React from 'react';
import Basic from './Basic';
import {NavBar,List,Icon} from 'antd-mobile';
import {falseOrder} from './falsedata/falsedata';
const Item = List.Item;
const Brief = Item.Brief;
export default class Order extends Basic{
  render(){
    return(
      <div>
      <NavBar
    mode="light"
    icon={<Icon type="left" />}
    onLeftClick={(e)=>console.log('e',e)}
  >订单</NavBar>
  <List>
  {falseOrder.map((item,i)=>(
      <Item
        key={`${item['restaurant_id']}_${i}`}
        thumb={require(`./images/slider-pic/slider-pic2.jpg`)}
        multipleLine
        onClick={() => {}}
        extra={
          <div>
          <p style={{marginTop:28}}>{item.order_state}</p>
          <hr />
          <p>{item.order_price}</p>
          </div>
        }
      >
        {item['store_name']}
        <Brief>
          <p>{item['order_birth_time']}</p>
        </Brief>
        <hr />
        <p>{item['order_brief_info']}</p>
      </Item>
  ))}
  </List>
      </div>
    );
  }
}
