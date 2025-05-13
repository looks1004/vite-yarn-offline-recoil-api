import styles from './Card.module.scss'
import { CardDTO } from '../types/card'

interface Props {
  data: CardDTO
  handleDialog: (eventValue: boolean) => void
  handleSetData: (eventValue: CardDTO) => void
}

function Card({data, handleDialog, handleSetData} : Props) {

    const imgDomain ='이미지 주소의 도메인 부분';

    const openDialog = ()=>{
        console.log("함수호출")
        handleDialog(true)
        handleSetData(data)
    }
  return (
    <div className={styles.card} onClick={openDialog}>
        <img src={imgDomain+data.benefitCardImgUrl} alt={data.cardProductName} className={styles.card__image}/>
    </div>
  )
}

export default Card
