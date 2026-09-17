// function Banner() {
//     return (
//         <section className="hero-banner">
//             {/* <img src="https://data1.ibtimes.co.in/en/full/790294/flipkarts-big-billion-days-2023-dates-are-your-guide-avail-best-offers-experience-details.png?h=450&l=50&t=40" alt="Big Billion Days" /> */}
//             <div className="banner-content">
                
//                 <h1>Big Billion Days</h1>
//                 <p>
//                     Get amazing deals on electronics, fashion and more.
//                 </p>

//                 <button>Shop Now</button>

//             </div>
//         </section>

//     );

// }

// export default Banner;

function Banner() {
  return (
    <section className="hero-banner">
      <div className="banner-content">
        <p className="banner-small-text">BIG SAVINGS, BIG SMILES</p>

        <h1>
          Big Billion <span>Days</span>
        </h1>

        <p className="banner-description">
          Get amazing deals on electronics, fashion and more.
        </p>

        <button className="shop-now-btn">Shop Now</button>
      </div>

      <div className="banner-image">
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/460/224/image/4c13fdad5bdb1418.jpg?q=80"
          alt="Shopping offers"
        />
      </div>
    </section>
  );
}

export default Banner;