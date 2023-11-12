import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// app.get("/", (req, res) => {
//   res.send("Server is ready!");
// });

//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "The Mathematician's Dinner",
      content:
        "Why did the mathematician bring a ladder to dinner? Because he wanted to reach the highest pi!",
    },
    {
      id: 2,
      title: "The Invisible Man",
      content:
        "I used to play piano by ear, but now I use my hands and fingers.",
    },
    {
      id: 3,
      title: "Light Bulb Moment",
      content:
        "How many programmers does it take to change a light bulb? None, that's a hardware issue!",
    },
    {
      id: 4,
      title: "Coffee Addict",
      content: "Why did the coffee file a police report? It got mugged!",
    },
    {
      id: 5,
      title: "Time Traveler's Meeting",
      content:
        "Time travelers meet. 'I'm from the 20th century,' says one. 'Me too,' says the other. 'What year?' '1985.' 'Hmm, the beginning or the end?'",
    },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
