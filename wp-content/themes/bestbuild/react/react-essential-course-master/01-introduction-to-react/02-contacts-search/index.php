<?php get_header();?>
<?php
/**
 * Template Name: react
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contacts search</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div id='content'></div>

    <script type="text/babel">

        var CONTACTS = [
            {
                id: 1,
                name: 'Darth Vader',
                phoneNumber: '+250966666666',
                image: 'img/darth.gif'
            }, {
                id: 2,
                name: 'Princess Leia',
                phoneNumber: '+250966344466',
                image: 'img/leia.gif'
            }, {
                id: 3,
                name: 'Luke Skywalker',
                phoneNumber: '+250976654433',
                image: 'img/luke.gif'
            }, {
                id: 4,
                name: 'Chewbacca',
                phoneNumber: '+250456784935',
                image: 'img/chewbacca.gif'
            }
        ];

        var Contact = React.createClass({
            render: function() {
                return (
                    <li className="contact">
                        <img className="contact-image" src={this.props.image} width="60px" height="60px" />
                        <div className="contact-info">
                            <div className="contact-name"> {this.props.name} </div>
                            <div className="contact-number"> {this.props.phoneNumber} </div>
                        </div>
                    </li>
                );
            }
        });

        var ContactsList = React.createClass({
            getInitialState: function() {
                return {
                    displayedContacts: CONTACTS
                };
            },

            handleSearch: function(event) {
                var searchQuery = event.target.value.toLowerCase();
                var displayedContacts = CONTACTS.filter(function(el) {
                    var searchValue = el.name.toLowerCase();
                    return searchValue.indexOf(searchQuery) !== -1;
                });

                this.setState({
                    displayedContacts: displayedContacts
                });
            },

            render: function() {
                return (
                    <div className="contacts">
                        <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
                        <ul className="contacts-list">
                            {
                               this.state.displayedContacts.map(function(el) {
                                    return <Contact
                                        key={el.id}
                                        name={el.name}
                                        phoneNumber={el.phoneNumber}
                                        image={el.image}
                                    />;
                               })
                            }
                        </ul>
                    </div>
                );
            }
        });

        ReactDOM.render(
            <ContactsList />,
            document.getElementById("content")
        );

    </script>
</body>
</html>
  <?php get_footer();?>
