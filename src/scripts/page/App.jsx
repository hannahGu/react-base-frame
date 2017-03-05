import React from "react";
import Action from "../action/AppAction";
import Store from "../store/AppStore";
import assign from "object-assign";

function getData(){
  return {
    list:Store.getList()
  };
}

export default class App extends React.Component{
  constructor(){
    super();
    this.state = assign({},getData());
  }
  componentDidMount(){
    Store.addChangeListener(this.onChange.bind(this));
    Action.getList();
  }
  componentWillUnmount(){
    Store.removeChangeListener(this.onChange.bind(this));
  }

  onChange(){
    this.setState(assign(this.state,getData()));
  }

  render(){
    var str = (this.state.list || []).map((item,index)=>{
      return(
        <div key={item.id}>{"name:"+item.name+",desc:"+item.desc}</div>
      );
    });
    console.log("str",str);
    return (
      <div>
        {str}
      </div>
    );
  }
}
