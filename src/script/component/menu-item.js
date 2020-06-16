class MenuItem extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }
    set menu(menu){
        this._menu = menu;
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
        @media screen and (max-width: 1000px){
            :host{
                width: 100%;
            }
        }
        </style>
        <img class="pic-menu" src="${this._menu.strMealThumb}" alt="${this._menu.strMeal}">
        <div class="menu-info">
            <h2>${this._menu.strMeal}</h2>
            <p>${this._menu.strInstructions}</P>
        </div>`;
    }
}
customElements.define("menu-item", MenuItem);