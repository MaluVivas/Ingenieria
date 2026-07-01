import dogSpecies from "../../../assets/img/blogDogIcon.png";
import catSpecies from "../../../assets/img/blogCatIcon.png";
import otherSpecies from "../../../assets/img/blogOtherIcon.png";
import catOwnerImg from "../../../assets/img/petOwnerCat2.png";

import houseIcon from "../../../assets/img/icons/houseIcon.png";
import foodIcon from "../../../assets/img/icons/foodIcon.png";
import doctorIcon from "../../../assets/img/icons/doctorIcon.png";
import timeIcon from "../../../assets/img/icons/timeIcon.png";
import petIcon from "../../../assets/img/icons/petIcon.png";

import dogHero from "../../../assets/img/dogHero.png";
import catHero from "../../../assets/img/catHero.png";
import othersHero from "../../../assets/img/othersHero.png";

import SmallPetCareBasics from "../../../assets/img/SmallPetCareBasics.jpg";
import RabbitCareBasics from "../../../assets/img/RabbitCareBasics.jpg";
import MaintainingaHealthyAquarium from "../../../assets/img/MaintainingaHealthyAquarium.jpg";
import CaringforPetBirds from "../../../assets/img/CaringforPetBirds.jpg";
import BasicRabbitCare from "../../../assets/img/BasicRabbitCare.jpg";
import TemperatureAndHabitatControl from "../../../assets/img/TemperatureAndHabitatControl.jpg";
import HamsterCareBasics from "../../../assets/img/HamsterCareBasics.jpg";
import ReptileCareEssentials from "../../../assets/img/ReptileCareEssentials.jpg";
import GuineaPigCare from "../../../assets/img/GuineaPigCare.jpg";
import SafeHandlingForSmallPets from "../../../assets/img/SafeHandlingForSmallPets.jpg";
import FeedingSmallAnimals from "../../../assets/img/FeedingSmallAnimals.jpg";
import CleaningPetHabitats from "../../../assets/img/CleaningPetHabitats.jpg";

import UnderstandingCatBehavior from "../../../assets/img/UnderstandingCatBehavior.jpg";
import CatCareBasics from "../../../assets/img/CatCareBasics.jpg";
import IndoorEnrichmentIdeas from "../../../assets/img/IndoorEnrichmentIdeas.jpg";
import LitterBoxCare from "../../../assets/img/LitterBoxCare.jpg";
import CatGroomingBasics from "../../../assets/img/CatGroomingBasics.jpg";
import CatHydrationTips from "../../../assets/img/CatHydrationTips.jpg";
import IntroducingaNewCat from "../../../assets/img/IntroducingaNewCat.jpg";
import CatScratchingNeeds from "../../../assets/img/CatScratchingNeeds.jpg";
import SeniorCatCare from "../../../assets/img/SeniorCatCare.jpg";

import PreventingHeatstroke from "../../../assets/img/PreventingHeatstroke.jpg";
import DailyExerciseNeeds from "../../../assets/img/DailyExerciseNeeds.jpg";
import UnderstandingDogAnxiety from "../../../assets/img/UnderstandingDogAnxiety.jpg";
import ToxicFoodsforDogs from "../../../assets/img/Toxic Foods for Dogs.jpg";
import DogGroomingBasics from "../../../assets/img/DogGroomingBasics.jpg";
import PuppyTrainingTips from "../../../assets/img/PuppyTrainingTips.jpg";
import DogDentalCare from "../../../assets/img/DogDentalCare.jpg";
import SafeWalksforDogs from "../../../assets/img/SafeWalksforDogs.jpg";
import DogSocialization from "../../../assets/img/DogSocialization.jpg";
import SeniorDogCare from "../../../assets/img/SeniorDogCare.jpg";

export const blogImages = {
  catOwnerImg,
};

export const speciesHeroImages = {
  dog: dogHero,
  cat: catHero,
  others: othersHero,
};

export const species = [
  {
    name: "Dog",
    image: dogSpecies,
    link: "/blog/dog",
  },
  {
    name: "Cat",
    image: catSpecies,
    link: "/blog/cat",
  },
  {
    name: "Others",
    image: otherSpecies,
    link: "/blog/others",
  },
];

export const ownerTips = [
  {
    icon: houseIcon,
    title: "1. Prepare Your Home",
    description: "Make your space safe, clean and comfortable for your new pet.",
  },
  {
    icon: foodIcon,
    title: "2. Get Essentials",
    description: "Gather the basic food, water, bed, toys and hygiene supplies.",
  },
  {
    icon: doctorIcon,
    title: "3. Find a Vet",
    description: "Choose a trusted veterinarian and schedule a first visit.",
  },
  {
    icon: timeIcon,
    title: "4. Be Patient",
    description: "Give your pet time to adjust to their new home and routine.",
  },
  {
    icon: houseIcon,
    title: "5. Create a Routine",
    description: "Set regular times for meals, walks and rest to build stability.",
  },
  {
    icon: petIcon,
    title: "6. Build a Bond",
    description: "Spend quality time, show love and build trust every day.",
  },
];

export const articles = [
  /* DOG ARTICLES */
  {
    slug: "toxic-foods-for-dogs",
    species: "dog",
    title: "Toxic Foods for Dogs",
    image: ToxicFoodsforDogs,
    description:
      "Some everyday foods can be dangerous for dogs, like chocolate, grapes, and onions. Knowing what to avoid helps prevent serious health problems.",
    content: [
      "Some everyday foods can be dangerous for dogs and may cause digestive problems, poisoning, or serious health complications. Foods that are safe for humans are not always safe for pets, so owners should be careful before offering leftovers or snacks from the table.",
      "Chocolate, grapes, raisins, onions, garlic, alcohol, caffeine, and xylitol are examples of foods that should be avoided. These ingredients can affect the digestive system, nervous system, liver, kidneys, or general health of the dog, depending on the amount consumed and the size of the animal.",
      "Prevention is the safest option. Keep unsafe foods out of reach, check ingredient labels, and teach family members which foods are not appropriate for dogs. If your dog eats something potentially toxic, contact a veterinarian as soon as possible instead of waiting for symptoms to appear.",
    ],
  },
  {
    slug: "understanding-dog-anxiety",
    species: "dog",
    title: "Understanding Dog Anxiety",
    image: UnderstandingDogAnxiety,
    description:
      "Dogs can experience anxiety due to separation, noise, or changes in routine. Identifying the signs early helps you support their emotional well-being.",
    content: [
      "Dogs can experience anxiety for many reasons, including separation from their owner, loud noises, unfamiliar spaces, travel, new pets, or sudden changes in routine. Anxiety is not simply bad behavior; it is often a sign that the dog feels unsafe, confused, or overwhelmed.",
      "Some common signs include excessive barking, hiding, pacing, shaking, destructive behavior, loss of appetite, drooling, or constantly following the owner around the house. These behaviors may become stronger when the dog is left alone or exposed to stressful situations.",
      "Supporting an anxious dog requires patience and consistency. A stable routine, safe resting areas, enrichment toys, gradual exposure, and positive reinforcement can help. If anxiety becomes intense or affects daily life, a veterinarian or professional trainer can guide the best approach.",
    ],
  },
  {
    slug: "daily-exercise-needs",
    species: "dog",
    title: "Daily Exercise Needs",
    image: DailyExerciseNeeds,
    description:
      "Regular exercise keeps your dog healthy, active, and mentally stimulated. The amount varies depending on breed and age.",
    content: [
      "Daily exercise is important for a dog’s physical and mental health. It helps maintain a healthy weight, supports muscle strength, improves mood, and reduces boredom-related behaviors such as chewing, digging, or excessive barking.",
      "The amount of exercise depends on the dog’s breed, age, size, energy level, and health condition. Some dogs need long walks, running, and active play, while others may need shorter walks, gentle games, or calm movement throughout the day.",
      "Exercise should always be adapted to the dog’s needs. Puppies, senior dogs, and dogs with health conditions may require special routines. Walks, training games, sniffing activities, and safe outdoor play can all be part of a balanced daily routine.",
    ],
  },
  {
    slug: "preventing-heatstroke",
    species: "dog",
    title: "Preventing Heatstroke",
    image: PreventingHeatstroke,
    description:
      "Dogs are sensitive to high temperatures and can overheat quickly. Provide water, shade, and avoid walks during peak heat hours.",
    content: [
      "Dogs can overheat quickly, especially during hot weather, intense physical activity, or when they stay in places without enough ventilation. Unlike humans, dogs do not sweat in the same way, so they depend heavily on panting to regulate their body temperature.",
      "To reduce the risk of heatstroke, provide fresh water, shade, and avoid walking your dog during the hottest hours of the day. Hot pavement can also burn paw pads, so it is better to walk early in the morning or later in the evening.",
      "Warning signs of heatstroke may include excessive panting, drooling, weakness, vomiting, confusion, or collapse. If you suspect heatstroke, move the dog to a cooler place and contact a veterinarian immediately, because fast attention can save the dog’s life.",
    ],
  },
  {
    slug: "dog-grooming-basics",
    species: "dog",
    title: "Dog Grooming Basics",
    image: DogGroomingBasics,
    description:
      "Regular grooming helps keep your dog clean, comfortable, and healthy while preventing skin and coat problems.",
    content: [
      "Grooming is more than keeping a dog looking nice; it is an important part of their general health and comfort. Regular grooming helps maintain the skin, coat, ears, nails, and overall hygiene in good condition.",
      "Brushing removes loose hair, dirt, and tangles, especially in dogs with long or dense coats. It also gives owners the chance to observe the skin and notice irritation, redness, small wounds, fleas, ticks, or unusual lumps before they become bigger problems.",
      "Bathing, nail trimming, and ear cleaning should be done according to each dog’s needs. A good grooming routine should be calm and positive, especially for nervous dogs, so they can gradually associate grooming with trust and comfort.",
    ],
  },
  {
    slug: "puppy-training-tips",
    species: "dog",
    title: "Puppy Training Tips",
    image: PuppyTrainingTips,
    description:
      "Early training helps puppies learn routines, social skills, and basic commands in a positive way.",
    content: [
      "Puppy training should begin with patience, consistency, and positive reinforcement. Puppies are learning how to live in a new environment, so they need clear routines, gentle guidance, and repeated practice.",
      "Basic commands such as sit, stay, come, and leave it help build communication between the owner and the puppy. These commands are also useful for safety, especially during walks or when the puppy is around other animals or people.",
      "Short training sessions are usually more effective than long ones because puppies can lose attention quickly. Training should also include bathroom routines, bite control, socialization, and calm behavior at home.",
    ],
  },
  {
    slug: "dog-dental-care",
    species: "dog",
    title: "Dog Dental Care",
    image: DogDentalCare,
    description:
      "Dental care is essential to prevent bad breath, gum problems, and other health issues in dogs.",
    content: [
      "Dental care is an essential part of a dog’s health because oral problems can affect comfort, appetite, and general well-being. Bad breath, plaque, swollen gums, or difficulty chewing may be signs that a dog needs dental attention.",
      "Brushing your dog’s teeth with pet-safe toothpaste can help reduce plaque and tartar. Human toothpaste should not be used because it may contain ingredients that are not safe for pets.",
      "Dental treats, chew toys, and veterinary-approved products can support oral hygiene, but regular veterinary checkups are also important. Treating oral problems on time can prevent pain, tooth loss, infections, and future complications.",
    ],
  },
  {
    slug: "safe-walks-for-dogs",
    species: "dog",
    title: "Safe Walks for Dogs",
    image: SafeWalksforDogs,
    description:
      "Safe walks require proper equipment, hydration, and attention to your dog’s behavior and surroundings.",
    content: [
      "Walks are important for exercise, exploration, socialization, and mental stimulation. A safe walk allows dogs to enjoy their environment while staying protected from risks.",
      "Using a comfortable collar or harness is important because poor equipment can cause discomfort or make it easier for the dog to escape. The leash should allow control without hurting the animal or limiting movement too much.",
      "Owners should pay attention to weather, walking surfaces, traffic, other animals, and the dog’s body language. Carrying water, avoiding hot pavement, and respecting the dog’s limits can make walks safer and more enjoyable.",
    ],
  },
  {
    slug: "dog-socialization",
    species: "dog",
    title: "Dog Socialization",
    image: DogSocialization,
    description:
      "Socialization helps dogs feel more confident around people, animals, places, and new situations.",
    content: [
      "Socialization helps dogs feel more confident around people, animals, sounds, places, and new situations. It is especially important during puppyhood, but adult dogs can also benefit from gradual and positive exposure.",
      "A well-socialized dog is more likely to stay calm in different environments, such as parks, veterinary clinics, streets, or homes with visitors. Positive experiences can reduce fear and improve behavior over time.",
      "Socialization should never mean forcing a dog into stressful interactions. Each dog has its own personality, so exposure should be gradual, controlled, and paired with positive reinforcement to build trust.",
    ],
  },
  {
    slug: "senior-dog-care",
    species: "dog",
    title: "Senior Dog Care",
    image: SeniorDogCare,
    description:
      "Older dogs need special attention, including gentle exercise, regular checkups, and comfortable routines.",
    content: [
      "Senior dogs often need special attention because their bodies and routines change with age. They may become less active, sleep more, move slowly, or need extra support during daily activities.",
      "Regular veterinary checkups are very important because older dogs can develop conditions such as arthritis, dental disease, vision problems, hearing loss, or changes in weight and appetite.",
      "Comfort at home is also important. Soft beds, easy access to food and water, non-slip surfaces, gentle exercise, and calm spaces can improve the quality of life of senior dogs.",
    ],
  },

  /* CAT ARTICLES */
  {
    slug: "cat-care-basics",
    species: "cat",
    title: "Cat Care Basics",
    image: CatCareBasics,
    description:
      "Learn basic care tips to keep your cat healthy, comfortable, and safe at home.",
    content: [
      "Cats need a clean, safe, and calm environment to feel comfortable. Their basic care includes fresh water, appropriate food, a clean litter box, regular veterinary attention, and spaces where they can rest without being disturbed.",
      "A cat’s environment should also support natural behavior. Toys, scratching posts, climbing areas, hiding spaces, and window views can help cats stay active and mentally stimulated, especially if they live indoors.",
      "A predictable routine can reduce stress and help cats feel secure. Sudden changes at home, new pets, loud noises, or unfamiliar people may affect their behavior, so owners should introduce changes slowly and respectfully.",
    ],
  },
  {
    slug: "understanding-cat-behavior",
    species: "cat",
    title: "Understanding Cat Behavior",
    image: UnderstandingCatBehavior,
    description:
      "Cats communicate through body language, sounds, and habits. Learning these signs helps improve your relationship with them.",
    content: [
      "Cats communicate through body posture, tail movement, ear position, eye contact, sounds, and daily habits. Understanding these signs can help owners recognize when a cat feels relaxed, playful, afraid, stressed, or uncomfortable.",
      "Changes in behavior are important to observe. Hiding, avoiding contact, sudden aggression, excessive vocalization, or changes in eating and litter box habits may indicate stress or health problems.",
      "Building a good relationship with a cat requires patience and respect. Giving them control over interactions, offering safe spaces, and observing their limits can help increase trust and reduce unnecessary stress.",
    ],
  },
  {
    slug: "indoor-enrichment-ideas",
    species: "cat",
    title: "Indoor Enrichment Ideas",
    image: IndoorEnrichmentIdeas,
    description:
      "Indoor cats need stimulation to stay active and happy. Toys, climbing spaces, and playtime help prevent boredom.",
    content: [
      "Indoor cats need mental and physical stimulation to stay healthy and happy. Without enrichment, they may become bored, inactive, stressed, or develop unwanted behaviors such as scratching furniture or excessive meowing.",
      "Toys, scratching posts, tunnels, climbing furniture, puzzle feeders, and window views can make the home environment more interesting. These elements allow cats to explore, hunt, climb, hide, and play in safe ways.",
      "Daily playtime is especially important because it strengthens the bond between the cat and the owner. Short sessions with interactive toys can help cats release energy and express natural hunting behavior.",
    ],
  },
  {
    slug: "litter-box-care",
    species: "cat",
    title: "Litter Box Care",
    image: LitterBoxCare,
    description:
      "A clean and accessible litter box helps prevent stress and supports good hygiene for your cat.",
    content: [
      "Cats prefer clean, accessible, and quiet litter boxes. If the litter box is dirty, too small, difficult to reach, or placed in a stressful area, the cat may avoid using it.",
      "The litter box should be cleaned frequently, and the type of litter should be comfortable for the cat. Some cats are sensitive to strong scents, covered boxes, or sudden changes in litter material.",
      "Changes in litter box habits can be a sign of stress or health issues. If a cat starts urinating outside the box, straining, or visiting the box too often, veterinary attention may be necessary.",
    ],
  },
  {
    slug: "cat-grooming-basics",
    species: "cat",
    title: "Cat Grooming Basics",
    image: CatGroomingBasics,
    description:
      "Regular brushing, nail care, and coat observation help keep cats comfortable and healthy.",
    content: [
      "Cats groom themselves naturally, but many still benefit from regular brushing and coat care. This is especially important for long-haired cats, senior cats, or cats that have difficulty grooming themselves.",
      "Brushing helps remove loose hair, reduce hairballs, and prevent tangles. It also gives owners the opportunity to check the skin for irritation, parasites, wounds, or unusual changes.",
      "Grooming should be introduced gently so the cat does not feel forced or stressed. Nail care, ear observation, and regular coat checks can be part of a calm routine that supports comfort and health.",
    ],
  },
  {
    slug: "cat-hydration-tips",
    species: "cat",
    title: "Cat Hydration Tips",
    image: CatHydrationTips,
    description:
      "Good hydration supports kidney and urinary health. Water fountains and wet food can help increase intake.",
    content: [
      "Hydration is very important for cats, especially because many cats do not drink large amounts of water on their own. Good hydration supports kidney function, urinary health, digestion, and overall well-being.",
      "Some cats prefer moving water, so a water fountain can encourage them to drink more. Clean bowls, fresh water, and placing water away from the litter box can also help improve water intake.",
      "Wet food can contribute to daily hydration because it contains more moisture than dry food. If a cat shows changes in urination, drinking habits, appetite, or energy levels, a veterinarian should evaluate the situation.",
    ],
  },
  {
    slug: "introducing-a-new-cat",
    species: "cat",
    title: "Introducing a New Cat",
    image: IntroducingaNewCat,
    description:
      "Introducing a new cat takes patience, space, and gradual contact to reduce stress and conflict.",
    content: [
      "Introducing a new cat should be done gradually because cats are territorial and may feel stressed by sudden changes. A slow introduction helps reduce fear, conflict, and defensive behavior.",
      "Separate spaces are useful at the beginning. Scent exchange, feeding near a closed door, and short supervised meetings can help both cats become familiar with each other without feeling threatened.",
      "Patience is key because some cats adapt quickly while others need more time. Owners should observe body language and avoid forcing interaction, allowing the cats to build confidence at their own pace.",
    ],
  },
  {
    slug: "cat-scratching-needs",
    species: "cat",
    title: "Cat Scratching Needs",
    image: CatScratchingNeeds,
    description:
      "Scratching is a natural behavior that helps cats stretch, mark territory, and maintain their claws.",
    content: [
      "Scratching is a normal and healthy behavior for cats. It helps them stretch their muscles, maintain their claws, release stress, and mark territory through scent and visual marks.",
      "Providing scratching posts, cardboard scratchers, or vertical and horizontal surfaces can protect furniture while supporting natural behavior. Different cats may prefer different textures and positions.",
      "Instead of punishing scratching, owners should redirect the behavior to appropriate objects. Placing scratchers near resting areas or favorite furniture can make them more attractive and useful for the cat.",
    ],
  },
  {
    slug: "senior-cat-care",
    species: "cat",
    title: "Senior Cat Care",
    image: SeniorCatCare,
    description:
      "Older cats need regular health checks, comfortable spaces, and routines adapted to their changing needs.",
    content: [
      "Senior cats may need changes in diet, activity, environment, and medical care. As cats age, they may move less, sleep more, lose muscle, or develop changes in appetite, behavior, or litter box habits.",
      "Regular veterinary visits are important because age-related conditions can appear gradually. Dental disease, kidney problems, arthritis, vision changes, and thyroid issues are some examples that may affect older cats.",
      "Comfortable spaces can improve quality of life. Soft beds, easy access to food and water, low-entry litter boxes, gentle play, and quiet resting areas help senior cats feel safe and supported.",
    ],
  },

  /* OTHER PETS ARTICLES */
  {
    slug: "rabbit-care-basics",
    species: "others",
    title: "Rabbit Care Basics",
    image: RabbitCareBasics,
    description:
      "Rabbits need proper food, space, hygiene, and gentle handling to stay healthy and comfortable.",
    content: [
      "Rabbits need a safe space, proper food, clean water, and regular hygiene care. They are active and curious animals, so their environment should allow them to move, explore, rest, and hide when they need to feel secure.",
      "A rabbit’s diet should include hay as an essential part of daily feeding, along with appropriate fresh foods and veterinarian-approved pellets. Hay supports digestion and helps maintain healthy teeth.",
      "Gentle handling is important because rabbits can be sensitive and may become stressed if they are held incorrectly. Owners should learn how to support the body properly and avoid sudden movements or loud environments.",
    ],
  },
  {
    slug: "small-pet-care-basics",
    species: "others",
    title: "Small Pet Care Basics",
    image: SmallPetCareBasics,
    description:
      "Different pets have different care needs. Learn how to provide a safe and appropriate environment.",
    content: [
      "Pets such as rabbits, birds, reptiles, hamsters, guinea pigs, and fish have very different care needs. Their diet, housing, temperature, hygiene, and handling requirements may vary greatly depending on the species.",
      "Before adopting an exotic or less common pet, owners should learn about the animal’s natural behavior and basic needs. A habitat that is too small, too cold, too hot, or poorly maintained can affect health and comfort.",
      "Good care begins with preparation. Researching the species, choosing the correct supplies, and consulting a veterinarian or specialist when needed can help prevent common mistakes and improve the pet’s quality of life.",
    ],
  },
  {
    slug: "maintaining-a-healthy-aquarium",
    species: "others",
    title: "Maintaining a Healthy Aquarium",
    image: MaintainingaHealthyAquarium,
    description:
      "Fish depend on clean water and stable conditions to survive. Regular tank maintenance and proper feeding are essential.",
    content: [
      "Fish depend on stable water conditions to stay healthy. Temperature, filtration, oxygen levels, pH, and water cleanliness can all affect their well-being, so aquariums require regular observation and care.",
      "Regular water testing, partial water changes, and proper filtration are important parts of aquarium maintenance. Overfeeding should be avoided because leftover food can pollute the water and create unhealthy conditions.",
      "A healthy aquarium also depends on choosing compatible fish and providing enough space. Sudden changes in water quality or overcrowding can cause stress, illness, and poor survival, so maintenance should be consistent.",
    ],
  },
  {
    slug: "caring-for-pet-birds",
    species: "others",
    title: "Caring for Pet Birds",
    image: CaringforPetBirds,
    description:
      "Birds require mental stimulation, a proper diet, and social interaction. A clean cage and space to move are important.",
    content: [
      "Pet birds need a clean cage, proper food, fresh water, and daily mental stimulation. Birds are intelligent and social animals, so they can become stressed or bored if they do not have enough interaction or enrichment.",
      "Toys, perches, safe movement space, and opportunities to explore can support natural behavior. The cage should be cleaned regularly, and food and water containers should be kept hygienic.",
      "Social interaction is important for many birds, but handling should be gentle and respectful. Changes in appetite, feathers, vocalization, or activity may indicate stress or illness and should be taken seriously.",
    ],
  },
  {
    slug: "basic-rabbit-care",
    species: "others",
    title: "Basic Rabbit Care",
    image: BasicRabbitCare,
    description:
      "Rabbits need a balanced diet, space to move, and gentle handling. Regular care keeps them healthy and active.",
    content: [
      "Rabbits need daily care that includes clean water, a hay-based diet, safe housing, and opportunities to move. They are active animals and should not spend all day confined in a small cage.",
      "Their teeth grow continuously, so chewing hay and appropriate materials is important for dental health. A lack of fiber can affect digestion and cause serious health problems.",
      "Rabbits are sensitive to stress and should be handled calmly. Providing hiding spaces, quiet areas, and gentle interaction can help them feel safe and build trust with their owner.",
    ],
  },
  {
    slug: "temperature-and-habitat-control",
    species: "others",
    title: "Temperature and Habitat Control",
    image: TemperatureAndHabitatControl,
    description:
      "Small animals are sensitive to temperature and environmental changes. Keeping a stable habitat is key.",
    content: [
      "Small animals and exotic pets can be very sensitive to temperature, humidity, lighting, and environmental changes. A habitat that is too hot, too cold, or too humid can quickly affect their health.",
      "The correct conditions depend on the species. Reptiles may need heat lamps and specific humidity levels, while small mammals may need bedding, ventilation, and protection from drafts or direct sun.",
      "Monitoring the habitat regularly helps prevent problems. Owners should use appropriate thermometers, clean the space often, and adjust the environment according to the animal’s specific needs.",
    ],
  },
  {
    slug: "hamster-care-basics",
    species: "others",
    title: "Hamster Care Basics",
    image: HamsterCareBasics,
    description:
      "Hamsters need proper bedding, a safe enclosure, exercise opportunities, and gentle interaction.",
    content: [
      "Hamsters need a secure enclosure with appropriate bedding, hiding spaces, fresh water, and safe chewing materials. Their habitat should allow them to dig, explore, and rest comfortably.",
      "Exercise wheels, tunnels, and enrichment items support natural behavior and help prevent boredom. The wheel should be the correct size so the hamster can run without bending its back uncomfortably.",
      "Hamsters are small and fragile, so handling should be gentle and gradual. Owners should avoid waking them suddenly, because they are often more active at night and may become stressed if disturbed.",
    ],
  },
  {
    slug: "reptile-care-essentials",
    species: "others",
    title: "Reptile Care Essentials",
    image: ReptileCareEssentials,
    description:
      "Reptiles need specific lighting, temperature, humidity, and diet according to their species.",
    content: [
      "Reptiles have specific environmental needs that must match their species. Temperature, humidity, lighting, enclosure size, and diet are all essential factors in keeping reptiles healthy.",
      "Many reptiles depend on external heat sources to regulate body temperature. Proper lighting, including UVB when required, can support normal behavior, digestion, and bone health.",
      "Reptile care should be researched carefully before adoption. Incorrect habitat conditions or feeding can lead to illness, so specialized veterinary guidance is recommended when owners are unsure.",
    ],
  },
  {
    slug: "guinea-pig-care",
    species: "others",
    title: "Guinea Pig Care",
    image: GuineaPigCare,
    description:
      "Guinea pigs are social animals that need companionship, hay, vitamin C, and space to move.",
    content: [
      "Guinea pigs are social animals and often benefit from companionship with another compatible guinea pig. They need a spacious, clean enclosure where they can move, hide, eat, and rest comfortably.",
      "Their diet should include hay, fresh water, vitamin C, and appropriate vegetables. Vitamin C is especially important because guinea pigs cannot produce enough on their own.",
      "Regular cleaning, gentle handling, and daily observation are important. Changes in appetite, weight, activity, or breathing should be evaluated quickly because small animals can become ill rapidly.",
    ],
  },
  {
    slug: "safe-handling-small-pets",
    species: "others",
    title: "Safe Handling for Small Pets",
    image: SafeHandlingForSmallPets,
    description:
      "Small pets can be fragile, so gentle handling helps prevent stress, fear, and injuries.",
    content: [
      "Small pets can be fragile, so handling should always be gentle, calm, and secure. Sudden movements, squeezing, or lifting them incorrectly can cause stress, fear, or injuries.",
      "Each species has different handling needs. Rabbits need body support, birds may require careful hand training, and hamsters or guinea pigs should be held close to a safe surface to prevent falls.",
      "Owners should allow pets to become familiar with them gradually. Positive interactions, patience, and respecting the animal’s limits help build trust and make handling safer over time.",
    ],
  },
  {
    slug: "feeding-small-animals",
    species: "others",
    title: "Feeding Small Animals",
    image: FeedingSmallAnimals,
    description:
      "Different small animals need different diets. Understanding their food needs helps prevent health problems.",
    content: [
      "Different small animals have different nutritional needs, so there is no single diet that works for every species. Some animals require hay, while others need seeds, pellets, insects, fresh vegetables, or specialized foods.",
      "Incorrect feeding can cause digestive problems, obesity, dental disease, or nutritional deficiencies. Owners should avoid giving random human foods without checking whether they are safe for that specific animal.",
      "A good feeding routine includes fresh water, clean dishes, correct portions, and species-appropriate food. When in doubt, a veterinarian or exotic animal specialist can help create a safe diet plan.",
    ],
  },
  {
    slug: "cleaning-pet-habitats",
    species: "others",
    title: "Cleaning Pet Habitats",
    image: CleaningPetHabitats,
    description:
      "Clean habitats reduce odors, stress, and disease risks for small animals, birds, fish, and reptiles.",
    content: [
      "Clean habitats are essential for preventing illness, odors, parasites, and stress. Food remains, waste, dirty bedding, and contaminated water should be removed regularly to keep the environment healthy.",
      "The cleaning routine depends on the species and type of enclosure. Small mammals may need bedding changes, birds need cage cleaning, reptiles need habitat sanitation, and aquariums require water maintenance.",
      "Cleaning should be done with safe products and proper care. Strong chemicals, poor rinsing, or sudden habitat changes can harm pets, so owners should choose cleaning methods appropriate for each animal.",
    ],
  },
];