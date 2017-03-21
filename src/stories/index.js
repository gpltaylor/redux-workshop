import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Redux Intro', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Redux Basics', module)
  .add('Todo Example', require('../../src/todo').example);
