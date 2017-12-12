import React from "react";
import { NavBar, List, Icon, Badge } from "antd-mobile";
import Basic from "../Basic";
import { falseBussinessbrief } from "../falsedata/falsedata";
const Item = List.Item;
const Brief = Item.Brief;
export default class Search extends Basic {
  constructor(props) {
    super(props);
    this.state = { key: localStorage.getItem("search") };
    this.list = [];
    this.inputPress = this.inputPress.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  componentDidMount() {
    const val = localStorage.getItem("search");
    for (let i = 0; i < falseBussinessbrief.length; i++) {
      if (falseBussinessbrief[i]["shop_name"].indexOf(val) > -1) {
        this.list.push(falseBussinessbrief[i]);
      }
    }
  }
  inputPress(e) {
    if (e.key === "Enter") {
      this.list = [];
      for (let i = 0; i < falseBussinessbrief.length; i++) {
        if (falseBussinessbrief[i]["shop_name"].indexOf(this.state.key) > -1) {
          this.list.push(falseBussinessbrief[i]);
        }
      }
    }
  }
  inputChange(e) {
    this.setState({ key: e.target.value });
    localStorage.setItem("search", "");
  }
  render() {
    return (
      <div>
        <NavBar icon={<Icon type="left" />} onLeftClick={() => this._back}>
          <input
            type="text"
            placeholder="商品名或店家名"
            value={this.state.key}
            onChange={this.inputChange}
            onKeyPress={this.inputPress}
          />
        </NavBar>

        <div>
          {this.list &&
            this.list.length > 0 && (
              <List>
                {this.list.map((item, i) => (
                  <Item
                    key={i}
                    thumb={require(`../images/slider-pic/slider-pic2.jpg`)}
                    multipleLine
                    onClick={() => {}}
                    extra={
                      <div>
                        <p>
                          {item["bao"] && (
                            <Badge text={"保"} hot style={styles.greyBadge} />
                          )}
                          {item["piao"] && (
                            <Badge text={"票"} hot style={styles.greyBadge} />
                          )}
                          {item["zhun"] && (
                            <Badge text={"准"} hot style={styles.greyBadge} />
                          )}
                        </p>
                        <p>
                          {item["on_time"] && (
                            <Badge text={"准时达"} hot style={styles.blueBadge} />
                          )}
                          {item["fengniao"] && (
                            <Badge text={"峰鸟配送"} hot style={styles.blueBg} />
                          )}
                        </p>
                        <p style={styles.smFont}>
                          <span>{`${item["distance"]}m / `}</span>
                          <span style={styles.blueFont}>
                            {item["estimate_time"]}
                          </span>
                        </p>
                      </div>
                    }
                  >
                    {item["brand"] && (
                      <Badge text={"品牌"} hot style={styles.yellowBg} />
                    )}
                    {item["shop_name"]}
                    <Brief>
                      <p style={styles.smFont}>{`分数 ${item["shop_rating"]}`}</p>
                      <p style={styles.smFont}>{`¥ ${item[
                        "start_send"
                      ]}起送 ／ 配送费约 ¥ ${item["send_cost"]}`}</p>
                    </Brief>
                  </Item>
                ))}
              </List>
            )}
        </div>
      </div>
    );
  }
}

const styles = {
  smFont: { fontSize: 10, marginTop: 2, marginBottom: 2 },
  yellowBg: { background: "#ffd930", fontWeight: "bold" },
  blueBg: { background: "#0096ff" },
  blueBadge: {
    color: "#0096ff",
    marginRight: 10,
    background: "#fff",
    border: "1px solid #0096ff"
  },
  blueFont: {
    color: "#0096ff"
  },
  greyBadge: {
    color: " #999",
    background: "#fff",
    border: "1px solid #999",
    marginLeft: 5
  },
  header: { background: "#3695ff", height: 120, padding: 8 },
  location: { width: 10, height: 10, borderRadius: "50%", background: "gray" }
};
