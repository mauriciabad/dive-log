import { z } from "zod";

export const WeatherSchema = z.enum(["CLOUDLESS", "CLOUDY", "RAINY", "SNOW"]);
