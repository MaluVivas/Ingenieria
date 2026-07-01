import { Request, Response } from "express";
import { db } from "../db/connection";
import { locations } from "../db/schema";
import { eq, asc } from "drizzle-orm";

// eq para consultas equal, asc para ordenar de manera ascendente

// GET /api/locations - trae todas las locations
export const getLocations = async (req: Request, res: Response) => {
  try {
    const allLocations = await db
      .select()
      .from(locations)
      .orderBy(asc(locations.name));

    return res.status(200).json({ locations: allLocations });
  } catch (error) {
    console.error("Error fetching locations:", error);
    return res.status(500).json({ message: "Error fetching locations" });
  }
};

// GET /api/locations/:category - trae locations por categoria
export const getLocationsByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const categoryString = String(category);

    const filteredLocations = await db
      .select()
      .from(locations)
      .where(eq(locations.category, categoryString))
      .orderBy(asc(locations.name));

    return res.status(200).json({ locations: filteredLocations });
  } catch (error) {
    console.error("Error fetching locations by category:", error);
    return res.status(500).json({ message: "Error fetching locations" });
  }
};

// GET /api/locations/detail/:id - trae un lugar especifico por id
export const getLocationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const location = await db
      .select()
      .from(locations)
      .where(eq(locations.id, String(id)))
      .limit(1);

    if (location.length === 0) {
      return res.status(404).json({ message: "Location not found" });
    }

    return res.status(200).json({ location: location[0] });
  } catch (error) {
    console.error("Error fetching location:", error);
    return res.status(500).json({ message: "Error fetching location" });
  }
};