import React,{Component} from 'react'

import './styles.css'

let menuList = ['menu 1', 'menu 2','menu 3']

class SideBar extends Component {

    render(){
        const menu = menuList.map(item => {
            return (
                <div onClick={() => this.props.itemClick(item)}>
                    <p className="item" >{item}</p>
                </div>
                
            )
        })

        return (
            <div className="s_title">
                <p>SideBar</p>
                {menu}
            </div>
        )
    }
}

export default SideBar