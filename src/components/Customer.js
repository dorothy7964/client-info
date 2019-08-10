import React, { Component } from 'react';

class Customer extends Component {
    render() {
        const { customer } = this.props;
        const { name, birthday, gender, job } = customer
        return (
            <div>
                <h2>{name}</h2>
                <p>{birthday}</p>
                <p>{gender}</p>
                <p>{job}</p>
            </div>
        );
    }
}

export default Customer;