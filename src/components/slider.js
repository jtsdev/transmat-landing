import React from 'react'


class Slider extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {
            width:    'none',
            bullet:   1
        };

        this.handleClick = this.handleClick.bind( this );

    }

    componentDidMount() {

        if ( this.state.width === 'none' ) {

            const width = document.querySelector( '.gallery' ).getBoundingClientRect().width;

            this.setState({
                width: width
            })

        }

        const bar  = document.querySelector( '.scroll_container' );
        let slider = this;

        bar.addEventListener( "scroll", function() {

            document.querySelector( '.bullet.active' ).classList.remove( '.active' );

            slider.setState({
                bullet:  Math.round( ( bar.scrollLeft ) / slider.state.width ) + 1
            })

        }, false );

    }

    componentDidUpdate() {}

    handleClick( e, bullet ) {

        e.stopPropagation();

        if ( this.state.bullet !== bullet ) {

            const slider = document.querySelector( '.scroll_container' );

            scrollDifference( slider, ( bullet - 1 ) * this.state.width );

            this.setState({
                bullet: bullet
            })

        }

    }

    render() {

        const width  = this.state.width;

        let reduceBy = .25;
        let segments = 3;

        if ( width !== 'none' && width < 785 ) {

            reduceBy = width >= 546 ? .33 : .5;
            segments = width >= 546 ?  4  : 6;

            if ( width < 375 ) {

                reduceBy = 1;
                segments = 12;

            }

        }


        const imgWidth = width !== 'none' ? width * reduceBy : null;
        const barWidth = width !== 'none' ? imgWidth * 12    : '100%';


        return (

            <div className="slider">

                <div className="scroll_container">
                    <div className="image_bar" style={{ width: barWidth }}>

                        {
                            this.state.width !== 'none' ?
                                <div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_1.png"  alt="" /></div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_12.png" alt="" /></div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_11.png" alt="" /></div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_8.png"  alt="" /></div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_5.png"  alt="" /></div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_3.png"  alt="" /></div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_4.png"  alt="" /></div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_6.png"  alt="" /></div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_7.png"  alt="" /></div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_2.png"  alt="" /></div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_9.png"  alt="" /></div>
                                    <div className="slide" style={{ width: imgWidth }}><img src="images/gallery_10.png" alt="" /></div>
                                </div>
                                : null
                        }

                    </div>
                </div>

                {
                    this.state.width !== 'none' ?
                        <Pagination width={ this.state.width } segments={ segments } bullet={ this.state.bullet } bulletClick={ this.handleClick } />
                        : null
                }


            </div>

        )

    }

}


class Pagination extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind( this );

    }

    componentDidMount() {



    }

    handleClick() {}

    render() {

        const dot       = this.props.bullet,
              passClick = this.props.bulletClick,
              segments  = this.props.segments;

        const bullets   = buildBullets( dot, passClick, segments ),
              contWidth = getContainerWidth( segments );

        return (

            <div className="pagination">

                <div className="bullet_container" style={{ width: contWidth }}>

                    {
                        bullets
                    }

                </div>

            </div>

        )

    }

}



function buildBullets( dot, passClick, segments ) {

    let payload = [];

    for ( let i = 1; i < segments + 1; i++ ) {

        payload.push(
            <div id={ "bullet" + i } className={ dot === i ? "bullet active" : "bullet" } onClick={ ( e ) => passClick( e, i ) } key={ i } />
        )

    }

    return payload;

}

function getContainerWidth( segments ) {

    switch ( segments ) {

        case 4:     return 80;
        case 6:     return 120;
        case 12:    return 240;

        default:    return 60;

    }

}

function scrollDifference( el, dest ) {

    let scrollCount  = 0,
        oldTimestamp = performance.now();

    let stepSize = ( dest - el.scrollLeft ) / 30;

    function step ( newTimestamp ) {

        scrollCount += 1;

        if ( scrollCount === 30 ) { el.scrollLeft = dest;   return; }
        else {
            el.scrollLeft += stepSize;
        }

        oldTimestamp = newTimestamp;
        window.requestAnimationFrame( step );

    }

    window.requestAnimationFrame( step );

}



export default Slider