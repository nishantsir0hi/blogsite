import React, { useState } from 'react';
import './App.css';

const postsData = [
  {
    id: 1,
    title: "Exploring the Enchanting Streets of Paris",
    date: "2024-06-01",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    content: "Paris, the City of Light, is a destination that captures the hearts of travelers from around the world. My journey began with a stroll along the Seine, where the gentle flow of the river mirrored the relaxed pace of Parisian life. The aroma of freshly baked baguettes wafted from corner bakeries, and the distant chime of church bells set a magical tone for the day. I wandered through the historic Marais district, marveling at the blend of medieval and modern architecture. The cobblestone streets led me to hidden courtyards and vibrant cafes, each with its own story to tell. No visit to Paris is complete without a stop at the iconic Eiffel Tower. As I ascended the iron lattice, the city unfolded beneath me, a tapestry of rooftops, gardens, and grand boulevards. The view was breathtaking, especially as the sun dipped below the horizon, casting a golden glow over the city. Evenings in Paris are best spent at a local bistro, savoring classic dishes like coq au vin and crème brûlée. The city's charm lies not just in its landmarks, but in the everyday moments: a street musician's melody, a painter capturing the scene along the river, and the laughter of friends sharing a meal. Paris is a city that invites you to slow down, savor life, and fall in love with travel all over again."
  },
  {
    id: 2,
    title: "A Journey Through the Wilds of Patagonia",
    date: "2024-06-03",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    content: "Patagonia, stretching across southern Argentina and Chile, is a land of dramatic landscapes and untamed beauty. My adventure began in El Calafate, a gateway to the stunning Los Glaciares National Park. The highlight was trekking on the Perito Moreno Glacier, where the ice creaked and groaned beneath my feet, and the blue hues of the glacier sparkled in the sunlight. Each step was a reminder of nature's power and fragility. From there, I traveled to Torres del Paine National Park in Chile, home to jagged peaks, turquoise lakes, and windswept plains. Hiking the W Trek was both challenging and rewarding, with every turn revealing new vistas: herds of guanacos grazing, condors soaring overhead, and waterfalls cascading down rocky cliffs. Nights were spent in cozy refugios, sharing stories with fellow travelers from around the world. Patagonia's weather is famously unpredictable, but the ever-changing skies only added to the sense of adventure. Whether basking in the glow of sunrise over the mountains or braving a sudden snowstorm, I felt truly alive in this wild corner of the world."
  },
  {
    id: 3,
    title: "Discovering the Ancient Temples of Kyoto",
    date: "2024-06-05",
    image: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=800&q=80",
    content: "Kyoto, Japan's ancient capital, is a city where tradition and tranquility reign. My days were filled with visits to centuries-old temples, each surrounded by meticulously maintained gardens. The golden pavilion of Kinkaku-ji shimmered in the morning light, its reflection dancing on the surface of a peaceful pond. At Fushimi Inari Taisha, I walked beneath thousands of vermillion torii gates, the path winding up the sacred mountain. The air was thick with the scent of incense and the sound of chanting monks. In the Gion district, I caught glimpses of geisha hurrying to evening appointments, their elegant kimonos a testament to Kyoto's enduring cultural heritage. Tea houses offered a moment of respite, where I savored matcha and delicate wagashi sweets. The highlight of my trip was attending a traditional tea ceremony, an experience that embodied the grace and mindfulness of Japanese culture. Kyoto is a city that invites reflection, where every stone and blossom tells a story of the past."
  },
  {
    id: 4,
    title: "Safari Adventure in the Serengeti",
    date: "2024-06-07",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    content: "The Serengeti, with its endless plains and abundant wildlife, is the ultimate destination for nature lovers. My safari began at dawn, the air crisp and filled with anticipation. As the sun rose, the savannah came alive with movement: herds of wildebeest and zebra migrating in search of fresh grass, lions lounging in the shade, and elephants ambling gracefully across the landscape. Our guide's keen eyes spotted a cheetah stalking its prey, a heart-pounding moment that underscored the raw beauty of the wild. Each day brought new encounters, from hippos wallowing in muddy rivers to giraffes nibbling the tops of acacia trees. Evenings were spent around the campfire, listening to the distant roar of lions and sharing stories under a sky ablaze with stars. The Serengeti is a place of wonder, where the rhythms of nature unfold in spectacular fashion. It's a reminder of the importance of conservation and the privilege of witnessing wildlife in its natural habitat."
  },
  {
    id: 5,
    title: "Sailing the Greek Islands: A Mediterranean Dream",
    date: "2024-06-09",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    content: "Sailing through the Greek Islands is a journey through history, culture, and breathtaking scenery. My adventure began in Athens, where ancient ruins stand in stark contrast to the vibrant city life. From there, I set sail for the Cyclades, a cluster of islands known for their whitewashed villages and crystal-clear waters. Each island had its own charm: Santorini's dramatic cliffs and sunsets, Mykonos's lively beaches and nightlife, and Naxos's tranquil olive groves and mountain villages. Days were spent swimming in secluded coves, exploring ancient temples, and sampling local delicacies like fresh seafood and baklava. The pace of life slowed as I adjusted to the rhythms of the sea, guided by the wind and the stars. Evenings were magical, with dinners on deck and the sound of waves lapping against the hull. Sailing the Greek Islands is more than a vacation—it's an immersion in beauty, history, and the simple joys of travel."
  },
  {
    id: 6,
    title: "Sunrise at Machu Picchu",
    date: "2024-06-11",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    content: "Watching the sunrise over Machu Picchu is a moment I'll never forget. The ancient Incan city slowly emerged from the mist, revealing terraced hills and stone ruins surrounded by lush green mountains. The air was crisp and filled with anticipation as fellow travelers gathered to witness the spectacle. Exploring the site, I marveled at the ingenuity of its builders and the breathtaking views from every angle. Machu Picchu is a testament to human achievement and the enduring allure of adventure."
  },
  {
    id: 7,
    title: "Venice: City of Canals",
    date: "2024-06-12",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    content: "Venice is a city like no other, with its winding canals, ornate bridges, and timeless charm. I spent my days wandering narrow alleyways, discovering hidden piazzas, and enjoying gelato by the water. A gondola ride at sunset offered a new perspective on the city's beauty. Venice's magic lies in its ability to surprise and delight at every turn."
  },
  {
    id: 8,
    title: "The Magic of Marrakech",
    date: "2024-06-13",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    content: "Marrakech is a feast for the senses. The vibrant souks are filled with colorful textiles, spices, and handcrafted treasures. I wandered through the medina, visited ornate palaces, and relaxed in tranquil gardens. The call to prayer echoed through the city, adding to the sense of wonder. Marrakech is a place where tradition and modernity blend seamlessly."
  },
  {
    id: 9,
    title: "Sydney' Coastal Walks",
    date: "2024-06-14",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    content: "Sydney's coastline is a paradise for walkers. The Bondi to Coogee walk offered stunning ocean views, golden beaches, and lively cafes. Along the way, I met friendly locals and enjoyed the laid-back Australian lifestyle. Sydney's natural beauty and vibrant culture make it a must-visit destination for travelers."
  },
  {
    id: 10,
    title: "The Colors of Jaipur",
    date: "2024-06-15",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    content: "Jaipur, the Pink City, dazzles with its colorful palaces, bustling bazaars, and rich history. I explored the Amber Fort, admired intricate architecture, and sampled delicious Rajasthani cuisine. The city's vibrant energy and warm hospitality made my visit unforgettable. Jaipur is a celebration of India's cultural heritage."
  },
  {
    id: 11,
    title: "Hiking the Swiss Alps",
    date: "2024-06-16",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    content: "The Swiss Alps offer some of the world's most breathtaking hiking trails. I trekked through alpine meadows, crossed crystal-clear streams, and marveled at snow-capped peaks. Each day ended with hearty Swiss food and cozy mountain lodges. The Alps are a haven for outdoor enthusiasts and nature lovers alike."
  },
  {
    id: 12,
    title: "New York: City That Never Sleeps",
    date: "2024-06-17",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    content: "New York buzzes with energy day and night. I explored iconic landmarks like Times Square, Central Park, and the Statue of Liberty. The city's diverse neighborhoods offered endless food, art, and entertainment. New York's fast pace and vibrant spirit make it a destination that always inspires."
  },
  {
    id: 13,
    title: "The Serenity of Lake Bled",
    date: "2024-06-18",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    content: "Lake Bled in Slovenia is a picture-perfect escape. I rowed to the island church, hiked to the castle for panoramic views, and enjoyed delicious cream cake by the water. The lake's tranquil setting and natural beauty made it a highlight of my travels. Bled is a place to relax and recharge."
  },
  {
    id: 14,
    title: "Petra: Lost City of Stone",
    date: "2024-06-19",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    content: "Petra's rose-red cliffs and ancient tombs are awe-inspiring. Walking through the Siq, I was amazed by the grandeur of the Treasury and the intricate carvings. Petra's history and mystery make it one of the world's most fascinating archaeological sites. It's a journey back in time."
  },
  {
    id: 15,
    title: "Cape Town's Table Mountain",
    date: "2024-06-20",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    content: "Cape Town's Table Mountain offers spectacular views of the city and ocean. I hiked to the summit, rode the cable car, and explored the vibrant V&A Waterfront. Cape Town's blend of natural beauty and cultural diversity makes it a top travel destination."
  },
  {
    id: 16,
    title: "The Northern Lights in Iceland",
    date: "2024-06-21",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    content: "Seeing the Northern Lights dance across the Icelandic sky was magical. I soaked in hot springs, explored volcanic landscapes, and marveled at waterfalls. Iceland's natural wonders and friendly people made my trip unforgettable. The aurora borealis is a bucket-list experience for any traveler."
  },
  {
    id: 17,
    title: "Santorini's Blue Domes",
    date: "2024-06-22",
    image: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=800&q=80",
    content: "Santorini's whitewashed buildings and blue-domed churches are iconic. I wandered the narrow streets of Oia, watched sunsets over the caldera, and enjoyed fresh seafood by the sea. Santorini's beauty and romance make it a dream destination for couples and solo travelers alike."
  },
  {
    id: 18,
    title: "The Bustle of Bangkok",
    date: "2024-06-23",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    content: "Bangkok is a city of contrasts, where ancient temples stand beside modern skyscrapers. I explored bustling markets, sampled street food, and cruised the Chao Phraya River. The city's vibrant energy and rich culture make every visit an adventure."
  },
  {
    id: 19,
    title: "Canadian Rockies Road Trip",
    date: "2024-06-24",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    content: "Driving through the Canadian Rockies was a journey of awe. I stopped at turquoise lakes, hiked forest trails, and spotted wildlife along the way. The mountains' grandeur and the region's natural beauty left a lasting impression. The Rockies are a paradise for adventurers."
  },
  {
    id: 20,
    title: "Lisbon's Hills and History",
    date: "2024-06-25",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    content: "Lisbon's colorful streets and historic trams charmed me from the start. I explored hilltop neighborhoods, enjoyed panoramic views, and tasted delicious pastries. The city's blend of old and new, along with its welcoming locals, made my stay memorable."
  },
  {
    id: 21,
    title: "The Temples of Angkor",
    date: "2024-06-26",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    content: "Angkor's ancient temples are a wonder to behold. I watched sunrise at Angkor Wat, explored jungle-covered ruins, and learned about Khmer history. The site's scale and beauty are truly impressive. Angkor is a must-see for history buffs and explorers."
  },
  {
    id: 22,
    title: "Rio's Carnival Spirit",
    date: "2024-06-27",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    content: "Rio de Janeiro comes alive during Carnival. I joined street parades, danced to samba rhythms, and admired colorful costumes. The city's energy and joy are contagious. Rio's beaches, mountains, and culture make it a vibrant destination year-round."
  },
  {
    id: 23,
    title: "The Wilds of New Zealand",
    date: "2024-06-28",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    content: "New Zealand's landscapes are straight out of a fantasy. I hiked through fjords, visited glowworm caves, and marveled at snow-capped peaks. The country's friendly people and outdoor adventures make it a top pick for travelers seeking natural beauty."
  },
  {
    id: 24,
    title: "Prague's Old World Charm",
    date: "2024-06-29",
    image: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=800&q=80",
    content: "Prague's cobbled streets and Gothic spires transport you to another era. I explored the historic Old Town, crossed the Charles Bridge, and enjoyed hearty Czech cuisine. The city's fairy-tale atmosphere and rich history make it a delight to visit."
  },
  {
    id: 25,
    title: "Safari in Kruger National Park",
    date: "2024-06-30",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    content: "Kruger National Park is a wildlife lover's dream. I spotted elephants, lions, and rhinos on game drives, and enjoyed sundowners in the bush. The park's vast landscapes and diverse animals make every safari unique. Kruger is a must for anyone passionate about nature."
  }
];

function App() {
  const [page, setPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setPage('post');
  };

  const handleHomeClick = () => {
    setPage('home');
    setSelectedPost(null);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1 onClick={handleHomeClick} style={{ cursor: 'pointer' }}>My Blog</h1>
        <div>
          <button onClick={handleHomeClick}>Home</button>
          <button onClick={() => setPage('about')}>About</button>
        </div>
      </nav>
      <main>
        {page === 'home' && (
          <div>
            <h2>Latest Posts</h2>
            <ul className="post-list">
              {postsData.map(post => (
                <li key={post.id} onClick={() => handlePostClick(post)} className="post-item">
                  <img src={post.image} alt={post.title} className="post-image" />
                  <div className="post-content">
                    <h3>{post.title}</h3>
                    <p className="date">{post.date}</p>
                    <p>{post.content.slice(0, 120)}...</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {page === 'post' && selectedPost && (
          <div className="single-post">
            <button onClick={handleHomeClick}>&larr; Back</button>
            <img src={selectedPost.image} alt={selectedPost.title} className="single-post-image" />
            <h2>{selectedPost.title}</h2>
            <p className="date">{selectedPost.date}</p>
            <p>{selectedPost.content}</p>
          </div>
        )}
        {page === 'about' && (
          <div>
            <h2>About</h2>
            <p>This is a simple blog website built with React. You can add more features as you like!</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
