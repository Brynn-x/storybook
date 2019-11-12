// .storybook/config.js

import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'storybook-chromatic';
// import isChromatic from "storybook-chromatic/isChromatic";
import '../src/index.css';

const req = requireContext('../src/components', true, /\.stories.js$/);

// console.log(req.keys())
//  不支持 CSF
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
