// Base URL del backend. En desarrollo apunta a tu servidor local de Express.
// Si luego despliegas el backend, puedes mover esto a una variable de entorno
// de Vite: const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
const API_URL = "http://localhost:3000";

export interface RegisterPayload {
  name: string;
  email: string;
  phone: string;
  password: string;

}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;

}

export interface AuthResponse {
  message: string;
  user: AuthUser;
  token: string;
}

// Forma del error que devuelve tu backend cuando falla validateBody (Zod)
// o cuando el controller responde manualmente (409, 401, etc.)
export interface ApiErrorBody {
  message: string;
  errors?: { message: string; path: (string | number)[] }[];
}

export class ApiError extends Error {
  status: number;
  body: ApiErrorBody;

  constructor(status: number, body: ApiErrorBody) {
    super(body.message ?? "Request failed");
    this.status = status;
    this.body = body;
  }
}

async function handleResponse<T>(res: Response): Promise<T> {
  const data = await res.json().catch(() => ({ message: "Invalid server response" }));

  if (!res.ok) {
    throw new ApiError(res.status, data as ApiErrorBody);
  }

  return data as T;
}

//contruye el post. Es basicamente un fetch con manejo de errores
export async function registerUser(payload: RegisterPayload): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return handleResponse<AuthResponse>(res);
}

export async function loginUser(payload: LoginPayload): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return handleResponse<AuthResponse>(res);
}

// Locations
export interface Location {
  id: string;
  name: string;
  description: string | null;
  address: string;
  imageUrl: string | null;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface LocationsResponse {
  locations: Location[];
}

export async function getLocations(): Promise<LocationsResponse> {
  const res = await fetch(`${API_URL}/api/locations`);
  return handleResponse<LocationsResponse>(res);
}

export async function getLocationsByCategory(category: string): Promise<LocationsResponse> {
  const res = await fetch(`${API_URL}/api/locations/${category}`);
  return handleResponse<LocationsResponse>(res);
}

export interface LocationDetail extends Location {
  phone: string | null;
  schedule: string | null;
}

export interface LocationDetailResponse {
  location: LocationDetail;
}

export async function getLocationById(id: string): Promise<LocationDetailResponse> {
  const res = await fetch(`${API_URL}/api/locations/detail/${id}`);
  return handleResponse<LocationDetailResponse>(res);
}