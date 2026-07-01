import { pgTable, uuid, text, timestamp, integer, doublePrecision } from "drizzle-orm/pg-core";

import { relations } from "drizzle-orm";

import { createInsertSchema, createSelectSchema } from "drizzle-zod";


// USERS

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  password: text("password").notNull(),
  avatarId: text("avatar_id").default("default"), // ej: "dog_1", "cat_2", "avatar_03"
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
});


// LOCATIONS (veterinarias, pet shops, parques, etc.)

export const locations = pgTable("locations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  address: text("address").notNull(),
  imageUrl: text("image_url"),
  phone: text("phone"),
schedule: text("schedule"),
  category: text("category").notNull(), // ej: "veterinaria", "petshop", "parque"
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
});


// DOCUMENTS (artículos / contenido educativo: cuidados, salud, etc.)

export const documents = pgTable("documents", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  category: text("category").notNull(), // ej: "cuidados", "salud", "alimentacion"
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),

  authorId: uuid("author_id")
    .notNull()
    .references(() => users.id),
});


// COMMENTS (sobre locations o documents, o ambos)

export const comments = pgTable("comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  content: text("content").notNull(),
  rating: integer("rating"), // opcional: para reviews de locations
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),

  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),

  locationId: uuid("location_id")
    .references(() => locations.id),

  documentId: uuid("document_id")
    .references(() => documents.id),
});


// RELATIONS

export const usersRelations = relations(users, ({ many }) => ({
  documents: many(documents),
  comments: many(comments),
}));

export const locationsRelations = relations(locations, ({ many }) => ({
  comments: many(comments),
}));

export const documentsRelations = relations(documents, ({ one, many }) => ({
  author: one(users, {
    fields: [documents.authorId],
    references: [users.id],
  }),
  comments: many(comments),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  user: one(users, {
    fields: [comments.userId],
    references: [users.id],
  }),
  location: one(locations, {
    fields: [comments.locationId],
    references: [locations.id],
  }),
  document: one(documents, {
    fields: [comments.documentId],
    references: [documents.id],
  }),
}));

// TYPES

export type Users = typeof users.$inferSelect;
export type Locations = typeof locations.$inferSelect;
export type Documents = typeof documents.$inferSelect;
export type Comments = typeof comments.$inferSelect;

// ZOD SCHEMAS

export const insertUsersSchema = createInsertSchema(users);
export const insertLocationsSchema = createInsertSchema(locations);
export const insertDocumentsSchema = createInsertSchema(documents);
export const insertCommentsSchema = createInsertSchema(comments);

export const selectUsersSchema = createSelectSchema(users);
export const selectLocationsSchema = createSelectSchema(locations);
export const selectDocumentsSchema = createSelectSchema(documents);
export const selectCommentsSchema = createSelectSchema(comments);