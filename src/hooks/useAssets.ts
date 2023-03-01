const Logo = require('../assets/img/logos/logo.png');
const WatchLogo = require('../assets/img/logos/watch_logo.png');
const Background = require('../assets/img/background.png');

const CheckEmpty = require('../assets/img/hoc/check_empty.png');
const CheckNormal = require('../assets/img/hoc/check_normal.png');
const CheckActive = require('../assets/img/hoc/check_active.png');

export function useAssets(type: string) {
  switch (type) {
    case 'background':
      return Background;
    case 'logo':
      return Logo;
    case 'watch_logo':
      return WatchLogo;
    case 'check_empty':
      return CheckEmpty;
    case 'check_normal':
      return CheckNormal;
    case 'check_active':
      return CheckActive;
    default:
      return null;
  }
}
