import React from 'react'
import SideBar from './SideBar'

import './styles.css'
class HomeComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title : ''
        }
    }
    
    render() {
        return(
            <div className="rootContainer">
                <div className="rootSideBar">
                    <SideBar 
                        itemClick = {(name) => {
                            this.setState({title : name})
                        }}
                    />
                </div>

                <div className="rootHomeContainer">
                    <MainBoard 
                        content = {this.state.title}
                    />
                </div>
            </div>
        )
    }
}

const MainBoard = (props) => {
    return (
        <div className="rootMainBoard">
            <p>Main Board</p>
            <p>{props.content}</p>
        </div>
    )
}

export default HomeComponent
