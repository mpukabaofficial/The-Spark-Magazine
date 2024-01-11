function picturePath(path) {
  return `src='${path}'`;
}
function linkPath(path) {
  return `href='${path}'`;
}
function photoDescription(info) {
  return `alt='${info}'`;
}
const types = {
  ad: "Advertisements",
  article: "Article",
};

const categories = {
  themed: "themed",
  cover: "cover",
  pearls: "pearlS",
  ad: "ads-elements",
  otherEditions: "other-edition",
  spiritual: "spiritual",
};
const tags = {
  fifth: "Fifth Edition",
  fourth: "Fourth Edition",
  third: "Third Edition",
  second: "Second Edition",
  first: "First Edition",
  spiritual: "Spiritual",
  spotlight: "Spotlight",
  ad: "Ad",
};

export const headlines = [
  {
    tag: tags.second,
    picture: picturePath(
      "/images/SecondEdition/AWinInSchool/Part1/2ED_studentsInClass.jpg"
    ),
    pictureDesc: photoDescription("a picture of students in a classroom"),
    articleInfo: "A Win In School: Your Best Bet | Part 1",
    date: new Date("2024-01-10T21:31:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/SecondEdition/2ED_aWinInSchool.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/The Age of AI/Man with Robot.jpg"
    ),
    pictureDesc: photoDescription(
      "a picture of a human and a robot touching hands"
    ),
    articleInfo:
      "The Age Of AI: Going Beneath The Skin Of The Phenomenon Of AI",
    date: new Date("2023-12-21T13:40:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_AI_Part1.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/YoungPeopleOnTheMove/Sisekelo Ramires Dlamini/5ED_YoungPeople OnTheMove_Remirez_main.jpg"
    ),
    pictureDesc: photoDescription(
      "a picture of Sisekelo Ramires Dlamini in a church service"
    ),
    articleInfo:
      "Young and Called: Inside the Spiritual Tabernacle of Ramires! ",
    date: new Date("2023-12-19T13:52:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_SisekeloRemirez_Dlamini.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/Mining Sector/ARTICLE COVER PICTURE.jpg"
    ),
    pictureDesc: photoDescription("a picture of a Swazi mine"),
    articleInfo:
      "The government of Eswatini has to cut off its monopolistic hand over the mining sector if it wants the economy to sky-rocket!",
    date: new Date("2023-12-09T02:02:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_mining_sector.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/YoungPeopleOnTheMove/NhloniphoLihleDlamini/5ED_Nhlonipho_main.png"
    ),
    pictureDesc: photoDescription(
      "a picture of Nhlonipho on the stage carrying a microphone"
    ),
    articleInfo:
      "Nhlonipho Dlamini: A Musical Journey from Swaziland to South Africa",
    date: new Date("2023-10-23T12:02:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_NhloniphoLihleDlamini.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/YoungPeopleOnTheMove/Slwane/5ED_behindTheComedy_main.jpg"
    ),
    pictureDesc: photoDescription("a picture of Slwane the comedia"),
    articleInfo: "BEHIND THE COMEDY: Exploring the Creative Royalty of SLWANE!",
    date: new Date("2023-09-26T16:32:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_behindTheComedy.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/DigitalRegression/5ED_digitalRegression.jpg"
    ),
    pictureDesc: photoDescription("a black woman with her arms crossed"),
    articleInfo: "Eswatini: A Land Fated By Digital Regression!",
    date: new Date("2023-09-18T12:50:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_digitalRegression.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/poetry/5ED_Poetry_theBlackGoddess.jpg"
    ),
    pictureDesc: photoDescription("a black woman with her arms crossed"),
    articleInfo: "The Black Goddess | P4P",
    date: new Date("2023-09-16T02:48:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_poetry_theBlackGoddess.html"
    ),
  },
  {
    tag: tags.spotlight,
    picture: picturePath(
      "/images/FifthEdition/YoungPeopleOnTheMove/MpenduloNgidi/5ED_MpenduloNgidi_main.jpg"
    ),
    pictureDesc: photoDescription("a man wearing a hoodie"),
    articleInfo:
      "FROM THE SOCCER PITCH TO NAVIGATING THE FASHION WORLD:THE UNTOLD STORY OF MPENDULO NGIDI ",
    date: new Date("2023-09-16T01:56:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_MpenduloNgidi.html"
    ),
  },
  {
    tag: tags.spotlight,
    picture: picturePath(
      "/images/FifthEdition/YoungPeopleOnTheMove/Urcousinphayo/5ED_Urcousinphayo_main.jpg"
    ),
    pictureDesc: photoDescription("a dj mixing a looking to the side"),
    articleInfo: "Urcousinphayo: Balancing Success in the Music Industry",
    date: new Date("2023-09-16T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_Urcousinphayo.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/MySummerEswatini/image_phinduvuke_bus.jpg"
    ),
    pictureDesc: photoDescription("picture of a long bus"),
    articleInfo: "My Summer: Eswatini",
    date: new Date("2023-09-09T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_MySummer.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/FarmersMarket/5ED_Farmers Market_1.jpg"
    ),
    pictureDesc: photoDescription("a poster of farmers market"),
    articleInfo: 'ESWATINI FARMERS MARKET-SECOND EDITION "A MUST GO TO EVENT"',
    date: new Date("2023-09-02T00:00:00"),
    type: types.ad,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_farmersMarket.html"
    ),
  },
  {
    tag: tags.spotlight,
    picture: picturePath(
      "/images/FifthEdition/YoungPeopleOnTheMove/Nomvuyo/5ED_image_Nomvuyo_closeUp.jpg"
    ),
    pictureDesc: photoDescription("a close up shot of Nomvuyo"),
    articleInfo: "Nomvuyo Dlamini: The Precious Gift That Keeps on Giving",
    date: new Date("2023-07-12T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath("/Articles/FromOtherEditions/FifthEdition/5ED_Nomvuyo.html"),
  },
  {
    tag: tags.fifth,
    picture: picturePath("/images/FifthEdition/Authenticity/Authenticity.jpg"),
    pictureDesc: photoDescription("two women eating dessert"),
    articleInfo: "AUTHENTICITY: Living According to your own truth.",
    date: new Date("2023-05-01T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_AUTHENTICITY.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/On Self Esteem/image - 5ED - onSelfEsteem.jpg"
    ),
    pictureDesc: photoDescription(
      "blue background with woodblocks spelling out 'Self-Esteem'"
    ),
    articleInfo: "On Self-Esteem | Senchen Subba",
    date: new Date("2023-04-08T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_onSelfEsteem.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/Reframing Rejection as Projection/Rejection.jpg"
    ),
    pictureDesc: photoDescription("A picture of a a girl rejecting bread"),
    articleInfo:
      "Reframing Rejection as Projection ...a necessary ingredient for growth",
    date: new Date("2023-03-31T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_ReframingRejectionAsProjection.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/PearlS/Uncomfortable Means/Image - 5ED - PearlS - uncomfortable means - main.jpg"
    ),
    pictureDesc: photoDescription(
      "A picture of a boy carrying a pencil with his arms on his head"
    ),
    articleInfo: "Uncomfortable Means to Desired Outcomes | Pearl S.",
    date: new Date("2023-03-10T00:00:00"),
    type: types.article,
    category: categories.pearls,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_PearlS_uncomfortableMeans.html"
    ),
  },
  {
    tag: tags.ad,
    picture: picturePath("/images/Ads/Introducing Spotlight.jpg"),
    pictureDesc: photoDescription("A picture with multiple people"),
    articleInfo:
      "Introducing our Spotlight section where we showcase young Swazis on the move!",
    date: new Date("2023-03-04T00:00:00"),
    type: types.ad,
    category: categories.ad,
    link: linkPath("/Spotlight/index.html"),
  },
  {
    tag: tags.spotlight,
    picture: picturePath(
      "/images/FifthEdition/YoungPeopleOnTheMove/Zanoxolo/image - 5ED - Zano_Soul - smileGreenJacket - main.jpg"
    ),
    pictureDesc: photoDescription(
      "a picture of a black woman wearing a greet formal jacket"
    ),
    articleInfo: "Meet Zano_Soul!",
    date: new Date("2023-03-04T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_Zanoxolo.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/courageSimplifies/Image - 5ED - courageSimplifies - main.jpg"
    ),
    pictureDesc: photoDescription("a person jumping over a cliff"),
    articleInfo: "Courage Simplifies",
    date: new Date("2023-02-19T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_CourageSimplifies.html"
    ),
  },
  {
    tag: tags.first,
    picture: picturePath(
      "/images/FifthEdition/Other/FirstEdition/Eswatini/image - swazi flag - main.jpg"
    ),
    pictureDesc: photoDescription("a picture of the swazi flag against a pole"),
    articleInfo: "I know a country called Eswatini | Gil Sanders",
    date: new Date("2023-02-09T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath(
      "/Articles/FromOtherEditions/FirstEdition/1ED_Gil_iKnowEswatini.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath("/images/FifthEdition/poetry/youreTheBest.jpg"),
    pictureDesc: photoDescription("a picture of a rose on newspapers"),
    articleInfo: "You're The Best, You're The One | Sandra LePoet",
    date: new Date("2023-02-02T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_Poetry_youreTheBestYoureTheOne.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/The Daisy - Pearl S/image - 5ED - Pearl S - aDaisyFlower - main.jpg"
    ),
    pictureDesc: photoDescription("a picture with a yellow light bulb"),
    articleInfo: "The Daisy | Pearl S.",
    date: new Date("2023-01-26T00:00:00"),
    type: types.article,
    category: categories.pearls,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5ED_PearlS_theDaisy.html"
    ),
  },
  {
    tag: tags.third,
    picture: picturePath(
      "/images/FifthEdition/Other/3ED_itTakesCourageToWorkSmart_LightBulb.jpg"
    ),
    pictureDesc: photoDescription("a picture with a yellow light bulb"),
    articleInfo: "It takes courage to work smart.",
    date: new Date("2023-01-20T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath(
      "/Articles/FromOtherEditions/ThirdEdition/3ED_education_itTakesCourageToWorkSmart.html"
    ),
  },
  {
    tag: tags.spiritual,
    picture: picturePath(
      "/images/FifthEdition/Spiritual/Seasons/image - 5ED - Spiritual - Seasons - autumn - main.webp"
    ),
    pictureDesc: photoDescription("a picture with autumn leaves"),
    articleInfo: "Spiritual: Seasons And Simplicity | Noncedo",
    date: new Date("2023-01-02T00:00:00"),
    type: types.article,
    category: categories.spiritual,
    link: linkPath("/Articles/spiritual/5ED_Seasons_Noncedo.html"),
  },
  {
    tag: tags.spotlight,
    picture: picturePath(
      "/images/FifthEdition/YoungPeopleOnTheMove/Thembinkhosi/image - 5ED - Thembinkhosi - mainPicture.jpg"
    ),
    pictureDesc: photoDescription("a man wearing black glasses"),
    articleInfo: "Fine Arts: Thembinkosi Mabuza",
    date: new Date("2022-12-31T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5Ed_Thembinkhosi.html"
    ),
  },
  {
    tag: tags.fifth,
    picture: picturePath(
      "/images/FifthEdition/Ignorant Arrogance/image - human rights.webp"
    ),
    pictureDesc: photoDescription("a pole with human rights poster"),
    articleInfo:
      "Ignorant Arrogance: “Work hard and you will be successful in life.”",
    date: new Date("2022-12-12T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath("/Articles/social-justice/5Ed_WorkHardToBeSuccessful.html"),
  },
  {
    tag: tags.fifth,
    picture: picturePath("/images/Cover Fifth Edition.png"),
    pictureDesc: photoDescription(
      "a picture of the cover of the Fifth edition: a man carrying a camera over their face, obstructing their face."
    ),
    articleInfo: "Felix Dlamini and Sinenkosi Msomi",
    date: new Date("2022-11-01T00:00:00"),
    type: types.article,
    category: categories.cover,
    link: linkPath("/Articles/Guests/5Ed_Feilx_Sinenkosi.html"),
  },
  {
    tag: tags.fifth,
    picture: picturePath("/images/image - peaceHAndsFlageSwatini.jpg"),
    pictureDesc: photoDescription(
      "a picture of a hand showing the peace sign and it covered by the eswatini flag"
    ),
    articleInfo: "Introduction to the Fifth Edition",
    date: new Date("2022-10-15T00:00:00"),
    type: types.article,
    category: categories.themed,
    link: linkPath(
      "/Articles/FromOtherEditions/FifthEdition/5Ed_Introduction.html"
    ),
  },
  {
    tag: tags.fourth,
    picture: picturePath("/images/image-wildlifeEswatini.webp"),
    pictureDesc: photoDescription(""),
    articleInfo: "Vision 2022: Humble and Attainable | Part 3",
    date: new Date("2022-08-09T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath(
      "/Articles/FromOtherEditions/FourthEdition/4Ed_Vision2022_Part3.html"
    ),
  },
  {
    tag: tags.second,
    picture: picturePath("/images/image-manSilhoutte.webp"),
    pictureDesc: photoDescription(""),
    articleInfo: "SUCCESS IS THE CHILD OF SELF-DISCIPLINE",
    date: new Date("2022-08-02T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath("/Articles/FromOtherEditions/SecondEdition/2ed_pearlS.html"),
  },
  {
    tag: tags.fourth,
    picture: picturePath("/images/image-mbabaneHilton.webp"),
    pictureDesc: photoDescription(""),
    articleInfo: "Vision 2022: Let's get real and pragmatic|Part 2",
    date: new Date("2022-07-22T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath(
      "/Articles/FromOtherEditions/FourthEdition/4ed_Vision2022_Part2.html"
    ),
  },
  {
    tag: tags.first,
    picture: picturePath("/images/image-businessPlan.webp"),
    pictureDesc: photoDescription(""),
    articleInfo: "Business in eSwatini: A testimonial.",
    date: new Date("2022-07-18T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath(
      "/Articles/FromOtherEditions/FirstEdition/1ed_Business.html"
    ),
  },
  {
    tag: tags.first,
    picture: picturePath("/images/image-aBlackVendor.webp"),
    pictureDesc: photoDescription(""),
    articleInfo:
      "Unemployment: the story of Hope\n“They are doing the same duties in schools but are shamefully paid half.”",
    date: new Date("2022-07-13T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath(
      "/Articles/FromOtherEditions/FirstEdition/1Ed_Unemployment.html"
    ),
  },
  {
    tag: tags.fourth,
    picture: picturePath("/images/Pearl S.webp"),
    pictureDesc: photoDescription(""),
    articleInfo: "Pearl S.: Life is what you Believe.",
    date: new Date("2022-07-09T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath("/Articles/FromOtherEditions/FourthEdition/4Ed_PearlS.html"),
  },
  {
    tag: tags.fourth,
    picture: picturePath("/images/Vision2022.webp"),
    pictureDesc: photoDescription(""),
    articleInfo:
      "Vision 2022: The Story Of a Country Killing its Dreams.|Part 1",
    date: new Date("2022-07-08T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath(
      "/Articles/FromOtherEditions/FourthEdition/4Ed_Vision2022-Part1.html"
    ),
  },
  {
    tag: tags.first,
    picture: picturePath("/images/eswatini-ribbon.webp"),
    pictureDesc: photoDescription(""),
    articleInfo: "First Edition Introduction",
    date: new Date("2022-06-08T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath("/Articles/FromOtherEditions/FourthEdition/1Ed_Intro.html"),
  },
  {
    tag: tags.fourth,
    picture: picturePath("/images/image-bible.webp"),
    pictureDesc: photoDescription(""),
    articleInfo: "Dreams Vs Attitude",
    date: new Date("2022-06-06T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath("/Articles/spiritual/4ED_dreams.html"),
  },
  {
    tag: tags.fourth,
    picture: picturePath("/images/image-esihle standing.jpg"),
    pictureDesc: photoDescription("a woman wearing a yellow dress standing"),
    articleInfo: "Esihle and The Girlies Closet",
    date: new Date("2022-05-30T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath("/Articles/Guests/4Ed_Esihle.html"),
  },
  {
    tag: tags.fourth,
    picture: picturePath("/images/SwaziflagSmall.webp"),
    pictureDesc: photoDescription("the Swazi flag"),
    articleInfo: "Introduction",
    date: new Date("2022-05-30T00:00:00"),
    type: types.article,
    category: categories.otherEditions,
    link: linkPath("/Articles/FromOtherEditions/FourthEdition/4Ed_intro.html"),
  },
  {
    tag: tags.ad,
    picture: picturePath("/images/Fourth Edition video.webp"),
    pictureDesc: photoDescription("a snapshot of the advert video"),
    articleInfo: "The Fourth Edition is on its way",
    date: new Date("2022-05-27T00:00:00"),
    type: types.ad,
    category: categories.otherEditions,
    link: linkPath("/videos/Fourth Edition(1).mp4"),
  },
  {
    tag: tags.ad,
    picture: picturePath("/images/image - GBV poster.jpg"),
    pictureDesc: photoDescription(
      "a poster warning about gender-based violence"
    ),
    articleInfo: "Stop the violence against Women",
    date: new Date("2022-05-27T00:00:00"),
    type: types.ad,
    category: categories.ad,
    link: linkPath("/images/image - GBV poster.webp"),
  },
];
