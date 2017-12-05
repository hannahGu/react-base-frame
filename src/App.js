import React from "react";
import { TabBar } from "antd-mobile";
import Basic from "./Basic";
import Main from "./Main";
import Mine from "./Mine";
import Order from "./Order";
const items = [
  {
    title: "外卖",
    icon: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
    key: "main",
    component: Main
  },
  {
    title: "订单",
    icon: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
    key: "order",
    component: Order
  },
  {
    title: "我的",
    icon: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
    key: "mine",
    component: Mine
  }
];
export default class App extends Basic {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "main"
    };
  }
  render() {
    return (
      <div>
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "fixed",
            top: 0
          }}
        >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            //  hidden={this.state.hidden}
          >
            {items.map((item, i) => (
              <TabBar.Item
                title={item.title}
                key={item.title}
                icon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background:
                        "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                    }}
                  />
                }
                selected={this.state.selectedTab === item.key}
                onPress={() => {
                  this.setState({
                    selectedTab: item.key
                  });
                  this._forward(item.key);
                }}
                //  data-seed="logId"
              >
                <item.component />
              </TabBar.Item>
            ))}
          </TabBar>
        </div>
      </div>
    );
  }
}
