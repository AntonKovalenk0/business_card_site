import Button from '../../UI/button/Button';
import styles from './HeaderBlock.module.scss';

function HeaderBlock() {

  const buttonsConfig = [
    {
      name: 'Про нас',
      href: '#.....',
      type: 'link',
    },
    {
      name: 'Послуги',
      href: '#.....',
      type: 'link',
    },
    {
      name: 'Контакти',
      href: '#.....',
      type: 'link',
    },
  ];

    return (
      <div className={styles.Background}>
          <div className={styles.FixationBlock}>
            <div className={styles.Logo}>
              <a href="/">
                <span>LEOWAVE</span>
                <span>innovations</span>
              </a>
            </div>
            <div className={styles.MenuButtons}>
              {buttonsConfig.map(({ name, href, onClick }) => (
                <Button
                  key={name}
                  type="link"
                  name={name}
                  href={href}
                  onClick={onClick}
                />
              ))}
            </div>
            <div className={styles.LanguageBlock}>

            </div>
          </div>
      </div>
    );
  }

export default HeaderBlock;