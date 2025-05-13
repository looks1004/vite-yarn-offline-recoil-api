import { useState } from 'react'
import styles from './CommonSearchBar.module.scss'
import  {searchState} from '@/recoil/atoms/searchState'
import { useRecoilState } from 'recoil'

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState)
  const [text, setText] = useState('') //초기값은 빈 값의 string
  const onChange = (event) =>{
      console.log(event.target.value)
      setText(event.target.value)
  }
  const onSearch = () =>{
    if(text === ''){
      // input 태그 안에 빈 값으로 검색하였을때 => searchint default value
      setSearch('korea')
    } else {
      setSearch(text)
    }
  }
  
  const handleKeyDown = (event: React.KeyboardEvent)=>{
    if(event.key === 'Enter'){
        if(text === ''){
          // input 태그 안에 빈 값으로 검색하였을때 => searchint default value
          setSearch('korea')
        } else {
          setSearch(text)
        }
    }
  }

  return (
    <div className={styles.searchBar}>
        <div className={styles.searchBar__search}>
            <input type='text' placeholder='찾으실 이미지를 검색하세요' value={text} className={styles.searchBar__search__input} onChange={onChange} onKeyDown={handleKeyDown}/>
            <img src='src/assets/icons/icon-search.svg' alt='' onClick={onSearch}/>
        </div>
    </div>
  )
}

export default CommonSearchBar
