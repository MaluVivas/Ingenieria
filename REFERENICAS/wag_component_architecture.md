# WAG! — Arquitectura de Componentes y Distribución de Tareas

> Proyecto: aplicación web para dueños de mascotas  
> Stack: React + TypeScript + Tailwind CSS + Vite  
> Backend: Express + TypeScript  

---

## Leyenda

| Etiqueta | Significado |
|---|---|
| `[nuevo]` | Crear desde cero |
| `[mover]` | Reorganizar desde su ubicación actual |
| `[ok]` | Ya existe, no tocar |
| `[shared]` | Componente reutilizable entre páginas |

---

## Estructura propuesta — `frontend/src/`

### `components/` — piezas reutilizables

```
components/
│
├── layout/
│   ├── NavBar.tsx           [ok]
│   ├── Footer.tsx           [ok]
│   └── Layout.tsx           [nuevo] — wrapper global: NavBar + {children} + Footer
│
├── ui/                      [shared]
│   ├── Button.tsx           [nuevo]
│   ├── Card.tsx             [nuevo]
│   ├── Avatar.tsx           [nuevo]
│   ├── StarRating.tsx       [nuevo]
│
├── maps/
│   ├── MapView.tsx          [nuevo] — integración Google Maps
│   ├── LocationCard.tsx     [nuevo]
│   └── FilterBar.tsx        [nuevo] — filtrar por tipo de lugar
│
├── profile/
│   ├── ProfileModal.tsx     [nuevo] — 
│   ├── AvatarPicker.tsx     [nuevo] — grid de dibujos predeterminados
│   └── UserStats.tsx        [nuevo] — reseñas hechas, lugares guardados
│
└── reviews/
    ├── ReviewCard.tsx       [nuevo]
    └── ReviewForm.tsx       [nuevo]
```

---

### `pages/` — vistas completas

```
pages/
│
├── Home/
│   ├── Landing.tsx             [ok]
│   ├── LandingHeroBanner.tsx   [ok]
│   └── LandingButton.tsx       [mover → components/ui/Button.tsx]
│
├── About/
│   ├── AboutDisplay.tsx        [ok]
│   ├── ContactForms.tsx        [mover → components/ui/]
│   └── HappyCustomersCards.tsx [mover → components/reviews/ReviewCard]
│                                ⚠️ renombrar (typo en nombre actual)
│
├── Care/
│   ├── CareDisplay.tsx         [ok]
│   ├── SpeciesTab.tsx          [nuevo] — tabs: Perro / Gato / Otras mascotas
│   └── TipCard.tsx             [mover → components/ui/Card]
│
├── Blog/
│   ├── ArticleView.tsx         [ok]
│   ├── ArticleCard.tsx         [mover → components/ui/Card]
│   └── RecommendedArticles.tsx [nuevo]
│
├── Ubicacion/
│   ├── UbicacionDisplay.tsx    [ok]
│   └── PlaceDetail.tsx         [nuevo] — vista detalle de un lugar con reseñas
│
├── Auth/
│   ├── Login.tsx               [ok]
│   ├── SignIn.tsx              [ok]
│   └── LoginError.tsx          [nuevo] — estado de error de autenticación
│
└── Profile/
    └── ProfilePage.tsx         [nuevo]
```

---

### `types/` — interfaces TypeScript globales

```
types/
└── index.ts    [nuevo] — contrato de datos compartido entre Jimena y Malú
```

Contenido propuesto para `types/index.ts`:

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  avatarId: string;       // índice del dibujo predeterminado
  reviews: string[];      // IDs de reseñas hechas por el usuario
}

export interface Location {
  id: string;
  name: string;
  type: 'veterinaria' | 'petfriendly' | 'restaurante' | 'hotel' | 'parque';
  address: string;
  lat: number;
  lng: number;
  rating: number;
  reviewCount: number;
  description: string;
  imageUrl?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatarId: string;
  locationId: string;
  rating: number;         // 1 a 5
  comment: string;
  createdAt: string;
}

export interface Article {
  id: string;
  title: string;
  category: PetSpecies | 'general';
  content: string;
  coverImage: string;
  tags: string[];
  verified: boolean;
  publishedAt: string;
}

export type PetSpecies = 'dog' | 'cat' | 'other';
```

---

## Distribución de tareas

### Jimena

- [ ] Crear `types/index.ts` con todas las interfaces — hacerlo primero
- [ ] Crear `components/layout/Layout.tsx` y actualizar `App.tsx` para usarlo en todas las rutas
- [ ] Página Ubicaciones + integración Google Maps API (`MapView`, `LocationCard`, `FilterBar`)
- [ ] `ProfileModal.tsx` con tabs: "Mi perfil" y "Mi avatar"
- [ ] `AvatarPicker.tsx` — grid de dibujos predeterminados seleccionables
- [ ] `StarRating.tsx` + `ReviewCard.tsx` + `ReviewForm.tsx`
- [ ] Investigar y configurar la librería de Google Maps para React (`@react-google-maps/api`)

### Malú

- [ ] Componentes base en `components/ui/`: `Button`, `Card`, `Badge`, `Modal`, `Avatar`
- [ ] Página Care: tabs por especie (`SpeciesTab`), cards de consejos
- [ ] Blog: `ArticleView` refinado + `RecommendedArticles`
- [ ] Auth: revisar `Login` y `SignIn`, crear estado `LoginError`
- [ ] Refinamiento de Home: Hero, sección de servicios, estructura general
- [ ] Mover `LandingButton.tsx` a `ui/Button.tsx` y resolver los 4 errores de TypeScript pendientes

---

## Prioridades inmediatas (ambas)

> Estas dos tareas deben completarse **antes** de que cada una avance en sus áreas.

1. **`types/index.ts`** — Jimena lo crea, Malú lo revisa y aprueban juntas los nombres de campos
2. **`Layout.tsx`** — wrapper con NavBar + Footer para no repetirlo en cada página

---

## Notas técnicas

- El `ProfileModal` se abre desde la `NavBar` al hacer clic en el avatar del usuario
- `HappyCopstumersCards.tsx` tiene un typo en el nombre — renombrar a `HappyCustomersCards.tsx`
- `LandingButton.tsx` tiene 4 errores de TypeScript activos — resolver antes de usar como base para `ui/Button`
- Las reseñas (`ReviewForm`) solo deben mostrarse si el usuario está autenticado
- `PlaceDetail.tsx` combina: info del lugar (Google Maps) + lista de `ReviewCard` + `ReviewForm`