import React from "react";
import { List, Flex, NavBar, Icon } from "antd-mobile";
import Basic from "./Basic";
import "./mine.less";
const list = ["我的订单", "积分商场", "饿了么会员卡", "服务中心", "下载饿了么APP"];
const summary = [
  { header: "0.00元", title: "余额" },
  { header: "3个", title: "优惠" },
  { header: "6250分", title: "积分" }
];
const Item = List.Item;
const Brief = Item.Brief;
export default class Mine extends Basic {
  render() {
    const PlaceHolder = props => (
      <div>
        <p>{props.header}</p>
        <p>{props.title}</p>
      </div>
    );
    return (
      <div>
        <NavBar
          style={{ background: "#108ee9" }}
          icon={<Icon type="left" />}
          onLeftClick={e => this._back}
        >
          我的
        </NavBar>
        <List className="header-list">
          <Item
            style={{ background: "#108ee9" }}
            thumb={require("./images/shop-logo.png")}
          >
            Admin
            <Brief>180123232</Brief>
          </Item>
        </List>
        <Flex>
          {summary.map((item, i) => (
            <Flex.Item key={i}>
              <PlaceHolder props={item} />
            </Flex.Item>
          ))}
        </Flex>
        <List>{list.map((item, i) => <Item key={i}>{item}</Item>)}</List>
      </div>
    );
  }
}

const styles = {
  align: { display: "inline-block", verticalAlign: "middle" }
};
