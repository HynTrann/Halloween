const bodyListScary = [
    {
        img: "../../assets/imgs/scary/book-skulls.jpg",
        title: "Ghost Stories",
        text: "This page features lots of haunted ghost stories and tales of the supernatural as told by our readers. Many of them are true but remain unexplained."
    },
    {
        img: "../../assets/imgs/scary/castle-2.jpg",
        title: "Short Scary Stories",
        text: "A collection of short scary stories and local urban legends that take place anywhere there's a bit of history. Some of them are claimed to be true and even happened on Halloween night."
    },
    {
        img: "../../assets/imgs/scary/owl.jpg",
        title: "Superstitions",
        text: "It's not all bad luck, nor is it the luck of the draw! Here's a list of the most common superstitions and omens, good and bad luck as well as common folkore and myths."
    },
    {
        img: "../../assets/imgs/scary/book.jpg",
        title: "Urban Legends",
        text: "The mother of all scary pages, you'll find links to many various urban legends, folklore, myths, and hoaxes that are popular around Halloween and all year long. It's a history lesson of diabolical proportions."
    },
    {
        img: "../../assets/imgs/scary/wolf.jpg",
        title: "What Scares You?",
        text: "From common to quite unique, here's an array of things that really scares our visitors, whether it's a fear, phobia, or situation. Do these things scare you too?"
    },
    {
        img: "../../assets/imgs/scary/friday-the-13th.jpg",
        title: "Friday the 13th",
        text: "Do you share the belief that Friday the 13th is an unlucky day? Explore history and common beliefs about Friday the 13th being a bad luck superstition or unlucky day as well as how it's views vary between historians, Christians, and others."
    }
];

for (let i = 0; i < bodyListScary.length; i++) {
    document.getElementById(
        "body__content-list"
    ).innerHTML += `${`
    <div class="body__content-item">
        <div class="row">
            <div class="col l-12">
                <div class="row">
                    <div class="col">
                        <div class="img-wrapper">
                            <div style="display: flex; overflow: hidden; border-radius: 4px;">
                                <img class="img-scale"
                                    src="${bodyListScary[i].img}" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col l-7">
                        <h2 class="mg-top-18">
                            <a class="thickItalicLink" href="#">${bodyListScary[i].title}</a>
                        </h2>
                        <p class="mg-top-8">${bodyListScary[i].text}</p>
                        <a href="#" class="btn-default mg-top-20">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`}`;
}