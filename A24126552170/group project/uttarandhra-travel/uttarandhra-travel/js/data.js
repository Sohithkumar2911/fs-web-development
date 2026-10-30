// Uttarandhra Odyssey - Master Travel Data Store
// Comprehensive destination data for Visakhapatnam, Vizianagaram, and Srikakulam

const TRAVEL_DATA = {
  cities: {
    visakhapatnam: {
      id: "visakhapatnam",
      name: "Visakhapatnam",
      teluguName: "విశాఖపట్నం",
      alias: "Vizag / The City of Destiny",
      tagline: "Where Azure Ocean Waves Meet the Emerald Eastern Ghats",
      heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80",
      secondaryImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Kailasagiri.jpg/1280px-Kailasagiri.jpg",
      description: "Visakhapatnam is the jewel of Andhra Pradesh's coastline. Known for serene golden beaches, the historic INS Kursura submarine museum, breathtaking hilltop viewpoints at Kailasagiri, ancient Buddhist universities at Thotlakonda, and as the gateway to the misty coffee estates and subterranean Borra Caves of Araku Valley.",
      bestTime: "October to March (pleasant coastal breeze, 18°C - 28°C)",
      connectivity: {
        air: "Visakhapatnam International Airport (VTZ) connects directly to Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, and Southeast Asia.",
        rail: "Visakhapatnam Junction (VSKP) is an A1 super-grade station on the Howrah-Chennai mainline.",
        road: "National Highway 16 (Golden Quadrilateral) runs right through the city, with APSRTC connectivity across South India."
      },
      stats: {
        attractions: 8,
        coastlineKm: "45 km",
        avgRating: 4.8,
        idealStay: "3 to 4 Days"
      }
    },
    vizianagaram: {
      id: "vizianagaram",
      name: "Vizianagaram",
      teluguName: "విజయనగరం",
      alias: "The City of Victory & Vidyala Nagaram",
      tagline: "Echoes of Princely Splendor, Classical Carnatic Music & Sacred Epics",
      heroImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Viznm_kota.jpg/1280px-Viznm_kota.jpg",
      secondaryImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Ramanarayanam_.jpg/1280px-Ramanarayanam_.jpg",
      description: "Vizianagaram is steeped in royal heritage, fine arts, and literary greatness. Home to the illustrious Gajapati dynasty, the monumental Ramanarayanam spiritual complex shaped like Sri Rama's celestial bow, the legendary GI-tagged Bobbili Veena craft, and the grand Sirimanotsavam festival.",
      bestTime: "October to February (Sirimanotsavam festival is celebrated in October)",
      connectivity: {
        air: "Nearest airport is Visakhapatnam International Airport (approx. 55 km, 1.5 hrs drive via NH-16 / NH-26).",
        rail: "Vizianagaram Junction (VZM) is a major railway junction connecting Howrah-Chennai and Raipur routes.",
        road: "Connected by NH-26 and NH-16; frequent express buses from Vizag (every 15 minutes)."
      },
      stats: {
        attractions: 5,
        royalForts: "2 Historic Citadels",
        avgRating: 4.7,
        idealStay: "2 Days"
      }
    },
    srikakulam: {
      id: "srikakulam",
      name: "Srikakulam",
      teluguName: "శ్రీకాకుళం",
      alias: "The Ancient Kalinga Frontier",
      tagline: "Sacred Sun Temples, Buddhist Relics & Untouched Silver Shorelines",
      heroImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Arasavilli_Sri_Suryanarayanamurty_Temple_of_Srikakulam%2C_Andhra_Pradesh_%283%29.jpg/1280px-Arasavilli_Sri_Suryanarayanamurty_Temple_of_Srikakulam%2C_Andhra_Pradesh_%283%29.jpg",
      secondaryImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Salihundam_Historic_Buddhist_Remains_3_by_GPuvvada_2010.jpg/1280px-Salihundam_Historic_Buddhist_Remains_3_by_GPuvvada_2010.jpg",
      description: "Srikakulam, the northern coastal crown of Andhra Pradesh, holds spiritual marvels found nowhere else on earth—including the ancient 7th-century Arasavalli Sun Temple and Sri Kurmam Tortoise Temple—alongside pristine beaches like Kalingapatnam and the legacy of Ponduru handspun khadi.",
      bestTime: "November to February (mild winter, perfect for temples and beaches)",
      connectivity: {
        air: "Nearest airport is Visakhapatnam International (VTZ), approx. 110 km to the south.",
        rail: "Srikakulam Road (CHE) railway station is located at Amadalavalasa (approx. 12 km from city center).",
        road: "NH-16 runs right alongside Srikakulam; scenic coastal highway connects Vizag, Vizianagaram, and Srikakulam."
      },
      stats: {
        attractions: 6,
        sunTemples: "Rare 7th Century Shrine",
        avgRating: 4.7,
        idealStay: "2 Days"
      }
    }
  },

  attractions: [
    // --- VISAKHAPATNAM ATTRACTIONS ---
    {
      id: "ins-kursura",
      name: "INS Kursura Submarine Museum",
      city: "visakhapatnam",
      cityName: "Visakhapatnam",
      category: "heritage",
      categoryName: "Heritage & Museums",
      rating: 4.8,
      reviewsCount: 14200,
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/INS_Kursura_%28S20%29_underway.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      shortDesc: "A decommissioned Soviet-built Kalvari-class submarine preserved on RK Beach sands, the first of its kind in South Asia.",
      fullDesc: "INS Kursura (S20) served the Indian Navy with valor during the 1971 Indo-Pak war. After being decommissioned in 2001, she was carefully beached and converted into a walk-through museum. Visitors walk through the control room, torpedo compartment, crew quarters, and galley with retired naval guides narrating real operations.",
      timings: "2:00 PM – 8:30 PM (Tues–Sat), 10:00 AM – 8:30 PM (Sun). Closed Mondays.",
      entryFee: "₹40 (Adults), ₹20 (Children), ₹50 (Still Camera)",
      location: "Beach Road, Pandurangapuram, Visakhapatnam",
      mapUrl: "https://maps.google.com/?q=INS+Kursura+Submarine+Museum+Visakhapatnam",
      highlights: ["Original torpedo bays", "Control room periscopes", "1971 war battle history", "Sea-facing promenade"],
      tips: "Visit during late afternoon (around 4:30 PM) so you can enjoy the sunset on RK Beach right after your tour."
    },
    {
      id: "kailasagiri",
      name: "Kailasagiri Hilltop Park",
      city: "visakhapatnam",
      cityName: "Visakhapatnam",
      category: "nature",
      categoryName: "Nature & Panoramic Views",
      rating: 4.7,
      reviewsCount: 18500,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Kailasagiri.jpg/1280px-Kailasagiri.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Majestic hilltop park offering 360-degree panoramic vistas of the Bay of Bengal and Vizag city, crowned by colossal Shiva-Parvati statues.",
      fullDesc: "Perched 360 feet above sea level, Kailasagiri is the emerald crown of Vizag. It features the massive 40-foot white marble statues of Lord Shiva and Goddess Parvati, manicured floral clocks, toy train rides circling the crest, and an exhilarating ropeway cable car connecting from the coastal foot.",
      timings: "6:00 AM – 7:30 PM Daily",
      entryFee: "₹20 (Entry), ₹90 (Ropeway round trip), ₹50 (Toy Train)",
      location: "Hill Top Road, Kailasagiri, Visakhapatnam",
      mapUrl: "https://maps.google.com/?q=Kailasagiri+Visakhapatnam",
      highlights: ["Ropeway cable car ride", "40-ft Shiva Parvati statue", "Panoramic coast & harbor view", "Shanti Ashram & Titanic point"],
      tips: "Take the cable car up for sunset views over the illuminated city and coastline."
    },
    {
      id: "rushikonda-beach",
      name: "Rushikonda Blue Flag Beach",
      city: "visakhapatnam",
      cityName: "Visakhapatnam",
      category: "beaches",
      categoryName: "Beaches & Coast",
      rating: 4.6,
      reviewsCount: 16800,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Rushikonda_beach_view_001.jpg/1280px-Rushikonda_beach_view_001.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Certified Blue Flag beach known for golden sands, sapphire waters, watersports, and lush emerald hill backdrops.",
      fullDesc: "Rushikonda is Vizag's pride—an internationally certified eco-friendly Blue Flag beach flanked by the Eastern Ghats. Its gentle waves make it one of the safest swimming and surfing beaches in Andhra Pradesh. APTDC operates jet skis, speedboats, scuba diving, and sea kayaking here.",
      timings: "Open 24 Hours (Watersports: 8:00 AM – 5:30 PM)",
      entryFee: "Free entry (Watersports ₹300 - ₹1500)",
      location: "Rushikonda, Bheemili Road, Visakhapatnam",
      mapUrl: "https://maps.google.com/?q=Rushikonda+Beach+Visakhapatnam",
      highlights: ["Blue Flag eco certification", "Jet skiing & surfing", "Cliff-top Haritha resort dining", "Golden evening strolls"],
      tips: "Early morning (6:00 AM - 8:00 AM) is ideal for peaceful walks and spotting dolphins in calm waters."
    },
    {
      id: "simhachalam-temple",
      name: "Varaha Lakshmi Narasimha Temple, Simhachalam",
      city: "visakhapatnam",
      cityName: "Visakhapatnam",
      category: "spiritual",
      categoryName: "Spiritual & Temples",
      rating: 4.9,
      reviewsCount: 22000,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Simhachalam_temple_view_from_the_rear_side_hillock.jpg/1280px-Simhachalam_temple_view_from_the_rear_side_hillock.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Ancient 11th-century Kalinga & Chola style hill shrine where the deity is perpetually covered with 475 kg of sandalwood paste.",
      fullDesc: "Simhachalam is one of the 18 premier Narasimha Kshetras in India. Built with exquisite stone carving influenced by Kalinga, Chalukya, and Chola architectures, the sanctum houses Lord Varaha Narasimha. For 364 days a year, the idol is encased in fragrant sandalwood paste, resembling a Shiva Lingam, and revealed in its actual form only once annually on Chandanotsavam.",
      timings: "7:00 AM – 4:00 PM & 6:00 PM – 9:00 PM Daily",
      entryFee: "Free General Darshan, ₹100 / ₹300 Special Darshan",
      location: "Simhachalam Hill, Visakhapatnam",
      mapUrl: "https://maps.google.com/?q=Simhachalam+Temple+Visakhapatnam",
      highlights: ["Kalinga-style 16-pillared Natya Mandapam", "Kappastambham wish pillar", "Year-round sandalwood anointment", "Panoramic hill drive"],
      tips: "Traditional Indian attire is recommended. Try the famous Simhachalam Prasadam laddus."
    },
    {
      id: "borra-caves",
      name: "Borra Caves & Ananthagiri",
      city: "visakhapatnam",
      cityName: "Visakhapatnam",
      category: "nature",
      categoryName: "Nature & Panoramic Views",
      rating: 4.7,
      reviewsCount: 15300,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Borra_caves%2C_Viskhapatnam.jpg/1280px-Borra_caves%2C_Viskhapatnam.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Millions of years old speleothem limestone formations illuminated by vibrant LED lights at an elevation of 2,313 feet in the Ananthagiri hills.",
      fullDesc: "Discovered by British geologist William King in 1807, Borra Caves are one of the deepest and largest natural cavern systems in India. Formed by the Gosthani River slicing through karstic limestone, they feature stunning stalactites and stalagmites sculpted by time into Shiva-Parvati, mother and child, and mythological figures.",
      timings: "10:00 AM – 5:00 PM Daily (Lunch break 1:00 PM - 2:00 PM)",
      entryFee: "₹80 (Adults), ₹60 (Children), ₹100 (Camera)",
      location: "Ananthagiri Hills, near Araku Valley (90 km from Vizag)",
      mapUrl: "https://maps.google.com/?q=Borra+Caves+Andhra+Pradesh",
      highlights: ["Natural limestone stalagmites", "Vibrant illumination effects", "Naturally formed Shivalinga", "Gosthani river gorge"],
      tips: "Wear sturdy non-slip walking shoes as the stone staircases inside the cave can be damp."
    },
    {
      id: "araku-valley",
      name: "Araku Valley & Coffee Estates",
      city: "visakhapatnam",
      cityName: "Visakhapatnam",
      category: "nature",
      categoryName: "Nature & Panoramic Views",
      rating: 4.8,
      reviewsCount: 24000,
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Araku-valley.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Enchanting hill station famed for organic Arabica coffee, indigenous tribal culture, misty waterfalls, and the glass-domed Vistadome train route.",
      fullDesc: "Nestled in the lush Eastern Ghats at 3,000 feet, Araku is Andhra's quintessential hill paradise. It produces world-renowned organic GI-certified Araku Arabica coffee cultivated by tribal farmers. The Padmapuram Botanical Gardens, Tribal Museum, and Chaparai water cascades provide serene escapes.",
      timings: "Open all year (Best: 6:00 AM – 6:00 PM for sightseeing)",
      entryFee: "Varies by spot (Tribal museum ₹40, Gardens ₹40)",
      location: "Araku Valley, Alluri Sitharama Raju District (connected via Vizag)",
      mapUrl: "https://maps.google.com/?q=Araku+Valley+Andhra+Pradesh",
      highlights: ["Vistadome glass-roof train ride", "Organic Araku coffee tasting", "Tribal Dhimsa dance", "Chaparai cascading rocks"],
      tips: "Book the Vistadome coach on the Vizag-Kirandul Express well in advance for dramatic valley views crossing 58 tunnels and 84 bridges."
    },
    {
      id: "thotlakonda",
      name: "Thotlakonda Buddhist Complex",
      city: "visakhapatnam",
      cityName: "Visakhapatnam",
      category: "heritage",
      categoryName: "Heritage & Museums",
      rating: 4.6,
      reviewsCount: 5400,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Totlakonda_entrance.jpg/1280px-Totlakonda_entrance.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=800&q=80",
      shortDesc: "A 2,000-year-old hilltop Hinayana Buddhist monastery overlooking the azure ocean waves of the Vizag coastline.",
      fullDesc: "Thotlakonda ('Hill of Stone Troughs') was an active Buddhist university and maritime navigational landmark between the 2nd century BCE and 2nd century CE. Excavations revealed a stupa, viharas, dining halls, rainwater harvesting cisterns, and Roman gold coins indicating overseas maritime commerce with Sri Lanka and Southeast Asia.",
      timings: "9:00 AM – 5:30 PM Daily",
      entryFee: "₹20 (Adults), ₹10 (Children)",
      location: "Bheemunipatnam Beach Road, Visakhapatnam",
      mapUrl: "https://maps.google.com/?q=Thotlakonda+Buddhist+Complex+Visakhapatnam",
      highlights: ["Ancient Mahastupa", "Panoramic coastline vistas", "Monastic rock-cut cisterns", "Bilingual heritage interpretive signs"],
      tips: "Carry a hat and water. The ocean breeze at the cliff edge is serene and perfect for photography."
    },
    {
      id: "ramakrishna-beach",
      name: "Ramakrishna Mission Beach (RK Beach)",
      city: "visakhapatnam",
      cityName: "Visakhapatnam",
      category: "beaches",
      categoryName: "Beaches & Coast",
      rating: 4.7,
      reviewsCount: 28000,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/What_is_Shipyard.jpg/1280px-What_is_Shipyard.jpg",
      shortDesc: "Vizag's iconic seaside boulevard lined with museums, sculptures, coastal street food, and vibrant evening culture.",
      fullDesc: "RK Beach is the social pulse of Visakhapatnam. Stretches for miles with a wide paved pedestrian promenade, landscaped gardens, the TU-142 Aircraft Museum, Kursura Submarine, Victory at Sea memorial, and bustling stalls selling hot spicy Muri Mixture and roasted sweet corn.",
      timings: "Open 24 Hours (Promenade most vibrant 5:00 PM – 10:00 PM)",
      entryFee: "Free Public Access",
      location: "Beach Road, Visakhapatnam",
      mapUrl: "https://maps.google.com/?q=Ramakrishna+Beach+Visakhapatnam",
      highlights: ["Victory at Sea memorial", "TU-142 Aircraft Museum", "Famous Muri Mixture street stalls", "Sunrise yoga & cycling path"],
      tips: "On Sundays, Beach Road is declared a vehicle-free zone for walking, sports, and cultural performances."
    },

    // --- VIZIANAGARAM ATTRACTIONS ---
    {
      id: "vizianagaram-fort",
      name: "Vizianagaram Gajapati Fort",
      city: "vizianagaram",
      cityName: "Vizianagaram",
      category: "heritage",
      categoryName: "Heritage & Museums",
      rating: 4.6,
      reviewsCount: 6800,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Viznm_kota.jpg/1280px-Viznm_kota.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1585130401366-fe05a8d813c4?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Historic 18th-century stone fort built by Vijaya Rama Raju with majestic bastions, Moti Mahal, and royal architectural relics.",
      fullDesc: "Erected in 1712 CE by Pusapati Vijaya Rama Raju I, this formidable stone citadel was the political center of northern coastal Andhra. Within its massive stone ramparts lies the magnificent Moti Mahal ('Palace of Pearls'), the grand royal court hall, and the sacred temple of Goddess Pydi Thalli, the patron deity of the kingdom.",
      timings: "9:30 AM – 5:00 PM (Closed Sundays & Public Holidays)",
      entryFee: "Free / ₹10 for heritage museum section",
      location: "Fort Road, Vizianagaram Old Town",
      mapUrl: "https://maps.google.com/?q=Vizianagaram+Fort",
      highlights: ["Moti Mahal royal palace", "Oudh-style grand arches", "Pydi Thalli Ammavari shrine", "Gajapati armory and history gallery"],
      tips: "Combine this with a walk down the adjacent heritage bazaar to sample famous local sweets."
    },
    {
      id: "ramanarayanam",
      name: "Ramanarayanam Spiritual Park",
      city: "vizianagaram",
      cityName: "Vizianagaram",
      category: "spiritual",
      categoryName: "Spiritual & Temples",
      rating: 4.9,
      reviewsCount: 19500,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Ramanarayanam_.jpg/1280px-Ramanarayanam_.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      shortDesc: "A world-renowned spiritual theme park constructed in the monumental shape of Sri Rama's celestial bow and arrow (Kodanda).",
      fullDesc: "Spanning across 15 acres, Ramanarayanam is a breathtaking architectural wonder. Seen from the sky or ground, the complex is configured as Lord Rama's bow and arrow. The bow acts as a two-level air-conditioned corridor showcasing 160+ lifelike 3D dioramas depicting Valmiki's complete Ramayana, illuminated at night with dancing fountains and laser shows.",
      timings: "10:00 AM – 8:30 PM Daily (Best experienced 4:00 PM – 8:00 PM)",
      entryFee: "Free Entry (Parking ₹30, Veda Pathashala free)",
      location: "Korukonda Road, near Vizianagaram City",
      mapUrl: "https://maps.google.com/?q=Ramanarayanam+Vizianagaram",
      highlights: ["Aerial bow and arrow design", "160+ sculpted Ramayana life-episodes", "Spectacular musical laser fountain show", "Ancient Veda Pathashala library"],
      tips: "Arrive around 4:30 PM to tour the Ramayana gallery before watching the sensational evening light and fountain show."
    },
    {
      id: "bobbili-fort",
      name: "Bobbili Royal Fort & Palace",
      city: "vizianagaram",
      cityName: "Vizianagaram",
      category: "heritage",
      categoryName: "Heritage & Museums",
      rating: 4.7,
      reviewsCount: 5200,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/This_is_place_for_recreation_or_Musical_concerts_in_the_olden_days.Side_View..JPG/1280px-This_is_place_for_recreation_or_Musical_concerts_in_the_olden_days.Side_View..JPG",
      fallbackImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Site of the legendary 1757 Battle of Bobbili, featuring regal palaces, royal weaponry, and the origin home of the Bobbili Veena.",
      fullDesc: "Located 55 km from Vizianagaram town, Bobbili is renowned for the epic 1757 battle fought with unmatched valor against French General Bussy and the Vijayanagara army. The current Rajah's palace showcases royal silver furniture, ancient swords, cannons, and is the birthplace of the globally acclaimed single-block wood Bobbili Veena.",
      timings: "10:00 AM – 5:00 PM (Daily)",
      entryFee: "₹30 per person",
      location: "Bobbili Town, Vizianagaram District",
      mapUrl: "https://maps.google.com/?q=Bobbili+Fort+Vizianagaram",
      highlights: ["1757 battle memorial grounds", "Royal armory and palanquins", "Authentic Bobbili Veena artisan workshops", "Venugopala Swamy Temple"],
      tips: "Don't miss visiting the Gollapalli veena artisan colony nearby to see how master craftsmen carve the instruments from Jackfruit logs."
    },
    {
      id: "tatipudi-reservoir",
      name: "Tatipudi Reservoir & Nature Park",
      city: "vizianagaram",
      cityName: "Vizianagaram",
      category: "nature",
      categoryName: "Nature & Panoramic Views",
      rating: 4.5,
      reviewsCount: 3800,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Vizianagaram_Montage.png/1280px-Vizianagaram_Montage.png",
      fallbackImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Tranquil reservoir tucked between emerald hills on the Gosthani River, popular for serene boating and picnic escapes.",
      fullDesc: "Built in 1968 across the Gosthani river, Tatipudi Reservoir is surrounded by dense forest hills. APTDC offers speed boating, pedal boats, and cottage stays nestled directly against the water's edge. A favorite weekend getaway for nature lovers and birdwatchers.",
      timings: "9:00 AM – 6:00 PM Daily",
      entryFee: "₹20 (Entry), Boating ₹150 - ₹400",
      location: "Gantyada Mandal, 20 km from Vizianagaram",
      mapUrl: "https://maps.google.com/?q=Tatipudi+Reservoir+Vizianagaram",
      highlights: ["Speedboat rides across calm waters", "Lush green hill amphitheater", "Birdwatching spots", "Quiet picnic groves"],
      tips: "Pack a picnic basket or enjoy fresh lake fish fry from local waterfront stalls."
    },

    // --- SRIKAKULAM ATTRACTIONS ---
    {
      id: "arasavalli-sun-temple",
      name: "Arasavalli Sri Suryanarayana Swamy Temple",
      city: "srikakulam",
      cityName: "Srikakulam",
      category: "spiritual",
      categoryName: "Spiritual & Temples",
      rating: 4.9,
      reviewsCount: 26000,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Arasavilli_Sri_Suryanarayanamurty_Temple_of_Srikakulam%2C_Andhra_Pradesh_%283%29.jpg/1280px-Arasavilli_Sri_Suryanarayanamurty_Temple_of_Srikakulam%2C_Andhra_Pradesh_%283%29.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Ancient 7th-century Sun God temple where solar rays illuminate the deity's lotus feet directly through 5 entrance archways twice a year.",
      fullDesc: "Built by the Kalinga King Devendra Varma in the 7th century CE, Arasavalli is one of the most prominent and functioning Sun temples in the world. Engineered with astronomical precision, twice a year (during Uttariyana and Dakshinayana in March and October), the morning sunrays penetrate straight through five entrance gates directly touching the lotus feet of Lord Surya.",
      timings: "6:00 AM – 12:30 PM & 3:30 PM – 8:00 PM Daily",
      entryFee: "Free General Darshan, ₹50 / ₹100 Special Darshan",
      location: "Arasavalli, Srikakulam City Center (1.5 km from bus stand)",
      mapUrl: "https://maps.google.com/?q=Arasavalli+Sun+Temple+Srikakulam",
      highlights: ["Astronomical sun-ray alignment wonder", "Indra Pushkarini holy tank", "Ancient Kalinga granite sculptures", "Sunday grand Kalyanotsavam"],
      tips: "Sundays attract large numbers of devotees; visiting between 6:30 AM and 8:30 AM allows a peaceful, sacred experience."
    },
    {
      id: "srikurmam-temple",
      name: "Sri Kurmanatha Swamy Temple, Srikurmam",
      city: "srikakulam",
      cityName: "Srikakulam",
      category: "spiritual",
      categoryName: "Spiritual & Temples",
      rating: 4.8,
      reviewsCount: 14700,
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Srikakulam.bhudda_statue_in_nagavali_rever.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      shortDesc: "The ONLY temple in the world dedicated to Lord Vishnu in his Kurma (Tortoise) Avatar, renowned for rare twin Dhwajasthambhams.",
      fullDesc: "Srikurmam holds an incomparable position in Indian spiritual heritage as the world's only shrine honoring Vishnu's Kurma incarnation. Dating back to pre-11th century with inscriptions in Devanagari and Telugu, the temple features two flagstaffs (Dhwajasthambams)—East and West—and a protected conservatory sanctuary for rare star tortoises.",
      timings: "6:00 AM – 1:00 PM & 3:30 PM – 8:00 PM Daily",
      entryFee: "Free General Entry, ₹30 / ₹100 Special Line",
      location: "Srikurmam Village (15 km from Srikakulam town)",
      mapUrl: "https://maps.google.com/?q=Sri+Kurmanatha+Temple+Srikurmam",
      highlights: ["World's sole Kurma avatar shrine", "Twin East-West Dhwajasthambhams", "Live sacred tortoise conservatory park", "Exquisite medieval stone pillar carvings"],
      tips: "You can feed fresh greens to the sacred star tortoises at the temple breeding park."
    },
    {
      id: "kalingapatnam-beach",
      name: "Kalingapatnam Beach & Heritage Lighthouse",
      city: "srikakulam",
      cityName: "Srikakulam",
      category: "beaches",
      categoryName: "Beaches & Coast",
      rating: 4.6,
      reviewsCount: 7900,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Baruva_Pillar.jpg/1280px-Baruva_Pillar.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Ancient maritime port of the Kalinga Empire where the River Vamsadhara joins the sea, marked by a 19th-century British lighthouse.",
      fullDesc: "Kalingapatnam was an international maritime trade capital through which Kalinga merchants sailed perfume, silk, and spices to Sumatra, Java, and Sri Lanka. Today, it is a serene coastal escape with wide golden beaches, where the Vamsadhara river peacefully empties into the Bay of Bengal, guarded by an active 73-foot historic lighthouse.",
      timings: "Beach: 24/7; Lighthouse: 3:00 PM – 5:30 PM",
      entryFee: "Beach is free; Lighthouse ₹20",
      location: "Kalingapatnam, 28 km from Srikakulam city",
      mapUrl: "https://maps.google.com/?q=Kalingapatnam+Lighthouse+Srikakulam",
      highlights: ["River Vamsadhara sangam (confluence)", "Climb to top of 73-ft lighthouse", "Untouched peaceful golden sand dunes", "Fresh coastal seafood delicacies"],
      tips: "Climb the lighthouse staircase between 3:30 PM and 5:00 PM for the most spectacular view of the river meeting the ocean."
    },
    {
      id: "salihundam",
      name: "Salihundam Buddhist Heritage Hill",
      city: "srikakulam",
      cityName: "Srikakulam",
      category: "heritage",
      categoryName: "Heritage & Museums",
      rating: 4.7,
      reviewsCount: 4200,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Salihundam_Historic_Buddhist_Remains_3_by_GPuvvada_2010.jpg/1280px-Salihundam_Historic_Buddhist_Remains_3_by_GPuvvada_2010.jpg",
      fallbackImage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Salihundam_Historic_Buddhist_Remains_4_by_GPuvvada_2010.jpg/1280px-Salihundam_Historic_Buddhist_Remains_4_by_GPuvvada_2010.jpg",
      shortDesc: "Major 2nd-century BCE Buddhist monastic center atop a hill overlooking River Vamsadhara with a circular stupa and votive stupas.",
      fullDesc: "Perched on a scenic hillock beside the Vamsadhara river, Salihundam ('The Abode of Emissaries') was a prominent Buddhist hub from the 2nd century BCE to the 12th century CE. It contains a rare circular Maha Stupa, brick chaityas, viharas, and carved statues of Buddha, Tara, and Marichi reflecting Theravada, Mahayana, and Vajrayana phases.",
      timings: "9:00 AM – 5:00 PM Daily",
      entryFee: "₹15 (Adults), ₹5 (Children)",
      location: "Near Gara Mandal, 18 km from Srikakulam",
      mapUrl: "https://maps.google.com/?q=Salihundam+Buddhist+Heritage+Srikakulam",
      highlights: ["Rare circular Maha Stupa with relic chambers", "Votive stupa pathways", "River Vamsadhara bend view", "Onsite Archaeological Survey museum"],
      tips: "The breezy hilltop offers breathtaking 360-degree views of the surrounding paddy fields and river."
    },
    {
      id: "ponduru-khadi",
      name: "Ponduru Khadi Craft Village",
      city: "srikakulam",
      cityName: "Srikakulam",
      category: "culture",
      categoryName: "Cuisine & Crafts",
      rating: 4.8,
      reviewsCount: 3100,
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Weaving%2Cponduru%2Cmarch25.png",
      fallbackImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      shortDesc: "World-famous GI-craft hub where indigenous red hill cotton is combed using dried fish jawbones and spun into ultra-fine khadi.",
      fullDesc: "Ponduru is internationally celebrated for producing India's finest handspun Khadi. In 1921, Mahatma Gandhi was so fascinated by the extraordinary softness of Ponduru khadi that he sent his son Devadas to learn the craft. Even today, master women artisans use the jawbone of the 'Valuga' fish to comb short-staple hill cotton into gossamer threads up to 100 counts.",
      timings: "10:00 AM – 6:00 PM (Monday to Saturday)",
      entryFee: "Free (Co-operative society showroom open for purchases)",
      location: "Ponduru Town, 22 km from Srikakulam",
      mapUrl: "https://maps.google.com/?q=Ponduru+Khadi+Production+Centre",
      highlights: ["Heritage fish-jawbone cotton ginning", "Live charkha spinning by master artisans", "Direct cooperative society sales", "GI-tagged handloom textile collection"],
      tips: "Purchase authentic GI-certified handspun sarees and kurta fabrics directly from the AFKK Association showroom."
    },
    {
      id: "baruva-beach",
      name: "Baruva Sea-River Confluence Beach",
      city: "srikakulam",
      cityName: "Srikakulam",
      category: "beaches",
      categoryName: "Beaches & Coast",
      rating: 4.5,
      reviewsCount: 3400,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Baruva_Pillar.jpg/1280px-Baruva_Pillar.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Picturesque seaport beach where the Mahendratanaya River gracefully empties into the Bay of Bengal amidst coconut groves.",
      fullDesc: "Baruva was an active colonial seaport during the British era. Today, it is celebrated for its quiet serenity, towering coconut groves, and the scenic confluence where River Mahendratanaya meets the Bay of Bengal. The Kotilingeswara Swamy Temple on the shore adds sacred charm to the roar of waves.",
      timings: "Open 24 Hours",
      entryFee: "Free",
      location: "Baruva, Sompeta Mandal, Srikakulam District (approx. 95 km north)",
      mapUrl: "https://maps.google.com/?q=Baruva+Beach+Srikakulam",
      highlights: ["Historic seaport memorial pillar", "River Mahendratanaya confluence", "Dense scenic coconut gardens", "Pristine, crowd-free shores"],
      tips: "Ideal for a peaceful day trip when traveling towards the Odisha-Andhra border."
    }
  ],

  cuisines: [
    {
      id: "bongu-chicken",
      name: "Araku Bongu Chicken (Bamboo Chicken)",
      city: "visakhapatnam",
      cityName: "Visakhapatnam / Araku",
      type: "Non-Veg Specialty",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      desc: "Marinated country chicken stuffed inside hollow green bamboo stalks with wild forest herbs and roasted over glowing wood coals without a drop of oil.",
      whereToTry: "Araku Valley hill stalls, Rushikonda Tribal Dhabas"
    },
    {
      id: "andhra-chepala-pulusu",
      name: "Coastal Chepala Pulusu (Fish Curry)",
      city: "visakhapatnam",
      cityName: "All 3 Coastal Districts",
      type: "Coastal Delicacy",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
      desc: "Fresh catch of sea or river fish simmered in a tangy gravy of ripe tamarind, fenugreek, garlic, and fresh green chillies in a traditional clay pot.",
      whereToTry: "Sea Inn (Raju Gaari Dhaba) Rushikonda, Srikakulam Coastal Mess"
    },
    {
      id: "madugula-halwa",
      name: "Authentic Madugula Halwa",
      city: "visakhapatnam",
      cityName: "Visakhapatnam (Madugula)",
      type: "Heritage Sweet",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80",
      desc: "Century-old secret recipe made from natural wheat milk extract, pure desi ghee, and dry fruits. Melts softly in your mouth with an incomparable caramel aroma.",
      whereToTry: "Dangeti Murthy Halwa stall in Madugula, Vizag city outlets"
    },
    {
      id: "rk-beach-muri-mixture",
      name: "RK Beach Muri Mixture & Tomato Bajji",
      city: "visakhapatnam",
      cityName: "Visakhapatnam",
      type: "Street Food Icon",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      desc: "Puffed rice tossed with roasted groundnuts, chopped onions, raw mango slices, boiled potatoes, coriander, and zesty lemon juice eaten while admiring the waves.",
      whereToTry: "Any vendor cart along RK Beach promenade from 5 PM onwards"
    },
    {
      id: "bobbili-sweets",
      name: "Bobbili Bellam Jilebi & Ariselu",
      city: "vizianagaram",
      cityName: "Vizianagaram / Bobbili",
      type: "Traditional Sweet",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      desc: "Crispy spiraled jalebis soaked in organic local sugarcane jaggery syrup rather than refined sugar, served piping warm with pure ghee.",
      whereToTry: "Bobbili Sweet Bazar, Vizianagaram Main Market"
    },
    {
      id: "srikakulam-chitti-garelu",
      name: "Srikakulam Chitti Garelu with Nattu Kodi",
      city: "srikakulam",
      cityName: "Srikakulam",
      type: "Traditional Breakfast / Feast",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      desc: "Miniature crunchy black-gram lentil vadas served alongside rich country chicken curry or tangy ginger-tamarind chutney (Allam Pachadi).",
      whereToTry: "Nagavali Riverfront eateries, Srikakulam town hotels"
    }
  ],

  culture: [
    {
      id: "bobbili-veena",
      name: "The Bobbili Saraswati Veena",
      city: "Vizianagaram",
      category: "GI Handcrafted Musical Heritage",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/This_is_place_for_recreation_or_Musical_concerts_in_the_olden_days.Side_View..JPG/1280px-This_is_place_for_recreation_or_Musical_concerts_in_the_olden_days.Side_View..JPG",
      desc: "Crafted since the 17th century by the Sarvasiddhi artisans from a single, seamless block of seasoned Jackfruit wood (Ekanda Veena), producing unmatched acoustic resonance prized by Carnatic virtuosos."
    },
    {
      id: "ponduru-khadi-craft",
      name: "Ponduru Fine Handspun Khadi",
      city: "Srikakulam",
      category: "GI Textile & Living Heritage",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Weaving%2Cponduru%2Cmarch25.png",
      desc: "The only place in the world that uses the dried Valuga fish jawbone to gin fine short-staple hill cotton, spun on two-spindle wooden charkhas into whisper-light breathable fabric cherished by Mahatma Gandhi."
    },
    {
      id: "sirimanotsavam",
      name: "Vizianagaram Sirimanotsavam",
      city: "Vizianagaram",
      category: "Folk Festival & Royal Spectacle",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Viznm_kota.jpg/1280px-Viznm_kota.jpg",
      desc: "Celebrated on the first Tuesday after Vijayadashami, where the temple priest is suspended atop a 60-foot swaying neem tree pole (Sirimanu) to bless hundreds of thousands of gathered devotees."
    },
    {
      id: "arasavalli-ratha-saptami",
      name: "Arasavalli Ratha Saptami",
      city: "Srikakulam",
      category: "Spiritual Extravaganza",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Arasavilli_Sri_Suryanarayanamurty_Temple_of_Srikakulam%2C_Andhra_Pradesh_%283%29.jpg/1280px-Arasavilli_Sri_Suryanarayanamurty_Temple_of_Srikakulam%2C_Andhra_Pradesh_%283%29.jpg",
      desc: "The birthday celebration of the Sun God attracting over 300,000 pilgrims to witness Lord Surya riding on his chariot drawn by seven horses, marked with sacred pond ablutions and ghee lamp offerings."
    }
  ],

  itineraries: [
    {
      id: "golden-3day",
      title: "3-Day Coastal & Royal Circuit",
      subtitle: "The Essential Highlights of Vizag, Vizianagaram & Srikakulam",
      days: 3,
      cities: ["visakhapatnam", "vizianagaram", "srikakulam"],
      budgetEst: "₹8,500 – ₹14,000 per person",
      highlights: ["Kursura Submarine & Kailasagiri", "Ramanarayanam Bow Theme Park", "Arasavalli Sun Temple & Kalingapatnam"],
      schedule: [
        {
          day: 1,
          location: "Visakhapatnam - The Ocean Gateway",
          morning: "Arrive in Vizag, check into beach resort, morning walk on Rushikonda Blue Flag Beach.",
          afternoon: "Visit INS Kursura Submarine Museum & TU-142 Aircraft Museum on Beach Road.",
          evening: "Cable car ropeway up to Kailasagiri for sunset over the harbor, street food feast on RK Beach promenade."
        },
        {
          day: 2,
          location: "Vizianagaram - Princely Legacy & Ramanarayanam",
          morning: "Drive 1 hour north to Vizianagaram. Explore the historic Vizianagaram Fort and Moti Mahal.",
          afternoon: "Sample warm Bobbili Bellam Jilebi in old town; short drive to Bobbili Palace & Veena artisan village.",
          evening: "Explore the illuminated Ramanarayanam Bow Complex and marvel at the 160+ Ramayana episodes and laser fountain."
        },
        {
          day: 3,
          location: "Srikakulam - Sun God & Ancient Shores",
          morning: "Early morning drive along NH-16 to Srikakulam for sunrise darshan at Arasavalli Sun Temple.",
          afternoon: "Visit the world-unique Sri Kurmanatha Swamy Temple at Srikurmam; brief stop at Salihundam Buddhist hill.",
          evening: "Relax at Kalingapatnam Beach and lighthouse sunset before returning to Vizag airport/railway junction."
        }
      ]
    },
    {
      id: "grand-5day",
      title: "5-Day Grand Uttarandhra Odyssey",
      subtitle: "Immersive Coast, Eastern Ghats Hills, Royal Forts & Buddhist Trails",
      days: 5,
      cities: ["visakhapatnam", "vizianagaram", "srikakulam"],
      budgetEst: "₹14,000 – ₹24,000 per person",
      highlights: ["Araku Vistadome Train & Borra Caves", "Ponduru Khadi Living Heritage", "Srikurmam Tortoise Sanctuary", "Gosthani Reservoir"],
      schedule: [
        {
          day: 1,
          location: "Visakhapatnam City & Coastal Heritage",
          morning: "Simhachalam Temple hill darshan; afternoon watersports at Rushikonda Beach.",
          afternoon: "Thotlakonda ancient Buddhist hill monastery overlooking the sea.",
          evening: "RK Beach boulevard, Submarine museum, dinner at Sea Inn."
        },
        {
          day: 2,
          location: "Araku Valley & Borra Caves",
          morning: "Board the morning Vistadome scenic mountain train through 58 tunnels.",
          afternoon: "Explore the subterranean wonder of Borra Caves with vibrant stalactites.",
          evening: "Taste fresh Araku Bongu Bamboo Chicken and tribal coffee; stay in Araku pine cottage."
        },
        {
          day: 3,
          location: "Araku to Vizianagaram",
          morning: "Visit Padmapuram gardens and Chaparai falls; descend via Ananthagiri ghats.",
          afternoon: "Boat ride at Tatipudi Reservoir surrounded by emerald hills.",
          evening: "Vizianagaram Fort evening walk; night stay in Vizianagaram."
        },
        {
          day: 4,
          location: "Vizianagaram to Srikakulam Spiritual Heart",
          morning: "Tour Ramanarayanam spiritual bow park and Bobbili heritage.",
          afternoon: "Drive to Srikakulam; witness live handloom weaving at Ponduru Khadi village.",
          evening: "Sunset at Kalingapatnam lighthouse and River Vamsadhara sangam."
        },
        {
          day: 5,
          location: "Sacred Srikakulam & Departure",
          morning: "Auspicious morning worship at Arasavalli Sun Temple.",
          afternoon: "Darshan and feeding sacred tortoises at Sri Kurmanatha Swamy Temple; Salihundam Buddhist stupa.",
          evening: "Return to Visakhapatnam for souvenir shopping (Madugula halwa, Araku coffee) and farewell departure."
        }
      ]
    }
  ]
};

if (typeof window !== "undefined") {
  window.TRAVEL_DATA = TRAVEL_DATA;
}
