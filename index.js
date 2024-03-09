import express from "express";
import { DATABASE_URL, port } from "./env.js";
import { connectDB } from "./db/connectdb.js";
import { ProductRoute } from "./routes/product.route.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", ProductRoute);

app.listen(port, () => console.log(`Server running on ${port}`));
connectDB(DATABASE_URL);
