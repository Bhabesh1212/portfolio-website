/**
 * Google Analytics 4 Setup and Utility Functions
 */

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID

/**
 * Initialize Google Analytics
 * Call this once in your main app component
 */
export const initGoogleAnalytics = () => {
  // Create the script tag
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  // Add script to document head
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    allow_google_signals: true,
    allow_ad_personalization_signals: true,
  });

  // Store gtag globally for use in other functions
  window.gtag = gtag;
};

/**
 * Track page view
 * @param {string} pageName - Name of the page
 */
export const trackPageView = (pageName) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track custom event
 * @param {string} eventName - Name of the event
 * @param {object} eventData - Event data/parameters
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

/**
 * Track form submission
 * @param {string} formName - Name of the form
 */
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', {
    form_name: formName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track link click
 * @param {string} linkName - Name/identifier of the link
 * @param {string} url - URL of the link
 */
export const trackLinkClick = (linkName, url) => {
  trackEvent('link_click', {
    link_name: linkName,
    link_url: url,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track section view (for smooth scroll navigation)
 * @param {string} sectionName - Name of the section
 */
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    section_name: sectionName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track resume download
 */
export const trackResumeDownload = () => {
  trackEvent('file_download', {
    file_name: 'bhabesh_ranjan_barik.pdf',
    file_type: 'pdf',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track contact form engagement
 */
export const trackContactFormEngagement = (stage) => {
  trackEvent('contact_form_engagement', {
    stage: stage, // 'opened', 'filled', 'submitted'
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track social media link click
 */
export const trackSocialClick = (platform) => {
  trackEvent('social_media_click', {
    platform: platform, // 'linkedin', 'github', 'instagram'
    timestamp: new Date().toISOString(),
  });
};

/**
 * Set user properties (optional)
 */
export const setUserProperties = (properties) => {
  if (window.gtag) {
    window.gtag('event', 'set_user_properties', properties);
  }
};

export default {
  initGoogleAnalytics,
  trackPageView,
  trackEvent,
  trackFormSubmission,
  trackLinkClick,
  trackSectionView,
  trackResumeDownload,
  trackContactFormEngagement,
  trackSocialClick,
  setUserProperties,
};
