import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [Src, setSrc] = useState(<img src='https://m.media-amazon.com/images/I/6110RmPG+XL._AC_SY550_.jpg' />);

  return (
    <>
      <div className='container'>
        <div className='container1'>
          <h1>{Src}</h1>
          <button className='cart'>ADD TO CART</button>
          <button className='buynow'>BUY NOW</button>
        </div>
        <div className='container2'>
          <h3 className='mildin'>ZEROYAA Men's Banded Collar Slim Fit Long Sleeve Casual Button Down Dress Shirts with Pocket</h3><br />
          <p className='para'>Men Slim Fit Solid Spread Collar Formal Shirt <b>#JustHere</b></p>
          <p className='special'>Special Price</p>

          <h2 className='price'>₹2,000</h2>
          <p className='original'>₹2,999</p>
          <p className='minus'>81% off</p>
          
          <br /><br />
          
          <button id='star'>3.9 **</button>
          <p id='reviews'>68,661 ratings and 4,726 reviews</p>
          <img id='assured' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' />

          <br /><br />

          <div className='sub-container'>
            <div className='sub-container1'>Color</div>

            <div className='buttons'>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/6110RmPG+XL._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/6110RmPG+XL._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/61Vn7aaWQfL._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/61Vn7aaWQfL._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/610UXHZXhfL._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/610UXHZXhfL._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/61b1B32+57L._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/61b1B32+57L._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/817+FTpEnrL._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/817+FTpEnrL._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/61Ztyv6BDmL._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/61Ztyv6BDmL._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/61a6TPlOFKL._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/61a6TPlOFKL._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/61k2pSMc1bL._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/61k2pSMc1bL._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/61y-PM3R38L._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/61y-PM3R38L._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/613QHubQssL._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/613QHubQssL._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/61ZTsYsYEML._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/61ZTsYsYEML._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/61s1aYQFurL._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/61s1aYQFurL._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/81wi1NbBzGL._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/81wi1NbBzGL._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img src='https://m.media-amazon.com/images/I/61bLGmTymuL._AC_SY550_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/61bLGmTymuL._AC_SY550_.jpg' /></button>
              <button onClick={() => { setSrc(<img className='image2' src='https://m.media-amazon.com/images/I/61mXkE2hzuL._AC_SX466_.jpg' />) }}><img className='image1' src='https://m.media-amazon.com/images/I/61mXkE2hzuL._AC_SX466_.jpg' /></button>
            </div>
          </div>

          <br /><br />

          <div className='sub-container'>
            <div className='sub-container1'>Size</div>
            <div className='size-chart'>
              <button id='size'>S</button>
              <button id='size'>M</button>
              <button id='size'>L</button>
              <button id='size'>XL</button>
              <button id='size'>XXL</button>
            </div>

            <p id='size1'>Size Chart</p>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIxMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMyODc0RjAiIHN0cm9rZS13aWR0aD0iMS4zIj48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zNy4zNS42NUguNjV2MTAuN2gzNi43Vi42NXoiLz48cGF0aCBmaWxsPSIjODc4Nzg3IiBkPSJNNi42NSA4LjY1aDF2Mi43aC0xem00LTNIMTFsLS4zNS0uMzVWNWwtLjE1LjE1LS4xNS0uMTV2LjNsLS4zNS4zNWguMzV2NS43SDEwbC4zNS4zNXYuM2wuMTUtLjE1LjE1LjE1di0uM2wuMzUtLjM1aC0uMzV2LTUuN3ptNSAzSDE2bC0uMzUtLjM1VjhsLS4xNS4xNS0uMTUtLjE1di4zbC0uMzUuMzVoLjM1djIuN0gxNWwuMzUuMzV2LjNsLjE1LS4xNS4xNS4xNXYtLjNsLjM1LS4zNWgtLjM1di0yLjd6bTQtM2gxdjUuN2gtMXptNCAzaDF2Mi43aC0xem05IDBoMXYyLjdoLTF6bS00LTNoMXY1LjdoLTF6Ii8+PC9nPjwvc3ZnPg==' className='sizeChartImage' />
          </div>

          <div>
            <h3>Available offers</h3>
            <img className='tag' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' />
            <p className='para1'>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card <b>T&C</b></p><br />
            <img className='tag' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' />
            <p className='para1'>Bank Offer10% off up to ₹1,500 on SBI Credit Card Transactions of ₹4,990 and above <b>T&C</b></p><br />
            <img className='tag' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' />
            <p className='para1'>Bank Offer10% off up to ₹1,750 on SBI Credit Card EMI Transactions of ₹4,990 and above <b>T&C</b></p><br />
            <img className='tag' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' />
            <p className='para1'>Special PriceGet at flat ₹379 <b>T&C</b></p><br />
            <p className='offers'>+2 more offers</p>
          </div>


          <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==' />
          <p className='para1 para2'>Deliver to</p>
          <p className='para3'>Services</p>
          <p className='para4'>₹</p>
        </div>


      </div>
    </>
  );
}

export default App;


