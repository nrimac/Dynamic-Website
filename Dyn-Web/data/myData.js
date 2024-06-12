let idCounter = 1;

const data = {
  website: "Random Web Shop",
  categories: [
    {
      name: "Gitare",
      products: [
        {
          id: idCounter++,
          name: "Rock Gitara",
          image: "/images/guitars/guitar1.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Električna Gitara",
          image: "/images/guitars/guitar2.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Akustična Gitara",
          image: "/images/guitars/guitar3.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Klasična Gitara",
          image: "/images/guitars/guitar4.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Hibridna Gitara",
          image: "/images/guitars/guitar5.jpg",
          quantity: 0,
        },
      ],
    },
    {
      name: "Igračke",
      products: [
        {
          id: idCounter++,
          name: "Fidget-spinner",
          image: "/images/toys/fidget-spinner.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Rubikova Kocka",
          image: "/images/toys/rubiks-cube.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Zvrk",
          image: "/images/toys/spinning-top.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Plišanac",
          image: "/images/toys/teddy-bear.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Trkaći Autić",
          image: "/images/toys/toy-car.jpg",
          quantity: 0,
        },
      ],
    },
    {
      name: "Tepisi",
      products: [
        {
          id: idCounter++,
          name: "Moderni Tepih",
          image: "/images/carpets/carpet1.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Čupavi Tepih",
          image: "/images/carpets/carpet2.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Čupavi Tepih 2",
          image: "/images/carpets/carpet3.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Klasični Tepih",
          image: "/images/carpets/carpet4.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Čupavi Tepih 3",
          image: "/images/carpets/carpet5.jpg",
          quantity: 0,
        },
      ],
    },
    {
      name: "Penjačka Oprema",
      products: [
        {
          id: idCounter++,
          name: "Konop",
          image: "/images/climbing-gear/konop.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Magnezij",
          image: "/images/climbing-gear/magnezij.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Penjačice",
          image: "/images/climbing-gear/penjacice.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Set za osiguravanje",
          image: "/images/climbing-gear/tradicionalna-ukapcanja.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Komplet za osiguravanje",
          image: "/images/climbing-gear/ukapcanje.jpg",
          quantity: 0,
        },
      ],
    },
    {
      name: "Igraće Konzole",
      products: [
        {
          id: idCounter++,
          name: "Gameboy",
          image: "/images/consoles/gameboy.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Nintendo DS",
          image: "/images/consoles/nintendoDS.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Playstation 1",
          image: "/images/consoles/playstation-1.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Playstation Portable",
          image: "/images/consoles/psp.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "VR Headset",
          image: "/images/consoles/vr-headset.jpg",
          quantity: 0,
        },
      ],
    },
    {
      name: "Vrata",
      products: [
        {
          id: idCounter++,
          name: "Drvena Vrata",
          image: "/images/doors/door1.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Rustična Vrata",
          image: "/images/doors/door2.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Hobit Vrata",
          image: "/images/doors/door3.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Tradicionalna Vrata",
          image: "/images/doors/door4.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Klasična Vrata",
          image: "/images/doors/door5.jpg",
          quantity: 0,
        },
      ],
    },
    {
      name: "Slike",
      products: [
        {
          id: idCounter++,
          name: "Eterična Harmonija",
          image: "/images/paintings/abstract1.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Zenovski Horizonti",
          image: "/images/paintings/abstract2.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Kozmički Ples",
          image: "/images/paintings/abstract3.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Svjetlosna Simfonija",
          image: "/images/paintings/abstract4.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Mozaik Misli",
          image: "/images/paintings/abstract5.jpg",
          quantity: 0,
        },
      ],
    },
    {
      name: "Hlače",
      products: [
        {
          id: idCounter++,
          name: "Poslovne Hlače",
          image: "/images/pants/pants1.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Casual Hlače",
          image: "/images/pants/pants2.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Moderne Hlače",
          image: "/images/pants/pants3.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Streetwear Hlače",
          image: "/images/pants/pants4.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Tajice",
          image: "/images/pants/pants5.jpg",
          quantity: 0,
        },
      ],
    },
    {
      name: "Majice",
      products: [
        {
          id: idCounter++,
          name: "Casual Košulja",
          image: "/images/shirts/shirt1.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Elegantna Majica",
          image: "/images/shirts/shirt2.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Fina Majica",
          image: "/images/shirts/shirt3.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Culprit-Apparel Majica",
          image: "/images/shirts/shirt4.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Casual Majica",
          image: "/images/shirts/shirt5.jpg",
          quantity: 0,
        },
      ],
    },
    {
      name: "Televizori",
      products: [
        {
          id: idCounter++,
          name: "4K TV",
          image: "/images/tvs/tv1.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Curved TV",
          image: "/images/tvs/tv2.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "LED TV",
          image: "/images/tvs/tv3.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "OLED TV",
          image: "/images/tvs/tv4.jpg",
          quantity: 0,
        },
        {
          id: idCounter++,
          name: "Smart TV",
          image: "/images/tvs/tv5.jpg",
          quantity: 0,
        },
      ],
    },
  ],
};

module.exports = data;
