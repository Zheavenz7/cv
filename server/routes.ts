import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.get("/api/me", (req: Request, res: Response) => {
    // For now, return a mock user
    // In a real app, you would get this from the session or JWT token
    res.json({
      id: "user-123",
      username: "demo",
      email: "demo@example.com",
      name: "Demo User"
    });
  });

  // Add more API routes here

  const httpServer = createServer(app);

  return httpServer;
}
