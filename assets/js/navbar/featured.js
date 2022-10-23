const bodyListFeatured = [
    {
        img: "../../assets/imgs/featured/friday-the-13th.jpg",
        title: "Friday the 13th",
        text: "Do you share the belief that Friday the 13th is an unlucky day? Explore history and common beliefs about Friday the 13th being a bad luck superstition or unlucky day as well as how it's views vary between historians, Christians, and others."
    },
    {
        img: "../../assets/imgs/featured/glowing-pumpkin.jpg",
        title: "Halloween Customs",
        text: "Discover the traditions and customs of Halloween, including how Halloween began, how costumes originated, and common folklore surrounding the holiday."
    },
    {
        img: "../../assets/imgs/featured/chase.jpg",
        title: "Halloween Pranks",
        text: "Got a funny bone? This page provides funny, undestructive ideas for Halloween pranks, tricks, and parties. Now get your game on!"
    },
    {
        img: "../../assets/imgs/featured/porch.jpg",
        title: "Halloween Safety Tips",
        text: "Provides many Halloween safety tips for children, costumes, and trick or treating to ensure a safe holiday outing."
    },
    {
        img: "../../assets/imgs/featured/mask.jpg",
        title: "Halloween Trivia and Fun Facts",
        text: "You don't have to know it but it's fascinating, nonetheless. This page is full of information about Halloween and lots of creepy tidbits you never knew."
    },
    {
        img: "../../assets/imgs/featured/halloween-flags.jpg",
        title: "History of Halloween",
        text: "Learn some fascinating facts about the history and origin of Halloween, including how the holiday originated and how it evolved into what it is today."
    },
    {
        img: "../../assets/imgs/featured/witch.jpg",
        title: "The History of Witches & Warlocks",
        text: "Read about the surprising origin and history of witches and warlocks and how it has evolved since medieval times."
    },
    {
        img: "../../assets/imgs/featured/owl.jpg",
        title: "Superstitions",
        text: "It's not all bad luck, nor is it the luck of the draw! Here's a list of the most common superstitions and omens, good and bad luck as well as common folkore and myths."
    },
    {
        img: "../../assets/imgs/featured/jack.jpg",
        title: "Taking Pictures",
        text: "Features an in-depth article describing how to take the best pictures to capture the real spirits of Halloween and beyond."
    },
    {
        img: "../../assets/imgs/featured/haunted-house2.jpg",
        title: "Top Haunted Houses in the United States",
        text: "If you want adventure and to be frightened to the bones, here’s a list of the top Haunted House attractions in the country. Enter any of these popular places if you dare! You've been warned!"
    },
];

for (let i = 0; i < bodyListFeatured.length; i++) {
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
                                    src="${bodyListFeatured[i].img}" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col l-7">
                        <h2 class="mg-top-18">
                            <a class="thickItalicLink" href="">${bodyListFeatured[i].title}</a>
                        </h2>
                        <p class="mg-top-8">${bodyListFeatured[i].text}</p>
                        <a href="" class="btn-default mg-top-20">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`}`;
}