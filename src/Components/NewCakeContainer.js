import React, {useState} from 'react';
import {buyCake} from '../Redux';
import {connect} from 'react-redux';

function NewCakeContainer(props) {
    const [number,setNumber] = useState(1);
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type = 'text' value={number} onChange={(e) => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes </button>
        </div>
    )
}

// when you want to access the reduc state in your component we define the mapStateToProps function.It gets the redux state as parameter which can be used to retrieve the appropriate state properties
const mapStateToProps = state => {//this functions gets the redux state as a parameter and returns an object
    return {
        numOfCakes: state.cake.numOfCakes
    }// we are mapping state.numOfCakes to props.numOfCakes which wer are then calling in the jsx where we print Number of Cakes 
}

//this functions gets the dispatch method as a parameter and allows us to map action creator to props in our component
const mapDispatchToProps = dispatch =>{//this function gets the redux dispatch method as the parameter and returns as object
    return{
        buyCake: number => dispatch(buyCake(number))
    }// we are maaping dispatch(buyCake()) to a prop buyCake. This allows us to call buyCake as props.buyCake
}

export default connect(
    mapStateToProps, // the state from the redux store is mapped to our component props. Thus apart from whatever props our CakeContainer was receiving it will now receive an additional prop called numOfCakes which reflects the numOfCakes in the redux store
    mapDispatchToProps // will map our dispatch of an action creator to a props in our component
    )(NewCakeContainer)

// the connect function connects a react component to the redux store
// in our case it connects the CakeContainer to the redux store