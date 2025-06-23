
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.50dfb5c0b7cc4ca1bf5b3c102f3c4e10',
  appName: 'إجاباتكم - Ajabatkum',
  webDir: 'dist',
  server: {
    url: 'https://50dfb5c0-b7cc-4ca1-bf5b-3c102f3c4e10.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1e40af',
      showSpinner: false
    }
  }
};

export default config;
