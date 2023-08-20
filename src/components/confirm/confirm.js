export default ({a5}) => {

    return <div id="confirmDialog" class="modal">
        <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
            <button onClick={()=>{
            
            a5.close();

            }}>Close karo</button>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
    </div>

}