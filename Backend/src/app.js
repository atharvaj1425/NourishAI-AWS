import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// ✅ Define allowed origins
const allowedOrigins = [
    "https://aissms-pune-hack.vercel.app",  // ✅ Your frontend
    "http://localhost:5173",               // ✅ Local development (Vite)
];

if (process.env.CORS_ORIGIN) {
    allowedOrigins.push(process.env.CORS_ORIGIN.trim());
}

// ✅ Configure CORS dynamically
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin.trim())) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// ✅ Import routes
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import ngoRouter from "./routes/ngo.routes.js";
import restaurantRouter from "./routes/restaurants.routes.js";
import volunteerRouter from "./routes/volunteer.routes.js";
import leaderboardRouter from "./routes/leaderboard.routes.js"; 

// ✅ Route declarations
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/ngos", ngoRouter);
app.use("/api/v1/restaurants", restaurantRouter);
app.use("/api/v1/volunteers", volunteerRouter);
app.use("/api/v1/leaderboard", leaderboardRouter);

export { app };
