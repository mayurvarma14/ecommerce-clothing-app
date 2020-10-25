import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMenuSections } from '../../redux/menu/menuSelectors';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.scss';

const Menu = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default connect(
  createStructuredSelector({
    sections: selectMenuSections,
  })
)(Menu);
