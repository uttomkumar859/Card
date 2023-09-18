import './component/card.css'
// banner images
import bannerImg from './images/banner.jpg'
// banner images
import shirt1 from './images/IMG_20230916_094541.png'
import shirt2 from './images/IMG_20230916_094625.png'
import shirt3 from './images/IMG_20230916_094652.png'
// woman image import
import woman1 from './images/woman1.png'
import woman2 from './images/woman2.png'
import woman3 from './images/woman3.png'
// woman image import
// baby image import
import baby1 from './images/baby1.png'
import baby2 from './images/baby2.png'
import baby3 from './images/baby3.png'
// baby image import
import  Cardcomponent from './component/card'

function App() {
   //----man clothes info----
  const dataArray = [{
    img : shirt1,
    heading: 'Sleeve T-shirt',
    price : '180 tk',
    title : 'Fashion New Long Sleeve Casual Y-shirt for Men ',
    btn : 'Buy Now'
  },
  {
    img : shirt2,
    heading: 'Sleeve T-shirt',
    price : '100 tk',
    title : 'Fashion New Long Sleeve Casual Y-shirt for Men ',
    btn : 'Buy Now'
  },
  {
    img : shirt3,
    heading: 'Sleeve T-shirt',
    price : '300 tk',
    title : 'Fashion New Long Sleeve Casual Y-shirt for Men ',
    btn : 'Buy Now'
  }];
 
  //----woman clothes info----
  const dataArray2 = [{
    img : woman1,
    heading: 'Sleeve T-shirt',
    price : '180 tk',
    title : 'Fashion New Long Sleeve Casual Y-shirt for Men ',
    btn : 'Buy Now'
  },
  {
    img : woman2,
    heading: 'Sleeve T-shirt',
    price : '100 tk',
    title : 'Fashion New Long Sleeve Casual Y-shirt for Men ',
    btn : 'Buy Now'
  },
  {
    img : woman3,
    heading: 'Sleeve T-shirt',
    price : '300 tk',
    title : 'Fashion New Long Sleeve Casual Y-shirt for Men ',
    btn : 'Buy Now'
  }];
 //----baby clothes info----
 const dataArray3 = [{
  img : baby1,
  heading: 'Sleeve T-shirt',
  price : '180 tk',
  title : 'Fashion New Long Sleeve Casual Y-shirt for Men ',
  btn : 'Buy Now'
},
{
  img : baby2,
  heading: 'Sleeve T-shirt',
  price : '100 tk',
  title : 'Fashion New Long Sleeve Casual Y-shirt for Men ',
  btn : 'Buy Now'
},
{
  img : baby3,
  heading: 'Sleeve T-shirt',
  price : '300 tk',
  title : 'Fashion New Long Sleeve Casual Y-shirt for Men ',
  btn : 'Buy Now'
}];
 
  return (
    <>
    <div className="banner">
        <img src={bannerImg} alt="banner" />
    </div>
      <div className='card_design'>
        <h1>Mens Clothes</h1>
        <div className='card_flex'>
          {dataArray.map(({ img, heading, price, title, btn }, index) => {
            // eslint-disable-next-line react/jsx-key
            return <Cardcomponent {...{ key: index, img, heading, price, title, btn }} />
          })}
        </div>
      </div>
      <div className='card_design'>
      <h1>Womans Clothes</h1>
        <div className='card_flex'>
          {dataArray2.map(({ img, heading, price, title, btn }, index) => {
            // eslint-disable-next-line react/jsx-key
            return <Cardcomponent {...{ key: index, img, heading, price, title, btn }} />
          })}
        </div>
      </div>
      <div className='card_design'>
      <h1>Bady Clothes</h1>
        <div className='card_flex'>
          {dataArray3.map(({ img, heading, price, title, btn }, index) => {
            // eslint-disable-next-line react/jsx-key
            return <Cardcomponent {...{ key: index, img, heading, price, title, btn }} />
          })}
        </div>
      </div>
    </>
  )
}

export default App;
