"use client";
import Link from "next/link";
import styles from "./page.module.css";

type Props = {
  CardProps: {
    image: string;
    alt: string;
    title: string;
    url: string;
  };
};

const CardHome = ({ CardProps }: Props) => {
  return (
    // <section className={styles.card_container}>
    //   <Link href="">
    //     <img src="/VendômeCover.jpg" alt="" className={styles.card_image} />
    //   </Link>
    //   <Link href="" className={styles.card_title}>
    //     Actualités du club
    //   </Link>
    // </section>

    <section className={styles.card_container}>
      <Link href={CardProps.url}>
        <img
          src={CardProps.image}
          alt={CardProps.alt}
          className={styles.card_image}
        />
      </Link>
      <Link href={CardProps.url} className={styles.card_title}>
        {CardProps.title}
      </Link>
    </section>
  );
};

export default CardHome;
