import styles from './LogoName.module.scss';

function LogoName() {
    return (
        <div className={styles.Background}>

          <div className={styles.Logo}>

          </div>

          <div className={styles.NameContent}>
              <div className={styles.Name}>
                <div className={styles.FirstName}>
                  <span>LEOWAVE</span>
                  <span>LEOWAVE</span>
                </div>
                <div className={styles.LastName}>innovations</div>
              </div>
              <div className={styles.Logo}>

              </div>
          </div>
        </div>
    );
  }

export default LogoName;
