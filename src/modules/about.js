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
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, necessitatibus veritatis? Praesentium voluptatum autem necessitatibus perferendis. Nobis animi, esse quae illum labore molestiae impedit hic accusamus est dolor veniam vel unde, explicabo autem eligendi similique asperiores sunt quidem sit voluptatibus aperiam in excepturi perferendis. Voluptas alias dolorem libero optio nesciunt!";
    about.appendChild(para);

    about.classList.add("about");
    contentDiv.appendChild(about);
};

export { about };
