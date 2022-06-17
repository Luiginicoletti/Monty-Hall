import Cartao from "../components/Cartao";
import styles from "../styles/form.module.css";
import Link from "next/link";
import { useState } from "react";
import EntradaNumerica from "../components/EntradaNumerica";

export default function Form() {
  const [portas, setPortas] = useState(3)
  const [presente, setPresente] = useState(2)
  return (
    <div className={styles.form}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
          <p>Selecione o número de portas [1/100]</p>
          <p>Selecione a porta que terá o presente</p>
          <p>Para uma melhor experiência pressione f11</p>
        </Cartao>
        <Cartao >
          <EntradaNumerica  text="Portas" value={portas} onChange={nPortas => setPortas(nPortas)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica  text="Presente" value={presente} onChange={nPresente => setPresente(nPresente)} />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${portas}/${presente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
