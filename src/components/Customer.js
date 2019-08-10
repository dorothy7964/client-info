import React, { Component } from 'react';

class Customer extends Component {
    render() {
        const { customer } = this.props;
        return (
            <div>
                <CustomerProfile customer={customer} />         
            </div>
        );
    }
}

class CustomerProfile extends Component {
    render() {
        const { customer } = this.props;
        const customerProfile = customer.map(
            custom => (
            <div key={custom.id}>
                <img src={custom.image} alt="profile"/>
                <h2>{custom.name}({custom.id})</h2>
                <p>{custom.birthday}</p>
                <p>{custom.gender}</p>
                <p>{custom.job}</p>
            </div>
            )
        );
        return (
            <div>
                {customerProfile}
            </div>
        );
    }
}


export default Customer;