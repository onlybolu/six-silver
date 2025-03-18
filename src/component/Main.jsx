import React, { useEffect, useState } from "react";
import axios from "axios";
import "./main.css";
import { Link } from "react-router-dom";
import Section from "./Section";
import Upperleft from "./Upperleft";
import Uppertop from "./Uppertop";
const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="main w-100">
      <div className="content d-flex w-100">
        <div
          className="d-none d-md-flex"
          style={{ width: "20%", paddingLeft: "10px", paddingRight: "10px" }}
        >
          <Upperleft />
        </div>
        <div className="w-100">
          <Uppertop />
          <div className="upperbottom d-column d-md-flex">
            <div className="slide " style={{ width: "100%" }}>
              <div className="slide1">
                {/* <p>
                  Love is in the <br />
                  Air <br />
                  <br />
                  At
                  <br />
                  <span>
                    -27<sup>%</sup>
                  </span>
                  <br />
                  <button>visit</button>
                </p> */}

                <img
                  className="img-fluid h-100"
                  src="slideone.webp"
                  alt=""
                  style={{
                    borderRadius: "20px",
                    padding: "0px 10px",
                    width: "100%",
                  }}
                />
              </div>
              {/* <div className="slide2">
              <img
                className="img-fluid h-100"
                src="slidetwo.webp"
                width="650px"
                alt=""
              />
            </div> */}
            </div>

            <div
              className="sidebottom w-full md-w:1/2 d-flex flex-column justify-content-center align-items-center"
              style={{ margin: "10px" }}
            >
              <div className="tiltle">
                <h1>Top sellers</h1>
              </div>
              <div className="imgslide">
                <div className="img1 d-flex flex-column justify-center align-items-center">
                  <img src="bracelet3.webp" alt="" />
                  <div className="text">
                    <h2>curvalian bracelet</h2>
                    <p>$28.00</p>
                    <button>Shop now</button>
                  </div>
                  {/* {products.map((product) => (
                    <div className="product-card" key={product._id}>
                      <img src={product.image} alt={product.name} />
                      <div className="text">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button>Buy</button>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <br />
      <div className="cornrolls d-flex flex-column flex-md-row gap-5">
        <div className="ads d-flex justify-content-center align-items-center">
          <img className="img-fluid" src="ads.webp" alt="" />
        </div>
        <div className="rolls w-100">
          <div className="rolls1" style={{ width: "70%" }}>
            <div className="ptag">
              <p>-26%</p>
            </div>
            <img className="img-fluid" src="bracelet7.webp" alt="" />
            <div className="context">
              <p>Pierścionek Zaręczynowy In Love </p>
              <div className="price">
                <del>$100</del>
                <span>$74</span>
              </div>
              {/* <button>Add to cart</button> */}
            </div>
          </div>
          <div className="rolls1" style={{ width: "70%" }}>
            <div className="ptag">
              <p>-26%</p>
            </div>
            <img className="img-fluid" src="bracelet4.webp" alt="" />
            <div className="context">
              <p>Pierścionek Zaręczynowy In Love </p>
              <div className="price">
                <del>$100</del>
                <span>$74</span>
              </div>
              {/* <button>Add to cart</button> */}
            </div>
          </div>
          <div className="rolls1" style={{ width: "70%" }}>
            <div className="ptag">
              <p>-26%</p>
            </div>
            <img className="img-fluid" src="bracelet5.webp" alt="" />
            <div className="context">
              <p>Pierścionek Zaręczynowy In Love </p>
              <div className="price">
                <del>$100</del>
                <span>$74</span>
              </div>
              {/* <button>Add to cart</button> */}
            </div>
          </div>
          <div className="rolls1" style={{ width: "70%" }}>
            <div className="ptag">
              <p>-26%</p>
            </div>
            <img className="img-fluid" src="bracelet7.webp" alt="" />
            <div className="context">
              <p>Pierścionek Zaręczynowy In Love </p>
              <div className="price">
                <del>$100</del>
                <span>$74</span>
              </div>
              {/* <button>Add to cart</button> */}
            </div>
          </div>
          <div className="rolls1" style={{ width: "70%" }}>
            <div className="ptag">
              <p>-26%</p>
            </div>
            <img className="img-fluid" src="bracelet6.webp" alt="" />
            <div className="context">
              <p>Pierścionek Zaręczynowy In Love </p>
              <div className="price">
                <del>$100</del>
                <span>$74</span>
              </div>
              {/* <button>Add to cart</button> */}
            </div>
          </div>
          <div className="rolls1" style={{ width: "70%" }}>
            <div className="ptag">
              <p>-26%</p>
            </div>
            <img className="img-fluid" src="bracelet8.webp" alt="" />
            <div className="context">
              <p>Pierścionek Zaręczynowy In Love </p>
              <div className="price">
                <del>$100</del>
                <span>$74</span>
              </div>
              {/* <button>Add to cart</button> */}
            </div>
          </div>
          <div className="rolls1" style={{ width: "70%" }}>
            <div className="ptag">
              <p>-26%</p>
            </div>
            <img className="img-fluid" src="bracelet9.webp" alt="" />
            <div className="context">
              <p>Pierścionek Zaręczynowy In Love </p>
              <div className="price">
                <del>$100</del>
                <span>$74</span>
              </div>
              {/* <button>Add to cart</button> */}
            </div>
          </div>
        </div>
      </div>

      <br />
      <Section />
      <div className="d-flex justify-content-center align-items-center">
        <img src="holiday.webp" alt="" />
      </div>
      <br />
      <div className="title">
        <h1>Passionate Season</h1>
      </div>
      <br />
      <br />
      <div className="cornrolls d-flex flex-column flex-md-row gap-5">
        <div className="ads d-flex justify-content-center align-items-center">
          <img src="banner1.webp" alt="" />
        </div>
        <div className="rolls d-flex w-100">
          <div className="d-flex gap-4 w-100">
            <div className="ring1">
              <img className="" src="ring1.webp" style={{width:"250px",height:"60%"}} alt="" />
              <p style={{position:"relative"}}>PIERŚCIONKI ZARĘCZYNOWE Z DIAMENTEM</p>
            </div>
            <div className="ring1">
              <img src="ring2.webp" style={{width:"250px",height:"60%"}} alt="" />
              <p style={{position:"relative"}}>PIERŚCIONKI ZARĘCZYNOWE Z DIAMENTEM</p>
            </div>
            <div className="ring1">
              <img src="ring3.webp" style={{width:"250px",height:"60%"}} alt="" />
              <p style={{position:"relative"}}>PIERŚCIONKI ZARĘCZYNOWE Z DIAMENTEM</p>
            </div>
          

            <div className="ring1">
              <img src="ring6.webp" style={{width:"250px",height:"60%"}} alt="" />
              <p style={{position:"relative"}}>PIERŚCIONKI ZARĘCZYNOWE Z DIAMENTEM</p>
            </div>
            <div className="ring1">
              <img src="ring5.webp" style={{width:"250px",height:"60%"}} alt="" />
              <p style={{position:"relative"}}>PIERŚCIONKI ZARĘCZYNOWE Z DIAMENTEM</p>
            </div>
            <div className="ring1">
              <img src="ring6.webp" style={{width:"250px",height:"60%"}} alt="" />
              <p style={{position:"relative"}}>PIERŚCIONKI ZARĘCZYNOWE Z DIAMENTEM</p>
            </div>
          
        </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="video d-none d-md-flex">
        <video src="adsvid.mp4" muted autoPlay loop></video>
      </div>
      <div className="title">
        <h1>Calvin Klein</h1>
      </div>
      <br />
      <br />
      <div className="px-2 d-column d-md-flex">
        <div className="banner  d-flex justify-content-center align-items-center">
          <img src="banner2.webp" alt="" />
        </div>
        <div className="klein">
          <div className="klein1">
            <div className="ringer">
              <img src="calvin1.webp" alt="" />
              <div className="text">
                <p>
                  Bransoletka CALVIN <br /> KLEIN, Skóra, Stal{" "}
                </p>
                <br />
                <p>$399.00</p>
                <br />
              </div>
            </div>
            <div className="ringer">
              <img src="calvin2.webp" alt="" />
              <div className="text">
                <p>
                  Bransoletka CALVIN <br /> KLEIN, Skóra, Stal{" "}
                </p>
                <br />
                <p>$399.00</p>
                <br />
              </div>
            </div>
            <div className="ringer">
              <img src="calvin3.webp" alt="" />
              <div className="text">
                <p>
                  Bransoletka CALVIN <br /> KLEIN, Skóra, Stal{" "}
                </p>
                <br />
                <p>$399.00</p>
                <br />
              </div>
            </div>
            <div className="ringer">
              <img src="calvin4.webp" alt="" />
              <div className="text">
                <p>
                  Bransoletka CALVIN <br /> KLEIN, Skóra, Stal{" "}
                </p>
                <br />
                <p>$250.00</p>
                <br />
              </div>
            </div>
          </div>

          <div className="klein1">
            <div className="ringer">
              <img src="calvin5.webp" alt="" />
              <div className="text">
                <p>
                  Bransoletka CALVIN <br /> KLEIN, Skóra, Stal{" "}
                </p>
                <br />
                <p>$289.00</p>
                <br />
              </div>
            </div>
            <div className="ringer">
              <img src="calvin6.webp" alt="" />
              <div className="text">
                <p>
                  Bransoletka CALVIN <br /> KLEIN, Skóra, Stal{" "}
                </p>
                <br />
                <p>$350.00</p>
                <br />
              </div>
            </div>
            <div className="ringer">
              <img src="calvin7.webp" alt="" />
              <div className="text">
                <p>
                  Bransoletka CALVIN <br /> KLEIN, Skóra, Stal{" "}
                </p>
                <br />
                <p>$500.00</p>
                <br />
              </div>
            </div>
            <div className="ringer">
              <img src="calvin1.webp" alt="" />
              <div className="text">
                <p>
                  Bransoletka CALVIN <br /> KLEIN, Skóra, Stal{" "}
                </p>
                <br />
                <p>$360.00</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
