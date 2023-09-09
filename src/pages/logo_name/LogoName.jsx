import styles from './LogoName.module.scss';

function LogoName() {
    return (
      <div className={styles.Background}>
          <div className={styles.FixationBlock}>
            
            <div className={styles.Logo}>

            </div>

            <div className={styles.NameContent}>
                <div className={styles.Name}>
                  <div className={styles.FirstName}>
                    <span>LEOWAVE</span>
                    <span>LEOWAVE</span>
                  </div>
                <span className={styles.LastName}>innovations</span>
                </div>
                <div className={styles.Buttons}>

                </div>

            </div>

          </div>
      </div>
    );
  }

export default LogoName;
