//rfce
import { useEffect, useMemo, useState } from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { imageData } from '@/recoil/selectors/imageSelectors'
import CommonHeader from '@components/common/header/CommonHeader'
import CommonSearchBar from '@components/common/searchBar/CommonSearchBar'
import CommonNav from '@/components/common/navigation/CommonNav'
import CommonFooter from '@/components/common/footer/CommonFooter'
import Card from './components/Card'
//css
import styles from './styles/index.module.scss'
import { CardDTO } from './types/card'
import DetailDialog from '@/components/common/dialog/DetailDialog'
import Loading from './components/Loading'




function index() {
  //const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  //const imgSelector = useRecoilValue(imageData) //API 호출부 (매번 호출)
  const imgSelector = useRecoilValueLoadable(imageData) //API 호출부 (캐싱방식)  
  const [imgData, setImgData] = useState<CardDTO>()
  const [open, setOpen] = useState<boolean>(false) // 이미지 상세 다이얼로그 발생(관리) state
         // 강의에서는 data.results 이고 내꺼는 data.data.benefitCardList

        //  const CARD_LIST = imgSelector.data.data.benefitCardList.map((card: CardDTO)=>{
        //     return <Card data={card} key={card.benefitCardImgUrl} handleDialog={setOpen} 
        //     handleSetData={setImgData}/>
        //  })
        

          const CARD_LIST = useMemo( ()=> {
             console.log("useMemo:::", imgSelector)
             if(imgSelector.state==="hasValue"){  //recoil 상태값
               const result =imgSelector.contents.map((card: CardDTO)=>{  // 데이터가 담길때 contents라는 변수에 저장됨
                     return <Card data={card} key={card.benefitCardImgUrl} handleDialog={setOpen} handleSetData={setImgData}/>
                  })
                  return result
             } else {
               return  <Loading/>
             }
          }, [imgSelector])


  return (
    <div className={styles.page}>
        {/* 공통 헤더 UI 부분*/}       
        <CommonHeader />
        {/* 공통 네비게이션 UI 부분 */}
        <CommonNav/>
        <div className={styles.page__contents}>
            <div className={styles.page__contents__introBox}> 
                <div className={styles.wrapper}>
                    <span className={styles.wrapper__title}>PhotoSplash</span>
                    <span className={styles.wrapper__desc}>
                        인터넷의 시각자료 입니다. <br />
                        모든 지역에 있는 크리에이터들의 지원을 받습니다.
                    </span>
                    {/* 검색창 UI 부분 */}
                    <CommonSearchBar/>
                </div>
            </div>
            <div className={styles.page__contents__imageBox}>
               {CARD_LIST}
            </div>
        </div>
        {/* 공통 푸터 UI 부분 */}
        <CommonFooter/>
        {open &&  <DetailDialog data={imgData} handleDialog={setOpen}/>}
    </div>
  )
}

export default index
