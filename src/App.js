import React, { Component } from "react";
import AddItems from "./Component/AddItems/AddItems";
import ShowItems from "./Component/ShowItems/ShowItems";
class App extends Component{
    state = {
        items :[
        ]
    }
    // Delete One Item
    DeleteItem = (id) =>{
        let items = this.state.items;
        items.splice(id,1)
        this.setState({
            items : items
        }
        )
        this.ShowDeleteAll()
    }
    // Add One Item
    addItem = () =>{
        let items = this.state.items;
        this.setState({items:items})
        this.ShowDeleteAll()
    }
    ShowDeleteAll =() =>{
        if(this.state.items.length === 0 ){
            document.getElementById("DeleteAll").style.display = "none"
            
        }
        else{
            document.getElementById("DeleteAll").style.display = "block"
        }
        console.log("showDeleteAll")
    }
    // Delete All Item
    DeleteAll =() =>{
        let items = this.state.items
        this.state.items.splice(0 , this.state.items.length)
        this.setState({
            items
        })
        this.ShowDeleteAll()
    } 
    render(){
        return(
            <div>
                <AddItems ShowDeleteAll = {this.DeleteItem} items = {this.state.items}   addItem ={this.addItem}/>
                <ShowItems ShowDeleteAll = {this.DeleteItem} items = {this.state.items}  DeleteItem = {this.DeleteItem} DeleteAll = {this.DeleteAll}/>
                
            </div>
        )
    }
}
export default App