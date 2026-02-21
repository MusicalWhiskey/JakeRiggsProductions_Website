// Centralized configuration for environment variables

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

interface Config {
  emailjs: EmailJSConfig;
}

export const config: Config = {
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
};
