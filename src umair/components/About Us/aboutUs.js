import "./aboutUs.css"
export default () => {
    return <div>
        <div class="row">

            <div class="col s12 m1"></div>

            <div class="col s12 m5">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title"><h2>About </h2><h2 id="title">Us</h2></span>
                        <div></div>
                        <div></div>
                        <p class="flow-text" id="aboutBody"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Aenean cursus tincidunt ultrices. Ut quis blandit dolor.</p>
                         <p className="aboutBody">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tincidunt ultrices. 
                         Ut quis blandit dolor. Ut laoreet sagittis arcu eu tristique. 
                         Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                          Donec finibus viverra est.
                         </p>

                         <p className="aboutBody">
                         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                          Fusce ligula ante, auctor et tempor at, scelerisque id nisl. 
                          Aliquam ultrices libero a turpis feugiat, pulvinar faucibus libero sodales. 
                          Duis condimentum arcu magna.
                         </p>
                    </div>

                </div>
            </div>

            <div className="col s12 m5">
                <div className="card">
                    <img id="homeImg" src="./images/about-img.png"></img>
                </div>
            </div>
            <div class="col s12 m1"></div>
        </div>
    </div>
}