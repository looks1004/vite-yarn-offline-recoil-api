import { selector } from "recoil";

import axios  from "axios";
import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pageState";

//const API_URL = 'https://api.unsplash.com/search/photos'
//const API_KEY = 'Qs-YyeruH6tr7BnvHj7Rbxy5_dTR_cyIG9jwcULKI0s'
//const PER_PAGE = 30


//const searchValue ='Korea'
//const pageValue = 100

export const imageData = selector({
    key:"imageData" ,
    get: async({get}) => {
        const searchValue = get(searchState)
        const pageValue = get(pageState)  

        //API 호출
        
        try{
            //const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            const res = await axios.get(`${API_ENC_URL}?benefitCategoryCode=${searchValue}`)
            //console.log("imageSelector::",res)
            // 강의에서는 data.results 이고 내꺼는 data.data.benefitCardList
            //return res
            //await delay(2000); 로딩 이미지 확인하기 위한 조치
            console.log('imageSelectors__',res)
            
            return res.data.data.benefitCardList

        } catch (error) {
            console.log(error)
        }
    }
})
