import React from 'react'


class AppHeader extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind( this );

    }

    handleClick() {

    }

    render() {

        const isMobile    = this.props.dims[ 0 ] < 993;

        return (

            <header className="app_header">

                {
                    !isMobile ?
                        <NavMenu isMobile={ isMobile } section={ this.props.section } changeSection={ this.props.changeSection } /> :
                        <MobileNavMenu section={ this.props.section } changeSection={ this.props.changeSection } />
                }

            </header>

        )

    }

}


// Sidebar Menu for Large Screens
    class NavMenu extends React.Component {

        constructor( props ) {

            super( props );

            this.state = {};

            this.handleClick = this.handleClick.bind( this );

        }

        handleClick() {

        }

        render() {

            return (

                <div className="nav_menu">

                    <div className="table-align">
                        <div className="cell-view">

                            {
                                !this.props.isMobile ?
                                    <a href="index.html" className="logo">
                                        <div className="logo_img" alt="" style={{ border: 0 }} />
                                    </a>
                                    : null
                            }

                            <ul>
                                <MenuLink name="Home"      section={ this.props.section } changeSection={ this.props.changeSection } />
                                <MenuLink name="About"     section={ this.props.section } changeSection={ this.props.changeSection } />
                                <MenuLink name="Features"  section={ this.props.section } changeSection={ this.props.changeSection } />
                                <MenuLink name="Gallery"   section={ this.props.section } changeSection={ this.props.changeSection } />
                                <MenuLink name="Demo"      section={ this.props.section } changeSection={ this.props.changeSection } />
                                <MenuLink name="Developer" section={ this.props.section } changeSection={ this.props.changeSection } />
                            </ul>

                        </div>
                    </div>

                </div>

            )

        }

    }


// Topbar Menu for Small Screens
    class MobileNavMenu extends React.Component {

        constructor( props ) {

            super( props );

            this.state = {};

            this.handleClick = this.handleClick.bind( this );

        }

        handleClick( e ) {

            e.stopPropagation();

            const burgerLink = document.querySelector( '.burger-menu' );
            const navMenu    = document.querySelector( '.nav_menu' );

            if ( burgerLink.classList.contains( 'active' ) ) {

                burgerLink.classList.remove( 'active' );
                navMenu.classList.remove( 'slideIn' );

            } else {

                burgerLink.classList.add( 'active' );
                navMenu.classList.add( 'slideIn' );

            }

        }

        render() {

            return (

                <div className="mobile_nav_menu">

                    <a href="#" className="burger-menu vertical-align right" onClick={ ( e ) => this.handleClick( e ) }>
                        <i />
                    </a>
                    <a href="index.html" className="logo vertical-align auto">
                        <div className="logo_img" alt="" />
                    </a>

                    <NavMenu isMobile={ true } section={ this.props.section } changeSection={ this.props.changeSection } />

                </div>

            )

        }

    }


// Section Links for NavMenu
    class MenuLink extends React.Component {

        constructor( props ) {

            super( props );

            this.state = {};

            this.handleClick = this.handleClick.bind( this );

        }

        handleClick( e, name, changeSection ) {

            e.stopPropagation();

            const burgerLink = document.querySelector( '.burger-menu' );
            const navMenu    = document.querySelector( '.nav_menu' );

            if ( burgerLink ) {

                burgerLink.classList.remove( 'active' );
                navMenu.classList.remove( 'slideIn' );

            }

            changeSection( name );

        }

        render() {

            const linkClass = this.props.name === this.props.section ? "menu_link active" : "menu_link";

            return (

                <li>
                    <a className={ linkClass } onClick={ ( e ) => this.handleClick( e, this.props.name, this.props.changeSection ) }>{ this.props.name }</a>
                </li>

            )

        }

    }


export default AppHeader