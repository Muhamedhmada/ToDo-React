import React, { Component} from "react";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDeleteLeft } from "@fortawesome/free-solid-svg-icons"
import './AddItems.css'
let time = new Date()
class AddItems extends Component{
    state = {
            task : "Muhamed" ,time: time.getFullYear() +'-'+ (time.getMonth()+1) +'-'+ time.getDate() 
            ,icon: <FontAwesomeIcon icon={faDeleteLeft} />}
    onclick = (e) =>{
        e.preventDefault()
        if(document.getElementById("input").value !== ""){
            let item = this.state
            let newItem = document.getElementById("input").value.toLowerCase()
            document.getElementById("input").value = ""
            item.task = newItem
            this.setState({
                item
            })
            this.props.items.push(item)
            this.props.addItem(this.state)
        }
    }

    render(){

        return(
            <div className="Add">
               <form>
                   <input id="input" type="text" placeholder="Enter Task" />
                   <button id="addbtn" onClick={this.onclick}>Add</button>
               </form>
            </div>
        )
    }
}
export default AddItems