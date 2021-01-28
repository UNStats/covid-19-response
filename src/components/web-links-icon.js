/** @jsx jsx */
import { arrayOf, number, oneOfType } from 'prop-types';
import { jsx } from '@undataforum/gatsby-theme-theme-ui';

const WebLinksIcon = ({ height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    sx={{ fill: 'currentColor', height }}
    viewBox="0 0 100 100"
  >
    <path d="M8 21a2 2 0 00-2 2v54a2 2 0 002 2h84a2 2 0 002-2V23a2 2 0 00-1.813-2A2 2 0 0092 21H8zm2 4h80v9H10v-9zm51 2v5h5v-5h-5zm10 0v5h5v-5h-5zm10 0v5h5v-5h-5zM10 38h80v37H10V38zm22.906 3.969a2 2 0 00-1.218.5l-8 7a2 2 0 000 3.031l8 7a2.005 2.005 0 102.625-3.031L30.343 53H50a2 2 0 100-4H30.312l4-3.5a2 2 0 00-1.406-3.531zm33.938 10a2 2 0 00-1.156 3.531l4 3.5H50a2 2 0 00-.188 0A2.002 2.002 0 1050 63h19.656l-3.969 3.469a2.005 2.005 0 102.626 3.031l8-7a2 2 0 000-3.031l-8-7a2 2 0 00-1.47-.5z" />
  </svg>
);

WebLinksIcon.propTypes = {
  height: oneOfType([number, arrayOf(number)]),
};

export default WebLinksIcon;
