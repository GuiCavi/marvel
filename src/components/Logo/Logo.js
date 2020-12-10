import React from 'react';

import LOGO from '../../assets/logo/logo.png';

export default function Logo(props) {
  return (
    <img src={LOGO} alt="" className="logo" {...props} />
  );
}
