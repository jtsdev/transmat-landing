import React      from 'react'
import Section    from './section'
import AppFooter  from './app_footer'


class AppContent extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind( this );

    }

    handleClick() {

    }

    render() {

        const dims         = this.props.dims;
        const width        = dims[ 0 ];
        const contentClass = width < 993 ? "app_content mobile" : "app_content";

        return (

            <div className={ contentClass }>

                <Section name="Home"      width={ width } />
                <Section name="Features"  width={ width } />
                <Section name="About"     width={ width } />
                <Section name="Gallery"   width={ width } />
                <Section name="Demo"      width={ width } />
                <Section name="Developer" width={ width } />

                <AppFooter changeSection={ this.props.changeSection } />

            </div>

        )

    }

}


export default AppContent