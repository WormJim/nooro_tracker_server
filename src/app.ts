import express from "express";
import { setRoutes } from "./routes/index";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle Prisma disconnection on server shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
