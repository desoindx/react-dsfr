import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import typeValidation from '../../../utils/type-validation';

const CardDetail = ({ children, className }) => (
  <p className={classNames('fr-card__detail', className)}>{children}</p>
);
CardDetail.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('CardDetail'),
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
CardDetail.defaultProps = {
  __TYPE: 'CardDetail',
  className: '',
};

export default CardDetail;
