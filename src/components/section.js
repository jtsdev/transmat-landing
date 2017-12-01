import React     from 'react'
import Accordion from './accordion'
import Slider    from './slider'

class Section extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {}

    render() {

        const name           = this.props.name;
        const sectionClass   = "section " + name;
        const sectionContent = getSectionContent( name );

        return (

            <section className={ sectionClass } id={ name }>
                {
                    sectionContent
                }
            </section>

        )

    }

}

    function getSectionContent( name ) {

        switch ( name ) {

            case 'Home':        return <Home      />;
            case 'About':       return <About     />;
            case 'Features':    return <Features  />;
            case 'Gallery':     return <Gallery   />;
            case 'Demo':        return <Demo      />;
            case 'Developer':   return <Developer />;

            default:
                return null;

        }

    }



class Home extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind( this );

    }

    handleClick() {}

    render() {

        return (

            <div className="home_content">

                <div className="bg move"></div>
                <div className="blue_layer" />

                <div className="slide_place">
                    <div className="container">
                        <div className="row">

                            <div className="column half">

                                <div className="vertical-align auto">
                                    <div className="main_header white_color">

                                        <h1 className="h1">TRANSMAT</h1>
                                        <h3 className="h3">Destiny 2 Companion App</h3>
                                        <div className="button_container">
                                            <a href="https://destinytransmat.com" className="link_style_1 launch">
                                                <span>Launch App</span>
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="column half">

                                <div className="vertical-align">
                                    <div className="top_app_image">

                                        <img src="images/home_image.png" alt="" />

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )

    }

}


class Features extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind( this );

    }

    handleClick() {}

    render() {

        const width = window.innerWidth;

        let colSizes;

        if ( width > 993 )      { colSizes = [ 'quarter',  'half', 'quarter' ] }
        else if ( width < 769 ) { colSizes = [        '',      '', ''        ] }
                           else { colSizes = [   'third', 'third', 'third'   ] }

        return (

            <div className="about_content">

                <div className="container">

                    <div className="section_header">
                        <h2 className="h2 caption_style_1">Features</h2>
                        <div className="header_text sm dark">
                            <p>
                                Transmat is a companion app for Destiny 2.  With it, you can transfer items and get detailed information about your characters.
                            </p>
                        </div>
                    </div>

                    <div className="row">

                        <div className={ 'column ' + colSizes[ 0 ] }>

                            <div className="about_slot margin-lg">
                                <div className="image about1" />
                                <h4 className="h4 title">Manage Inventory</h4>
                                <div className="header_text">
                                    <p>
                                        Equip items and transfer them between your characters and vault
                                    </p>
                                </div>
                            </div>
                            <div className="about_slot margin-lg">
                                <div className="image about2" />
                                <h4 className="h4 title">Item Details</h4>
                                <div className="header_text">
                                    <p>
                                        View the stats and perk descriptions for your weapons and armor
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className={ 'column ' + colSizes[ 1 ] }>

                            <div className="about_mockup">
                                <div className="image vertical-align">
                                    <img src="images/about_image_1.png" alt="" />
                                    <img src="images/about_image_2.png" alt="" />
                                </div>
                            </div>

                        </div>
                        <div className={ 'column ' + colSizes[ 2 ] }>

                            <div className="about_slot margin-lg">
                                <div className="image about3" />
                                <h4 className="h4 title">Character Progress</h4>
                                <div className="header_text">
                                    <p>
                                        Track milestones, raid completions, and faction reputations for each character
                                    </p>
                                </div>
                            </div>
                            <div className="about_slot margin-lg">
                                <div className="image about4" />
                                <h4 className="h4 title">Tower Summary</h4>
                                <div className="header_text">
                                    <p>
                                        Check your engrams, postmaster, and the contents of your vault
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )

    }

}


class About extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {
            activeItem: 'acc'
        };

        this.handleClick = this.handleClick.bind( this );
        this.setActive   = this.setActive.bind( this );

    }

    handleClick() {}

    setActive( activeId ) {

        this.setState({
            activeItem: activeId
        })

    }

    render() {

        const activeItem = this.state.activeItem;

        let imgPath = "images/default_screen.png";

        if      ( activeItem === 'acc0' ) { imgPath = "images/type_screen.png";    }
        else if ( activeItem === 'acc1' ) { imgPath = "images/subtype_screen.png"; }
        else if ( activeItem === 'acc2' ) { imgPath = "images/actions_screen.png"; }

        return (

            <div className="features_content">

                <div className="bg"></div>
                <div className="blue_layer" />

                <div className="container">

                    <div className="align_block hg-md">

                        <div className="vertical-align right-align">

                            <div className="right_col">

                                <div className="image">

                                    <img src={ imgPath } alt="" className="resp_img" />

                                </div>
                            </div>

                        </div>
                        <div className="left_col">

                            <div className="cell_view">
                                <div className="section_header align-left white_color more_text">

                                    <h2 className="h2 caption_style_1 left_separator">Why Transmat?</h2>
                                    <div className="header_text sm">
                                        <p>
                                            Transmat makes it simple to find any item on your account, right from your character's inventory:
                                        </p>
                                    </div>

                                    <Accordion items={ accordionArray } setActive={ this.setActive } />

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )

    }

}


class Gallery extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind( this );

    }

    handleClick() {}

    render() {

        return (

            <div className="gallery_content">

                <div className="container">

                    <div className="section_header">
                        <h2 className="h2 caption_style_1">Gallery</h2>
                    </div>

                    <div className="row gallery">

                        <Slider />

                    </div>

                </div>

            </div>

        )

    }

}


class Demo extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind( this );

    }

    handleClick() {}

    render() {

        return (

            <div className="demo_content">

                <div className="bg"></div>
                <div className="blue_layer" />

                <div className="container">

                    <div className="align_block hg-md">

                        <div className="vertical-align right-align">

                            <div className="right_col">

                                <div className="image">
                                    <img src="images/browser_mockup.png" alt="" className="resp_img demo" />
                                </div>
                            </div>

                        </div>
                        <div className="left_col">

                            <div className="cell_view">
                                <div className="section_header align-left white_color more_text">

                                    <h2 className="h2 caption_style_1 left_separator">Demo</h2>
                                    <div className="header_text sm">
                                        <p>
                                            Don't have an account or just want to try it out before logging in?
                                        </p>
                                    </div>
                                    <ul className="list_style_2">
                                        <li>No login required.</li>
                                        <li>Item transfers disabled.</li>
                                    </ul>
                                    <a href="https://destinytransmat.com/demo" className="link_style_1 launch demo">
                                        <span>Launch Demo</span>
                                    </a>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )

    }

}


class Developer extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {};

        this.handleClick = this.handleClick.bind( this );

    }

    handleClick() {}

    render() {

        return (

            <div className="developer_content">

                <div className="container">

                    <div className="row">

                        <div className="column">

                            <div className="section_header">
                                <h2 className="h2 caption_style_1">Developer</h2>
                                <div className="header_text sm dark">

                                </div>
                            </div>
                            <div className="contact_item divider">
                                <div className="text">
                                    <div className="image vertical-align auto">
                                        <img src="images/port_icon_thin.png" alt="" />
                                    </div>
                                    <div className="links">
                                        <p>Portfolio</p>
                                        <a href="https://jtswebdev.com">jtswebdev.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact_item">
                                <div className="text">
                                    <div className="image vertical-align auto">
                                        <img src="images/mail_icon_thin.png" alt="" />
                                    </div>
                                    <div className="links">
                                        <p>Email</p>
                                        <a href="https://jtswebdev.com">jordan@jtswebdev.com</a>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </div>

        )

    }

}



// Features Accordion Objects
     const accordionArray = [

            {
                title: 'Type',
                text:  'Clicking a slot will reveal the items the character currently holds of that type, as well as a selection of subtype buttons.  For weapon slots, the subtypes are different weapon classes.  For armor slots, the subtypes are the three character classes.'
            },
            {
                title: 'Subtype',
                text:  'Clicking a subtype button will show every item of that subtype that is currently stored ( on another character or in the vault ).  In this way, any item on the account can be found in two quick clicks.'
            },
            {
                title: 'Actions',
                text:  'Clicking an item will bring up a summary and its different options for transfer.  The summary card can also be clicked to expand a full overview of the item.'
            }

        ];



export default Section