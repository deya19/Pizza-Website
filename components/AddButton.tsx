import styles from "../styles/Add.module.css";

interface Data{
  setClose:(value: boolean) => void;
  }

const AddButton:React.FC<Data> = ({setClose}) => {
  return (
    <div className={styles.mainAddButton} onClick={() => setClose(false)}>
      Add New Pizza
    </div>
  )
}

export default AddButton