import styles from './HeaderBlock.module.scss';

function HeaderBlock() {
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

            </div>
            <div className={styles.LanguageBlock}>

            </div>
          </div>
      </div>
    );
  }

export default HeaderBlock;