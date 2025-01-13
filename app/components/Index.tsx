import styles from './Index.module.css';

const Index = () => {
  return (
    <section className={styles.home}>
      <section className={styles.intro}>

      <div className={styles.left}>
        <h1>
          <span className={styles.greeting}>Saludos! Mi nombre es</span>
          <br />
          <span className={styles.name}>Gustavo Marcelo Nuñez</span>
        </h1>
      </div>
      <div className={styles.right}>
        <p>
          Soy Licenciado en Informática con una profunda pasión por la ciencia de datos, la inteligencia artificial y la innovación tecnológica. Mi experiencia se centra en desarrollar soluciones que integran software de alta calidad con herramientas avanzadas, abordando desafíos complejos en una variedad de áreas.
        </p> 
        <br />
        <p>
          Actualmente, estoy realizando un doctorado en Ciencias de la Computación en la Universidad Nacional del Sur (UNS), en Bahía Blanca, donde profundizo en la investigación y aplicación de tecnologías de vanguardia.
        </p>
      </div>
    </section>
  </section>
  );
};

export default Index;
