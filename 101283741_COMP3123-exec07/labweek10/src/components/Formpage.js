import React from "react"

class Formpage extends React.Component{
    constructor(){
        super()
        this.state = {
            email : "",
            name : "",
            address : "",
            address2 : "",
            city : "",
            province : "",
            zip : "",
            agree : false,
            display : false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name,value,type,checked} = event.target
        type === "checkbox"? this.setState({[name]: checked}) : this.setState({[name] : value})
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState({display : true})
    }
    render(){
        return(
            <div>
                <h1>Data Entry Form</h1>
                <form className="formPage" onSubmit={this.handleSubmit}>
                    <div id="email">Email <input type="text" name="email" value={this.state.email} placeholder="Enter email" onChange={this.handleChange}></input></div>
                    <div id="name">Name <input type="text" name="name" value={this.state.name} placeholder="Full Name" onChange={this.handleChange}></input></div>
                    <div id="address">Address <input type="text" name="address" value={this.state.address} placeholder="1234 Main St" onChange={this.handleChange}></input></div>
                    <div id="address2">Address 2<input type="text" name="address2" value={this.state.address2} placeholder="Apartment, studio, or floor" onChange={this.handleChange}></input></div>
                    <div id="city">City <input type="text" name="city" value={this.state.city} placeholder="" onChange={this.handleChange}></input></div>
                    <div id="province">
                        Province 
                        <select value={this.state.province} onChange={this.handleChange} name="province">
                            <option value="">Choose...</option>
                            <option value="AL">Alberta</option>
                            <option value="BC">British Columbia</option>
                            <option value="MN">Manitoba</option>
                            <option value="NB">New Brunswick</option>
                            <option value="NL">Newfoundland and Labrador</option>
                            <option value="NS">Nova Scotia</option>
                            <option value="ON">Ontario</option>
                            <option value="PE">Prince Edward Island</option>
                            <option value="QB">Quebec</option>
                            <option value="SK">Saskatchewan</option>
                        </select>
                    </div>
                    <div id="zip">Postal Code <input type="text" name="zip" value={this.state.zip} placeholder="" onChange={this.handleChange}></input></div>
                    <input type="checkbox" name="agree" value={this.state.agree} checked={this.state.agree} onChange={this.handleChange}/> Agree Terms &amp; Condition?
                    <br/>
                    <button name="submit">Submit</button>
                </form>
                <div hidden={!this.state.display || !this.state.agree}>
                    <br/>
                    Email: {this.state.email}<br/>
                    Full Name: {this.state.name}<br/>
                    Address: {this.state.address} {this.state.address2}<br/>
                    City: {this.state.city}<br/>
                    Province: {this.state.province}<br/>
                    Postal Code: {this.state.zip}<br/>
                </div>
            </div>
            
        )
    }
}

export default Formpage