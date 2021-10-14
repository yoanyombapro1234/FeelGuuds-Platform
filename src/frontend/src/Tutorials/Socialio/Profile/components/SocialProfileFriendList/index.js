import { createSimpleComponent } from "@duik/it";

import cls from "./social-friend-list.module.scss";

const SocialProfileFriendList = createSimpleComponent({
  displayName: "SocialProfileFriendList",
  Component: "div",
  className: cls["social-profile-friend-list"]
});

export default SocialProfileFriendList;
