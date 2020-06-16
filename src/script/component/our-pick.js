class OurPick extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }
    set pick (pick){
        this._pick = pick;
        this.render();
    }
    render(){
        this._shadowRoot.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            margin-left: auto;
            margin-right: auto;
            display: block;
            margin-bottom: 12px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            background-color: white;
            
        }
        
        .pic-menu {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        .menu-info {
            padding: 24px;    
        }
        .menu-info > h2 {
            font-weight: lighter;
        }
        .menu-info > p {
            display: -webkit-box;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        </style>        
        <img class="pic-menu" src="${this._pick[0].strMealThumb}" alt="${this._pick[0].strMeal}">
            <div class="menu-info">
                <h2>${this._pick[0].strMeal}</h2>
                <p>${this._pick[0].strInstructions}</P>
            </div>`;
    }
    renderError(message){
        this._shadowRoot.innerHTML = `
        <style>
        .placeholder{
            font-weight: lighter;
            color: white;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>`;
        this._shadowRoot.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}
customElements.define("our-pick", OurPick);