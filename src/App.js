import React,
       { Component } from 'react';
import AppHeader     from './components/app_header'
import AppContent    from './components/app_content'
import './App.css';


class App extends Component {

    constructor( props ) {

        super( props );

        this.state = {
            width:   window.innerWidth,
            height:  window.innerHeight,
            section: "Home"
        };

        this.updateDimensions = this.updateDimensions.bind( this );
        this.onChangeSection  = this.onChangeSection.bind( this );
        this.checkSection     = this.checkSection.bind( this );

    }

    onChangeSection( name ) {

        this.setState({
            section: name
        });

        const section = document.querySelector( "." + name );

        sectionToTop( section );

    }

    updateDimensions() {

        this.setState({
            width:  window.innerWidth,
            height: window.innerHeight
        });

    }

    checkSection() {

        const current = window.scrollY;
        const starts  = this.state.sectionStarts;

        let name;

             if ( current < starts[ 1 ] ) { name = 'Home'      }
        else if ( current < starts[ 2 ] ) { name = 'Features'  }
        else if ( current < starts[ 3 ] ) { name = 'About'     }
        else if ( current < starts[ 4 ] ) { name = 'Gallery'   }
        else if ( current < starts[ 5 ] ) { name = 'Demo'      }
                                     else { name = 'Developer' }

        this.setState({
            section: name
        })

    }

    componentWillMount() {

        this.updateDimensions();

    }

    componentDidMount() {

        let isScrolling;
        const checkSection = this.checkSection;

        window.addEventListener( "resize", this.updateDimensions );

        window.addEventListener( "scroll", function() {

            window.clearTimeout( isScrolling );
            isScrolling = setTimeout( function() {
                checkSection();
            }, 66 );

        }, false );

        const sections = document.querySelector( '.app_content' ).childNodes;
        const docEl    = document.documentElement;
        const max      = docEl.scrollHeight - docEl.clientHeight;

        this.setState({
            sectionStarts: [ sections[ 0 ].offsetTop,
                             sections[ 1 ].offsetTop,
                             sections[ 2 ].offsetTop,
                             sections[ 3 ].offsetTop,
                             sections[ 4 ].offsetTop,
                             max ]
        })

    }

    componentWillUnmount() {

        window.removeEventListener( "resize", this.updateDimensions );
        window.removeEventListener( "scroll", this.checkSection );

    }

    render() {

        const dims = [ this.state.width, this.state.height ];

        return (

        <div className="App">

            <AppHeader  dims={ dims } section={ this.state.section } changeSection={ this.onChangeSection } />
            <AppContent dims={ dims } changeSection={ this.onChangeSection } />

        </div>

        );

    }

}


// Scrolls Target Section to Top
    function sectionToTop( section ) {

        let scrollCount  = 0,
            oldTimestamp = performance.now(),
            destination  = section.offsetTop,
            current      = window.scrollY;

        let stepSize     = ( destination - current ) / 30;


        function step( newTimestamp ) {

            scrollCount += 1;

            if ( scrollCount === 30 ) { window.scrollTo( 0, destination ); return }
            else {
                current += stepSize;
                window.scrollTo( 0, current )
            }

            oldTimestamp = newTimestamp;
            window.requestAnimationFrame( step );

        }

        window.requestAnimationFrame( step );

    }


export default App;
