class filterBar extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    set onChange(event){
        this._onChange = event;
        this.render();
    }
    get value(){
        return this._shadowRoot.querySelector('select').value;
    }
    render(){
        this._shadowRoot.innerHTML = `
        <style>
        .filter{
            width: 100%;
            background-color: #2c2c2c;
            text-align: center;
        }
        .filter > label{
            text-align: left;
            padding: 10px;
            color: white;
        }
        .filter > h2{
            margin: 0;
            padding: 10px;
            color: white;
        }
        select {
            width: 49%;
            padding: 12px;
            margin: 8px 0;
            box-sizing: border-box;
          }
        </style>
        <div class="filter">

            <h2>Search for your favourite menu</h2>
            <label for="filter">Choose filter</label> <br>
                <select name="area" id="area">
                    <option value="None">None</option>
                    <option value="American">American</option>
                    <option value="British">British</option>
                    <option value="Canadian">Canadian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Egyptian">Egyptian</option>
                    <option value="French">French</option>
                    <option value="Greek">Greek</option>
                    <option value="Indian">Indian</option>
                    <option value="Irish">Irish</option>
                    <option value="Italian">Italian</option>
                    <option value="Jamaican">Jamaican</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Kenyan">Kenyan</option>
                    <option value="Malaysian">Malaysian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Moroccan">Moroccan</option>
                    <option value="Russian">Russian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Thai">Thai</option>
                    <option value="Tunisian">Tunisian</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Unknown">Unknown</option>
                </select>
        </div>`;
        this._shadowRoot.querySelector('#area').addEventListener('change', this._onChange);
    }
}
customElements.define("filter-bar", filterBar);