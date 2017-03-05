import Dispatcher from "../dispatcher/AppDispatcher";
import * as Constant from "../constant/AppConstant";

export default{
  getList:function(){
    Dispatcher.dispatch({
      actionType:Constant.GET
    });
  }
};
