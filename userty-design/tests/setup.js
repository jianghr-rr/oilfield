/**
 * @file jest setupfile
 * @author zhousheng
 */

const enzyme = require('enzyme');
const react = require('react');

const Adapter
  = process.env.REACT === '16'
      ? require('enzyme-adapter-react-16')
      : require('@wojtekmaj/enzyme-adapter-react-17');

enzyme.configure({adapter: new Adapter()});
global.React = global.react = react;
