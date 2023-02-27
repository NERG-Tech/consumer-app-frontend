const LogoPng = require('../assets/img/logos/logo.png');
const WatchLogoPng = require('../assets/img/logos/watch_logo.png');
const BackgroundPng = require('../assets/img/background.png');

export function useAssets(type: string) {
  switch (type) {
    case 'background':
      return BackgroundPng;
    case 'logo':
      return LogoPng;
    case 'watch_logo':
      return WatchLogoPng;
    default:
      return null;
  }
}
