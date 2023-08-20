import "./work.css"
export default () => {
    return <div id="workBackground">

        <div id="mainBox">
            <div>
                <div className="outerBox">
                    <div className="innerBox">
                        <img src="./images/transactions-icon.png"></img>
                    </div>
                </div>
                <h2 className="value">2000</h2>
                <h5 className="innerText">Transactions</h5>
            </div>


            <div>
                <div className="outerBox">
                    <div className="innerBox">
                        <img src="./images/support-icon.png"></img>
                    </div>
                </div>
                <h2 className="value">2000</h2>
                <h5 className="innerText">Operator</h5>
            </div>


            <div>
                <div className="outerBox">
                    <div className="innerBox">
                        <img src="./images/wallets-icon.png"></img>
                    </div>
                </div>
                <h2 className="value">2000</h2>
                <h5 className="innerText">Bitcoin Wallets</h5>
            </div>


            <div>
                <div className="outerBox">
                    <div className="innerBox">
                        <img src="./images/countries-icon.png"></img>
                    </div>
                </div>
                <h2 className="value">2000</h2>
                <h5 className="innerText">Countries</h5>
            </div>
        </div>
    </div>
}