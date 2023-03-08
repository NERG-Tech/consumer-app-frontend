const Logo = require('../assets/img/logos/logo.png');
const WatchLogo = require('../assets/img/logos/watch_logo.png');
const Background = require('../assets/img/background.png');
const Email = require('../assets/img/mail.png');
const Setting = require('../assets/img/setting.png');

const CheckEmpty = require('../assets/img/hoc/check_empty.png');
const CheckNormal = require('../assets/img/hoc/check_normal.png');
const CheckActive = require('../assets/img/hoc/check_active.png');

const CircleLeft = require('../assets/img/hoc/circle_left.png');
const CircleRight = require('../assets/img/hoc/circle_right.png');
const CircleDown = require('../assets/img/hoc/circle_down.png');
const CircleDropRight = require('../assets/img/hoc/circle_drop_right.png');
const CircleDropDown = require('../assets/img/hoc/circle_dropdown.png');

const HomeActiveTab = require('../assets/img/tabs/home_active.png');
const HomeNormalTab = require('../assets/img/tabs/home_normal.png');
const ShareActiveTab = require('../assets/img/tabs/share_active.png');
const ShareNormalTab = require('../assets/img/tabs/share_normal.png');
const FocusActiveTab = require('../assets/img/tabs/focus_active.png');
const FocusNormalTab = require('../assets/img/tabs/focus_normal.png');
const GroupNormalTab = require('../assets/img/tabs/group_normal.png');
const GroupActiveTab = require('../assets/img/tabs/group_active.png');

const DefaultPlayer = require('../assets/img/player.png');
const LungsImage = require('../assets/img/lungs.png');
const ArrowUpImage = require('../assets/img/arrow_up.png');
const AddListImage = require('../assets/img/list_add.png');
const ShareImage = require('../assets/img/share.png');

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
    case 'group_active_tab':
      return GroupActiveTab;
    case 'group_normal_tab':
      return GroupNormalTab;
    case 'focus_active_tab':
      return FocusActiveTab;
    case 'focus_normal_tab':
      return FocusNormalTab;
    case 'e-mail':
      return Email;
    case 'setting':
      return Setting;
    case 'circle_left':
      return CircleLeft;
    case 'circle_right':
      return CircleRight;
    case 'circle_down':
      return CircleDown;
    case 'circle_drop_right':
      return CircleDropRight;
    case 'circle_drop_down':
      return CircleDropDown;
    case 'player':
      return DefaultPlayer;
    case 'lungs':
      return LungsImage;
    case 'arrow_up':
      return ArrowUpImage;
    case 'list_add':
      return AddListImage;
    case 'share':
      return ShareImage;
    default:
      return null;
  }
}
