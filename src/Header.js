
import React from 'react';

export class Header extends React.Component{

    render() {
        return <div><header className="header">
                <h1 className="logo" alt="Логотоп">{this.props.title}</h1>
             </header>

             <h2 className="description" title={this.props.description}>{this.props.description}</h2>
            </div>
        
    }
}