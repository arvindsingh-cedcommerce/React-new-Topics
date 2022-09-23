import React from 'react'
import { buyCake } from '../redux/cake/CakeActions'
import { connect } from 'react-redux'
import { initialState } from '../redux/cake/CakeReducer'

function CakeContainer(props) {
  return (
    <div>
      <h2>Initail number of Cakes in Store - {initialState.numOfCakes}</h2>
      <h2>current number of Cakes in Store - {props.numOfCakes}</h2>
      {props.numOfCakes > 0 ? 
      <button onClick={props.buyCake}>Buy Cake</button> :
      <div>
        <button>Buy Cake</button>
        <p style={{fontSize:'1.5rem',color:'red'}}>Can't buy stock is over</p>
      </div>
      }
    </div>
  )
}

const mapStatetoProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CakeContainer)