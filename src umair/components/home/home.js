import "./home.css"
export default () => {
    return <div>
        <div class="row">

            <div class="col s12 m1"></div>

            <div class="col s12 m5">
                <div class="card">
                    <div class="card-content white-text">
                        <span class="card-title"><h3 >Insta Global Pay </h3><h3 id="title">Best Trending platform!</h3></span>
                        <div></div>
                        <div></div>
                        <p class="flow-text"> I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <a href="mobile.html" className="btn-large">REGISTER TO JOIN</a>
                </div>
            </div>

            <div className="col s12 m5">
                <div className="card">
                   <img id="homeImg" src="./images/crypto icon.jpg"></img>
                </div>
            </div>
            <div class="col s12 m1"></div>
        </div>
    </div>
}