import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.location.deleteMany().catch(() => {});
  let locations = [
    {
      name: "Albania",
      latitude: "41",
      longitude: "20",
    },
    {
      name: "Algeria",
      latitude: "28",
      longitude: "3",
    },
    {
      name: "American Samoa",
      latitude: "-14.3333",
      longitude: "-170",
    },
    {
      name: "Andorra",
      latitude: "42.5",
      longitude: "1.6",
    },
    {
      name: "Angola",
      latitude: "-12.5",
      longitude: "18.5",
    },
    {
      name: "Anguilla",
      latitude: "18.25",
      longitude: "-63.1667",
    },
    {
      name: "Antarctica",
      latitude: "-90",
      longitude: "0",
    },
    {
      name: "Antigua and Barbuda",
      latitude: "17.05",
      longitude: "-61.8",
    },
    {
      name: "Argentina",
      latitude: "-34",
      longitude: "-64",
    },
    {
      name: "Armenia",
      latitude: "40",
      longitude: "45",
    },
    {
      name: "Aruba",
      latitude: "12.5",
      longitude: "-69.9667",
    },
    {
      name: "Australia",
      latitude: "-27",
      longitude: "133",
    },
    {
      name: "Austria",
      latitude: "47.3333",
      longitude: "13.3333",
    },
    {
      name: "Azerbaijan",
      latitude: "40.5",
      longitude: "47.5",
    },
    {
      name: "Bahamas",
      latitude: "24.25",
      longitude: "-76",
    },
    {
      name: "Bahrain",
      latitude: "26",
      longitude: "50.55",
    },
    {
      name: "Bangladesh",
      latitude: "24",
      longitude: "90",
    },
    {
      name: "Barbados",
      latitude: "13.1667",
      longitude: "-59.5333",
    },
    {
      name: "Belarus",
      latitude: "53",
      longitude: "28",
    },
    {
      name: "Belgium",
      latitude: "50.8333",
      longitude: "4",
    },
    {
      name: "Belize",
      latitude: "17.25",
      longitude: "-88.75",
    },
    {
      name: "Benin",
      latitude: "9.5",
      longitude: "2.25",
    },
    {
      name: "Bermuda",
      latitude: "32.3333",
      longitude: "-64.75",
    },
    {
      name: "Bhutan",
      latitude: "27.5",
      longitude: "90.5",
    },
    {
      name: "Bolivia, Plurinational State of",
      latitude: "-17",
      longitude: "-65",
    },
    {
      name: "Bosnia and Herzegovina",
      latitude: "44",
      longitude: "18",
    },
    {
      name: "Botswana",
      latitude: "-22",
      longitude: "24",
    },
    {
      name: "Bouvet Island",
      latitude: "-54.4333",
      longitude: "3.4",
    },
    {
      name: "Brazil",
      latitude: "-10",
      longitude: "-55",
    },
    {
      name: "British Indian Ocean Territory",
      latitude: "-6",
      longitude: "71.5",
    },
    {
      name: "Brunei Darussalam",
      latitude: "4.5",
      longitude: "114.6667",
    },
    {
      name: "Bulgaria",
      latitude: "43",
      longitude: "25",
    },
    {
      name: "Burkina Faso",
      latitude: "13",
      longitude: "-2",
    },
    {
      name: "Burundi",
      latitude: "-3.5",
      longitude: "30",
    },
    {
      name: "Cambodia",
      latitude: "13",
      longitude: "105",
    },
    {
      name: "Cameroon",
      latitude: "6",
      longitude: "12",
    },
    {
      name: "Canada",
      latitude: "60",
      longitude: "-95",
    },
    {
      name: "Cape Verde",
      latitude: "16",
      longitude: "-24",
    },
    {
      name: "Cayman Islands",
      latitude: "19.5",
      longitude: "-80.5",
    },
    {
      name: "Central African Republic",
      latitude: "7",
      longitude: "21",
    },
    {
      name: "Chad",
      latitude: "15",
      longitude: "19",
    },
    {
      name: "Chile",
      latitude: "-30",
      longitude: "-71",
    },
    {
      name: "China",
      latitude: "35",
      longitude: "105",
    },
    {
      name: "Christmas Island",
      latitude: "-10.5",
      longitude: "105.6667",
    },
    {
      name: "Cocos (Keeling) Islands",
      latitude: "-12.5",
      longitude: "96.8333",
    },
    {
      name: "Colombia",
      latitude: "4",
      longitude: "-72",
    },
    {
      name: "Comoros",
      latitude: "-12.1667",
      longitude: "44.25",
    },
    {
      name: "Congo",
      latitude: "-1",
      longitude: "15",
    },
    {
      name: "Congo, the Democratic Republic of the",
      latitude: "0",
      longitude: "25",
    },
    {
      name: "Cook Islands",
      latitude: "-21.2333",
      longitude: "-159.7667",
    },
    {
      name: "Costa Rica",
      latitude: "10",
      longitude: "-84",
    },
    {
      name: "Côte d'Ivoire",
      latitude: "8",
      longitude: "-5",
    },
    {
      name: "Croatia",
      latitude: "45.1667",
      longitude: "15.5",
    },
    {
      name: "Cuba",
      latitude: "21.5",
      longitude: "-80",
    },
    {
      name: "Cyprus",
      latitude: "35",
      longitude: "33",
    },
    {
      name: "Czech Republic",
      latitude: "49.75",
      longitude: "15.5",
    },
    {
      name: "Denmark",
      latitude: "56",
      longitude: "10",
    },
    {
      name: "Djibouti",
      latitude: "11.5",
      longitude: "43",
    },
    {
      name: "Dominica",
      latitude: "15.4167",
      longitude: "-61.3333",
    },
    {
      name: "Dominican Republic",
      latitude: "19",
      longitude: "-70.6667",
    },
    {
      name: "Ecuador",
      latitude: "-2",
      longitude: "-77.5",
    },
    {
      name: "Egypt",
      latitude: "27",
      longitude: "30",
    },
    {
      name: "El Salvador",
      latitude: "13.8333",
      longitude: "-88.9167",
    },
    {
      name: "Equatorial Guinea",
      latitude: "2",
      longitude: "10",
    },
    {
      name: "Eritrea",
      latitude: "15",
      longitude: "39",
    },
    {
      name: "Estonia",
      latitude: "59",
      longitude: "26",
    },
    {
      name: "Ethiopia",
      latitude: "8",
      longitude: "38",
    },
    {
      name: "Falkland Islands (Malvinas)",
      latitude: "-51.75",
      longitude: "-59",
    },
    {
      name: "Faroe Islands",
      latitude: "62",
      longitude: "-7",
    },
    {
      name: "Fiji",
      latitude: "-18",
      longitude: "175",
    },
    {
      name: "Finland",
      latitude: "64",
      longitude: "26",
    },
    {
      name: "France",
      latitude: "46",
      longitude: "2",
    },
    {
      name: "French Guiana",
      latitude: "4",
      longitude: "-53",
    },
    {
      name: "French Polynesia",
      latitude: "-15",
      longitude: "-140",
    },
    {
      name: "French Southern Territories",
      latitude: "-43",
      longitude: "67",
    },
    {
      name: "Gabon",
      latitude: "-1",
      longitude: "11.75",
    },
    {
      name: "Gambia",
      latitude: "13.4667",
      longitude: "-16.5667",
    },
    {
      name: "Georgia",
      latitude: "42",
      longitude: "43.5",
    },
    {
      name: "Germany",
      latitude: "51",
      longitude: "9",
    },
    {
      name: "Ghana",
      latitude: "8",
      longitude: "-2",
    },
    {
      name: "Gibraltar",
      latitude: "36.1833",
      longitude: "-5.3667",
    },
    {
      name: "Greece",
      latitude: "39",
      longitude: "22",
    },
    {
      name: "Greenland",
      latitude: "72",
      longitude: "-40",
    },
    {
      name: "Grenada",
      latitude: "12.1167",
      longitude: "-61.6667",
    },
    {
      name: "Guadeloupe",
      latitude: "16.25",
      longitude: "-61.5833",
    },
    {
      name: "Guam",
      latitude: "13.4667",
      longitude: "144.7833",
    },
    {
      name: "Guatemala",
      latitude: "15.5",
      longitude: "-90.25",
    },
    {
      name: "Guernsey",
      latitude: "49.5",
      longitude: "-2.56",
    },
    {
      name: "Guinea",
      latitude: "11",
      longitude: "-10",
    },
    {
      name: "Guinea-Bissau",
      latitude: "12",
      longitude: "-15",
    },
    {
      name: "Guyana",
      latitude: "5",
      longitude: "-59",
    },
    {
      name: "Haiti",
      latitude: "19",
      longitude: "-72.4167",
    },
    {
      name: "Heard Island and McDonald Islands",
      latitude: "-53.1",
      longitude: "72.5167",
    },
    {
      name: "Holy See (Vatican City State)",
      latitude: "41.9",
      longitude: "12.45",
    },
    {
      name: "Honduras",
      latitude: "15",
      longitude: "-86.5",
    },
    {
      name: "Hong Kong",
      latitude: "22.25",
      longitude: "114.1667",
    },
    {
      name: "Hungary",
      latitude: "47",
      longitude: "20",
    },
    {
      name: "Iceland",
      latitude: "65",
      longitude: "-18",
    },
    {
      name: "India",
      latitude: "20",
      longitude: "77",
    },
    {
      name: "Indonesia",
      latitude: "-5",
      longitude: "120",
    },
    {
      name: "Iran, Islamic Republic of",
      latitude: "32",
      longitude: "53",
    },
    {
      name: "Iraq",
      latitude: "33",
      longitude: "44",
    },
    {
      name: "Ireland",
      latitude: "53",
      longitude: "-8",
    },
    {
      name: "Isle of Man",
      latitude: "54.23",
      longitude: "-4.55",
    },
    {
      name: "Israel",
      latitude: "31.5",
      longitude: "34.75",
    },
    {
      name: "Italy",
      latitude: "42.8333",
      longitude: "12.8333",
    },
    {
      name: "Jamaica",
      latitude: "18.25",
      longitude: "-77.5",
    },
    {
      name: "Japan",
      latitude: "36",
      longitude: "138",
    },
    {
      name: "Jersey",
      latitude: "49.21",
      longitude: "-2.13",
    },
    {
      name: "Jordan",
      latitude: "31",
      longitude: "36",
    },
    {
      name: "Kazakhstan",
      latitude: "48",
      longitude: "68",
    },
    {
      name: "Kenya",
      latitude: "1",
      longitude: "38",
    },
    {
      name: "Kiribati",
      latitude: "1.4167",
      longitude: "173",
    },
    {
      name: "Korea, Democratic People's Republic of",
      latitude: "40",
      longitude: "127",
    },
    {
      name: "Korea, Republic of",
      latitude: "37",
      longitude: "127.5",
    },
    {
      name: "Kuwait",
      latitude: "29.3375",
      longitude: "47.6581",
    },
    {
      name: "Kyrgyzstan",
      latitude: "41",
      longitude: "75",
    },
    {
      name: "Lao People's Democratic Republic",
      latitude: "18",
      longitude: "105",
    },
    {
      name: "Latvia",
      latitude: "57",
      longitude: "25",
    },
    {
      name: "Lebanon",
      latitude: "33.8333",
      longitude: "35.8333",
    },
    {
      name: "Lesotho",
      latitude: "-29.5",
      longitude: "28.5",
    },
    {
      name: "Liberia",
      latitude: "6.5",
      longitude: "-9.5",
    },
    {
      name: "Libyan Arab Jamahiriya",
      latitude: "25",
      longitude: "17",
    },
    {
      name: "Liechtenstein",
      latitude: "47.1667",
      longitude: "9.5333",
    },
    {
      name: "Lithuania",
      latitude: "56",
      longitude: "24",
    },
    {
      name: "Luxembourg",
      latitude: "49.75",
      longitude: "6.1667",
    },
    {
      name: "Macao",
      latitude: "22.1667",
      longitude: "113.55",
    },
    {
      name: "Macedonia, the former Yugoslav Republic of",
      latitude: "41.8333",
      longitude: "22",
    },
    {
      name: "Madagascar",
      latitude: "-20",
      longitude: "47",
    },
    {
      name: "Malawi",
      latitude: "-13.5",
      longitude: "34",
    },
    {
      name: "Malaysia",
      latitude: "2.5",
      longitude: "112.5",
    },
    {
      name: "Maldives",
      latitude: "3.25",
      longitude: "73",
    },
    {
      name: "Mali",
      latitude: "17",
      longitude: "-4",
    },
    {
      name: "Malta",
      latitude: "35.8333",
      longitude: "14.5833",
    },
    {
      name: "Marshall Islands",
      latitude: "9",
      longitude: "168",
    },
    {
      name: "Martinique",
      latitude: "14.6667",
      longitude: "-61",
    },
    {
      name: "Mauritania",
      latitude: "20",
      longitude: "-12",
    },
    {
      name: "Mauritius",
      latitude: "-20.2833",
      longitude: "57.55",
    },
    {
      name: "Mayotte",
      latitude: "-12.8333",
      longitude: "45.1667",
    },
    {
      name: "Mexico",
      latitude: "23",
      longitude: "-102",
    },
    {
      name: "Micronesia, Federated States of",
      latitude: "6.9167",
      longitude: "158.25",
    },
    {
      name: "Moldova, Republic of",
      latitude: "47",
      longitude: "29",
    },
    {
      name: "Monaco",
      latitude: "43.7333",
      longitude: "7.4",
    },
    {
      name: "Mongolia",
      latitude: "46",
      longitude: "105",
    },
    {
      name: "Montenegro",
      latitude: "42",
      longitude: "19",
    },
    {
      name: "Montserrat",
      latitude: "16.75",
      longitude: "-62.2",
    },
    {
      name: "Morocco",
      latitude: "32",
      longitude: "-5",
    },
    {
      name: "Mozambique",
      latitude: "-18.25",
      longitude: "35",
    },
    {
      name: "Myanmar",
      latitude: "22",
      longitude: "98",
    },
    {
      name: "Namibia",
      latitude: "-22",
      longitude: "17",
    },
    {
      name: "Nauru",
      latitude: "-0.5333",
      longitude: "166.9167",
    },
    {
      name: "Nepal",
      latitude: "28",
      longitude: "84",
    },
    {
      name: "Netherlands",
      latitude: "52.5",
      longitude: "5.75",
    },
    {
      name: "Netherlands Antilles",
      latitude: "12.25",
      longitude: "-68.75",
    },
    {
      name: "New Caledonia",
      latitude: "-21.5",
      longitude: "165.5",
    },
    {
      name: "New Zealand",
      latitude: "-41",
      longitude: "174",
    },
    {
      name: "Nicaragua",
      latitude: "13",
      longitude: "-85",
    },
    {
      name: "Niger",
      latitude: "16",
      longitude: "8",
    },
    {
      name: "Nigeria",
      latitude: "10",
      longitude: "8",
    },
    {
      name: "Niue",
      latitude: "-19.0333",
      longitude: "-169.8667",
    },
    {
      name: "Norfolk Island",
      latitude: "-29.0333",
      longitude: "167.95",
    },
    {
      name: "Northern Mariana Islands",
      latitude: "15.2",
      longitude: "145.75",
    },
    {
      name: "Norway",
      latitude: "62",
      longitude: "10",
    },
    {
      name: "Oman",
      latitude: "21",
      longitude: "57",
    },
    {
      name: "Pakistan",
      latitude: "30",
      longitude: "70",
    },
    {
      name: "Palau",
      latitude: "7.5",
      longitude: "134.5",
    },
    {
      name: "Palestinian Territory, Occupied",
      latitude: "32",
      longitude: "35.25",
    },
    {
      name: "Panama",
      latitude: "9",
      longitude: "-80",
    },
    {
      name: "Papua New Guinea",
      latitude: "-6",
      longitude: "147",
    },
    {
      name: "Paraguay",
      latitude: "-23",
      longitude: "-58",
    },
    {
      name: "Peru",
      latitude: "-10",
      longitude: "-76",
    },
    {
      name: "Philippines",
      latitude: "13",
      longitude: "122",
    },
    {
      name: "Pitcairn",
      latitude: "-24.7",
      longitude: "-127.4",
    },
    {
      name: "Poland",
      latitude: "52",
      longitude: "20",
    },
    {
      name: "Portugal",
      latitude: "39.5",
      longitude: "-8",
    },
    {
      name: "Puerto Rico",
      latitude: "18.25",
      longitude: "-66.5",
    },
    {
      name: "Qatar",
      latitude: "25.5",
      longitude: "51.25",
    },
    {
      name: "Réunion",
      latitude: "-21.1",
      longitude: "55.6",
    },
    {
      name: "Romania",
      latitude: "46",
      longitude: "25",
    },
    {
      name: "Russian Federation",
      latitude: "60",
      longitude: "100",
    },
    {
      name: "Rwanda",
      latitude: "-2",
      longitude: "30",
    },
    {
      name: "Saint Helena, Ascension and Tristan da Cunha",
      latitude: "-15.9333",
      longitude: "-5.7",
    },
    {
      name: "Saint Kitts and Nevis",
      latitude: "17.3333",
      longitude: "-62.75",
    },
    {
      name: "Saint Lucia",
      latitude: "13.8833",
      longitude: "-61.1333",
    },
    {
      name: "Saint Pierre and Miquelon",
      latitude: "46.8333",
      longitude: "-56.3333",
    },
    {
      name: "Saint Vincent and the Grenadines",
      latitude: "13.25",
      longitude: "-61.2",
    },
    {
      name: "Samoa",
      latitude: "-13.5833",
      longitude: "-172.3333",
    },
    {
      name: "San Marino",
      latitude: "43.7667",
      longitude: "12.4167",
    },
    {
      name: "Sao Tome and Principe",
      latitude: "1",
      longitude: "7",
    },
    {
      name: "Saudi Arabia",
      latitude: "25",
      longitude: "45",
    },
    {
      name: "Senegal",
      latitude: "14",
      longitude: "-14",
    },
    {
      name: "Serbia",
      latitude: "44",
      longitude: "21",
    },
    {
      name: "Seychelles",
      latitude: "-4.5833",
      longitude: "55.6667",
    },
    {
      name: "Sierra Leone",
      latitude: "8.5",
      longitude: "-11.5",
    },
    {
      name: "Singapore",
      latitude: "1.3667",
      longitude: "103.8",
    },
    {
      name: "Slovakia",
      latitude: "48.6667",
      longitude: "19.5",
    },
    {
      name: "Slovenia",
      latitude: "46",
      longitude: "15",
    },
    {
      name: "Solomon Islands",
      latitude: "-8",
      longitude: "159",
    },
    {
      name: "Somalia",
      latitude: "10",
      longitude: "49",
    },
    {
      name: "South Africa",
      latitude: "-29",
      longitude: "24",
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      latitude: "-54.5",
      longitude: "-37",
    },
    {
      name: "Spain",
      latitude: "40",
      longitude: "-4",
    },
    {
      name: "Sri Lanka",
      latitude: "7",
      longitude: "81",
    },
    {
      name: "Sudan",
      latitude: "15",
      longitude: "30",
    },
    {
      name: "Suriname",
      latitude: "4",
      longitude: "-56",
    },
    {
      name: "Svalbard and Jan Mayen",
      latitude: "78",
      longitude: "20",
    },
    {
      name: "Swaziland",
      latitude: "-26.5",
      longitude: "31.5",
    },
    {
      name: "Sweden",
      latitude: "62",
      longitude: "15",
    },
    {
      name: "Switzerland",
      latitude: "47",
      longitude: "8",
    },
    {
      name: "Syrian Arab Republic",
      latitude: "35",
      longitude: "38",
    },
    {
      name: "Taiwan, Province of China",
      latitude: "23.5",
      longitude: "121",
    },
    {
      name: "Tajikistan",
      latitude: "39",
      longitude: "71",
    },
    {
      name: "Tanzania, United Republic of",
      latitude: "-6",
      longitude: "35",
    },
    {
      name: "Thailand",
      latitude: "15",
      longitude: "100",
    },
    {
      name: "Timor-Leste",
      latitude: "-8.55",
      longitude: "125.5167",
    },
    {
      name: "Togo",
      latitude: "8",
      longitude: "1.1667",
    },
    {
      name: "Tokelau",
      latitude: "-9",
      longitude: "-172",
    },
    {
      name: "Tonga",
      latitude: "-20",
      longitude: "-175",
    },
    {
      name: "Trinidad and Tobago",
      latitude: "11",
      longitude: "-61",
    },
    {
      name: "Tunisia",
      latitude: "34",
      longitude: "9",
    },
    {
      name: "Turkey",
      latitude: "39",
      longitude: "35",
    },
    {
      name: "Turkmenistan",
      latitude: "40",
      longitude: "60",
    },
    {
      name: "Turks and Caicos Islands",
      latitude: "21.75",
      longitude: "-71.5833",
    },
    {
      name: "Tuvalu",
      latitude: "-8",
      longitude: "178",
    },
    {
      name: "Uganda",
      latitude: "1",
      longitude: "32",
    },
    {
      name: "Ukraine",
      latitude: "49",
      longitude: "32",
    },
    {
      name: "United Arab Emirates",
      latitude: "24",
      longitude: "54",
    },
    {
      name: "United Kingdom",
      latitude: "54",
      longitude: "-2",
    },
    {
      name: "United States",
      latitude: "38",
      longitude: "-97",
    },
    {
      name: "United States Minor Outlying Islands",
      latitude: "19.2833",
      longitude: "166.6",
    },
    {
      name: "Uruguay",
      latitude: "-33",
      longitude: "-56",
    },
    {
      name: "Uzbekistan",
      latitude: "41",
      longitude: "64",
    },
    {
      name: "Vanuatu",
      latitude: "-16",
      longitude: "167",
    },
    {
      name: "Venezuela, Bolivarian Republic of",
      latitude: "8",
      longitude: "-66",
    },
    {
      name: "Viet Nam",
      latitude: "16",
      longitude: "106",
    },
    {
      name: "Virgin Islands, British",
      latitude: "18.5",
      longitude: "-64.5",
    },
    {
      name: "Virgin Islands, U.S.",
      latitude: "18.3333",
      longitude: "-64.8333",
    },
    {
      name: "Wallis and Futuna",
      latitude: "-13.3",
      longitude: "-176.2",
    },
    {
      name: "Western Sahara",
      latitude: "24.5",
      longitude: "-13",
    },
    {
      name: "Yemen",
      latitude: "15",
      longitude: "48",
    },
    {
      name: "Zambia",
      latitude: "-15",
      longitude: "30",
    },
    {
      name: "Zimbabwe",
      latitude: "-20",
      longitude: "30",
    },
    {
      name: "Afghanistan",
      latitude: "33",
      longitude: "65",
    },
  ];

  const sortedLocations = locations.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < sortedLocations.length; i++) {
    await prisma.location.create({ data: sortedLocations[i] });
  }
  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
