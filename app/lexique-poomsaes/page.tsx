import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styles from "./page.module.css";
import PoomsaeList from "../../public/files/poomsae.json";
import CardPoomsae from "../Components/CardPoomsae/CardPoomsae";

const LexiquePoomsaes = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main_header}>
          <h1 className={styles.main_title}>Lexique</h1>
        </section>

        <article className={styles.main_article}>
          <section className={styles.article_section}>
            <p className={styles.section_text}>
              Le taekwondo, en tant qu'art martial millénaire, est imprégné
              d'une richesse culturelle profonde, façonnée par l'histoire et les
              traditions de la Corée. Au-delà de ses techniques de combat, le
              taekwondo véhicule des valeurs de respect, de discipline et de
              maîtrise de soi, transmises à travers un vocabulaire riche et
              symbolique. Chaque mouvement, chaque terme utilisé, porte en lui
              une signification qui transcende le simple geste physique,
              reflétant l'esprit et la philosophie de cette pratique ancestrale.
            </p>

            <p className={styles.section_text}>
              Du salut initial, "<i>Kyungye</i>", signe de respect envers son
              adversaire et son instructeur, jusqu'aux techniques comme "
              <i>Ap Chagi</i>" (coup de pied avant) ou "<i>Dolyo Chagi</i>"
              (coup de pied circulaire), chaque mot dans le vocabulaire du
              taekwondo est une fenêtre ouverte sur son héritage culturel et
              spirituel, offrant aux pratiquants une voie vers l'épanouissement
              personnel et la découverte de soi.
            </p>
          </section>
        </article>

        <article className={styles.main_article}>
          <h2 className={styles.section_title}>Les poomsaes</h2>
          <section className={styles.article_section}>
            <h3>Définition</h3>
            <p className={styles.section_text}>
              Le Poomsae est une pratique conventionnelle qui représente un
              combat structuré et dirigé, effectué individuellement et qui suit
              un schéma spécifique, en fonction de sa complexité.
            </p>
            <p className={styles.section_text}>
              Chaque Poomsae a son propre tempo qui correspond aux différents
              enchaînements, de sorte que chaque blocage soit suivi
              instinctivement d'une contre-attaque. Il commence et se termine
              toujours par la position "Tchaliot Seugui", suivie du salut
              "Kyongnye", puis est annoncé à haute voix.
            </p>
            <p className={styles.section_text}>
              Il est essentiel de "vivre" son Poomsae, en donnant l'impression
              d'un vrai combat à travers une exécution précise et contrôlée des
              mouvements. Le Poomsae est réalisé avec dignité, en portant un
              dobok propre et une ceinture correctement attachée.
            </p>
            <p className={styles.section_credits}>
              Credits texte :{" "}
              <a href="https://www.fftda.fr/fr/105-les-poomsae.html">FFTDA</a>
            </p>
          </section>

          <section className={styles.article_section}>
            <h3>Signification et exécution des poomsaes</h3>

            {PoomsaeList.map((item) => (
              <CardPoomsae key={item.id} poomsae={item} />
            ))}
          </section>

          <section className={styles.article_section}>
            <h3>Critères d'exécution</h3>
            <p className={styles.section_text}>
              Les critères d'exécution des poomsaes sont :
            </p>

            <ul>
              <li className={styles.section_list}>La Maîtrise</li>
              <li className={styles.section_list}>La Puissance</li>
              <li className={styles.section_list}>Le Rythme</li>

              <li className={styles.section_list}>
                L'Equilibre et la Stabilité
              </li>
              <li className={styles.section_list}>
                Le Respect des techniques et du diagramme
              </li>
              <li className={styles.section_list}>La Respiration</li>
              <li className={styles.section_list}>La Concentration</li>
              <li className={styles.section_list}>Le Regard </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default LexiquePoomsaes;
