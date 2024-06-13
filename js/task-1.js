const fullTaks1 = () => {
    const listItems = document.querySelectorAll("#categories > .item");

    console.log(`Number of categories: ${listItems.length}`);

    listItems.forEach(item => {
        const categoryName = item.querySelector("h2").textContent;
        const categoryItems = item.querySelectorAll("ul > li");
        console.log(`Category: ${categoryName}`)
        console.log(`Elements: ${categoryItems.length}`);
    });
};

fullTaks1();