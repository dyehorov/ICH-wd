export const initialCategories = [
  {
    id: "parks",
    name: "Parks",
    icon: "🌳",
    places: [
      {
        id: "central-park",
        name: "Central Park",
        description:
          "A large city park for walking, relaxing, and outdoor activities",
        image: "🌲",
        todos: [], // will be loaded later
      },
      {
        id: "botanical-garden",
        name: "Botanical Garden",
        description:
          "A green space with rare plants, walking paths, and quiet areas",
        image: "🍃",
        todos: [],
      },
    ],
  },
  {
    id: "museums",
    name: "Museums",
    icon: "🏛️",
    places: [
      {
        id: "city-art-museum",
        name: "City Art Museum",
        description:
          "A major museum with European paintings and modern exhibitions",
        image: "🎨",
        todos: [],
      },
    ],
  },
  {
    id: "restaurants",
    name: "Restaurants",
    icon: "🍽️",
    places: [
      {
        id: "old-town-bistro",
        name: "Old Town Bistro",
        description: "A cozy restaurant serving traditional European cuisine",
        image: "🥐",
        todos: [],
      },
    ],
  },
]

const todosData = {
  "central-park": [
    { id: 1, text: "Rent a bicycle", completed: false },
    { id: 2, text: "Feed the ducks by the lake", completed: true },
    { id: 3, text: "Visit the open-air café", completed: false },
  ],
  "botanical-garden": [
    { id: 1, text: "Walk through the rose garden", completed: false },
    { id: 2, text: "Visit the greenhouse", completed: false },
  ],
  "city-art-museum": [
    { id: 1, text: "See the Impressionist collection", completed: false },
    { id: 2, text: "Buy souvenirs", completed: true },
  ],
  "old-town-bistro": [
    { id: 1, text: "Try the seasonal soup", completed: false },
    { id: 2, text: "Reserve a table", completed: true },
    { id: 3, text: "Leave a tip", completed: false },
  ],
}
