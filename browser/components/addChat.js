import React, { Component } from 'react';
import {login} from '../redux/auth.js';
import { connect } from 'react-redux';
import {loadBuds} from '../redux/buds.js';
import {addChat} from '../redux/chat.js';

class AddChat extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount(){
    console.log('MOUNTING', this.props)
    this.props.getBuds();
  }

  render () {
    var peer = this.props.possBuds.filter((bud)=> (bud.role==='Peer Counselor'));
    var med = this.props.possBuds.filter((bud)=> (bud.role==='Healthcare Professional')); 
    return (
      <div>
        Peer Counselors
        <ul>
        {
          peer.map((bud)=>{
            return (<li onClick={()=>{this.props.addNewChat(bud.id)}} key={bud.id}><a> {bud.alias} </a> </li>)
          })
        }
        </ul>
        Healthcare Professional
        <ul>
        {
          med.map((bud)=>{
            return (<li onClick={()=>{this.props.addNewChat(bud.id)}} key={bud.id}><a> {bud.alias} </a></li>)
          })
        }
        </ul>
        
        
      </div>
    );
  }
}

//----------- CONTAINER ------------
const mapState = (state) => {
  console.log(state)
  return ({ possBuds: state.buds })};

const mapDispatch = function (dispatch) {
  return {
    getBuds: () =>{
      dispatch(loadBuds())
    },
    addNewChat: (mentorId)=>{
      dispatch(addChat(mentorId))
    }
  };
};




export default connect(mapState, mapDispatch)(AddChat);


