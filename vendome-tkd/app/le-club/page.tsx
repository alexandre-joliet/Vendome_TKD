import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import styles from "./page.module.css";

const LeClub = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <img
          src="/images/VendômeCover.jpg"
          alt="Photo de couverture présentant une vue des toits et des clochers de la ville de Vendôme"
          className={styles.main_image}
        ></img>
        <article className={styles.main_article}>
          <section className={styles.article_section}>
            <h1 className={styles.main_title}>Notre Club</h1>
            <p className={styles.section_text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              provident vitae ducimus ipsam est molestias, voluptates, illum
              sequi quam beatae placeat aliquid, blanditiis animi dignissimos!
              Est, adipisci modi. Nobis, voluptate? Placeat temporibus vel
              corrupti!
            </p>
            <p className={styles.section_text}>
              Facere dicta laudantium, magni accusamus architecto, nisi error
              voluptatum molestiae suscipit enim corporis aspernatur maiores
              modi laboriosam accusantium, pariatur at aut nam. Vel dolorum
              beatae rem?
            </p>
          </section>

          <section className={styles.article_section}>
            <h2 className={styles.section_title}>Notre maître</h2>
            <img
              src="/images/prof.jpg"
              alt="Portait de Guy, en dobok dans notre dojo"
              className={styles.section_image}
            />
            <p className={styles.section_text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              provident vitae ducimus ipsam est molestias, voluptates, illum
              sequi quam beatae placeat aliquid, blanditiis animi dignissimos!
              Est, adipisci modi. Nobis, voluptate? Placeat temporibus vel
              corrupti!
            </p>
            <p className={styles.section_text}>
              Facere dicta laudantium, magni accusamus architecto, nisi error
              voluptatum molestiae suscipit enim corporis aspernatur maiores
              modi laboriosam accusantium, pariatur at aut nam. Vel dolorum
              beatae rem?
            </p>
          </section>

          <section className={styles.article_section}>
            <h2 className={styles.section_title}>Présentation du bureau</h2>

            <p className={styles.section_text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              provident vitae ducimus ipsam est molestias, voluptates, illum
              sequi quam beatae placeat aliquid, blanditiis animi dignissimos!
              Est, adipisci modi. Nobis, voluptate? Placeat temporibus vel
              corrupti!
            </p>

            <div className={styles.board_container}>
              <img
                src="/images/avatar.jpg"
                alt=""
                className={styles.board_avatar}
              />
              <div className={styles.board_infos}>
                <p className={styles.board_position}>Position</p>
                <p className={styles.board_name}>John Doe</p>

                <p className={styles.board_bio}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  aspernatur labore molestias vel laborum obcaecati earum
                  corrupti eum, ipsam laboriosam aliquam minus quo nam tempora,
                  ex ducimus saepe laudantium placeat!
                </p>
              </div>
            </div>
            <div className={styles.board_container}>
              <img
                src="/images/avatar.jpg"
                alt=""
                className={styles.board_avatar}
              />
              <div className={styles.board_infos}>
                <p className={styles.board_position}>Position</p>
                <p className={styles.board_name}>John Doe</p>

                <p className={styles.board_bio}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  aspernatur labore molestias vel laborum obcaecati earum
                  corrupti eum, ipsam laboriosam aliquam minus quo nam tempora,
                  ex ducimus saepe laudantium placeat!
                </p>
              </div>
            </div>
            <div className={styles.board_container}>
              <img
                src="/images/avatar.jpg"
                alt=""
                className={styles.board_avatar}
              />
              <div className={styles.board_infos}>
                <p className={styles.board_position}>Position</p>
                <p className={styles.board_name}>John Doe</p>

                <p className={styles.board_bio}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  aspernatur labore molestias vel laborum obcaecati earum
                  corrupti eum, ipsam laboriosam aliquam minus quo nam tempora,
                  ex ducimus saepe laudantium placeat!
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default LeClub;
