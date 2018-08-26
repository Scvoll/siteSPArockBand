import { Link } from 'react-router-dom'
import React from 'react'
import banner from '../static/images/banner.jpg'
import banner867 from '../static/images/banner867px.jpg'
import menu from '../static/images/menu.jpg'



export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenuActive: false,
            screenWidth: document.body.clientWidth
        };
        this.selfRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.closeMenuWhenResize = this.closeMenuWhenResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.closeMenuWhenResize);
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.closeMenuWhenResize);
    }

    closeMenuWhenResize () {
        if (this.state.screenWidth !== document.body.clientWidth) {
            this.selfRef.current.style.display = 'none';
            this.setState({openMenuActive: false});
        }
}

    routeMenu (nameOfClass, onclick) {
        return (
        <ul className={nameOfClass}>
            <li><Link onClick={onclick} to='/' >Главная</Link></li>
            <li><Link onClick={onclick} to='/songs'>Песни</Link></li>
            <li><Link onClick={onclick} to='/video' >Видео</Link></li>
            <li><Link onClick={onclick} to='/sale'>Мерч</Link></li>
            <li><Link onClick={onclick} to='/contacts'>Контакты</Link></li>
        </ul>
        )}

    handleClick () {
        this.setState(prevState => (
            {openMenuActive: !prevState.openMenuActive}
        ));
    }

    render() {
        return (
            <div className="header">
                <div className="images">
                    <img className="banner" src= {banner}/>
                    <img className="banner867" src={banner867}/>
                    <img src={menu} className="imageMenu"/>
                </div>
                <div >
                    {this.routeMenu("menu")}
                </div>

                <span className="burgerMenu"
                      onClick={this.handleClick}
                      >&#9776;</span>
                <div ref={this.selfRef} className="openMenu" style={this.state.openMenuActive ? {"display": "block"} : {"display": "none"}}>
                    {this.routeMenu("phoneMenu", this.handleClick)}
                </div>
            </div>
        )
    }
}