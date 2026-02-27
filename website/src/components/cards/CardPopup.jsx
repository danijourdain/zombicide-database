import Modal from 'react-modal';
import styles from './CardPopup.module.css';
import AddButton from '../AddButton';

const CardPopup = ({ isOpen, onClose, card }) => {
    return <Modal 
        appElement={document.getElementById('root')}
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel='Test modal'
        className={styles['popup-content']}
        overlayClassName={styles['popup-overlay']}
    >
        {card && (
            <>
                <div className={styles['modal-header']}>
                    <h2>{card.name}</h2>
                    <button onClick={onClose} className={styles['close-button']} aria-label='Close modal'>&times;</button>
                </div>
                <div className={styles['card-content']}>
                    <h3>{card.type} Card</h3>
                    {card.type.toLowerCase() === 'ranged' && (
                        <>
                            <p><b>Range type:</b> {card.range_type}</p>
                            <p><b>Range:</b> {card.min_range}-{card.max_range}</p>

                        </>
                    )}
                    {(card.type.toLowerCase() === 'ranged' || card.type.toLowerCase() === 'melee') && (
                        <>
                            <p><b>Dice:</b> {card.dice}</p>
                            <p><b>Damage:</b> {card.damage}</p>
                            <p><b>Success:</b> {card.success}</p>
                            <p><b>Dual wield:</b> {String(card.dual_wield)}</p>
                            <p><b>Open Door:</b> {String(card.open_door)}</p>
                        </>
                    )}
                    <p>{card.text}</p>
                </div>
                <div className={styles['add-button-container']}>
                    <AddButton onClick={null}/>
                </div>
            </>
        )}
    </Modal>;
}

export default CardPopup;