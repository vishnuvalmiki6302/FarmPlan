/**
 * Opens WhatsApp chat with a pre-filled message.
 * @param {string} message - The pre-filled message to send.
 */
export function openWhatsApp(message = "Hi, I want to book a Farm Layout Design.") {
  const phone = "919392699963"; // Replace with actual WhatsApp number
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Generates a booking message for a specific crop/layout.
 * @param {string} layoutName - Name of the layout design.
 * @returns {string}
 */
export function getBookingMessage(layoutName) {
  return `Hi, I want to book a ${layoutName} Design. Please share more details.`;
}
