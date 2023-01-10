import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

interface Data{
  pizza:any;
}

const PizzaCard:React.FC<Data> = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="200" height="200" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>{pizza.prices[0]} JOD</span>
      <p className={styles.desc}>
       {pizza.desc}
      </p>
    </div>
  );
};

export default PizzaCard;
