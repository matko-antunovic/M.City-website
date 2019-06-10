import React, { Component } from 'react'
import Fade from "react-reveal/Fade"

class Enroll extends Component {

    state={
        email:"",
        form:[]
    }

    onSubmit=(e)=>{
        e.preventDefault();
      this.setState({
          form:this.state.form.concat(e),
          email:""
      })
    }
    

    handleChange=(e)=>{
        this.setState({
           email:e.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <Fade>
                <div className="enroll_wrapper">
                <form onSubmit={this.onSubmit} >
                    <div className="enroll_title">
                        Enter your email
                    </div>
                    <div className="enroll_input">
                    <input placeholder="Your E-mail" name="email" value={this.state.email} type="email" onChange={this.handleChange} />
                    <button onClick={this.onSubmit}>Enroll</button>
                    </div>
                </form>
                </div>
            </Fade>
        )
    }
}
export default Enroll;