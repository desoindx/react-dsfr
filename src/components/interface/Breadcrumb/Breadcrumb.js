import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';

export const Breadcrumb = ({
  label,
  buttonLabel,
  className,
  children,
}) => {
  const breadRef = useRef();
  const buttonRef = useRef();
  const listRef = useRef();
  const [open, setOpen] = useState(true);
  const [clicked, setClicked] = useState(false);
  const button = children.filter((child) => child.type.name === 'BreadcrumbButton');
  const content = children.filter((child) => child.type.name === 'BreadcrumbItem');
  const classes = classnames('rf-breadcrumb', className);
  const handleOpenBreadcrumb = () => {
    const height = buttonRef.current.offsetHeight;
    breadRef.current.style.maxHeight = `calc(${height}px + 1rem)`;
    breadRef.current.style.transition = 'max-height 250ms ease-out';
    setClicked(true);
    setOpen(true);
  };
  useEffect(() => {
    const handleScreenSize = () => (!clicked) && setOpen(window.matchMedia('(min-width: 48em)').matches);
    handleScreenSize();
    const height = (open) ? listRef.current.offsetHeight : buttonRef.current.offsetHeight;
    breadRef.current.style.maxHeight = `calc(${height}px + 1rem)`;
    window.addEventListener('resize', handleScreenSize);
    return () => {
      window.removeEventListener('resize', handleScreenSize);
    };
  }, [open, clicked]);

  return (
    <nav ref={breadRef} className={classes} aria-label={label} data-testid="bc-nav">
      <button ref={buttonRef} type="button" onClick={handleOpenBreadcrumb} className="rf-breadcrumb__button" hidden={open} data-testid="bc-button">
        {buttonLabel}
      </button>
      <ol ref={listRef} className="rf-breadcrumb__list" data-testid="bc-list" hidden={!open}>
        {content}
      </ol>
    </nav>
  );
};

Breadcrumb.defaultProps = {
  className: '',
  buttonLabel: "Voir le fil d'ariane",
  label: 'vous êtes ici :',
};

Breadcrumb.propTypes = {
  label: PropTypes.string,
  buttonLabel: PropTypes.string,
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
};

export const BreadcrumbItem = ({
  className, children, current, href,
}) => {
  const classes = classnames(
    'rf-breadcrumb__item',
    { 'rf-breadcrumb__item--current': current },
    className,
  );
  return (
    <li className={classes} aria-current={current && 'page'} data-testid="bc-item">
      {
        (href)
          ? <a href={href}>{children}</a>
          : children
      }
    </li>
  );
};

BreadcrumbItem.defaultProps = {
  className: '',
  current: false,
  href: null,
};

BreadcrumbItem.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
  current: PropTypes.bool,
  href: PropTypes.string,
};
