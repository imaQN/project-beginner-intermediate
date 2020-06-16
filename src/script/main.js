import "./component/our-pick.js";
import "./component/filter-bar.js";
import "./component/search-bar.js";
import "./component/menu-list.js";

import Data from "./data/data.js";

const main = () =>{
    const pickMenu = document.querySelector("our-pick");
    const searchElement = document.querySelector("search-bar");
    const menuListElement = document.querySelector("menu-list");
    const filterMenu = document.querySelector("filter-bar");
    Data.ourPickMenu()
    .then(result =>{
        pickMenu.pick = result;
    })
    .catch(message =>{
        alert(message)
    })
    const onButtonSearchClicked = () =>{
        Data.searchMenu(searchElement.value, filterMenu.value)
        .then(renderResult)
        .catch(fallbackResult)
    };
    const renderResult = result =>{
        menuListElement.menus = result;
    };
    const fallbackResult = message =>{
        menuListElement.renderError (message);
    };
    filterMenu.onChange = onButtonSearchClicked;
    searchElement.clickEvent = onButtonSearchClicked;
}
export default main;