/** @jsx jsx */
import { arrayOf, number, oneOfType } from 'prop-types';
import { jsx } from 'theme-ui';

const ContinuityIcon = ({ height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    sx={{ fill: 'currentColor', height }}
    viewBox="0 0 100 100"
  >
    <path d="M49.98 13.086c-20.512 0-36.937 16.662-36.937 36.914 0 20.25 16.425 36.913 36.937 36.913 20.512 0 36.938-16.662 36.938-36.913 0-20.252-16.426-36.914-36.938-36.914zm0 3.796c17.976 0 32.728 14.709 32.728 33.118 0 18.408-14.752 33.117-32.728 33.117-17.975 0-32.728-14.709-32.728-33.117 0-18.41 14.753-33.118 32.728-33.118z" />
    <path d="M15.344 43.794A2 2 0 0014 44.45l-7.5 8.344a2.003 2.003 0 003 2.656l6-6.687 6.219 6.781a2 2 0 102.937-2.687L16.97 44.45a2 2 0 00-1.625-.656zM92.063 43.763a2 2 0 00-1.532.687l-6.219 6.782-6-6.688a2.002 2.002 0 10-2.968 2.688l7.469 8.312a2 2 0 002.968 0l7.688-8.406a2 2 0 00-1.406-3.375z" />
  </svg>
);

ContinuityIcon.propTypes = {
  height: oneOfType([number, arrayOf(number)]),
};

export default ContinuityIcon;
