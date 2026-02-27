import styles from './AddButton.module.css'

const AddButton = ({onClick}) => {
    return <button onClick={onClick} className={styles['add-button']}>Add</button>;
} 

export default AddButton;