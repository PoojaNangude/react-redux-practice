import React from 'react'
//to get hold of nay state that is maintained in the redux store we use the useSelector hook
//performs the same function as mapStateToProps
import {useSelector} from 'react-redux';

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes) //this functions receives the redux state as the argument like mapStateToProps
    return (
        <div>
            <h2>Number of Cakes : {numOfCakes}</h2>
            <button>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
