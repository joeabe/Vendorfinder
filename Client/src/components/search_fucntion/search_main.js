import React from 'react';
import { Redirect } from 'react-router-dom';

import './search_function.scss';

const spacer = { margin: 5 }

class Search_Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityAddress: 'Joensuu',
            email: props.email
        };
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.cityAddressHandler = this.cityAddressHandler.bind(this);

    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.setState({
            redirect: true,
        });
    };

    cityAddressHandler(event) {
        this.setState({
            cityAddress: event.target.value
        });
      //  console.log('TEST CITY ADD', this.state.cityAddress)
    }


    render() {
        if (this.state.redirect) return <Redirect to={{
            pathname: '/business',
            state: {
                email: this.state.email,
                city: this.state.cityAddress
            }
        }} />;
        return (
            <div className="search__main">
                <form onSubmit={this.onSubmitHandler} className="search__Form">
                    <select id="city" type="select" onChange={this.cityAddressHandler} name="cityAddress" className="search__city" required>
                        <option value="Joensuu">Joensuu</option>
                        <option value="Ilomantsi">Ilomantsi</option>
                        <option value="Juuka">Juuka</option>
                        <option value="Kontiolahti">Kontiolahti</option>
                        <option value="Liperi">Liperi</option>
                        <option value="Outokumpu">Outokumpu</option>
                        <option value="Polvijärvi">Polvijärvi</option>
                    </select>
                    <div style={spacer} />
                    <div style={spacer} />
                    <input type="submit" name="submit" className="search__loc" value="" />
                </form>
            </div>

        );
    }
}
export default Search_Main;



