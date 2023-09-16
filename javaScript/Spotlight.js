//Fake Json file
// Sorting the spotlights time posted
// time object
function fullDateAndTime(timeElapsed) {
  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;
  let weeks = days * 7;
  let month = days * 30;
  let year = days * 365;
  if (timeElapsed > year) {
    let num = timeElapsed / year;
    return Math.round(num) + " years";
  } else if (timeElapsed > month) {
    let num = timeElapsed / month;
    return Math.round(num) + " months";
  } else if (timeElapsed > weeks) {
    let num = timeElapsed / weeks;
    return Math.round(num) + " weeks";
  } else if (timeElapsed > days) {
    let num = timeElapsed / days;
    return Math.round(num) + " days";
  } else if (timeElapsed > hours) {
    let num = timeElapsed / hours;
    return Math.round(num) + " hours";
  } else if (timeElapsed > minutes) {
    let num = timeElapsed / minutes;
    return Math.round(num) + " minutes";
  } else if (timeElapsed > 0 && timeElapsed < minutes) {
    let num = timeElapsed / seconds;
    return Math.round(num) + " seconds";
  } else {
    return "...";
  }
}

function getUploadedDuration(date) {
  let start = date;
  let end = Date.now();
  let timeElapsed = getTimeElapsed(start, end);
  let time = fullDateAndTime(timeElapsed);
  return time;
}
function getTimeElapsed(start, end) {
  return end - start;
}

const spotlightList = [
  {
    name: "Ngidi",
    picture:
      "src='/images/FifthEdition/YoungPeopleOnTheMove/MpenduloNgidi/5ED_MpenduloNgidi_main.jpg'",
    fullname: "Mpendulo Ngidi",
    industry: "Entrepreneur, Brand, Soccer, Sports",
    details: `By far one of the most talented, industrious midfielders Eswatini has ever 
    witnessed, most sports fundis would agree with me that Ngidi is a marvel to watch, his
    stylish displays in the soccer field makes one to not regret purchasing the matchday ticket.
     The fact that he is still yet to represent the senior national team with pride is still a
     mystery. It goes without any iota of doubt that the name “Mpendulo Ngidi” will forever be
     engraved in memories of soccer supporters especially those who hail from the Lubombo
     region after being the captain of the Titanic “Tambuti” ship which sailed into the MTN
     Premier league after an absence of over a decade in the premiership.  `,
    link: "href='/Articles/FromOtherEditions/FifthEdition/5ED_MpenduloNgidi.html'",
    date: new Date("2023-09-16T01:56:00"),
  },
  {
    name: "Urcousinphayo",
    picture:
      "src='/images/FifthEdition/YoungPeopleOnTheMove/Urcousinphayo/5ED_Urcousinphayo_main.jpg'",
    fullname: "Nkosephayo Ntokozo Mndzebele",
    industry: "Entrepreneur, DJ, Music",
    details: `From the moment we are born, we begin to dream. Some dreams change with time, while
     others remain a constant. But for all of us, there are those dreams that speak to our very
     soul - the ones we know we must pursue, no matter what obstacles may stand in our way. While
     not all of us are given the chance to see our dreams realized, those who do experience a
     sense of fulfillment unlike any other. `,
    link: "href='/Articles/FromOtherEditions/FifthEdition/5ED_Urcousinphayo.html'",
    date: new Date("2023-09-16T00:00:00"),
  },
  {
    name: "Nomvuyo",
    picture:
      "src='/images/FifthEdition/YoungPeopleOnTheMove/Nomvuyo/5ED_image_Nomvuyo_closeUp.jpg'",
    fullname: "Nomvuyo Phetsile Precious Dlamini",
    industry: "Entrepreneur, Gifts, sweets",
    details: `Rupturing peripheries seems to be her life mantra. A visionary who has asserted 
    her place amongst young people crafting their way to the pinnacle of success in the country.
    Businesswoman, CEO and corporate extraordinaire in the making. Going behind the archetype and
    fundamental ideologies of Nomvuyo Phetsile Precious Dlamini was a task I was so soaked up and
    ready for.`,
    link: "href='/Articles/FromOtherEditions/FifthEdition/5ED_Nomvuyo.html'",
    date: new Date("2023-07-12T21:40:00"),
  },
  {
    name: "Shakes",
    picture:
      "src='/images/FifthEdition/Other/SecondEdition/Copy of Moreen-9172.jpg'",
    fullname: "Zwelakhe Shakes Dlamini",
    industry: "Scholar",
    details:
      "Thandolwethu Zwelakhe Dlamini goes by Shakes, a name given to him by his grandfather since he was a little boy, and he uses it often. He was born and raised in Manzini, eSwatini. He started his preschool in a preschool in Nazarene, progressed to Nazarene practicing for two years and then further to Ngwane Park primary school in grade three. He graduated to Ngwane Park High school in Manzini and now he is currently in Massachusetts Institute of Technology (MIT) doing his Masters in Technology and Policy. We are going to have a peek into his journey to MIT.",
    link: "href='/Articles/FromOtherEditions/FifthEdition/5ED_ZwelakheShakes.html'",
    date: new Date("2023-05-03T13:10:00"),
  },
  {
    name: "Zano_Soul",
    picture:
      "src='/images/FifthEdition/YoungPeopleOnTheMove/Zanoxolo/image - 5ED - Zano_Soul - smileGreenJacket - main.jpg'",
    fullname: "Zanoxolo Maseko",
    industry: "Vocalist, Artist",
    details:
      "I am Zanoxolo Maseko, but I now go by my stage name Zano_Soul. Born and bred in Mbabane, eSwatini, I'm a young woman currently pursuing a degree at the University of Botswana. I fell in love with music at a very young age. I've been singing at church as a part of praise team since I was about 7years of age.",
    link: "href='/Articles/FromOtherEditions/FifthEdition/5ED_Zanoxolo.html'",
    date: new Date("2023-03-04T11:41:00"),
  },
  {
    name: "Thembinkosi",
    picture:
      "src='/images/FifthEdition/YoungPeopleOnTheMove/Thembinkhosi/image - 5ED - Thembinkhosi - mainPicture.jpg'",
    fullname: "Thembinkosi Mabuza",
    industry: "Drawing, Fine arts",
    details:
      "I am Thembinkosi Mabuza an artist based in Ludzeludze, and I began my journey as an artist at primary school level. ",
    link: "href='/Articles/FromOtherEditions/FifthEdition/5Ed_Thembinkhosi.html'",
    date: new Date("2022-12-31T00:00:00"),
  },
  {
    name: "Esihle",
    picture: "src='/images/image-esihle protrait.webp'",
    fullname: "Siphesihle Qwabe ",
    industry: "Business, Clothing",
    details:
      "The reason why I started my business was simply because I had just completed high school and was looking for something to keep me busy while also giving me an income. Surprisingly the business grew so well and I started getting a lot of customers. ",
    link: "href='/Articles/Guests/4Ed_Esihle.html'",
    date: new Date("2022-07-08T00:00:00"),
  },
];

createList(spotlightList);

function createList(list) {
  const spotlights = document.getElementById("spotlightList");
  list.forEach((element) => {
    let duration = getUploadedDuration(element.date);
    let list = `
    <a ${element.link} class="spotlight-link">
    <div class="spotlight">
      <div class="spotlight-thumbnail">
        <div class="spotlight-picture-container">
          <img
            ${element.picture}
            alt=""
            class="spotlight-picture"
          />
        </div>
        <div class="spotlight-name"><h4>${element.name}</h4></div>
      </div>
      <div class="spotlight-details">
        <h5>${element.fullname}</h5>
        <h5>${element.industry}</h5>
        <p class="uploadedDuration" >uploaded ${duration} ago</p>
        <p class="details-text">
        ${element.details}
        </p>
</a>
    `;
    spotlights.innerHTML += list;
  });
}
