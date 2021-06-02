import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import typeValidation from '../../../utils/type-validation';

const ModalClose = ({
  hide, title, children, className,
}) => (
  <button
    className={classNames('fr-link--close fr-link', className)}
    type="button"
    onClick={hide}
    title={title}
    aria-controls="fr-modal"
    data-testid="modal-close"
  >
    {children}
  </button>
);
ModalClose.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('ModalClose'),
  children: PropTypes.string,
  title: PropTypes.string,
  /**
   * @ignore
   */
  hide: PropTypes.func,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
ModalClose.defaultProps = {
  __TYPE: 'ModalClose',
  children: 'Fermer',
  title: 'Fermer la fenêtre modale',
  className: '',
  hide: () => {},

};

export default ModalClose;
