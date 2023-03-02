const Logo = require('../assets/img/logos/logo.png');
const WatchLogo = require('../assets/img/logos/watch_logo.png');
const Background = require('../assets/img/background.png');
const Email = require('../assets/img/mail.png');
const Setting = require('../assets/img/setting.png');

const CheckEmpty = require('../assets/img/hoc/check_empty.png');
const CheckNormal = require('../assets/img/hoc/check_normal.png');
const CheckActive = require('../assets/img/hoc/check_active.png');

const HomeActiveTab = require('../assets/img/tabs/home_active.png');
const HomeNormalTab = require('../assets/img/tabs/home_normal.png');
const ShareActiveTab = require('../assets/img/tabs/share_active.png');
const ShareNormalTab = require('../assets/img/tabs/share_normal.png');
const FocusActiveTab = require('../assets/img/tabs/focus_active.png');
const FocusNormalTab = require('../assets/img/tabs/focus_normal.png');

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
    case 'home_active_tab':
      return HomeActiveTab;
    case 'home_normal_tab':
      return HomeNormalTab;
    case 'share_active_tab':
      return ShareActiveTab;
    case 'share_normal_tab':
      return ShareNormalTab;
    case 'focus_active_tab':
      return FocusActiveTab;
    case 'focus_normal_tab':
      return FocusNormalTab;
    case 'e-mail':
      return Email;
    case 'setting':
      return Setting;
    default:
      return null;
  }
}
