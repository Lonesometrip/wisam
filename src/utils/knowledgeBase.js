/**
 * Utility functions for managing the knowledge base
 */

// Initial knowledge base with website information
// This would ideally be generated from your website content
export const initialKnowledgeBase = [
  {
    title: 'About Us',
    content: 'We are a premium transportation and chauffeur service offering luxury vehicles including Mercedes S-Class, BMW 7 Series, and Mercedes V-Class. Our services include chauffeur service, airport transfers, and VIP services.'
  },
  {
    title: 'Carpool Services',
    content: 'We offer a range of luxury vehicles including Mercedes S-Class, BMW 7 Series, and Mercedes V-Class. Each vehicle comes with a professional chauffeur and is maintained to the highest standards.'
  },
  {
    title: 'Mercedes S-Class',
    content: 'The Mercedes S-Class is our premium sedan offering. It features luxurious leather seats, climate control, and a smooth, comfortable ride. Ideal for business travel and special occasions.'
  },
  {
    title: 'BMW 7 Series',
    content: 'The BMW 7 Series combines luxury with sporty performance. It features spacious interiors, advanced technology, and a powerful engine. Perfect for executives and VIP clients.'
  },
  {
    title: 'Mercedes V-Class',
    content: 'The Mercedes V-Class is our premium van offering. It can accommodate up to 7 passengers with luggage, making it ideal for group travel, airport transfers, and family outings.'
  },
  {
    title: 'Chauffeur Service',
    content: 'Our professional chauffeurs are trained to provide exceptional service. They are punctual, discreet, and knowledgeable about the local area. All chauffeurs speak multiple languages and are dressed in formal attire.'
  },
  {
    title: 'Airport Transfer',
    content: 'We offer reliable airport transfer services to and from all major airports. Our chauffeurs track flight arrivals in real-time to ensure they are waiting for you when you land. We include 60 minutes of waiting time for international flights.'
  },
  {
    title: 'VIP Service',
    content: 'Our VIP service offers the highest level of luxury and discretion. We can arrange for security personnel, coordinate with event organizers, and provide customized services to meet your specific requirements.'
  },
  {
    title: 'Tourism Services',
    content: 'We offer guided tours to popular destinations, shopping tours, theme parks, and farm visits. Our chauffeurs are knowledgeable about local attractions and can provide recommendations based on your interests.'
  },
  {
    title: 'Contact Information',
    content: 'You can reach us by phone, email, or through the contact form on our website. We are available 24/7 to assist with bookings and inquiries.'
  },
  {
    title: 'Booking Process',
    content: 'To book our services, you can use the contact form on our website, call us directly, or send an email. We require the date, time, pickup location, destination, number of passengers, and any special requirements.'
  },
  {
    title: 'Pricing',
    content: 'Our pricing is based on the vehicle type, duration, and distance of the journey. We offer hourly rates, half-day rates, and full-day rates. Please contact us for a personalized quote.'
  }
];

/**
 * Function to search the knowledge base for relevant information
 * @param {string} query - The user's query
 * @param {Array} knowledgeBase - The knowledge base to search
 * @returns {Array} - Array of relevant knowledge base entries
 */
export const searchKnowledgeBase = (query, knowledgeBase = initialKnowledgeBase) => {
  const normalizedQuery = query.toLowerCase();
  
  // Simple search implementation - in a real application, you might want to use
  // a more sophisticated search algorithm or a vector database
  return knowledgeBase.filter(entry => {
    const normalizedTitle = entry.title.toLowerCase();
    const normalizedContent = entry.content.toLowerCase();
    
    return normalizedTitle.includes(normalizedQuery) || 
           normalizedContent.includes(normalizedQuery);
  });
};

/**
 * Function to add a new entry to the knowledge base
 * @param {Object} entry - The entry to add (with title and content)
 * @param {Array} knowledgeBase - The knowledge base to add to
 * @returns {Array} - The updated knowledge base
 */
export const addToKnowledgeBase = (entry, knowledgeBase = initialKnowledgeBase) => {
  return [...knowledgeBase, entry];
};

/**
 * Function to extract content from HTML for the knowledge base
 * This is a simplified version - in a real application, you would
 * want to crawl your website and extract content from all pages
 * @param {string} html - The HTML content to extract from
 * @param {string} title - The title for this content
 * @returns {Object} - A knowledge base entry
 */
export const extractContentFromHTML = (html, title) => {
  // This is a very simplified implementation
  // In a real application, you would use a proper HTML parser
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  // Remove scripts, styles, and other non-content elements
  const scripts = tempDiv.querySelectorAll('script, style, nav, footer');
  scripts.forEach(script => script.remove());
  
  // Get the text content
  const content = tempDiv.textContent.trim()
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .substring(0, 1000); // Limit the length
  
  return {
    title,
    content
  };
};
