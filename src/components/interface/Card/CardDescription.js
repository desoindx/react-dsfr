import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import typeValidation from '../../../utils/type-validation';

const CardDescription = ({ children, className }) => (
  <p className={classNames('fr-card__desc', className)}>{children}</p>
);
CardDescription.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('CardDescription'),
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
CardDescription.defaultProps = {
  __TYPE: 'CardDescription',
  className: '',
};

export default CardDescription;
