import React, { useState, useEffect } from "react";
import TimeImg from "../img/Set_time-01.png";
import Tomato from "../img/Mask Group 17.png";
import Ginger from "../img/pngtree-herbal-ingredients-transparent-image-png-image_3206949-removebg-preview.png";
import Refrigerator from "../img/Mask Group 20.png";
import { Link } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1`
        );
        const data = await response.json();
        setDetails(data);
        console.log(data.ingredients.appliances[0].name);
      } catch (error) {
     
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="sm:mx-20 mx-5 mt-5">
      <Link to="/" className="p-2">
        <h3 className="py-2 font-bold text-xl">{"<"}</h3>  </Link>
      </div>
      <div className="grid grid-cols-2">
        <div className="sm:mx-20 mx-5 mt-5  max-w-xl">
          <p className="font-bold text-5xl inline">{details && details.name}</p>
          <p className="inline text-white ml-6 bg-green-500 rounded px-1">
            <span className="texl-s">4.2 ⭐</span>
          </p>
          <p className="opacity-50 mt-6">
            Mughlai masala is a style of cookery developed in the Indian
            Subcontinent by the imperial kitchens of the Mughal Empire.
          </p>
          <div className="mt-6">
            <img className="inline" src={TimeImg} alt="" />
            <p className="inline ml-3 font-bold text-lg">
              {details && details.timeToPrepare}
            </p>
          </div>
        </div>

        <div className="relative ml-auto mt-20 w-96 h-56">
          <img
            className="absolute top-0 left-0 w-full h-full"
            src={Tomato}
            alt=""
          />
          <img
            className="absolute top-0 left-0 w-full h-full"
            src={Ginger}
            alt=""
          />
        </div>
      </div>
      <hr className="mx-20 mt-8 " />

      <div className="sm:mx-20 mx-5 mt-5">
        <h2 className="font-bold text-4xl">Ingredients</h2>
        <p className="mt-3 opacity-50">For 2 People.</p>
      </div>
      <hr className="mx-20 mt-3" />

      <div className="mx-20 sm:mx-20  mt-5">
        <h1 className="font-bold text-xl">Vegitables</h1>
        <table className="mt-3">
          <tr>
            <td className="pr-40">Cauliflower
              {/* {details && details.ingredients.vegetables[0].name} */}
            </td>
            <td>1
            {/* {details && details.ingredients.vegetables[0].quantity} */}
              </td>
          </tr>
          <tr>
            <td>Tomato
                {/* {details && details.ingredients.vegetables[1].name} */}
                </td>
            <td>10
                {/* {details && details.ingredients.vegetables[1].quantity} */}
            </td>
          </tr>
          <tr>
            <td>Spinach
                {/* {details && details.ingredients.vegetables[2].name} */}
            </td>
            <td>1/2 Kg
            {/* {details && details.ingredients.vegetables[2].quantity} */}
            </td>
          </tr>
        </table>

        <h1 className="font-bold text-xl mt-8">Spices</h1>
        <table className="mt-3">
          <tr>
            <td className="pr-40">Coriander
              {/* {details.ingredients.spices[0] &&
                details.ingredients.spices[0].name} */}
            </td>
            <td>100 gm
                {/* {details && details.ingredients.spices[0].quantity} */}
                </td>
          </tr>
          <tr>
            <td>Mustard Oil
                {/* {details && details.ingredients.spices[1].name} */}
                </td>
            <td>1/2 litres
                {/* {details && details.ingredients.spices[1].quantity} */}
                </td>
          </tr>
        </table>
      </div>
      <hr className="mx-20 mt-3" />

      <h2 className="font-bold text-4xl mx-5 sm:mx-20 mt-5">Appliances</h2>
      <div className="flex flex-row  sm:mx-20 mx-5 mt-5 mb-20">
        <div className="mr-10 bg-gray-400 p-3 rounded-md ">
          <img src={Refrigerator} alt="" className="mx-auto" />
          {/* <p>{details && details.ingredients.appliances[0].name}</p> */}
          <p>Refrigerator</p>
        </div>
        <div className="mr-10  bg-gray-400 p-3 rounded-md">
          <img src={Refrigerator} alt="" className="mx-auto" />
          {/* <p>{details && details.ingredients.appliances[1].name}</p> */}
          <p>Microwave</p>
        </div>
        <div className="mr-10  bg-gray-400 p-3 rounded-md">
          <img src={Refrigerator} alt="" className="mx-auto" />
          {/* <p>{details && details.ingredients.appliances[2].name}</p> */}
          <p>Stove</p>
        </div>
      </div>
    </>
  );
};

export default Details;
