const LogoPng = require('../assets/img/logos/logo.png');
const WatchLogoPng = require('../assets/img/logos/watch_logo.png');

export function useAssets(type: string) {
  switch (type) {
    case 'logo':
      return LogoPng;
    case 'watch_logo':
      return WatchLogoPng;
    default:
      return null;
  }
}
