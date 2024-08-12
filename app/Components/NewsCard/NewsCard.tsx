import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import test from "../../../public/images/contact.webp";
import { ArticleType } from "@/app/types/article";

type ArticleProps = {
  article: ArticleType;
};

const NewsCard = ({ article }: ArticleProps) => {
  console.log(article);
  return (
    <>
      <div className={styles.news_container}>
        <Link href="" className={styles.news_link}>
          <Image
            src={article.image}
            fill
            alt="Logo de la FFTDA"
            className={styles.news_image}
          ></Image>
        </Link>
        <div className={styles.news_contentwrapper}>
          <Link href="" className={styles.news_linktitle}>
            <h3 className={styles.news_title}>{article.title}</h3>
          </Link>
          <p className={styles.news_date}>{article.date}</p>
          <p className={styles.news_text}>{article.textCard}</p>
          <Link href="" className={styles.news_link}>
            Continuer la lecture
          </Link>
        </div>
      </div>

      {/* <div className={styles.news_container}>
        <Link href="" className={styles.news_link}>
          <Image
            src={test}
            fill
            alt="Logo de la FFTDA"
            className={styles.news_image}
          ></Image>
        </Link>
        <div className={styles.news_contentwrapper}>
          <Link href="" className={styles.news_linktitle}>
            <h3 className={styles.news_title}>Titre</h3>
          </Link>
          <p className={styles.news_date}>01/01/2000</p>
          <p className={styles.news_text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
            facilis. Aspernatur corrupti dolor dolorem ut ipsam, modi cumque non
            nam dignissimos esse temporibus, rerum nobis nisi sequi nihil vel
            culpa.
          </p>
          <Link href="" className={styles.news_link}>
            Continuer la lecture
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default NewsCard;
