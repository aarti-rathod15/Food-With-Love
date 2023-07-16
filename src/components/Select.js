import React, { useState, useEffect } from "react";
import CalImg from "../img/Select_date-01.png";
import TimeImg from "../img/Set_time-01.png";
import { Link } from "react-router-dom";

const Select = () => {
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const [month, day, year] = formattedDate.split(" ");
    return `${day} ${month} ${year}`;
  };
  const date = new Date();

  const [dishes, setDishes] = useState();
  const [recommendedDish, setRecommendedDish] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/`
    )
      .then((res) => res.json())
      .then((data) => {
        setDishes(data.popularDishes);
        setRecommendedDish(data.dishes);
      });
  };

  return (
    <>
      <div className="sm:mx-20 mx-0 relative">
        <div className="font-signature py-5 text-2xl font-semibold">
          <h3>
            <span className="mx-5">{"<"}</span>Select Dishes
          </h3>
        </div>

        <div className="bg-black py-6 w-full z-0"></div>

        <div className="mx-auto flex justify-center bg-white py-6 w-fit rounded-lg z-50 absolute  left-0 right-0 bottom-0 transform translate-y-2/3 shadow-md">
          <div className="mx-5 w-fit">
            <img className="inline" src={CalImg} alt="" /> {formatDate(date)}
          </div>
          <div className="flex-col mx-5">
            <img className="inline" src={TimeImg} alt="" />{" "}
            {"10.30 Pm-12.30 Pm"}
          </div>
        </div>
      </div>
      <div className="flex flex-row  opacity-60 justify-center py-3 pt-16 sm:mx-12">
        <p className="mx-2 p-1 border-2 rounded-[20px] hover:border-orange-400 hover:text-orange-400 hover:opacity-100 border-gray-400 text-gray-400">
          <span className="mx-4">Italian</span>
        </p>
        <p className="mx-2 p-1 border-2 rounded-[20px] hover:border-orange-400 hover:text-orange-400 hover:opacity-100 border-gray-400 text-gray-400">
          <span className="mx-4">Indian</span>
        </p>
        <p className="mx-2 p-1 border-2 rounded-[20px] hover:border-orange-400 hover:text-orange-400 hover:opacity-100 border-gray-400 text-gray-400">
          <span className="mx-4">Indian</span>
        </p>
        <p className="mx-2 p-1 border-2 rounded-[20px] hover:border-orange-400 hover:text-orange-400 hover:opacity-100 border-gray-400 text-gray-400">
          <span className="mx-4">Indian</span>
        </p>
      </div>
      <div className="mx-20">
        <h3 className="font-semibold text-2xl">Popular Dishes</h3>
        <div className="grid w-full grid-cols-4 sm:grid-cols-2 md:grid-cols-4 sm:px-0">
          {dishes &&
            dishes.map((dish, id) => (
              <div key={id} className="mx-2 mt-5">
                <div className="relative">
                  <img
                    className="border-2 sm:p-2 md:p-2 p-1 opacity-80 w-28 h-20 md:w-60 md:h-60 rounded-full border-orange-400 m-2"
                    src={dish.image}
                    alt=""
                  />
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-white bg-black bg-opacity-10 rounded-lg p-2 shadow-md text-xs md:text-xl">
                    {dish.name}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-5 mx-20 flex flex-row items-center">
        <p className="font-semibold text-2xl">Recommended</p>
        <div className="ml-auto">
          <button className="bg-black rounded-lg py-2 px-6 text-white">
            Menu
          </button>
        </div>
      </div>

      <div className="mb-12">
        {recommendedDish &&
          recommendedDish.map((details, id) => {
            return (
              <>
                <div className="mt-8 mx-28 flex flex-row">
                  <div key={id} className="grid grid-rows-3 w-fit">
                    <div>
                      <p className="inline mr-5 text-xl font-bold">
                        {details.name}{" "}
                      </p>
                      <p className="inline text-white bg-green-500 rounded p-1">
                        {details.rating} <span>⭐</span>
                      </p>
                    </div>
                    <div className="flex flex-col-2">
                      <div>
                        <p className="inline mr-5">Refrigerator</p>
                        <p className="inline mr-8">Refrigerator</p>
                      </div>
                      <div className=" border-l-4">
                        <p className="ml-5 font-bold">Ingredients</p>
                        <Link to="/details" className="text-orange-500 ml-5">
                          {"View list >"}
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p>{details.description}</p>
                    </div>
                  </div>
                  <div className="relative ml-auto">
                    <img
                      className="h-40 w-72 rounded-lg"
                      src={details.image}
                      alt=""
                    />
                    <div className="absolute top-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <button className="py-2 px-6 border-2 rounded-md border-orange-500 bg-white flex items-center">
                        Add <span className="ml-2">+</span>
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="mx-12 mt-8 " />
                
              </>
            );
          })}
       <div className="flex flex-row items-center justify-center mt-5">
        <button className="bg-black rounded-lg py-2 px-6 text-white">
          3 food items Selected{" > "}
        </button>
      </div>
      </div>
    </>
  );
};

export default Select;
