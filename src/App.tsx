import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  function handleCalculateButton() {
    if (heightField && weightField) {
    } else {
      alert("Digite todos os campos.");
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img
            className={styles.powered}
            src={poweredImage}
            alt="Powered by B7Web"
          />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em m)"
            value={heightField > 0 ? heightField : ""}
            onChange={(event) => setHeightField(Number(event.target.value))}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(event) => setWeightField(Number(event.target.value))}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>...</div>
      </div>
    </div>
  );
}

export default App;
