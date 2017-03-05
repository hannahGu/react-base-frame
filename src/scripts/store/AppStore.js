import Dispatcher from "../dispatcher/AppDispatcher";
import  * as Constant from "../constant/AppConstant";
import Assign  from "object-assign";
import {EventEmitter} from "events";
//console.log("Constant",Constant);
class Store extends EventEmitter{
  constructor(){
    super();
    this.data = [{id:1,name:"name1",desc:"desc1"},{id:2,name:"name2",desc:"desc2"},{id:3,name:"name3",desc:"desc3"}];
  }
  emitChange(){
    this.emit(Constant.CHANGE);
  }
  addChangeListener(callback){
    this.on(Constant.CHANGE,callback);
  }
  removeChangeListener(callback){
    this.removeListener(Constant.CHANGE,callback);
  }
  setList(data){
    this.data = data;
    this.emitChange();
  }
  getList(data){
    return this.data;
  }
}

let store = new Store();
Dispatcher.register(function(action){
  var text;
  switch (action.actionType) {
    case Constant.GET:
      store.setList(action.data);
      break;
    default:

  }
});
export default store;
