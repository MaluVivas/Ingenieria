import { db } from "./connection";
import { users, locations, documents, comments } from "./schema";

const seed = async () => {
  const appStage = process.env.APP_STAGE;

  if (appStage === "production") {
    console.error("ERROR: Cannot run seed script in production environment!");
    process.exit(1);
  }

  console.log(`Running seed in ${appStage} environment...`);
  console.log("starting seed...");

  try {
    console.log("deleting existing data...");
    await db.delete(comments).execute();
    await db.delete(documents).execute();
    await db.delete(locations).execute();
    await db.delete(users).execute();
    console.log("inserting seed data...");

    // USERS
    const insertedUsers = await db
      .insert(users)
      .values([
        {
          name: "Jimena Vargas",
          email: "jimena@example.com",
          phone: "88881111",
          password: "$2b$12$placeholderHashForJimena123456789012",
          avatarId: "default",
        },
        {
          name: "Malu Vivas",
          email: "malu@example.com",
          phone: "88882222",
          password: "$2b$12$placeholderHashForMalu1234567890123456",
          avatarId: "dog_1",
        },
        {
          name: "Carlos Mora",
          email: "carlos@example.com",
          phone: "88883333",
          password: "$2b$12$placeholderHashForCarlos123456789012345",
          avatarId: "cat_2",
        },
      ])
      .returning();

    // LOCATIONS
    const insertedLocations = await db
      .insert(locations)
      .values([
        // --- VETERINARY ---
        {
          name: "Veterinaria Lo Esparzano",
          description: "Clínica veterinaria con atención de emergencias y vacunación. Contamos con médicos especializados en pequeñas especies.",
          address: "San José, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400",
          phone: "2222-1111",
          schedule: "Lunes a viernes: 8am - 6pm\nSábado: 8am - 2pm\nDomingo: Cerrado",
          category: "veterinary",
        },
        {
          name: "Veterinaria Huellitas Felices",
          description: "Especialistas en cuidado felino y canino, cirugías menores y control de peso.",
          address: "Heredia, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400",
          phone: "2233-4455",
          schedule: "Lunes a sábado: 7am - 7pm\nDomingo: 9am - 1pm",
          category: "veterinary",
        },
        {
          name: "Clínica Veterinaria Nuki",
          description: "Atención integral para perros, gatos y animales exóticos. Laboratorio y radiografías en sitio.",
          address: "Alajuela, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=400",
          phone: "2441-7890",
          schedule: "Lunes a viernes: 8am - 5:30pm\nSábado: 9am - 12pm\nDomingo: Cerrado",
          category: "veterinary",
        },
        {
          name: "VetCenter Costa Rica",
          description: "Centro veterinario con laboratorio, radiografías y hospitalización las 24 horas.",
          address: "Cartago, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
          phone: "2551-0011",
          schedule: "Abierto 24 horas, los 7 días de la semana",
          category: "veterinary",
        },
        {
          name: "Veterinaria Animal Care",
          description: "Servicios preventivos, vacunas y consultas generales para toda clase de mascotas.",
          address: "Liberia, Guanacaste, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400",
          phone: "2666-3322",
          schedule: "Lunes a viernes: 8am - 6pm\nSábado: 8am - 12pm\nDomingo: Cerrado",
          category: "veterinary",
        },

        // --- RESTAURANT ---
        {
          name: "Restaurante Tabaris",
          description: "Restaurante pet-friendly con terraza exterior donde puedes disfrutar de la gastronomía costarricense junto a tu mascota.",
          address: "San José, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
          phone: "2221-5566",
          schedule: "Martes a domingo: 11am - 10pm\nLunes: Cerrado",
          category: "restaurant",
        },
        {
          name: "Betos Restaurante",
          description: "Comida casera costarricense con área al aire libre para mascotas. Ideal para almuerzos en familia.",
          address: "Alajuela, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400",
          phone: "2440-8877",
          schedule: "Lunes a sábado: 10am - 9pm\nDomingo: 10am - 6pm",
          category: "restaurant",
        },
        {
          name: "Café Patas y Tazas",
          description: "Café temático de mascotas donde puedes tomar un café junto a tu perro. Ambiente acogedor y menú variado.",
          address: "Escazú, San José, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400",
          phone: "2288-9900",
          schedule: "Todos los días: 7am - 8pm",
          category: "restaurant",
        },
        {
          name: "La Terraza Pet-Friendly",
          description: "Cocina internacional con jardín abierto apto para mascotas. Menú especial los fines de semana.",
          address: "Santa Ana, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
          phone: "2203-4455",
          schedule: "Miércoles a domingo: 12pm - 11pm\nLunes y martes: Cerrado",
          category: "restaurant",
        },
        {
          name: "Puppy Brunch",
          description: "Brunch de fin de semana donde las mascotas son bienvenidas en la terraza. Desayunos y almuerzos artesanales.",
          address: "Heredia, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400",
          phone: "2237-6611",
          schedule: "Sábado y domingo: 8am - 3pm\nResto de la semana: Cerrado",
          category: "restaurant",
        },

        // --- OTHER ---
        {
          name: "Cabinas Las Palmas",
          description: "Alquiler vacacional en la playa que acepta mascotas sin cargo adicional. Área verde privada para que tu perro corra libre.",
          address: "Jacó, Puntarenas, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400",
          phone: "2643-1122",
          schedule: "Recepción: todos los días 8am - 8pm",
          category: "other",
        },
        {
          name: "Materiales Ferrospargo",
          description: "Ferretería con área de estacionamiento amplia que permite el ingreso con mascotas en área exterior.",
          address: "Zarcero, Alajuela, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400",
          phone: "2463-5544",
          schedule: "Lunes a viernes: 7am - 5pm\nSábado: 7am - 3pm\nDomingo: Cerrado",
          category: "other",
        },
        {
          name: "Hotel Paws & Stay",
          description: "Hotel boutique que acepta mascotas de todos los tamaños, con área de juegos y servicio de grooming.",
          address: "Manuel Antonio, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
          phone: "2777-8800",
          schedule: "Recepción: 24 horas",
          category: "other",
        },
        {
          name: "Plaza del Sol",
          description: "Centro comercial con política pet-friendly en todas sus áreas exteriores y estacionamiento.",
          address: "Curridabat, San José, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400",
          phone: "2272-3300",
          schedule: "Lunes a domingo: 10am - 9pm",
          category: "other",
        },
        {
          name: "Parque Canino La Sabana",
          description: "Área recreativa para perros con zonas de juego al aire libre, agility y área de socialización.",
          address: "San José, Costa Rica",
          imageUrl: "https://images.unsplash.com/photo-1601758174493-45d0a4d3e407?w=400",
          phone: null,
          schedule: "Todos los días: 6am - 6pm",
          category: "other",
        },
      ])
      .returning();

    // DOCUMENTS
    const insertedDocuments = await db
      .insert(documents)
      .values([
        {
          title: "Entendiendo el lenguaje corporal de tu perro",
          content: "Los perros se comunican principalmente a través de su cuerpo. Conocer las señales de la cola, orejas y postura te ayuda a entender cómo se siente tu mascota y a prevenir situaciones de estrés.",
          imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400",
          category: "cuidados",
          authorId: insertedUsers[0].id,
        },
        {
          title: "Alimentación saludable para gatos adultos",
          content: "La dieta de un gato adulto debe ser rica en proteínas y baja en carbohidratos. Aprende a leer etiquetas y a elegir el alimento adecuado según la edad y nivel de actividad de tu felino.",
          imageUrl: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400",
          category: "alimentacion",
          authorId: insertedUsers[1].id,
        },
        {
          title: "Cómo elegir la veterinaria correcta",
          content: "Antes de elegir una clínica veterinaria, considera la cercanía, los servicios de emergencia disponibles, las opiniones de otros dueños de mascotas y la especialización del personal.",
          imageUrl: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400",
          category: "salud",
          authorId: insertedUsers[0].id,
        },
        {
          title: "Cuidados básicos para cachorros recién adoptados",
          content: "Los primeros días de un cachorro en su nuevo hogar son clave. Establece rutinas de alimentación, paseo y descanso, y programa su primera visita al veterinario lo antes posible.",
          imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400",
          category: "cuidados",
          authorId: insertedUsers[2].id,
        },
      ])
      .returning();

    // COMMENTS
    await db
      .insert(comments)
      .values([
        {
          content: "Excelente atención, el personal es muy amable y profesional.",
          rating: 5,
          userId: insertedUsers[1].id,
          locationId: insertedLocations[0].id,
        },
        {
          content: "Muy buena atención y precios accesibles.",
          rating: 4,
          userId: insertedUsers[2].id,
          locationId: insertedLocations[1].id,
        },
        {
          content: "Mi perro la pasa increíble aquí, totalmente recomendado.",
          rating: 5,
          userId: insertedUsers[0].id,
          locationId: insertedLocations[14].id,
        },
        {
          content: "Muy útil este artículo, no sabía que el movimiento de cola podía significar tantas cosas.",
          rating: null,
          userId: insertedUsers[2].id,
          documentId: insertedDocuments[0].id,
        },
        {
          content: "Gracias por la información, justo lo que necesitaba para mi gato nuevo.",
          rating: null,
          userId: insertedUsers[1].id,
          documentId: insertedDocuments[1].id,
        },
        {
          content: "Atención rápida en una emergencia, muy agradecido.",
          rating: 5,
          userId: insertedUsers[2].id,
          locationId: insertedLocations[3].id,
        },
      ])
      .returning();

    console.log("Seed completed successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
};

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seed script finished.");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error running seed script:", error);
      process.exit(1);
    });
}

export default seed;