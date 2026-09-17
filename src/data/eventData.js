export const EVENT_DATA = {
  celebrant: "Teresa",
  age: 50,
  date: "2026-10-10T11:00:00",
  dateFormatted: {
    dayOfWeek: "SÁBADO",
    dayNumber: "10",
    monthName: "OCTUBRE",
    year: "2026"
  },
  phrase: "Hay momentos inolvidables que se atesoran en el corazón para siempre. Por esa razón, quiero que compartas conmigo la dicha de celebrar mis 50 años de vida.",
  songTitle: "A Thousand Years (Instrumental Romance)",
  itinerary: [
    {
      id: "misa",
      time: "11:00 AM",
      title: "Santa Misa de Acción de Gracias",
      location: "Iglesia San Pedro / Parroquia de Sapallanga",
      address: "Plaza Principal, Sapallanga",
      description: "Demos gracias a Dios por la bendición de la vida y la familia.",
      mapQuery: "Iglesia San Pedro Sapallanga Huancayo",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+Principal+Sapallanga+Huancayo",
      icon: "church"
    },
    {
      id: "recepcion",
      time: "01:00 PM",
      title: "Recepción de Invitados",
      location: "Local 'Cantuta del Centro'",
      address: "Jr. San Martín, La Punta - Sapallanga",
      description: "Bienvenida cordial a todos nuestros queridos familiares y amigos.",
      mapQuery: "Jr San Martin La Punta Sapallanga Huancayo",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Jr+San+Martin+La+Punta+Sapallanga+Huancayo",
      wazeUrl: "https://waze.com/ul?q=Jr+San+Martin+Sapallanga",
      icon: "building"
    },
    {
      id: "almuerzo",
      time: "02:00 PM",
      title: "Almuerzo de Confraternidad",
      location: "Salón Principal - Cantuta del Centro",
      address: "Jr. San Martín, La Punta",
      description: "Compartiremos un exquisito banquete preparado con mucho cariño.",
      icon: "utensils"
    },
    {
      id: "agasajo",
      time: "03:00 PM",
      title: "Brindis, Agasajo & Fiesta",
      location: "Pista de Baile - Cantuta del Centro",
      address: "Música en vivo, baile y sorpresas",
      description: "Momento del brindis de honor, corte de la torta y gran celebración bailable.",
      icon: "party"
    }
  ],
  dressCode: {
    title: "Elegante",
    description: "Te invitamos a vestir con tu mejor atuendo elegante para lucir en esta noche de gala y fotos de recuerdo.",
    palette: [
      { name: "Rosa Palo / Palo Rosa", hex: "#D48B97" },
      { name: "Dorado Champán", hex: "#D4AF37" },
      { name: "Azul Noche / Marino", hex: "#1A2E40" },
      { name: "Vino / Borgoña", hex: "#6B1D2F" }
    ]
  },
  locationDetails: {
    placeName: "Cantuta del Centro",
    address: "Jr. San Martín, La Punta - Sapallanga",
    reference: "A pocas cuadras de la Alameda / Plaza de La Punta, Sapallanga",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cantuta+del+centro+Jr+San+Martin+La+Punta+Sapallanga+Huancayo",
    wazeUrl: "https://waze.com/ul?q=Jr+San+Martin+Sapallanga"
  },
  rsvp: {
    phone: "51987654321", // Número de WhatsApp para recibir mensajes
    messageDefault: "¡Hola Teresa! Confirmo con mucho gusto mi asistencia a tu celebración de 50 años este 10 de Octubre. ¡Nos vemos allá! 🎉",
    // Web App de Google Apps Script (Soporta variable de entorno en Vercel/Netlify y valor por defecto)
    googleSheetWebhookUrl: import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbxEOQP4IUrxeIAABw6xdGrMYZZVJdV12K8bv1cJhfLBHBU-7znwLhndcuKUe58031lj/exec"
  },
  photos: [
    { src: "/images/2.jpeg", title: "Celebrando la vida", caption: "50 Años de amor y alegría" },
    { src: "/images/3.jpeg", title: "Momentos inolvidables", caption: "Siempre sonriendo y compartiendo" },
    { src: "/images/1.jpeg", title: "Aventuras y gratitud", caption: "Agradecida con cada día vivido" }
  ]
};
