class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            padding: 16px;
            background-color: #2c2c2c;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #searchElement {
            width: 40%;
            border: 0.5px solid #00B4CC;
            padding: 5px;
            height: 50px;
            color: black;
            font-family: 'Jost', sans-serif;
            font-size: 15px;
          }
        #searchButtonElement{
            font-size: 15px;
            width: 10%;
            height: 50px;
            border: 1px solid #00B4CC;
            background: #00B4CC;
            text-align: center;
            color: #fff;
            cursor: pointer;
            font-family: 'Jost', sans-serif;
        }
        @media screen and (max-width: 600px){
            #searchButtonElement, #searchElement{
                font-size: 80%;
            }
        }
        @media screen and (max-width: 470px){
            #searchButtonElement, #searchElement{
                font-size: 60%;
            }
        }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search menu" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;
  
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
 }
  
 customElements.define("search-bar", SearchBar);