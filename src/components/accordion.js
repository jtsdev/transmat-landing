import React                   from 'react'


class Accordion extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind( this );

    }

    handleClick() {}

    render() {

        const items = buildAccordion( this.props.items, this.props.setActive );

        return (

            <div className="accordion">

                <ul className="accordion_list">
                    {
                        items
                    }
                </ul>

            </div>

        )

    }

}

class AccordionItem extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind( this );

    }

    handleClick( e ) {

        e.preventDefault();

        const activeItem = document.querySelector( '.accordion_trigger.active' );

        // Item Currently Active
            if ( activeItem ) {


            // Normalize Items
                activeItem.classList.remove( 'active' );
                activeItem.nextSibling.classList.remove( 'active' );

            // Activate target if it was not active before
                if ( activeItem !== e.target ) {

                    e.target.classList.add( 'active' );
                    e.target.nextSibling.classList.add( 'active' );
                    this.props.setActive( e.target.id );

                } else {

                    this.props.setActive( 'acc' );

                }


        // No Active Items
            } else {

                // Activate Target
                    e.target.classList.add( 'active' );
                    e.target.nextSibling.classList.add( 'active' );
                    this.props.setActive( e.target.id );

            }

    }

    render() {

        const title = this.props.title;
        const text  = this.props.text;
        const id    = "acc" + this.props.count;

        return (

            <div className="accordion_item">

                <a href="#" id={ id } className="accordion_trigger" onClick={ ( e ) => this.handleClick( e ) }>

                    {
                        title
                    }
                    <span />

                </a>
                <div className="accordion_inner">

                    <div className="header_text">
                        <p>{ text }</p>
                    </div>

                </div>

            </div>

        )

    }

}



function buildAccordion( items, setActive ) {

    let payload = [];

    for ( let i = 0; i < items.length; i++ ) {

        const item  = items[ i ];

        const title = item.title;
        const text  = item.text;

        payload.push( <AccordionItem title={ title } text={ text } key={ title } count={ i } setActive={ setActive } /> );

    }

    return payload;

}



export default Accordion