import styles from './App.module.css'
import poweredImage from './assets/powered.png'

function App() {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer} >
          <img className={styles.powered} src={poweredImage} alt="Powered by B7Web" />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          ...
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  )
}

export default App
