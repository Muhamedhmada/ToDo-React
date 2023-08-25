import React, { Component } from "react";
import './ShowItems.css'
class ShowItems extends Component{
    render(){
        const DeleteItem = this.props.DeleteItem
        const items = this.props.items
        let id = 0
        let length = items.length
        const TheItems =  length?(
            items.map((item) => {
                    item.id = id
                    id = id +1
                    return(
                            <tr key={item.id}>
                                <td>{item.task}</td>
                                <td>{item.time}</td>
                                <td onClick = {() =>{DeleteItem(item.id)}} className="Icon" >{item.icon}</td>
                            </tr>
                    )
            })
            
        ) :(
               <tr> 
                <td colSpan={2}><h4>No Tasks</h4></td>
               </tr>
        )
        return(
            <div onLoad={this.props.ShowDeleteAll} onChange = {this.props.ShowDeleteAll}>
                <table>
                    <tr>
                        <th>Task</th>
                        <th>Time</th>
                    </tr>
                        {TheItems}
                </table>
                <button onClick={this.props.DeleteAll} style = {{display:"none"}} class = "DeleteAll" id="DeleteAll">Delete All ({this.props.items.length})</button>
            </div>
        )
    }
}
export default ShowItems