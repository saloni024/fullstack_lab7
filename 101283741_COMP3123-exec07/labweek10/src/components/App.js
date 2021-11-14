import React from "react"
import Formpage from "./Formpage"

class App extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    
    render(){
        return(
            <div>
                <Formpage/>
            </div>
        )
    }
}

export default App