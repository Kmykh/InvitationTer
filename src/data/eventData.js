export const EVENT_DATA = {
  celebrant: "Teresa Isabel",
  shortCelebrant: "Teresa",
  age: 50,
  date: "2026-10-10T12:00:00",
  dateFormatted: {
    dayOfWeek: "SÁBADO",
    dayNumber: "10",
    monthName: "OCTUBRE",
    time: "12:00 P.M.",
    year: "2026"
  },
  thanksgiving: "Le damos gracias a Dios por concedernos la dicha de tenerte entre nosotros y nuestro agradecimiento por todo el amor, comprensión y sacrificio que nos has brindado con mucho cariño en todos estos años.",
  hosts: "Hijos, esposo y familiares",
  invitationHeading: "Tienen el agrado de invitar a Ud. y familia a la misa de salud y a la fiesta que ofrecen con motivo de celebrar:",
  phrase: "Le damos gracias a Dios por concedernos la dicha de tenerte entre nosotros y nuestro agradecimiento por todo el amor, comprensión y sacrificio que nos has brindado con mucho cariño en todos estos años.",
  songTitle: "A Thousand Years (Instrumental Romance)",
  itinerary: [
    {
      id: "misa",
      time: "12:00 PM",
      title: "Santa Misa de Salud",
      location: "Parroquia San Jacinto - La Punta",
      address: "Plaza Principal, La Punta - Sapallanga",
      description: "Misa de salud y acción de gracias ofrecida por sus hijos, esposo y familiares.",
      mapQuery: "Parroquia San Jacinto La Punta Sapallanga Huancayo",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Parroquia+San+Jacinto+La+Punta+Sapallanga+Huancayo",
      icon: "church"
    },
    {
      id: "recepcion",
      time: "01:30 PM",
      title: "Recepción de Invitados",
      location: "Local de recepciones “La Cantuta del Centro”",
      address: "Jr. San Martín, La Punta - Sapallanga",
      reference: "Ref. paradero La Oyada a 2 cuadras subiendo hacia Mallqui",
      description: "Bienvenida cordial a todos nuestros queridos familiares y amigos con brindis de honor.",
      mapQuery: "Cantuta del Centro Jr San Martin La Punta Sapallanga Huancayo",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Cantuta+del+centro+Jr+San+Martin+La+Punta+Sapallanga+Huancayo",
      wazeUrl: "https://waze.com/ul?q=Jr+San+Martin+Sapallanga",
      icon: "building"
    },
    {
      id: "almuerzo",
      time: "02:30 PM",
      title: "Almuerzo de Confraternidad",
      location: "Salón Principal - La Cantuta del Centro",
      address: "Jr. San Martín, La Punta - Sapallanga",
      description: "Compartiremos un banquete tradicional preparado con mucho amor para celebrar los 50 años.",
      icon: "utensils"
    },
    {
      id: "fiesta",
      time: "04:00 PM",
      title: "Gran Fiesta Bailable en Vivo",
      location: "Pista de Gala - La Cantuta del Centro",
      address: "Música en vivo hasta las últimas consecuencias",
      description: "Presentación estelar de la Agrupación Reyes Latinos y la Orquesta Internacional Fusión Juvenil Son Class Perú.",
      icon: "party"
    }
  ],
  musicians: [
    {
      id: "reyes-latinos",
      name: "Agrupación Reyes Latinos",
      subtitle: "Música y Espectáculo en Vivo",
      badge: "Música Tropical & Fiesta",
      image: "/images/reyes-latinos.jpg"
    },
    {
      id: "son-class",
      name: "Orquesta Fusión Juvenil Son Class Perú",
      director: "Uber Sedano Flores",
      subtitle: "Orquesta Internacional",
      badge: "Orquesta en Vivo",
      image: "/images/son-class.jpg"
    }
  ],
  dressCode: {
    title: "Elegante",
    description: "Te invitamos a vestir con tu mejor atuendo elegante para lucir en esta celebración de gala y fotos de recuerdo.",
    palette: [
      { name: "Rosa Palo / Palo Rosa", hex: "#D48B97" },
      { name: "Dorado Champán", hex: "#D4AF37" },
      { name: "Azul Noche / Marino", hex: "#1A2E40" },
      { name: "Vino / Borgoña", hex: "#6B1D2F" }
    ]
  },
  locationDetails: {
    placeName: "Local de recepciones “La Cantuta del Centro”",
    address: "Jr. San Martín - La Punta - Sapallanga",
    reference: "Ref. paradero La Oyada a 2 cuadras subiendo hacia Mallqui",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cantuta+del+centro+Jr+San+Martin+La+Punta+Sapallanga+Huancayo",
    wazeUrl: "https://waze.com/ul?q=Jr+San+Martin+Sapallanga"
  },
  churchDetails: {
    placeName: "Parroquia San Jacinto - La Punta",
    time: "12:00 P.M.",
    address: "La Punta - Sapallanga",
    reference: "Misa de salud y acción de gracias",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Parroquia+San+Jacinto+La+Punta+Sapallanga+Huancayo"
  },
  rsvp: {
    phone: "51987654321", // Número de WhatsApp para recibir mensajes
    messageDefault: "¡Hola Teresa Isabel! Confirmo con mucho gusto mi asistencia a tu celebración de 50 años este sábado 10 de Octubre en La Punta - Sapallanga. ¡Nos vemos allá!",
    // Web App de Google Apps Script (Soporta variable de entorno en Vercel/Netlify y valor por defecto)
    googleSheetWebhookUrl: import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbxEOQP4IUrxeIAABw6xdGrMYZZVJdV12K8bv1cJhfLBHBU-7znwLhndcuKUe58031lj/exec"
  },
  photos: [
    { 
      src: "/images/portada.jpeg", 
      title: "Teresa Isabel", 
      caption: "Celebrando mis 50 Años con amor, gratitud y alegría de vivir",
      isCover: true
    },
    { 
      src: "/images/1.jpeg", 
      title: "Momentos Inolvidables", 
      caption: "Sonrisas y recuerdos que se atesoran por siempre en el corazón" 
    },
    { 
      src: "/images/2.jpeg", 
      title: "Amor & Familia", 
      caption: "El regalo y la bendición más grande de mi vida" 
    },
    { 
      src: "/images/3.jpeg", 
      title: "Gratitud a Dios", 
      caption: "Agradecida por cada día y cada paso en este hermoso camino" 
    },
    { 
      src: "/images/4.jpeg", 
      title: "Alegría Compartida", 
      caption: "Celebrando los momentos más felices con quienes más amo" 
    },
    { 
      src: "/images/5.jpeg", 
      title: "Paz & Plenitud", 
      caption: "50 años coleccionando instantes dorados que nunca se olvidan" 
    },
    { 
      src: "/images/6.jpeg", 
      title: "Recuerdos de Oro", 
      caption: "Huellas de cariño y sabiduría grabadas con amor" 
    },
    { 
      src: "/images/7.jpeg", 
      title: "Dicha & Celebración", 
      caption: "Una vida bendecida, lista para seguir festejando con alegría" 
    }
  ]
};
