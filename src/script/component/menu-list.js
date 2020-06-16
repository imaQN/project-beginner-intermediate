import "./menu-item.js";
class menuList extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }
    set menus(menus){
        this._menus = menus;
        this.render();
    }
    render(){
        this._shadowRoot.innerHTML = "";
         for(let i = 0; i < this._menus.length; i++) {
            const menuElement = document.createElement("menu-item");
            menuElement.menu = this._menus[i];
            this._shadowRoot.appendChild(menuElement);
        }
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
customElements.define("menu-list", menuList);