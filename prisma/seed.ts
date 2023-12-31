import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.location.deleteMany().catch(() => {});
  let locations = [
    {
      name: "Albania",
      latitude: "41",
      longitude: "20",
      port: "Port of Durres",
      slug: "Albania",
    },
    {
      name: "Algeria",
      latitude: "28",
      longitude: "3",
      port: "Port of Algiers",
      slug: "Algeria",
    },
    {
      name: "American Samoa",
      latitude: "-14.3333",
      longitude: "-170",
      slug: "AmericanSamoa",
    },
    {
      name: "Andorra",
      latitude: "42.5",
      longitude: "1.6",
      slug: "Andorra",
    },
    {
      name: "Angola",
      latitude: "-12.5",
      longitude: "18.5",
      port: "Port of Luanda",
      slug: "Angola",
    },
    {
      name: "Anguilla",
      latitude: "18.25",
      longitude: "-63.1667",
      port: "",
      slug: "Anguilla",
    },
    {
      name: "Antarctica",
      latitude: "-90",
      longitude: "0",
      slug: "Antarctica",
    },
    {
      name: "Antigua and Barbuda",
      latitude: "17.05",
      longitude: "-61.8",
      port: "St. John's Port",
      slug: "AntiguaandBarbuda",
    },
    {
      name: "Argentina",
      latitude: "-34",
      longitude: "-64",
      port: "Port of Buenos Aires",
      slug: "Argentina",
    },
    {
      name: "Armenia",
      latitude: "40",
      longitude: "45",
      slug: "Armenia",
    },
    {
      name: "Aruba",
      latitude: "12.5",
      longitude: "-69.9667",
      slug: "Aruba",
    },
    {
      name: "Australia",
      latitude: "-27",
      longitude: "133",
      port: "Port of Sydney",
      slug: "Australia",
    },
    {
      name: "Austria",
      latitude: "47.3333",
      longitude: "13.3333",
      slug: "Austria",
    },
    {
      name: "Azerbaijan",
      latitude: "40.5",
      longitude: "47.5",
      port: "Port of Baku",
      slug: "Azerbaijan",
    },
    {
      name: "Bahamas",
      latitude: "24.25",
      longitude: "-76",
      port: "Port of Nassau",
      slug: "Bahamas",
    },
    {
      name: "Bahrain",
      latitude: "26",
      longitude: "50.55",
      port: "Port of Mina Salman",
      slug: "Bahrain",
    },
    {
      name: "Bangladesh",
      latitude: "24",
      longitude: "90",
      port: "Port of Chittagong",
      slug: "Bangladesh",
    },
    {
      name: "Barbados",
      latitude: "13.1667",
      longitude: "-59.5333",
      port: "Port of Bridgetown",
      slug: "Barbados",
    },
    {
      name: "Belarus",
      latitude: "53",
      longitude: "28",
      slug: "Belarus",
    },
    {
      name: "Belgium",
      latitude: "50.8333",
      longitude: "4",
      port: "Port of Antwerp",
      slug: "Belgium",
    },
    {
      name: "Belize",
      latitude: "17.25",
      longitude: "-88.75",
      port: "Port of Belize City",
      slug: "Belize",
    },
    {
      name: "Benin",
      latitude: "9.5",
      longitude: "2.25",
      port: "Port of Cotonou",
      slug: "Benin",
    },
    {
      name: "Bermuda",
      latitude: "32.3333",
      longitude: "-64.75",
      slug: "Bermuda",
    },
    {
      name: "Bhutan",
      latitude: "27.5",
      longitude: "90.5",
      slug: "Bhutan",
    },
    {
      name: "Bolivia, Plurinational State of",
      latitude: "-17",
      longitude: "-65",
      slug: "Bolivia,PlurinationalStateof",
    },
    {
      name: "Bosnia and Herzegovina",
      latitude: "44",
      longitude: "18",
      port: "Port of Ploce",
      slug: "BosniaandHerzegovina",
    },
    {
      name: "Botswana",
      latitude: "-22",
      longitude: "24",
      slug: "Botswana",
    },
    {
      name: "Bouvet Island",
      latitude: "-54.4333",
      longitude: "3.4",
      slug: "BouvetIsland",
    },
    {
      name: "Brazil",
      latitude: "-10",
      longitude: "-55",
      port: "Port of Santos",
      slug: "Brazil",
    },
    {
      name: "British Indian Ocean Territory",
      latitude: "-6",
      longitude: "71.5",
      slug: "BritishIndianOceanTerritory",
    },
    {
      name: "Brunei Darussalam",
      latitude: "4.5",
      longitude: "114.6667",
      port: "Port of Muara",
      slug: "BruneiDarussalam",
    },
    {
      name: "Bulgaria",
      latitude: "43",
      longitude: "25",
      port: "Port of Varna",
      slug: "Bulgaria",
    },
    {
      name: "Burkina Faso",
      latitude: "13",
      longitude: "-2",
      slug: "BurkinaFaso",
    },
    {
      name: "Burundi",
      latitude: "-3.5",
      longitude: "30",
      slug: "Burundi",
    },
    {
      name: "Cambodia",
      latitude: "13",
      longitude: "105",
      port: "Port of Sihanoukville",
      slug: "Cambodia",
    },
    {
      name: "Cameroon",
      latitude: "6",
      longitude: "12",
      port: "Port of Douala",
      slug: "Cameroon",
    },
    {
      name: "Canada",
      latitude: "60",
      longitude: "-95",
      port: "Port of Vancouver",
      slug: "Canada",
    },
    {
      name: "Cape Verde",
      latitude: "16",
      longitude: "-24",
      port: "Port of Praia",
      slug: "CapeVerde",
    },
    {
      name: "Cayman Islands",
      latitude: "19.5",
      longitude: "-80.5",
      slug: "CaymanIslands",
    },
    {
      name: "Central African Republic",
      latitude: "7",
      longitude: "21",
      slug: "CentralAfricanRepublic",
    },
    {
      name: "Chad",
      latitude: "15",
      longitude: "19",
      slug: "Chad",
    },
    {
      name: "Chile",
      latitude: "-30",
      longitude: "-71",
      port: "Port of Valparaíso",
      slug: "Chile",
    },
    {
      name: "China",
      latitude: "35",
      longitude: "105",
      port: "Port of Shanghai",
      slug: "China",
    },
    {
      name: "Christmas Island",
      latitude: "-10.5",
      longitude: "105.6667",
      slug: "ChristmasIsland",
    },
    {
      name: "Cocos (Keeling) Islands",
      latitude: "-12.5",
      longitude: "96.8333",
      slug: "Cocos(Keeling)Islands",
    },
    {
      name: "Colombia",
      latitude: "4",
      longitude: "-72",
      port: "Port of Cartagena",
      slug: "Colombia",
    },
    {
      name: "Comoros",
      latitude: "-12.1667",
      longitude: "44.25",
      port: "Port of Moroni",
      slug: "Comoros",
    },
    {
      name: "Congo",
      latitude: "-1",
      longitude: "15",
      port: "Port of Pointe-Noire",
      slug: "Congo",
    },
    {
      name: "Congo, the Democratic Republic of the",
      latitude: "0",
      longitude: "25",
      slug: "Congo,theDemocraticRepublicofthe",
    },
    {
      name: "Cook Islands",
      latitude: "-21.2333",
      longitude: "-159.7667",
      slug: "CookIslands",
    },
    {
      name: "Costa Rica",
      latitude: "10",
      longitude: "-84",
      port: "Port of Limón",
      slug: "CostaRica",
    },
    {
      name: "Côte d'Ivoire",
      latitude: "8",
      longitude: "-5",
      slug: "Côted'Ivoire",
    },
    {
      name: "Croatia",
      latitude: "45.1667",
      longitude: "15.5",
      port: "Port of Rijeka",
      slug: "Croatia",
    },
    {
      name: "Cuba",
      latitude: "21.5",
      longitude: "-80",
      port: "Port of Havana",
      slug: "Cuba",
    },
    {
      name: "Cyprus",
      latitude: "35",
      longitude: "33",
      port: "Port of Limassol",
      slug: "Cyprus",
    },
    {
      name: "Czech Republic",
      latitude: "49.75",
      longitude: "15.5",
      slug: "CzechRepublic",
    },
    {
      name: "Denmark",
      latitude: "56",
      longitude: "10",
      port: "Port of Copenhagen",
      slug: "Denmark",
    },
    {
      name: "Djibouti",
      latitude: "11.5",
      longitude: "43",
      port: "Port of Djibouti",
      slug: "Djibouti",
    },
    {
      name: "Dominica",
      latitude: "15.4167",
      longitude: "-61.3333",
      port: "Port of Roseau",
      slug: "Dominica",
    },
    {
      name: "Dominican Republic",
      latitude: "19",
      longitude: "-70.6667",
      port: "Port of Santo Domingo",
      slug: "DominicanRepublic",
    },
    {
      name: "Ecuador",
      latitude: "-2",
      longitude: "-77.5",
      port: "Port of Guayaquil",
      slug: "Ecuador",
    },
    {
      name: "Egypt",
      latitude: "27",
      longitude: "30",
      port: "Port of Alexandria",
      slug: "Egypt",
    },
    {
      name: "El Salvador",
      latitude: "13.8333",
      longitude: "-88.9167",
      port: "Port of Acajutla",
      slug: "ElSalvador",
    },
    {
      name: "Equatorial Guinea",
      latitude: "2",
      longitude: "10",
      port: "Port of Malabo",
      slug: "EquatorialGuinea",
    },
    {
      name: "Eritrea",
      latitude: "15",
      longitude: "39",
      port: "Port of Massawa",
      slug: "Eritrea",
    },
    {
      name: "Estonia",
      latitude: "59",
      longitude: "26",
      port: "Port of Tallinn",
      slug: "Estonia",
    },
    {
      name: "Ethiopia",
      latitude: "8",
      longitude: "38",
      port: "Port of Djibouti",
      slug: "Ethiopia",
    },
    {
      name: "Falkland Islands (Malvinas)",
      latitude: "-51.75",
      longitude: "-59",
      slug: "FalklandIslands(Malvinas)",
    },
    {
      name: "Faroe Islands",
      latitude: "62",
      longitude: "-7",
      slug: "FaroeIslands",
    },
    {
      name: "Fiji",
      latitude: "-18",
      longitude: "175",
      port: "Port of Suva",
      slug: "Fiji",
    },
    {
      name: "Finland",
      latitude: "64",
      longitude: "26",
      port: "Port of Helsinki",
      slug: "Finland",
    },
    {
      name: "France",
      latitude: "46",
      longitude: "2",
      port: "Port of Marseille",
      slug: "France",
    },
    {
      name: "French Guiana",
      latitude: "4",
      longitude: "-53",
      slug: "FrenchGuiana",
    },
    {
      name: "French Polynesia",
      latitude: "-15",
      longitude: "-140",
      slug: "FrenchPolynesia",
    },
    {
      name: "French Southern Territories",
      latitude: "-43",
      longitude: "67",
      slug: "FrenchSouthernTerritories",
    },
    {
      name: "Gabon",
      latitude: "-1",
      longitude: "11.75",
      port: "Port of Libreville",
      slug: "Gabon",
    },
    {
      name: "Gambia",
      latitude: "13.4667",
      longitude: "-16.5667",
      port: "Port of Banjul",
      slug: "Gambia",
    },
    {
      name: "Georgia",
      latitude: "42",
      longitude: "43.5",
      port: "Port of Poti",
      slug: "Georgia",
    },
    {
      name: "Germany",
      latitude: "51",
      longitude: "9",
      port: "Port of Hamburg",
      slug: "Germany",
    },
    {
      name: "Ghana",
      latitude: "8",
      longitude: "-2",
      port: "Port of Tema",
      slug: "Ghana",
    },
    {
      name: "Gibraltar",
      latitude: "36.1833",
      longitude: "-5.3667",
      slug: "Gibraltar",
    },
    {
      name: "Greece",
      latitude: "39",
      longitude: "22",
      port: "Port of Piraeus",
      slug: "Greece",
    },
    {
      name: "Greenland",
      latitude: "72",
      longitude: "-40",
      slug: "Greenland",
    },
    {
      name: "Grenada",
      latitude: "12.1167",
      longitude: "-61.6667",
      port: "Port of St. George's",
      slug: "Grenada",
    },
    {
      name: "Guadeloupe",
      latitude: "16.25",
      longitude: "-61.5833",
      slug: "Guadeloupe",
    },
    {
      name: "Guam",
      latitude: "13.4667",
      longitude: "144.7833",
      slug: "Guam",
    },
    {
      name: "Guatemala",
      latitude: "15.5",
      longitude: "-90.25",
      port: "Port of Santo Tomás de Castilla",
      slug: "Guatemala",
    },
    {
      name: "Guernsey",
      latitude: "49.5",
      longitude: "-2.56",
      slug: "Guernsey",
    },
    {
      name: "Guinea",
      latitude: "11",
      longitude: "-10",
      port: "Port of Conakry",
      slug: "Guinea",
    },
    {
      name: "Guinea-Bissau",
      latitude: "12",
      longitude: "-15",
      port: "Port of Bissau",
      slug: "Guinea-Bissau",
    },
    {
      name: "Guyana",
      latitude: "5",
      longitude: "-59",
      port: "Port of Georgetown",
      slug: "Guyana",
    },
    {
      name: "Haiti",
      latitude: "19",
      longitude: "-72.4167",
      port: "Port of Port-au-Prince",
      slug: "Haiti",
    },
    {
      name: "Heard Island and McDonald Islands",
      latitude: "-53.1",
      longitude: "72.5167",
      slug: "HeardIslandandMcDonaldIslands",
    },
    {
      name: "Holy See (Vatican City State)",
      latitude: "41.9",
      longitude: "12.45",
      slug: "HolySee(VaticanCityState)",
    },
    {
      name: "Honduras",
      latitude: "15",
      longitude: "-86.5",
      port: "Port of Puerto Cortes",
      slug: "Honduras",
    },
    {
      name: "Hong Kong",
      latitude: "22.25",
      longitude: "114.1667",
      slug: "HongKong",
    },
    {
      name: "Hungary",
      latitude: "47",
      longitude: "20",
      port: "Port of Budapest",
      slug: "Hungary",
    },
    {
      name: "Iceland",
      latitude: "65",
      longitude: "-18",
      port: "Port of Reykjavik",
      slug: "Iceland",
    },
    {
      name: "India",
      latitude: "20",
      longitude: "77",
      port: "Port of Mumbai",
      slug: "India",
    },
    {
      name: "Indonesia",
      latitude: "-5",
      longitude: "120",
      port: "Port of Jakarta",
      slug: "Indonesia",
    },
    {
      name: "Iran, Islamic Republic of",
      latitude: "32",
      longitude: "53",
      port: "Port of Bandar Abbas",
      slug: "Iran,IslamicRepublicof",
    },
    {
      name: "Iraq",
      latitude: "33",
      longitude: "44",
      port: "Port of Umm Qasr",
      slug: "Iraq",
    },
    {
      name: "Ireland",
      latitude: "53",
      longitude: "-8",
      port: "Port of Dublin",
      slug: "Ireland",
    },
    {
      name: "Isle of Man",
      latitude: "54.23",
      longitude: "-4.55",
      slug: "IsleofMan",
    },
    {
      name: "Israel",
      latitude: "31.5",
      longitude: "34.75",
      port: "Port of Haifa",
      slug: "Israel",
    },
    {
      name: "Italy",
      latitude: "42.8333",
      longitude: "12.8333",
      port: "Port of Genoa",
      slug: "Italy",
    },
    {
      name: "Jamaica",
      latitude: "18.25",
      longitude: "-77.5",
      port: "Port of Kingston",
      slug: "Jamaica",
    },
    {
      name: "Japan",
      latitude: "36",
      longitude: "138",
      port: "Port of Yokohama",
      slug: "Japan",
    },
    {
      name: "Jersey",
      latitude: "49.21",
      longitude: "-2.13",
      slug: "Jersey",
    },
    {
      name: "Jordan",
      latitude: "31",
      longitude: "36",
      port: "Port of Aqaba",
      slug: "Jordan",
    },
    {
      name: "Kazakhstan",
      latitude: "48",
      longitude: "68",
      slug: "Kazakhstan",
    },
    {
      name: "Kenya",
      latitude: "1",
      longitude: "38",
      port: "Port of Mombasa",
      slug: "Kenya",
    },
    {
      name: "Kiribati",
      latitude: "1.4167",
      longitude: "173",
      port: "Port of Betio",
      slug: "Kiribati",
    },
    {
      name: "Korea, Democratic People's Republic of",
      latitude: "40",
      longitude: "127",
      port: "Port of Nampo",
      slug: "Korea,DemocraticPeople'sRepublicof",
    },
    {
      name: "Korea, Republic of",
      latitude: "37",
      longitude: "127.5",
      port: "Port of Busan",
      slug: "Korea,Republicof",
    },
    {
      name: "Kuwait",
      latitude: "29.3375",
      longitude: "47.6581",
      port: "Port of Shuwaikh",
      slug: "Kuwait",
    },
    {
      name: "Kyrgyzstan",
      latitude: "41",
      longitude: "75",
      slug: "Kyrgyzstan",
    },
    {
      name: "Lao People's Democratic Republic",
      latitude: "18",
      longitude: "105",
      slug: "LaoPeople'sDemocraticRepublic",
    },
    {
      name: "Latvia",
      latitude: "57",
      longitude: "25",
      port: "Port of Riga",
      slug: "Latvia",
    },
    {
      name: "Lebanon",
      latitude: "33.8333",
      longitude: "35.8333",
      port: "Port of Beirut",
      slug: "Lebanon",
    },
    {
      name: "Lesotho",
      latitude: "-29.5",
      longitude: "28.5",
      port: "Port of Durban",
      slug: "Lesotho",
    },
    {
      name: "Liberia",
      latitude: "6.5",
      longitude: "-9.5",
      port: "Port of Monrovia",
      slug: "Liberia",
    },
    {
      name: "Libyan Arab Jamahiriya",
      latitude: "25",
      longitude: "17",
      port: "Port of Tripoli",
      slug: "LibyanArabJamahiriya",
    },
    {
      name: "Liechtenstein",
      latitude: "47.1667",
      longitude: "9.5333",
      slug: "Liechtenstein",
    },
    {
      name: "Lithuania",
      latitude: "56",
      longitude: "24",
      port: "Port of Klaipeda",
      slug: "Lithuania",
    },
    {
      name: "Luxembourg",
      latitude: "49.75",
      longitude: "6.1667",
      slug: "Luxembourg",
    },
    {
      name: "Macao",
      latitude: "22.1667",
      longitude: "113.55",
      slug: "Macao",
    },
    {
      name: "Macedonia, the former Yugoslav Republic of",
      latitude: "41.8333",
      longitude: "22",
      slug: "Macedonia,theformerYugoslavRepublicof",
    },
    {
      name: "Madagascar",
      latitude: "-20",
      longitude: "47",
      port: "Port of Toamasina",
      slug: "Madagascar",
    },
    {
      name: "Malawi",
      latitude: "-13.5",
      longitude: "34",
      port: "Port of Monkey Bay",
      slug: "Malawi",
    },
    {
      name: "Malaysia",
      latitude: "2.5",
      longitude: "112.5",
      port: "Port of Port Klang",
      slug: "Malaysia",
    },
    {
      name: "Maldives",
      latitude: "3.25",
      longitude: "73",
      port: "Port of Male",
      slug: "Maldives",
    },
    {
      name: "Mali",
      latitude: "17",
      longitude: "-4",
      slug: "Mali",
    },
    {
      name: "Malta",
      latitude: "35.8333",
      longitude: "14.5833",
      port: "Port of Valletta",
      slug: "Malta",
    },
    {
      name: "Marshall Islands",
      latitude: "9",
      longitude: "168",
      port: "Port of Majuro",
      slug: "MarshallIslands",
    },
    {
      name: "Martinique",
      latitude: "14.6667",
      longitude: "-61",
      slug: "Martinique",
    },
    {
      name: "Mauritania",
      latitude: "20",
      longitude: "-12",
      port: "Port of Nouakchott",
      slug: "Mauritania",
    },
    {
      name: "Mauritius",
      latitude: "-20.2833",
      longitude: "57.55",
      port: "Port Louis Harbor",
      slug: "Mauritius",
    },
    {
      name: "Mayotte",
      latitude: "-12.8333",
      longitude: "45.1667",
      slug: "Mayotte",
    },
    {
      name: "Mexico",
      latitude: "23",
      longitude: "-102",
      port: "Port of Manzanillo",
      slug: "Mexico",
    },
    {
      name: "Micronesia, Federated States of",
      latitude: "6.9167",
      longitude: "158.25",
      port: "Port of Kolonia",
      slug: "Micronesia,FederatedStatesof",
    },
    {
      name: "Moldova, Republic of",
      latitude: "47",
      longitude: "29",
      slug: "Moldova,Republicof",
    },
    {
      name: "Monaco",
      latitude: "43.7333",
      longitude: "7.4",
      port: "Port of Monaco",
      slug: "Monaco",
    },
    {
      name: "Mongolia",
      latitude: "46",
      longitude: "105",
      slug: "Mongolia",
    },
    {
      name: "Montenegro",
      latitude: "42",
      longitude: "19",
      port: "Port of Bar",
      slug: "Montenegro",
    },
    {
      name: "Montserrat",
      latitude: "16.75",
      longitude: "-62.2",
      slug: "Montserrat",
    },
    {
      name: "Morocco",
      latitude: "32",
      longitude: "-5",
      port: "Port of Casablanca",
      slug: "Morocco",
    },
    {
      name: "Mozambique",
      latitude: "-18.25",
      longitude: "35",
      port: "Port of Maputo",
      slug: "Mozambique",
    },
    {
      name: "Myanmar",
      latitude: "22",
      longitude: "98",
      port: "Port of Yangon",
      slug: "Myanmar",
    },
    {
      name: "Namibia",
      latitude: "-22",
      longitude: "17",
      port: "Port of Walvis Bay",
      slug: "Namibia",
    },
    {
      name: "Nauru",
      latitude: "-0.5333",
      longitude: "166.9167",
      slug: "Nauru",
    },
    {
      name: "Nepal",
      latitude: "28",
      longitude: "84",
      slug: "Nepal",
    },
    {
      name: "Netherlands",
      latitude: "52.5",
      longitude: "5.75",
      port: "Port of Rotterdam",
      slug: "Netherlands",
    },
    {
      name: "Netherlands Antilles",
      latitude: "12.25",
      longitude: "-68.75",
      slug: "NetherlandsAntilles",
    },
    {
      name: "New Caledonia",
      latitude: "-21.5",
      longitude: "165.5",
      slug: "NewCaledonia",
    },
    {
      name: "New Zealand",
      latitude: "-41",
      longitude: "174",
      port: "Port of Auckland",
      slug: "NewZealand",
    },
    {
      name: "Nicaragua",
      latitude: "13",
      longitude: "-85",
      port: "Port of Corinto",
      slug: "Nicaragua",
    },
    {
      name: "Niger",
      latitude: "16",
      longitude: "8",
      slug: "Niger",
    },
    {
      name: "Nigeria",
      latitude: "10",
      longitude: "8",
      port: "Port of Lagos",
      slug: "Nigeria",
    },
    {
      name: "Niue",
      latitude: "-19.0333",
      longitude: "-169.8667",
      slug: "Niue",
    },
    {
      name: "Norfolk Island",
      latitude: "-29.0333",
      longitude: "167.95",
      slug: "NorfolkIsland",
    },
    {
      name: "Northern Mariana Islands",
      latitude: "15.2",
      longitude: "145.75",
      slug: "NorthernMarianaIslands",
    },
    {
      name: "Norway",
      latitude: "62",
      longitude: "10",
      port: "Port of Oslo",
      slug: "Norway",
    },
    {
      name: "Oman",
      latitude: "21",
      longitude: "57",
      port: "Port of Sohar",
      slug: "Oman",
    },
    {
      name: "Pakistan",
      latitude: "30",
      longitude: "70",
      port: "Port of Karachi",
      slug: "Pakistan",
    },
    {
      name: "Palau",
      latitude: "7.5",
      longitude: "134.5",
      port: "Port of Malakal",
      slug: "Palau",
    },
    {
      name: "Palestinian Territory, Occupied",
      latitude: "32",
      longitude: "35.25",
      slug: "PalestinianTerritory,Occupied",
    },
    {
      name: "Panama",
      latitude: "9",
      longitude: "-80",
      port: "Port of Balboa",
      slug: "Panama",
    },
    {
      name: "Papua New Guinea",
      latitude: "-6",
      longitude: "147",
      port: "Port Moresby Port",
      slug: "PapuaNewGuinea",
    },
    {
      name: "Paraguay",
      latitude: "-23",
      longitude: "-58",
      port: "Port of Asuncion",
      slug: "Paraguay",
    },
    {
      name: "Peru",
      latitude: "-10",
      longitude: "-76",
      port: "Port of Callao",
      slug: "Peru",
    },
    {
      name: "Philippines",
      latitude: "13",
      longitude: "122",
      port: "Port of Manila",
      slug: "Philippines",
    },
    {
      name: "Pitcairn",
      latitude: "-24.7",
      longitude: "-127.4",
      slug: "Pitcairn",
    },
    {
      name: "Poland",
      latitude: "52",
      longitude: "20",
      port: "Port of Gdansk",
      slug: "Poland",
    },
    {
      name: "Portugal",
      latitude: "39.5",
      longitude: "-8",
      port: "Port of Lisbon",
      slug: "Portugal",
    },
    {
      name: "Puerto Rico",
      latitude: "18.25",
      longitude: "-66.5",
      slug: "PuertoRico",
    },
    {
      name: "Qatar",
      latitude: "25.5",
      longitude: "51.25",
      port: "Port of Doha",
      slug: "Qatar",
    },
    {
      name: "Réunion",
      latitude: "-21.1",
      longitude: "55.6",
      slug: "Réunion",
    },
    {
      name: "Romania",
      latitude: "46",
      longitude: "25",
      port: "Port of Constanta",
      slug: "Romania",
    },
    {
      name: "Russian Federation",
      latitude: "60",
      longitude: "100",
      port: "Port of Saint Petersburg",
      slug: "RussianFederation",
    },
    {
      name: "Rwanda",
      latitude: "-2",
      longitude: "30",
      slug: "Rwanda",
    },
    {
      name: "Saint Helena, Ascension and Tristan da Cunha",
      latitude: "-15.9333",
      longitude: "-5.7",
      slug: "SaintHelena,AscensionandTristandaCunha",
    },
    {
      name: "Saint Kitts and Nevis",
      latitude: "17.3333",
      longitude: "-62.75",
      port: "Port of Basseterre",
      slug: "SaintKittsandNevis",
    },
    {
      name: "Saint Lucia",
      latitude: "13.8833",
      longitude: "-61.1333",
      port: "Port of Castries",
      slug: "SaintLucia",
    },
    {
      name: "Saint Pierre and Miquelon",
      latitude: "46.8333",
      longitude: "-56.3333",
      slug: "SaintPierreandMiquelon",
    },
    {
      name: "Saint Vincent and the Grenadines",
      latitude: "13.25",
      longitude: "-61.2",
      port: "Port Kingstown",
      slug: "SaintVincentandtheGrenadines",
    },
    {
      name: "Samoa",
      latitude: "-13.5833",
      longitude: "-172.3333",
      port: "Port of Apia",
      slug: "Samoa",
    },
    {
      name: "San Marino",
      latitude: "43.7667",
      longitude: "12.4167",
      slug: "SanMarino",
    },
    {
      name: "Sao Tome and Principe",
      latitude: "1",
      longitude: "7",
      port: "Port of Sao Tome",
      slug: "SaoTomeandPrincipe",
    },
    {
      name: "Saudi Arabia",
      latitude: "25",
      longitude: "45",
      port: "Port of Jeddah",
      slug: "SaudiArabia",
    },
    {
      name: "Senegal",
      latitude: "14",
      longitude: "-14",
      port: "Port of Dakar",
      slug: "Senegal",
    },
    {
      name: "Serbia",
      latitude: "44",
      longitude: "21",
      port: "Port of Belgrade",
      slug: "Serbia",
    },
    {
      name: "Seychelles",
      latitude: "-4.5833",
      longitude: "55.6667",
      port: "Port of Victoria",
      slug: "Seychelles",
    },
    {
      name: "Sierra Leone",
      latitude: "8.5",
      longitude: "-11.5",
      port: "Port of Freetown",
      slug: "SierraLeone",
    },
    {
      name: "Singapore",
      latitude: "1.3667",
      longitude: "103.8",
      port: "Port of Singapore",
      slug: "Singapore",
    },
    {
      name: "Slovakia",
      latitude: "48.6667",
      longitude: "19.5",
      port: "Port of Bratislava",
      slug: "Slovakia",
    },
    {
      name: "Slovenia",
      latitude: "46",
      longitude: "15",
      port: "Port of Koper",
      slug: "Slovenia",
    },
    {
      name: "Solomon Islands",
      latitude: "-8",
      longitude: "159",
      port: "Port of Honiara",
      slug: "SolomonIslands",
    },
    {
      name: "Somalia",
      latitude: "10",
      longitude: "49",
      port: "Port of Mogadishu",
      slug: "Somalia",
    },
    {
      name: "South Africa",
      latitude: "-29",
      longitude: "24",
      port: "Port of Durban",
      slug: "SouthAfrica",
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      latitude: "-54.5",
      longitude: "-37",
      slug: "SouthGeorgiaandtheSouthSandwichIslands",
    },
    {
      name: "Spain",
      latitude: "40",
      longitude: "-4",
      port: "Port of Barcelona",
      slug: "Spain",
    },
    {
      name: "Sri Lanka",
      latitude: "7",
      longitude: "81",
      port: "Port of Colombo",
      slug: "SriLanka",
    },
    {
      name: "Sudan",
      latitude: "15",
      longitude: "30",
      port: "Port Sudan",
      slug: "Sudan",
    },
    {
      name: "Suriname",
      latitude: "4",
      longitude: "-56",
      port: "Port of Paramaribo",
      slug: "Suriname",
    },
    {
      name: "Svalbard and Jan Mayen",
      latitude: "78",
      longitude: "20",
      slug: "SvalbardandJanMayen",
    },
    {
      name: "Swaziland",
      latitude: "-26.5",
      longitude: "31.5",
      slug: "Swaziland",
    },
    {
      name: "Sweden",
      latitude: "62",
      longitude: "15",
      port: "Port of Gothenburg",
      slug: "Sweden",
    },
    {
      name: "Switzerland",
      latitude: "47",
      longitude: "8",
      slug: "Switzerland",
    },
    {
      name: "Syrian Arab Republic",
      latitude: "35",
      longitude: "38",
      port: "Port of Latakia",
      slug: "SyrianArabRepublic",
    },
    {
      name: "Taiwan, Province of China",
      latitude: "23.5",
      longitude: "121",
      port: "Port of Kaohsiung",
      slug: "Taiwan,ProvinceofChina",
    },
    {
      name: "Tajikistan",
      latitude: "39",
      longitude: "71",
      slug: "Tajikistan",
    },
    {
      name: "Tanzania, United Republic of",
      latitude: "-6",
      longitude: "35",
      port: "Port of Dar es Salaam",
      slug: "Tanzania,UnitedRepublicof",
    },
    {
      name: "Thailand",
      latitude: "15",
      longitude: "100",
      port: "Port of Bangkok",
      slug: "Thailand",
    },
    {
      name: "Timor-Leste",
      latitude: "-8.55",
      longitude: "125.5167",
      slug: "Timor-Leste",
    },
    {
      name: "Togo",
      latitude: "8",
      longitude: "1.1667",
      port: " Port of Lome",
      slug: "Togo",
    },
    {
      name: "Tokelau",
      latitude: "-9",
      longitude: "-172",
      slug: "Tokelau",
    },
    {
      name: "Tonga",
      latitude: "-20",
      longitude: "-175",
      port: "Port of Nuku'alofa",
      slug: "Tonga",
    },
    {
      name: "Trinidad and Tobago",
      latitude: "11",
      longitude: "-61",
      port: "Port of Port of Spain",
      slug: "TrinidadandTobago",
    },
    {
      name: "Tunisia",
      latitude: "34",
      longitude: "9",
      port: "Port of Tunis",
      slug: "Tunisia",
    },
    {
      name: "Turkey",
      latitude: "39",
      longitude: "35",
      port: "Port of Istanbul",
      slug: "Turkey",
    },
    {
      name: "Turkmenistan",
      latitude: "40",
      longitude: "60",
      slug: "Turkmenistan",
    },
    {
      name: "Turks and Caicos Islands",
      latitude: "21.75",
      longitude: "-71.5833",
      slug: "TurksandCaicosIslands",
    },
    {
      name: "Tuvalu",
      latitude: "-8",
      longitude: "178",
      slug: "Tuvalu",
    },
    {
      name: "Uganda",
      latitude: "1",
      longitude: "32",
      port: "Port Bell",
      slug: "Uganda",
    },
    {
      name: "Ukraine",
      latitude: "49",
      longitude: "32",
      port: "Port of Odessa",
      slug: "Ukraine",
    },
    {
      name: "United Arab Emirates",
      latitude: "24",
      longitude: "54",
      port: "Port of Jebel Ali",
      slug: "UnitedArabEmirates",
    },
    {
      name: "United Kingdom",
      latitude: "54",
      longitude: "-2",
      port: "Port of London",
      slug: "UnitedKingdom",
    },
    {
      name: "United States",
      latitude: "38",
      longitude: "-97",
      port: "Port of Los Angeles",
      slug: "UnitedStates",
    },
    {
      name: "United States Minor Outlying Islands",
      latitude: "19.2833",
      longitude: "166.6",
      slug: "UnitedStatesMinorOutlyingIslands",
    },
    {
      name: "Uruguay",
      latitude: "-33",
      longitude: "-56",
      port: "Port of Montevideo",
      slug: "Uruguay",
    },
    {
      name: "Uzbekistan",
      latitude: "41",
      longitude: "64",
      slug: "Uzbekistan",
    },
    {
      name: "Vanuatu",
      latitude: "-16",
      longitude: "167",
      port: "Port of Port Vila",
      slug: "Vanuatu",
    },
    {
      name: "Venezuela, Bolivarian Republic of",
      latitude: "8",
      longitude: "-66",
      port: "Port of Puerto Cabello",
      slug: "Venezuela,BolivarianRepublicof",
    },
    {
      name: "Viet Nam",
      latitude: "16",
      longitude: "106",
      port: "Port of Ho Chi Minh City",
      slug: "VietNam",
    },
    {
      name: "Virgin Islands, British",
      latitude: "18.5",
      longitude: "-64.5",
      slug: "VirginIslands,British",
    },
    {
      name: "Virgin Islands, U.S.",
      latitude: "18.3333",
      longitude: "-64.8333",
      slug: "VirginIslands,U.S.",
    },
    {
      name: "Wallis and Futuna",
      latitude: "-13.3",
      longitude: "-176.2",
      slug: "WallisandFutuna",
    },
    {
      name: "Western Sahara",
      latitude: "24.5",
      longitude: "-13",
      slug: "WesternSahara",
    },
    {
      name: "Yemen",
      latitude: "15",
      longitude: "48",
      port: "Port of Aden",
      slug: "Yemen",
    },
    {
      name: "Zambia",
      latitude: "-15",
      longitude: "30",
      port: "Port of Durban",
      slug: "Zambia",
    },
    {
      name: "Zimbabwe",
      latitude: "-20",
      longitude: "30",
      port: "Port of Beira",
      slug: "Zimbabwe",
    },
    {
      name: "Afghanistan",
      latitude: "33",
      longitude: "65",
      slug: "Afghanistan",
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
