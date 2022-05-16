export interface Applicant
{
    id:number,
    name:string,
    username:string,
    email:string,
    address:{
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat:string,
        lng:string
      }
    },
    phone:string,
    website:string,
    company:{
      name:string,
      catchPhrase:string,
      bs:string
    }
}

export interface MovieDe
{
  id:string,
  rank:number,
  rankUpDown:number,
  title:string,
  fullTitle:string,
  year:number,
  image:string,
  crew:string,
  imDbRating:string,
  imDbRatingCount:string
}
