export interface CardDTO{
    benefitCategoryCode: number, 
    benefitType: number,         
    benefitContents: string,     
    benefitCardImgUrl: string,  
    benefitCardLinkUrl: string, 
    cardProductName: string,     
    cardType: number,            
    cardCompanyCode: number,     
    cardCompanyName: string,
    cardCompanyOrderNumber: number,
    CardInfo: CardInfo      
}


interface CardInfo{
    benefitCategoryCode: number        
    // benefitCardList: CardDTO[]
}
