import React from "react";
import { InputItem, Flex, Grid, List, Badge } from "antd-mobile";
import "./main.less";
import { falseBussinessInfo } from "./falsedata/falsedata";
const flexItems = ["辣鸭脖", "韩国炸鸡", "我市一只鸡", "脆皮鸡", "麦当劳", "老鸭粉丝", "牛排", "黄焖鸡"];
const img = require("./images/slider-pic/slider-pic1.jpg");
const listItems = Array.from(new Array(16)).map((_val, i) => ({
  icon: require(`./images/slider-pic/slider-pic${i + 1}.jpg`),
  text: `name${i}`
}));
const Item = List.Item;
const Brief = Item.Brief;
// console.log("list ".listItems);
const keys = [];
for (let key in falseBussinessInfo) {
  keys.push(key);
}
export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.header}>
          <p>
            <span style={styles.location} />深圳市福田区这里是个假定位村淡定啦~这不重要
          </p>
          <InputItem type="text" placeholder="搜索商家、商品" />
        </div>

        <div style={styles.slider} className="q12">
          {flexItems.map((item, i) => {
            return (
              <span key={i} style={{ marginRight: 10 }}>
                {item}
              </span>
            );
          })}
        </div>

        <div style={styles.list}>
          <Grid
            data={listItems}
            hasLine={false}
            columnNum={4}
            isCarousel
            onClick={_el => console.log(_el)}
            className="not-square-grid"
            square={false}
          />
        </div>
        <List>
          {keys.map((key, i) => (
            <Item
              key={i}
              thumb={require(`./images/slider-pic/slider-pic1.jpg`)}
              multipleLine
              onClick={() => {}}
              extra={
                <div>
                  <p>
                    {falseBussinessInfo[key]["bao"] && (
                      <Badge text={"保"} hot style={styles.greyBadge} />
                    )}
                    {falseBussinessInfo[key]["piao"] && (
                      <Badge text={"票"} hot style={styles.greyBadge} />
                    )}
                    {falseBussinessInfo[key]["zhun"] && (
                      <Badge text={"准"} hot style={styles.greyBadge} />
                    )}
                  </p>
                  <p>
                    {falseBussinessInfo[key]["on_time"] && (
                      <Badge text={"准时达"} hot style={styles.blueBadge} />
                    )}
                    {falseBussinessInfo[key]["fengniao"] && (
                      <Badge text={"峰鸟配送"} hot style={styles.blueBg} />
                    )}
                  </p>
                  <p>
                    637m/<span style={styles.blueFont}>30分钟</span>
                  </p>
                </div>
              }
            >
              <Badge text={"品牌"} hot style={styles.yellowBg} />上沙麦当劳
              <Brief>
                <p style={styles.smFont}>分数 4.7</p>
                <p style={styles.smFont}> ¥ 20起送 ／ 配送费约 ¥ 5</p>
              </Brief>
            </Item>
          ))}
        </List>
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
