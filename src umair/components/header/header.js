import { useEffect } from "react";
import M from "materialize-css";
import "./header.css"
export default () => {
    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, { edge: "right" });
    }, [])

    return <div className="container">
        <nav>
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">
                    <img src="https://instaglobalpay.live/images/logo.png"></img>
                </a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="sass.html" className="homeText">HOME</a></li>
                    <li><a href="badges.html">ABOUT US</a></li>
                    <li><a href="collapsible.html">BENEFITS</a></li>
                    <li><a href="collapsible.html">HOW WE WORK</a></li>
                    <li><a href="mobile.html" className="btn-large">LOGIN</a></li>
                </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html" className="homeText">HOME</a></li>
            <li><a href="badges.html">ABOUT US</a></li>
            <li><a href="collapsible.html">BENEFITS</a></li>
            <li><a href="collapsible.html">HOW WE WORK</a></li>
            <li><a href="mobile.html" className="btn-large">LOGIN</a></li>
        </ul>
    </div>

}