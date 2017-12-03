import React from 'react';
import PropTypes from 'prop-types';
export default class Basic extends React.Component{
  constructor(props){
    super(props);

  }
  _forward(url){
    this.context.router.history.push(url);
  }
  _back(){
    this.context.router.goback();
  }

}
Basic.contextTypes={
    router: PropTypes.object
  }
