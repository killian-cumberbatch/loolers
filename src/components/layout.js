import React from 'react'
import { Link } from 'gatsby'
import { 
    container, 
    heading, 
    navLinks, 
    navLinkItem, 
    navLinkText 
} from './layout.module.css'

export default function Layout ( { children, pageTitle } ) {
    return (
        <div className={ container } >
            <title> { pageTitle } </title>
            <nav>
                <ul className={ navLinks }>
                    <li className={ navLinkItem } >
                        <Link className={ navLinkText } to="/" >Homies</Link>           
                    </li>
                    <li className={ navLinkItem }>
                        <Link className={ navLinkText } to="/about">Gnow Bout Meh?</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={ heading }> { pageTitle } </h1>
                { children }
            </main>
        </div>
    )
}
