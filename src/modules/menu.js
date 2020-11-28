let entreeNames = [
    "Bacon",
    "Sausage",
    "Country Ham",
    "Chicken & Gravy",
    "Double-Burger",
    ];

    let sidesNames = ["Baked Apples", "Cheese Grits", "Biscuits", "Fatback Meat"];

    let entreePrices = ["6", "5", "8", "12", "14"];

    let sidesPrices = ["4", "3", "3", "9"];

    let menuDescription =
    "I'm baby twee post-ironic single-origin coffee shaman, cloud bread 8-bit seitan biodiesel umami DIY street art banh mi.";

    const menu = () => {
    let image = document.createElement("IMG");
    let description = document.createElement("p");
    let contentDiv = document.querySelector(".content");
    let menu = document.createElement("div");

    description.textContent = menuDescription;
    description.classList.add("menu-description");
    contentDiv.appendChild(description);

    image.src = "assets/chicken-fries.jpeg";
    image.classList.add("menu-image");
    contentDiv.appendChild(image);

    createMenuHead(menu, "Entrées");
    createMenuItems(menu, entreeNames, entreePrices);
    createMenuHead(menu, "Sides");
    createMenuItems(menu, sidesNames, sidesPrices);

    menu.classList.add("menu");
    contentDiv.appendChild(menu);
    };

    const createMenuItems = (menuDiv, meal, price) => {
    let i = 0;
    meal.forEach((e) => {
        let menuItem = document.createElement("div");
        let menuItemName = document.createElement("p");
        let menuItemPrice = document.createElement("p");

        menuItemName.textContent = e;
        menuItemPrice.textContent = ` ${price[i]}`;

        menuItem.classList.add("menu-item");
        menuItem.appendChild(menuItemName);
        menuItem.appendChild(menuItemPrice);
        menuDiv.appendChild(menuItem);

        i++;
    });
    };

    const createMenuHead = (menu, title) => {
    let menuHeader = document.createElement("h2");
    let menuTop = document.createElement("div");
    let menuPlateHeader = document.createElement("p");
    let menuPriceHeader = document.createElement("p");

    menuHeader.textContent = title;
    menuHeader.classList.add("menu-header");
    menu.appendChild(menuHeader);

    menuTop.classList.add("menu-top");
    menu.appendChild(menuTop);

    menuPlateHeader.textContent = "Plate";
    menuPlateHeader.classList.add("menu-plate-header");
    menuTop.appendChild(menuPlateHeader);

    menuPriceHeader.textContent = "Price";
    menuPriceHeader.classList.add("menu-price-header");
    menuTop.appendChild(menuPriceHeader);
};

export { menu };
