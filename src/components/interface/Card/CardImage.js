import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import typeValidation from '../../../utils/type-validation';

const CardImage = ({ alt, src, className }) => (
  <div className={classNames('fr-card__img', className)}>
    <img src={src} alt={alt} />
  </div>
);

CardImage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('CardImage'),
  alt: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  src: PropTypes.string.isRequired,
};
CardImage.defaultProps = {
  __TYPE: 'CardImage',
  className: '',
  alt: null,
};

export default CardImage;
