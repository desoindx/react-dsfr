import React, { Children, cloneElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import typeValidation from '../../../utils/type-validation';

const FooterBottom = ({ children, className }) => {
  const links = Children.toArray(children)
    .filter((link) => link.props.__TYPE === 'FooterLink')
    .map((link) => cloneElement(link, { section: 'bottom' }));
  const childs = children.filter((link) => link.props.__TYPE !== 'FooterLink');
  return (
    <div className={classNames('fr-footer__bottom', className)}>
      <ul className="fr-footer__bottom-list">
        {links}
      </ul>
      {childs}
    </div>
  );
};
FooterBottom.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterBottom'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterBottom.defaultProps = {
  __TYPE: 'FooterBottom',
  className: '',
};

export default FooterBottom;
