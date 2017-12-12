import React from "react";
import { TabBar } from "antd-mobile";
import Basic from "./Basic";
import { Main, Mine, Order } from "./pages";
import "./app.less";
const items = [
  {
    title: "外卖",
    icon: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
    key: "/app/main",
    component: Main
  },
  {
    title: "订单",
    icon: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
    key: "/app/order",
    component: Order
  },
  {
    title: "我的",
    icon: "https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg",
    key: "/app/mine",
    component: Mine
  }
];
export default class App extends Basic {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "/app/main",
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, Math.floor(Math.random() * 2000));
  }
  render() {
    const loadingState = this.state.loading ? "block" : "none";
    return (
      <div>
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "fixed"
          }}
        >
          <div
            style={{
              height: "100%",
              position: "relative",
              display: loadingState
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                marginLeft: -50,
                marginTop: -50,
                left: "50%",
                top: "50%",
                position: "absolute",
                backgroundImage: "url(" + require("./images/loading.png") + ")",
                animation:
                  "loadanimate 3.6s steps(6) infinite, updown 0.8s infinite"
              }}
            />
          </div>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.loading}
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
                  const time = Math.floor(Math.random() * 2000);
                  this.setState({
                    selectedTab: item.key
                  });
                  if (item.key !== "/app/mine") {
                    this.setState({
                      loading: true
                    });
                    setTimeout(() => {
                      this.setState({ loading: false });
                    }, time);
                    this._forward(item.key);
                  }
                }}
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
