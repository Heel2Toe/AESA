export const centers = [
  {
    name: "Footblitz",
    picture: "./assets/footblitz.jpg",
    location: "Edapally, Changampuzha park",
  },
  {
    name: "Playmakers",
    picture: "./assets/playmakers.jpg",
    location: "Kaloor, JLN Stadium",
  },
  {
    name: "Koonamthai",
    picture: "./assets/koonamthai.jpg",
    location: "Museum",
  },
];

export const centerTimings: { [key: string]: { day: string; time: string }[] } = {
  Footblitz: [
    { day: "MON", time: "5PM - 7PM" },
    { day: "TUE", time: "5PM - 6PM" },
    { day: "WED", time: "5PM - 7PM" },
    { day: "THU", time: "5PM - 6PM" },
    { day: "FRI", time: "5PM - 7PM" },
  ],
  Playmakers: [
    { day: "FRI", time: "5PM - 6PM" },
    { day: "SAT", time: "5PM - 6PM" },
    { day: "SUN", time: "5PM - 6PM" },
  ],
  Koonamthai: [
    { day: "FRI", time: "5PM - 6PM" },
    { day: "SAT", time: "5PM - 6PM" },
    { day: "SUN", time: "5PM - 6PM" },
  ],
};
