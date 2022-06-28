import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => navigate(`${pathname}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
