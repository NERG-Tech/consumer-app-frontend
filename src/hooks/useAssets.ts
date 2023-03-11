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
const CircleClose = require('../assets/img/hoc/circle_close.png');
const CircleDropRight = require('../assets/img/hoc/circle_drop_right.png');
const CircleDropDown = require('../assets/img/hoc/circle_dropdown.png');

const Search = require('../assets/img/hoc/search.png');

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
const TimerImage = require('../assets/img/timer.png');
const HeartPulseImage = require('../assets/img/heart_pulse.png');
const MentalHealthImage = require('../assets/img/mental_health.png');
const BubbleImage = require('../assets/img/bubble.png');
const ChartImage = require('../assets/img/chart.png');

export function useAssets(type: string) {
  const route = type.split('.');
  switch (route[0]) {
    case 'main':
      return mainAssets(route[1]);
    case 'hoc':
      return hocAssets(route[1]);
    case 'global':
      return globalAssets(route[1]);
    default:
      return null;
  }
}

function hocAssets(path: string) {
  switch (path) {
    case 'check_empty':
      return CheckEmpty;
    case 'check_normal':
      return CheckNormal;
    case 'check_active':
      return CheckActive;
    case 'circle_left':
      return CircleLeft;
    case 'circle_right':
      return CircleRight;
    case 'circle_down':
      return CircleDown;
    case 'circle_close':
      return CircleClose;
    case 'circle_drop_right':
      return CircleDropRight;
    case 'circle_drop_down':
      return CircleDropDown;
    case 'search':
      return Search;
    default:
      return null;
  }
}

function globalAssets(path: string) {
  switch (path) {
    case 'lungs':
      return LungsImage;
    case 'arrow_up':
      return ArrowUpImage;
    case 'player':
      return DefaultPlayer;
    case 'list_add':
      return AddListImage;
    case 'share':
      return ShareImage;
    case 'timer':
      return TimerImage;
    case 'heart_pulse':
      return HeartPulseImage;
    case 'mental_health':
      return MentalHealthImage;
    case 'bubble':
      return BubbleImage;
    case 'chart':
      return ChartImage;
    default:
      return null;
  }
}

function mainAssets(path: string) {
  switch (path) {
    case 'background':
      return Background;
    case 'logo':
      return Logo;
    case 'watch_logo':
      return WatchLogo;
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
    default:
      return null;
  }
}
