import styles from './App.module.scss'
import HeaderBlock from './pages/header/HeaderBlock'
import LogoName from './pages/logo_name/LogoName'

function App() {
  return (
    <div className={styles.Background}>
        <HeaderBlock></HeaderBlock>
        <LogoName></LogoName>
    </div>
  )
}

export default App
