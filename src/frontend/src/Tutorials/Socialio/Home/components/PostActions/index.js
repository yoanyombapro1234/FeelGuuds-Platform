import * as React from 'react';
import Icon from '@duik/icon';
import { Button } from '@duik/it';

import cls from './social-post-actions.module.scss';

const SocialPostActions = () => (
  <div className={cls['social-post-actions']}>
    <Button transparent>
      <Icon mr>love</Icon>
      Like
    </Button>
    <Button transparent>
      <Icon mr>message_2</Icon>
      Comment
    </Button>
    <Button className={cls['social-post-actions-item-hidden']} transparent>
      <Icon mr>send_round</Icon>
      Share
    </Button>
  </div>
);

export default SocialPostActions;
