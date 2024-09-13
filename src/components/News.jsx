import styled from "../components/GreatFontStyle.module.css"

const News = () => {
  return (
    <div className="container">
         <div className="w-full flex flex-col items-center justify-center">
         <h1 className={styled['great-font']}>Charcha Chronicles</h1>
         <h2 className={styled['volkhov-font']}>News & Blog</h2>
         </div>
    </div>
  )
}

export default News