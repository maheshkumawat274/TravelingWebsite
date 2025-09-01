export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

const airports: Airport[] = [
  
  // United States 
  { code: "JFK", name: "John F. Kennedy International", city: "New York", country: "USA" }, 
  { code: "LAX", name: "Los Angeles International", city: "Los Angeles", country: "USA" },
  { code: "ORD", name: "O'Hare International", city: "Chicago", country: "USA" }, 
  { code: "MIA", name: "Miami International", city: "Miami", country: "USA" }, 
  { code: "ATL", name: "Hartsfield-Jackson Atlanta International", city: "Atlanta", country: "USA" }, 
  { code: "DFW", name: "Dallas/Fort Worth International", city: "Dallas", country: "USA" }, 
  { code: "DEN", name: "Denver International", city: "Denver", country: "USA" }, 
  { code: "LAS", name: "McCarran International", city: "Las Vegas", country: "USA" }, 
  { code: "PHX", name: "Phoenix Sky Harbor International", city: "Phoenix", country: "USA" }, 
  { code: "IAH", name: "George Bush Intercontinental", city: "Houston", country: "USA" }, 
  { code: "MCO", name: "Orlando International", city: "Orlando", country: "USA" }, 
  { code: "SEA", name: "Seattle-Tacoma International", city: "Seattle", country: "USA" }, 
  { code: "EWR", name: "Newark Liberty International", city: "Newark", country: "USA" }, 
  { code: "MSP", name: "Minneapolis-Saint Paul International", city: "Minneapolis", country: "USA" }, 
  { code: "DTW", name: "Detroit Metropolitan Wayne County", city: "Detroit", country: "USA" }, 
  { code: "PHL", name: "Philadelphia International", city: "Philadelphia", country: "USA" }, 
  { code: "LGA", name: "LaGuardia", city: "New York", country: "USA" }, 
  { code: "BWI", name: "Baltimore/Washington International", city: "Baltimore", country: "USA" }, 
  { code: "DCA", name: "Ronald Reagan Washington National", city: "Washington D.C.", country: "USA" }, 
  { code: "IAD", name: "Washington Dulles International", city: "Washington D.C.", country: "USA" }, 
  // International - Europe 
  { code: "LHR", name: "Heathrow", city: "London", country: "UK" }, 
  { code: "CDG", name: "Charles de Gaulle", city: "Paris", country: "France" }, 
  { code: "ORY", name: "Orly", city: "Paris", country: "France" }, 
  { code: "FRA", name: "Frankfurt am Main", city: "Frankfurt", country: "Germany" }, 
  { code: "MUC", name: "Munich", city: "Munich", country: "Germany" }, 
  { code: "AMS", name: "Amsterdam Schiphol", city: "Amsterdam", country: "Netherlands" }, 
  { code: "MAD", name: "Madrid-Barajas", city: "Madrid", country: "Spain" }, 
  { code: "BCN", name: "Barcelona-El Prat", city: "Barcelona", country: "Spain" }, 
  { code: "FCO", name: "Rome Fiumicino", city: "Rome", country: "Italy" }, 
  { code: "MXP", name: "Milan Malpensa", city: "Milan", country: "Italy" }, 
  { code: "ZUR", name: "Zurich", city: "Zurich", country: "Switzerland" }, 
  { code: "VIE", name: "Vienna International", city: "Vienna", country: "Austria" }, 
  { code: "CPH", name: "Copenhagen", city: "Copenhagen", country: "Denmark" }, 
  { code: "ARN", name: "Stockholm Arlanda", city: "Stockholm", country: "Sweden" }, 
  { code: "OSL", name: "Oslo Gardermoen", city: "Oslo", country: "Norway" }, 
  { code: "HEL", name: "Helsinki-Vantaa", city: "Helsinki", country: "Finland" }, 
  { code: "LGW", name: "Gatwick", city: "London", country: "UK" }, 
  { code: "MAN", name: "Manchester", city: "Manchester", country: "UK" }, 
  { code: "EDI", name: "Edinburgh", city: "Edinburgh", country: "UK" }, 
  { code: "DUB", name: "Dublin", city: "Dublin", country: "Ireland" }, 

  // Asia-Pacific 
  { code: "NRT", name: "Narita International", city: "Tokyo", country: "Japan" }, 
  { code: "HND", name: "Haneda", city: "Tokyo", country: "Japan" }, 
  { code: "KIX", name: "Kansai International", city: "Osaka", country: "Japan" }, 
  { code: "ICN", name: "Incheon International", city: "Seoul", country: "South Korea" }, 
  { code: "PEK", name: "Beijing Capital International", city: "Beijing", country: "China" }, 
  { code: "PVG", name: "Shanghai Pudong International", city: "Shanghai", country: "China" }, 
  { code: "CAN", name: "Guangzhou Tianhe International", city: "Guangzhou", country: "China" }, 
  { code: "HKG", name: "Hong Kong International", city: "Hong Kong", country: "Hong Kong" }, 
  { code: "SIN", name: "Singapore Changi", city: "Singapore", country: "Singapore" }, 
  { code: "BKK", name: "Suvarnabhumi", city: "Bangkok", country: "Thailand" }, 
  { code: "KUL", name: "Kuala Lumpur International", city: "Kuala Lumpur", country: "Malaysia" }, 
  { code: "CGK", name: "Soekarno-Hatta International", city: "Jakarta", country: "Indonesia" }, 
  { code: "DPS", name: "Ngurah Rai International", city: "Bali", country: "Indonesia" }, 
  { code: "MNL", name: "Ninoy Aquino International", city: "Manila", country: "Philippines" }, 
  { code: "SYD", name: "Sydney Kingsford Smith", city: "Sydney", country: "Australia" }, 
  { code: "MEL", name: "Melbourne", city: "Melbourne", country: "Australia" }, 
  { code: "BNE", name: "Brisbane", city: "Brisbane", country: "Australia" }, 
  { code: "PER", name: "Perth", city: "Perth", country: "Australia" }, 
  { code: "AKL", name: "Auckland", city: "Auckland", country: "New Zealand" }, 
  { code: "DEL", name: "Indira Gandhi International", city: "New Delhi", country: "India" }, 
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj International", city: "Mumbai", country: "India" }, 
  { code: "BLR", name: "Kempegowda International", city: "Bangalore", country: "India" }, 

  // Middle East & Africa 
  
  { code: "DXB", name: "Dubai International", city: "Dubai", country: "UAE" }, 
  { code: "AUH", name: "Abu Dhabi International", city: "Abu Dhabi", country: "UAE" }, 
  { code: "DOH", name: "Hamad International", city: "Doha", country: "Qatar" }, 
  { code: "RUH", name: "King Khalid International", city: "Riyadh", country: "Saudi Arabia" }, 
  { code: "JED", name: "King Abdulaziz International", city: "Jeddah", country: "Saudi Arabia" }, 
  { code: "CAI", name: "Cairo International", city: "Cairo", country: "Egypt" }, 
  { code: "JNB", name: "O.R. Tambo International", city: "Johannesburg", country: "South Africa" }, 
  { code: "CPT", name: "Cape Town International", city: "Cape Town", country: "South Africa" }, 
  { code: "ADD", name: "Addis Ababa Bole International", city: "Addis Ababa", country: "Ethiopia" }, 
  { code: "LOS", name: "Murtala Muhammed International", city: "Lagos", country: "Nigeria" }, 

  // South America 
  
  { code: "GRU", name: "São Paulo-Guarulhos International", city: "São Paulo", country: "Brazil" }, 
  { code: "GIG", name: "Rio de Janeiro-Galeão International", city: "Rio de Janeiro", country: "Brazil" }, 
  { code: "EZE", name: "Ezeiza International", city: "Buenos Aires", country: "Argentina" }, 
  { code: "SCL", name: "Santiago International", city: "Santiago", country: "Chile" }, 
  { code: "LIM", name: "Jorge Chávez International", city: "Lima", country: "Peru" }, 
  { code: "BOG", name: "El Dorado International", city: "Bogotá", country: "Colombia" }, 
  { code: "CCS", name: "Simón Bolívar International", city: "Caracas", country: "Venezuela" }, 
  
  // Mexico & Central America 
  
  { code: "CUN", name: "Cancún International", city: "Cancún", country: "Mexico" }, 
  { code: "MEX", name: "Mexico City International", city: "Mexico City", country: "Mexico" }, 
  { code: "GDL", name: "Guadalajara International", city: "Guadalajara", country: "Mexico" },
  { code: "MTY", name: "Monterrey International", city: "Monterrey", country: "Mexico" }, 
  { code: "SJD", name: "Los Cabos International", city: "Los Cabos", country: "Mexico" }, 
  { code: "PVR", name: "Puerto Vallarta International", city: "Puerto Vallarta", country: "Mexico" }, 
  { code: "SJO", name: "Juan Santamaría International", city: "San José", country: "Costa Rica" }, 
  { code: "PTY", name: "Tocumen International", city: "Panama City", country: "Panama" }, 
  
  // Caribbean 
   
  { code: "NAS", name: "Lynden Pindling International", city: "Nassau", country: "Bahamas" }, 
  { code: "BGI", name: "Grantley Adams International", city: "Bridgetown", country: "Barbados" }, 
  { code: "SJU", name: "Luis Muñoz Marín International", city: "San Juan", country: "Puerto Rico" }, 
  { code: "STT", name: "Cyril E. King", city: "Charlotte Amalie", country: "US Virgin Islands" }, 
  { code: "STX", name: "Henry E. Rohlsen", city: "Christiansted", country: "US Virgin Islands" }, 
  { code: "CUR", name: "Hato International", city: "Willemstad", country: "Curaçao" }, 
  
  // Canada 
  
  { code: "YYZ", name: "Toronto Pearson International", city: "Toronto", country: "Canada" }, 
  { code: "YVR", name: "Vancouver International", city: "Vancouver", country: "Canada" }, 
  { code: "YUL", name: "Montreal-Pierre Elliott Trudeau International", city: "Montreal", country: "Canada" }, 
  { code: "YYC", name: "Calgary International", city: "Calgary", country: "Canada" }, 
  { code: "YEG", name: "Edmonton International", city: "Edmonton", country: "Canada" }, 
  { code: "YOW", name: "Ottawa Macdonald-Cartier International", city: "Ottawa", country: "Canada" }, 
  
  // Additional International Airports 
   
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey" }, 
  { code: "SAW", name: "Sabiha Gokcen International", city: "Istanbul", country: "Turkey" }, 
  { code: "ANK", name: "Esenboga International", city: "Ankara", country: "Turkey" }, 
  { code: "AYT", name: "Antalya Airport", city: "Antalya", country: "Turkey" }, 
  { code: "ESB", name: "Esenboga International", city: "Ankara", country: "Turkey" }, 

  // Africa 
  
  { code: "CMN", name: "Mohammed V International", city: "Casablanca", country: "Morocco" }, 
  { code: "RAK", name: "Marrakech Menara", city: "Marrakech", country: "Morocco" }, 
  { code: "TUN", name: "Tunis-Carthage International", city: "Tunis", country: "Tunisia" }, 
  { code: "ALG", name: "Houari Boumediene", city: "Algiers", country: "Algeria" }, 
  { code: "ACC", name: "Kotoka International", city: "Accra", country: "Ghana" }, 
  { code: "NBO", name: "Jomo Kenyatta International", city: "Nairobi", country: "Kenya" }, 
  { code: "DAR", name: "Julius Nyerere International", city: "Dar es Salaam", country: "Tanzania" }, 

  // Additional European Airports 
  
  { code: "WAW", name: "Warsaw Chopin", city: "Warsaw", country: "Poland" }, 
  { code: "KRK", name: "John Paul II International", city: "Krakow", country: "Poland" }, 
  { code: "PRG", name: "Vaclav Havel Airport Prague", city: "Prague", country: "Czech Republic" }, 
  { code: "BUD", name: "Budapest Ferenc Liszt International", city: "Budapest", country: "Hungary" }, 
  { code: "SOF", name: "Sofia Airport", city: "Sofia", country: "Bulgaria" }, 
  { code: "OTP", name: "Henri Coanda International", city: "Bucharest", country: "Romania" }, 
  { code: "LIS", name: "Lisbon Portela", city: "Lisbon", country: "Portugal" }, 
  { code: "OPO", name: "Francisco de Sa Carneiro", city: "Porto", country: "Portugal" }, 
  { code: "ATH", name: "Athens International", city: "Athens", country: "Greece" }, 
  { code: "SKG", name: "Thessaloniki Macedonia International", city: "Thessaloniki", country: "Greece" }, 
  { code: "BEG", name: "Belgrade Nikola Tesla", city: "Belgrade", country: "Serbia" }, 
  { code: "ZAG", name: "Zagreb Franjo Tudman", city: "Zagreb", country: "Croatia" }, 
  { code: "SPU", name: "Split Airport", city: "Split", country: "Croatia" }, 
  { code: "DBV", name: "Dubrovnik Airport", city: "Dubrovnik", country: "Croatia" }, 
  { code: "LJU", name: "Ljubljana Joze Pucnik", city: "Ljubljana", country: "Slovenia" }, 
  { code: "RIX", name: "Riga International", city: "Riga", country: "Latvia" }, 
  { code: "TLL", name: "Tallinn Airport", city: "Tallinn", country: "Estonia" }, 
  { code: "VNO", name: "Vilnius International", city: "Vilnius", country: "Lithuania" }, 
  { code: "KEF", name: "Keflavik International", city: "Reykjavik", country: "Iceland" }, 
  
  // Additional Asian Airports
 
  { code: "TPE", name: "Taiwan Taoyuan International", city: "Taipei", country: "Taiwan" }, 
  { code: "TSA", name: "Taipei Songshan", city: "Taipei", country: "Taiwan" }, 
  { code: "KHH", name: "Kaohsiung International", city: "Kaohsiung", country: "Taiwan" }, 
  { code: "MFM", name: "Macau International", city: "Macau", country: "Macau" }, 
  { code: "CEB", name: "Mactan-Cebu International", city: "Cebu", country: "Philippines" }, 
  { code: "DAD", name: "Da Nang International", city: "Da Nang", country: "Vietnam" }, 
  { code: "SGN", name: "Tan Son Nhat International", city: "Ho Chi Minh City", country: "Vietnam" }, 
  { code: "HAN", name: "Noi Bai International", city: "Hanoi", country: "Vietnam" }, 
  { code: "RGN", name: "Yangon International", city: "Yangon", country: "Myanmar" }, 
  { code: "MDL", name: "Mandalay International", city: "Mandalay", country: "Myanmar" }, 
  { code: "PNH", name: "Phnom Penh International", city: "Phnom Penh", country: "Cambodia" }, 
  { code: "REP", name: "Siem Reap International", city: "Siem Reap", country: "Cambodia" }, 
  { code: "VTE", name: "Wattay International", city: "Vientiane", country: "Laos" }, 
  { code: "BWN", name: "Brunei International", city: "Bandar Seri Begawan", country: "Brunei" }, 
  
  // Additional Middle Eastern Airports 
  
  { code: "KWI", name: "Kuwait International", city: "Kuwait City", country: "Kuwait" }, 
  { code: "BAH", name: "Bahrain International", city: "Manama", country: "Bahrain" }, 
  { code: "MCT", name: "Muscat International", city: "Muscat", country: "Oman" }, 
  { code: "AMM", name: "Queen Alia International", city: "Amman", country: "Jordan" }, 
  { code: "BEY", name: "Rafic Hariri International", city: "Beirut", country: "Lebanon" }, 
  { code: "DAM", name: "Damascus International", city: "Damascus", country: "Syria" }, 
  { code: "BGW", name: "Baghdad International", city: "Baghdad", country: "Iraq" }, 
  { code: "EBL", name: "Erbil International", city: "Erbil", country: "Iraq" }, 
  { code: "TBS", name: "Tbilisi International", city: "Tbilisi", country: "Georgia" }, 
  { code: "BAK", name: "Heydar Aliyev International", city: "Baku", country: "Azerbaijan" }, 
  { code: "EVN", name: "Zvartnots International", city: "Yerevan", country: "Armenia" }, 
  
  // Additional Pacific/Oceania Airports 
   
  { code: "NAN", name: "Nadi International", city: "Nadi", country: "Fiji" }, 
  { code: "SUV", name: "Nausori Airport", city: "Suva", country: "Fiji" }, 
  { code: "PPT", name: "Faa'a International", city: "Papeete", country: "French Polynesia" }, 
  { code: "NOU", name: "La Tontouta International", city: "Noumea", country: "New Caledonia" }, 
  { code: "VLI", name: "Port Vila Bauerfield", city: "Port Vila", country: "Vanuatu" }, 
  { code: "HIR", name: "Honiara International", city: "Honiara", country: "Solomon Islands" }, 
  { code: "POM", name: "Jacksons International", city: "Port Moresby", country: "Papua New Guinea" }, 
  { code: "GUM", name: "Antonio B. Won Pat International", city: "Hagatna", country: "Guam" }, 
  { code: "SPN", name: "Francisco C. Ada Saipan International", city: "Saipan", country: "Northern Mariana Islands" }, 
  
  // Additional Central Asian Airports 
   
  { code: "TSE", name: "Nur-Sultan Nazarbayev International", city: "Nur-Sultan", country: "Kazakhstan" }, 
  { code: "ALA", name: "Almaty International", city: "Almaty", country: "Kazakhstan" }, 
  { code: "TAS", name: "Islam Karimov Tashkent International", city: "Tashkent", country: "Uzbekistan" }, 
  { code: "SAM", name: "Samarkand International", city: "Samarkand", country: "Uzbekistan" }, 
  { code: "ASB", name: "Oguzhan Airport", city: "Ashgabat", country: "Turkmenistan" }, 
  { code: "OSS", name: "Osh Airport", city: "Osh", country: "Kyrgyzstan" }, 
  { code: "FRU", name: "Manas International", city: "Bishkek", country: "Kyrgyzstan" }, 
  { code: "DYU", name: "Dushanbe Airport", city: "Dushanbe", country: "Tajikistan" }, 

  // Additional South American Airports 
 
  { code: "UIO", name: "Mariscal Sucre International", city: "Quito", country: "Ecuador" }, 
  { code: "GYE", name: "Jose Joaquin de Olmedo International", city: "Guayaquil", country: "Ecuador" }, 
  { code: "ASU", name: "Silvio Pettirossi International", city: "Asuncion", country: "Paraguay" }, 
  { code: "MVD", name: "Carrasco International", city: "Montevideo", country: "Uruguay" }, 
  { code: "PDP", name: "Capitan Fuentes Martinez International", city: "Punta del Este", country: "Uruguay" }, 
  { code: "GEO", name: "Cheddi Jagan International", city: "Georgetown", country: "Guyana" }, 
  { code: "PBM", name: "Johan Adolf Pengel International", city: "Paramaribo", country: "Suriname" }, 
  { code: "CAY", name: "Rochambeau Airport", city: "Cayenne", country: "French Guiana" }

]

export default airports;