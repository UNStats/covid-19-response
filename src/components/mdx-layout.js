import React from 'react';
import { node } from 'prop-types';

// Layout for MDX snippets.
const MdxLayout = ({ children }) => <>{children}</>;

MdxLayout.propTypes = {
  children: node.isRequired,
};

export default MdxLayout;
