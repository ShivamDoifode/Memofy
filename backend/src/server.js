import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import notesRoutes from "./routes/notesRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, "../../frontend/dist");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

const PORT = process.env.PORT || 5001;

// middleware

if(process.env.NODE_ENV !== "production"){app.use(cors({origin:"http://localhost:5173"}));}
app.use(express.json());
app.use(rateLimiter);


//routes
app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV==="production"){
  app.use(express.static(distPath));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
  });
});
