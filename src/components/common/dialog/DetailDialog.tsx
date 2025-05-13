import { CardDTO } from '@/pages/index/types/card'
import styles from  './DetailDialog.module.scss'
import { useEffect, useState, useRef } from 'react'
import toast,{ toastConfig} from 'react-simple-toasts'
import 'react-simple-toasts/dist/theme/dark.css'

toastConfig({ theme: 'dark'})

interface Props {
    data: CardDTO
    handleDialog: (eventValue: boolean) => void
}

function DetailDialog({data, handleDialog}:Props) {
    const [bookmark,setBookmark] = useState(false)  //북마크 버튼 클릭시 빨간색 표기 처리 변수
    
    const popupRef = useRef(null);
    console.log('popupRef_1111',popupRef)

    const imgDomain ='이미지 주소의 도메인 부분';
    //다이얼로그 끄기
    const closeDialog = ()=>{
        console.log('close 호출')
        handleDialog(false)
        //event.stopPropagation()
    }
  //북마크 추가 이벤트 start
    const addBookmark = (selected: CardDTO) =>{
        setBookmark(true)
  
        const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))
        // 1. 로컬스토리지에 bookmark라는 데이터가 없을경우
        if(!getLocalStorage || getLocalStorage===null){      
            localStorage.setItem('bookmark', JSON.stringify([selected]))
            toast('1.해당 이미지를 북마크에 저장하였습니다. ;)')
        }else{
            // 2. 해당 이미지가 이미 로컬스토리지 bookmark라는 데이터에 저장되어 있을경우
            if(getLocalStorage.findIndex((item:CardDTO)=>item.benefitCardImgUrl === selected.benefitCardImgUrl) > -1) {

                      
                toast("해당 이미지는 이미 북마크에 추가된 상태입니다. !!")
            }else{
            // 3. 해당 이미지가 로컬스토리지 bookmark라는 데이터에 저장되어 있지 않을경우  + bookmark라는 데이터에 이미 어떤 값이 담겨 있는 경우 
            const res = [...getLocalStorage]
            res.push(selected)
           
            localStorage.setItem('bookmark',JSON.stringify(res))
            toast('2.해당 이미지를 북마크에 저장하였습니다. ;)')
            }    
        }
    }//북마크 추가 이벤트 end 


    useEffect(()=>{  //선택한 이미지가 이미 북마크 된 이미지라면 북마크에 빨간색 표시
        const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))

        if (getLocalStorage && getLocalStorage.findIndex((item:CardDTO)=> item.benefitCardImgUrl===data.benefitCardImgUrl)>-1){
            const index = getLocalStorage.findIndex((item:CardDTO) => item.benefitCardImgUrl === data.benefitCardImgUrl);
            console.log("찾은 인덱스:", index);
            setBookmark(true)
        }else if(!getLocalStorage) return       
    },[])


    useEffect(()=>{  //팝업창 닫는 방법 여러개 추가 (위 useEffect에 추가 시키면 북마크한 이미지가 없다면 활성화 안됨)
         // ESC 키 눌렀을때 다이얼로그 창 닫기
         const escKeyDownCloseDialog = (e) =>{
             console.log('escKeyDownCloseDialog 함수호출')
             if  (e.key === 'Escape'){
                 closeDialog()
             }
         }
             
        // 팝업 이외의 영역 클릭이면 팝업 닫기
        
        const handleClickOutside = (e) => {            
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                closeDialog()
            }
          };
     
        document.addEventListener('keydown', escKeyDownCloseDialog)
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {            
            document.removeEventListener ('keydown', escKeyDownCloseDialog)   
            document.removeEventListener('mousedown', handleClickOutside);
        };
             
    },[])




    

  return (
    <div className={styles.container}>
        <div className={styles.container__dialog} ref={popupRef}>
            <div className={styles.container__dialog__header}>
                <div className={styles.close}>
                    <button className={styles.colose__button} onClick={closeDialog}>
                        {/* 구글 아이콘 사용*/}
                        <span className='material-symbols-outlined' style={{ fontSize:28 + 'px'}}>
                            close
                        </span>                        
                    </button>
                    <img src={imgDomain+data.benefitCardImgUrl} alt="사진작가 프로필 사진" className={styles.close__authorImage} />
                    <span className={styles.close__authorName}>{data.cardCompanyName}</span>
                </div>
                <div className={styles.bookmark}>
                    <button className={styles.bookmark__button} onClick={()=> addBookmark(data)}>
                        {/* 구글 아이콘 사용*/}
                        {bookmark ===false ? (
                             <span className="material-symbols-outlined" style={{ fontSize: 16 + 'px' }}>
                              favorite
                              </span>     
                        ) : ( <span className="material-symbols-outlined" style={{ fontSize:16 + 'px', color:'red'}}>
                              favorite
                              </span>     
                        )}  
                    </button>
                    <button className={styles.bookmark__button}>다운로드</button>
                </div>
            </div>
            <div className={styles.container__dialog__body}>
                <img src={imgDomain+data.benefitCardImgUrl} alt={data.benefitContents} className={styles.image} />
            </div>
            <div className={styles.container__dialog__footer}>
                <div className={styles.infoBox}>
                    <div className={styles.infoBox__item}>
                        <span className={styles.infoBox__item__label}>이미지 크기</span>
                        <span className={styles.infoBox__item__value}>상세 데이터 조회</span>
                    </div>
                    <div className={styles.infoBox__item}>
                        <span className={styles.infoBox__item__label}>업로드</span>
                        <span className={styles.infoBox__item__value}>상세 데이터 조회</span>
                    </div>
                    <div className={styles.infoBox__item}>
                        <span className={styles.infoBox__item__label}>마지막 업데이트</span>
                        <span className={styles.infoBox__item__value}>상세 데이터 조회</span>
                    </div>
                    <div className={styles.infoBox__item}>
                        <span className={styles.infoBox__item__label}>다운로드</span>
                        <span className={styles.infoBox__item__value}>상세 데이터 조회</span>
                    </div>
                </div>
                <div  className={styles.tagBox}>
                    <div className={styles.tagBox__tab}>태그 데이터</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailDialog
