export const hotels = [
  {
    id: "1",
    name: "Ocean Pearl Resort",
    city: "Goa",
    type: "Resort",
    price: 4500,
    rating: 4.5,
    reviewsCount: 320,
    amenities: ["WiFi", "Pool", "Parking", "AC"],
    images: [
      "/images/oceanpearl.png",
      "/images/oceanpearl-room.png",
      "/images/oceanpearl-pool.png",
    ],
    location: { lat: 15.2993, lng: 74.124 },
    rooms: [
      { type: "Deluxe", price: 4500 },
      { type: "Suite", price: 7500 },
    ],
    reviews: [
      { user: "Rohit", rating: 5, comment: "Amazing beach view!" },
      { user: "Ananya", rating: 4, comment: "Very relaxing stay." },
    ],
  },

  {
    id: "2",
    name: "Rambagh Palace",
    city: "Jaipur",
    type: "Palace Hotel",
    price: 18000,
    rating: 4.9,
    reviewsCount: 1200,
    amenities: ["WiFi", "Pool", "Parking", "AC", "Spa"],
    images: [
      "/images/rambagh1.png",
      "/images/rambagh2.png",
      "/images/rambagh3.png",
    ],
    location: { lat: 26.8981, lng: 75.808 },
    rooms: [
      { type: "Palace Room", price: 18000 },
      { type: "Royal Suite", price: 35000 },
    ],
    reviews: [
      { user: "Vikram", rating: 5, comment: "Feels like royalty!" },
      { user: "Neha", rating: 5, comment: "Absolutely luxurious." },
    ],
  },

  {
    id: "3",
    name: "The Leela Palace",
    city: "Jaipur",
    type: "Luxury Hotel",
    price: 16000,
    rating: 4.8,
    reviewsCount: 860,
    amenities: ["WiFi", "Pool", "Parking", "AC", "Spa"],
    images: [
      "/images/leela1.png",
      "/images/leela2.png",
      "/images/leela3.png",
    ],
    location: { lat: 26.9124, lng: 75.7873 },
    rooms: [
      { type: "Grand Deluxe", price: 16000 },
      { type: "Royal Suite", price: 30000 },
    ],
    reviews: [
      { user: "Aditi", rating: 5, comment: "Super classy stay." },
      { user: "Karan", rating: 4, comment: "Service is top notch." },
    ],
  },

  {
    id: "4",
    name: "Taj Mahal Palace",
    city: "Mumbai",
    type: "Heritage Hotel",
    price: 20000,
    rating: 4.9,
    reviewsCount: 2000,
    amenities: ["WiFi", "Pool", "Parking", "AC", "Sea View"],
    images: [
      "/images/tajmumbai1.png",
      "/images/tajmumbai2.png",
      "/images/tajmumbai3.png",
    ],
    location: { lat: 18.9217, lng: 72.833 },
    rooms: [
      { type: "Luxury Room", price: 20000 },
      { type: "Presidential Suite", price: 50000 },
    ],
    reviews: [
      { user: "Rahul", rating: 5, comment: "Iconic experience." },
      { user: "Simran", rating: 5, comment: "Worth every penny." },
    ],
  },

  {
    id: "5",
    name: "ITC Royal Bengal",
    city: "Kolkata",
    type: "Luxury Hotel",
    price: 12000,
    rating: 4.7,
    reviewsCount: 950,
    amenities: ["WiFi", "Pool", "Parking", "AC", "Spa"],
    images: [
      "/images/itckolkata1.png",
      "/images/itckolkata2.png",
      "/images/itckolkata3.png",
    ],
    location: { lat: 22.5726, lng: 88.3639 },
    rooms: [
      { type: "Executive Club", price: 12000 },
      { type: "ITC One Suite", price: 28000 },
    ],
    reviews: [
      { user: "Sourav", rating: 5, comment: "Elegant and grand." },
      { user: "Priya", rating: 4, comment: "Loved the ambience." },
    ],
  },

  {
    id: "6",
    name: "ITC Rajputana",
    city: "Jaipur",
    type: "Heritage Hotel",
    price: 11000,
    rating: 4.6,
    reviewsCount: 780,
    amenities: ["WiFi", "Pool", "Parking", "AC", "Spa"],
    images: [
      "/images/itcraj1.png",
      "/images/itcraj2.png",
      "/images/itcraj3.png",
    ],
    location: { lat: 26.9124, lng: 75.7873 },
    rooms: [
      { type: "Rajputana Deluxe", price: 11000 },
      { type: "Mewar Suite", price: 26000 },
    ],
    reviews: [
      { user: "Arjun", rating: 5, comment: "Royal Rajasthan vibes." },
      { user: "Megha", rating: 4, comment: "Very peaceful stay." },
    ],
  },

    {
    id: "7",
    name: "City View Hotel",
    city: "Delhi",
    type: "Business Hotel",
    price: 6500,
    rating: 4.3,
    reviewsCount: 540,
    amenities: ["WiFi", "Parking", "AC", "Restaurant"],
    images: [
      "/images/cityview.png",
      "/images/cityview-living.png",
      "/images/cityview-room.png",
    ],
    location: { lat: 28.6139, lng: 77.209 },
    rooms: [
      { type: "Executive Room", price: 6500 },
      { type: "Imperial Suite", price: 12000 },
    ],
    reviews: [
      { user: "Aman", rating: 4, comment: "Perfect for business trips." },
      { user: "Sneha", rating: 5, comment: "Clean and classy hotel." },
    ],
  },

  {
  id: "8",
  name: "Imperial Palace",
  city: "Udaipur",
  type: "Heritage Palace",
  price: 15000,
  rating: 4.8,
  reviewsCount: 640,
  amenities: ["WiFi", "Pool", "Parking", "AC", "Lake View", "Spa"],
  images: [
    "/images/imperialpalace.png",
    "/images/imperialpalace-lobby.png",
    "/images/imperialpalace-room.png",
  ],
  location: { lat: 24.5854, lng: 73.7125 },
  rooms: [
    { type: "Heritage Room", price: 15000 },
    { type: "Maharaja Suite", price: 32000 },
  ],
  reviews: [
    { user: "Rajat", rating: 5, comment: "Pure royal experience!" },
    { user: "Isha", rating: 4, comment: "Amazing lake view and hospitality." },
  ],
}

]
