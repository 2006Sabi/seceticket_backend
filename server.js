const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const travelRoutes = require("./routes/travelRoutes");
const busRoutes = require("./routes/busRoutes"); // Import Bus Routes
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/travel", travelRoutes);
app.use("/api/buses", busRoutes); // Use Bus Routes here
app.use("/api/tickets", ticketRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
