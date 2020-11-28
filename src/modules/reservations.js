let reservations = () => {
    let contentDiv = document.querySelector(".content");
    let reservationsBody = document.createElement("div");
    let smallHead = document.createElement("p");
    let bigHead = document.createElement("h2");
    let phoneText = document.createElement("p");
    let phoneNumber = document.createElement("p");
    let paragraph = document.createElement("p");
    let link = document.createElement("a");

    smallHead.textContent = "MAKE A";
    smallHead.classList.add("small-bold", "small-header");
    reservationsBody.appendChild(smallHead);

    bigHead.textContent = "RESERVATION";
    reservationsBody.appendChild(bigHead);

    phoneText.textContent = "To make a reservation please call:";
    phoneText.classList.add("phone-text");
    reservationsBody.appendChild(phoneText);

    phoneNumber.textContent = "555-555-6666";
    phoneNumber.classList.add("small-bold", "phone-number");
    reservationsBody.appendChild(phoneNumber);

    paragraph.textContent =
        "We allow a limited amount of online reservations each evening. If you don't see availability online please call, as we may have more availability over the phone.";
    reservationsBody.appendChild(paragraph);

    link.textContent = "Find a Table Online";
    link.href = "";
    link.classList.add("reservations-link");
    reservationsBody.appendChild(link);

    reservationsBody.classList.add("reservations");
    contentDiv.appendChild(reservationsBody);
};

export { reservations };
