import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faX } from "@fortawesome/free-solid-svg-icons";
import Loading from "./loading";
import { useRef } from "react";

const Card = ({ MainOptions }) => {
  const [data, setdata] = useState([]);
  const [newdata, setnewdata] = useState([]);
  // const [like, setLike] = useState(false);
  const [oneBuy, setOneBuy] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const web = useRef();

  const getData = async () => {
    const options = MainOptions;
    setIsloading(true);

    try {
      const response = await axios.request(options);
      const { data } = response;

      const newArr = data.map((item) => ({
        category: item.category,
        id: item.id,
        image: item.image,
        price: item.price + "0" + " " + "UZS",
        title: item.title,
        likes: false,
      }));

      const kkk = JSON.parse(localStorage.getItem('like_card'))

     if(kkk){
      setdata(kkk);
     }else{
      setdata(newArr)
     }
      setIsloading(false);
      //  console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);




  const onToggleProp = (id, prop) => {

  
 const newArr = data.map(item => {
   
			if (item.id === id) {
       return { ...item, [prop]: !item[prop] }
      }
       return item
    })

    
    localStorage.setItem('like_card' , JSON.stringify(newArr))
    setdata(newArr)
	
	}


  const showOnebuy = () => {
    setOneBuy(true);
  };
  console.log(data);

  // const Filtered = (id) => {
  //     setdata((prev) => {
        
  //       return prev.filter((e) => {
  //         const ppp = e.id === id
  //          return ppp

  //       })
  //     })
  //   }
  return (
    <div className="flex flex-wrap sm:gap-5 px-[10px]  gap-8 justify-center relative right-[-14px] pt-[50px] mx-auto max-w-[1500px]">
      {isLoading && <Loading />}
      {data.map((i) => {
        const { image, title, price, id , likes} = i;
        return (
          <div
            key={id}
            className={`relative sm:w-[300px] mx-auto w-[330px]   sm:h-[350px] h-[390px] mb-6 text-center bg-[rgba(224,224,224,0.95)] rounded px-6 py-[20px]`}>
            <img
              className="w-[350px] h-[140px] object-contain  mb-[10px]"
              src={image}
              alt=""
            />
            <div className="grop-list">
             
              <FontAwesomeIcon
                id={id}
                className={` absolute right-4 top-4 fa-2x  ${likes ? 'text-[blue]' : 'text-[#3a91d3]'} `}
                onClick={e => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                data-toggle='likes'
                icon={faHeart}
              />
            </div>
            <h1>{title}</h1>
            <span>{price}</span>
            <br />
            <button className="py-2 px-6 bg-[blue] mt-4 rounded w-[100%] text-[white] ">
              Buy
            </button>
            <button
              className="mt-3 border w-full py-1 text-[blue] rounded border-[blue]"
              onClick={showOnebuy}>
              Buy one click
            </button>
          </div>
        );
      })}

      {oneBuy && (
        <div className="fixed top-[30%] flex justify-center ">
          <div className="w-[350px] h-[400px] bg-[rgba(235,229,229,0.98)]  py-8 px-5 rounded">
            <div className="flex justify-end">
              <FontAwesomeIcon onClick={() => setOneBuy(false)} icon={faX} />
            </div>
            <p className="text-center text-[blue] mt-2">Buy one click</p>
            <input
              className="w-full mt-3 px-6 py-2 rounded outline-none"
              placeholder="your name"
              type="text"
            />
            <p className="mt-4 text-[blue]">Contact mobile</p>
            <input
              type="phone"
              placeholder="+998 (93) 000 00 00"
              className="w-full mt-3 px-6 py-2 rounded outline-none"
            />
            <br />
            <div className="flex justify-items-center ">
              <input className="w-[25px] h-[25px] mt-4 ml-3" type="checkbox" />
              <span className="ml-4 pt-[15px] text-[blue]">No robot</span>
            </div>

            <div className="flex justify-center mt-[20px]">
              <button
                onClick={() => setOneBuy(false)}
                className="py-2 px-6 bg-[blue] mt-4 rounded w-[70%] text-center text-[white] ">
                Buy one click
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
