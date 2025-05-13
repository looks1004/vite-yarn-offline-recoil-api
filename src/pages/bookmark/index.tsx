import CommonHeader from '@/components/common/header/CommonHeader'
import { useEffect, useState } from 'react'
import Card from './components/Card'

//css
import styles from './styles/index.module.scss'
import { CardDTO } from '../index/types/card'


function index() {
  const [data, setData] = useState([])
  const getData =  () =>{
    const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))
    
     if(getLocalStorage || getLocalStorage !== null) setData(getLocalStorage)
      else setData([])
  }

   useEffect( ()=>{
     getData()
   },[])

  return  <div className={styles.page}>
            {/* 공통 헤더 UI 부분*/}
            <CommonHeader />
            <main className={styles.page__contents}>

                {/* 만약 데이터가 없을경우 */}
                {data.length === 0 ?  <div className={styles.page__contents__noData}>자료가 없습니다.</div> : 
                data.map((item:CardDTO)=>{
                  console.log({item})
                  return <Card prop_v2={item} key={item.benefitCardImgUrl}/>
                })}
               
            </main>
          </div>
  
}

export default index
