import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './CommonNav.module.scss'
import navJson from './nav2.json'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { pageState } from '@/recoil/atoms/pageState'
import { searchState } from '@/recoil/atoms/searchState'



interface Navigation {
    index: number
    path: string
    label : string
    searchValue: string
    isActive: boolean
}

function CommonNav() {
    const location = useLocation()
    const [navigation, setNavigation] = useState<Navigation[]>(navJson)
    const [page , setPage] = useRecoilState(pageState)
    const [search , setSearch] = useRecoilState(searchState)
    

    useEffect(()=> {
        console.log(location.pathname)
        navigation.forEach((nav: Navigation)=>{
            nav.isActive = false

            if(nav.path === location.pathname || location.pathname.includes(nav.path)){
                nav.isActive = true
                setSearch(nav.searchValue)
                setPage(1)
            }
        })
        setNavigation([...navigation])
    } , [location.pathname])

    //useState로 선언한 반응성을 가진  데이터를 기반으로 UI를 반복호출 해보록 한다.
    const navLink = navigation.map((item:Navigation)=>{
        return (
            <Link to={item.path} className={item.isActive ? `${styles.navigation__menu} ${styles.active}` : `${styles.navigation__menu} ${styles.inactive}`} key={item.path}>
                <span className={styles.navigation__menu__label}>{item.label}</span>        
            </Link>
        )
    })

  return <nav className={styles.navigation}>{navLink}</nav>
  
}


export default CommonNav
