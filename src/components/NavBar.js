import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"


export default function NavBar(){
    return (
        <header className="nav-color">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 hover:text-yellow-400 text-4xl font-bold cursive tracking-widest">
                        Heinsenbug
                    </NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400" activeClassName="text-yellow-100 bg-yellow-600">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400" activeClassName="text-yellow-100 bg-yellow-600">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400" activeClassName="text-yellow-100 bg-yellow-600">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/_heisenbug_" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://www.instagram.com/theheisenbug/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://www.linkedin.com/in/pujan-bhuva-8b4ab5111/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/pujanb96" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    
                </div>
            </div>
        </header>
    )
}