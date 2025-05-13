import { CardDTO } from '@/pages/index/types/card'
import styles from './Card.module.scss'

interface Props {
    prop_v2: CardDTO
}

const imgDomain ='이미지 주소의 도메인 부분';
function Card({prop_v2}:Props) {
  return (
    <div className={styles.Card}>
        <div className={styles.card__imageBox}>
            <img src={imgDomain+prop_v2.benefitCardImgUrl} alt={prop_v2.benefitContents} className={styles.card__imageBox__image}/>
        </div>
        <div className={styles.card__infoBox}>
            <div className={styles.card__infoBox__row}>
                <span className={styles.label}>작성자</span>
                <span className={styles.value}>{prop_v2.cardProductName}</span>
            </div>
            <div className={styles.card__infoBox__row}>
                <span className={styles.label}>이미지 크기</span>
                <span className={styles.value}>{prop_v2.cardCompanyName}({prop_v2.cardCompanyCode})</span>
            </div>
            <div className={styles.card__infoBox__row}>
                <span className={styles.label}>업로드 날짜</span>
                <span className={styles.value}>값</span>
            </div>
            <div className={styles.card__infoBox__row}>
                <span className={styles.label}>마지막 업데이트</span>
                <span className={styles.value}>값</span>
            </div>
            <div className={styles.card__infoBox__row}>
                <span className={styles.label}>다운로드 수</span>
                <span className={styles.value}>{prop_v2.benefitContents}</span>
            </div>
        </div>
    </div>
  )
}

export default Card
