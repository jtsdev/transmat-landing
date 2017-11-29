import React                   from 'react'


class AppFooter extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind( this );

    }

    handleClick( e, name ) {

        e.preventDefault();

        this.props.changeSection( name )

    }

    render() {

        return (

            <div className="app_footer">

                    <div className="bg"></div>
                    <div className="blue_layer" />

                <div className="container">

                    <a href="index.html" className="logo">
                        <div className="logo_img" alt="" />
                    </a>
                    <div className="footer_links">
                        <a href="#" onClick={ ( e ) => this.handleClick( e, 'Home'      ) }>Home</a>
                        <a href="#" onClick={ ( e ) => this.handleClick( e, 'About'     ) }>About</a>
                        <a href="#" onClick={ ( e ) => this.handleClick( e, 'Features'  ) }>Features</a>
                        <a href="#" onClick={ ( e ) => this.handleClick( e, 'Gallery'   ) }>Gallery</a>
                        <a href="#" onClick={ ( e ) => this.handleClick( e, 'Demo'      ) }>Demo</a>
                        <a href="#" onClick={ ( e ) => this.handleClick( e, 'Developer' ) }>Developer</a>
                    </div>

                </div>

            </div>

        )

    }

}


export default AppFooter