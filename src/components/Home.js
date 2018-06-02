import React from 'react';

import Header from './Header';

export class Home extends React.Component {

    render() {
        return (
            <div>
                <Header/>

                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}