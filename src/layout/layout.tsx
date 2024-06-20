import React, {Component} from 'react';
import Header from "../components/header"; // Ensure correct import
import './layoutCss.css'

class Layout extends Component<{ children: React.ReactNode }> {
    render() {
        const {children} = this.props;
        return (
            <div className="layout-container">
                <Header/>
                <main className="main-content">{children}</main>
                <footer className="footer">Footer content</footer>
            </div>
        );
    }
}

export default Layout;
