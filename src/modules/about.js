const about = () => {
    let contentDiv = document.querySelector(".content");
    let about = document.createElement("div");
    let h1 = document.createElement("h1");
    let img = document.createElement("IMG");
    let para = document.createElement("p");

    img.src = "assets/about.jpeg";
    about.appendChild(img);

    h1.textContent = "About Sweet Whisky ";
    about.appendChild(h1);

    para.textContent =
        "Heirloom fam venmo copper mug offal vape selfies small batch lomo. Post-ironic lo-fi quinoa shabby chic single-origin coffee. Bitters man bun you probably haven't heard of them wayfarers, heirloom roof party flexitarian. Forage sriracha distillery mumblecore microdosing vinyl palo santo lo-fi iceland before they sold out lomo hella hashtag. Austin edison bulb cold-pressed activated charcoal pabst typewriter.";
    about.appendChild(para);

    about.classList.add("about");
    contentDiv.appendChild(about);
};

export { about };
