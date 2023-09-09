/* eslint-disable react/prop-types */
import classNames from 'classnames';
import styles from './Button.module.scss';

function Button({
  name,
  type,
  href,
  onClick,
  htmlType = 'button',
}) {
  const buttonClassName = classNames(styles.Button, {
    [styles.Button__isLarge]: type === 'large',
    [styles.Button__isLink]: type === 'link',
    // [styles.Button__isGreen]: type === 'green',
  });

  let ButtonTag = 'button';

  if (type === 'link') {
    ButtonTag = 'a';
  }

  return (
    <ButtonTag
      href={href}
      type={htmlType}
      onClick={onClick}
      className={buttonClassName}
    >
      {name}
    </ButtonTag>
  );
}

export default Button;
