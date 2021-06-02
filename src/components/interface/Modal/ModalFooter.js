import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import typeValidation from '../../../utils/type-validation';

const ModalFooter = ({ children, className }) => (
  <div className={classNames('fr-modal__footer', className)}>
    {children}
  </div>
);

ModalFooter.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('ModalFooter'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
ModalFooter.defaultProps = { __TYPE: 'ModalFooter', className: '' };

export default ModalFooter;
