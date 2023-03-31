import { useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";
import { TOGGLE_HIDE,TOGGLE_SHOW } from "../constants/userConstants";
import { useDispatch, useSelector } from "react-redux";
import { Listproduct } from "../actions/productAction";
import { useLocation,useNavigate } from "react-router-dom";
import PreviewCard from "./PreviewCard";
import Spinner from "./Spinner";
import Error from "./Error";
import Slide from "react-reveal/Slide";


const Preview = () => {
  const dispatch = useDispatch()
  const productData = useSelector(state => state.productList);
  const { products, error, loading,pages,page } = productData;
  const location = useLocation();
  const navigate = useNavigate();
  let keyword = location.search
  const findProducts = keyword.split("=");

 



  useEffect(() => {
    dispatch(Listproduct(keyword))
    if (keyword) {
    dispatch({ type: TOGGLE_SHOW });
      
    } else {
    dispatch({ type: TOGGLE_HIDE });
      
    }
    
  },[dispatch,keyword])

  const handleRefresh = () => {
    navigate("/")
   }
  return (
    <section>
      <Slide bottom>
        <div className="w-full bg-[#dde8fc]">
          <div className="max-w-[1480px]  mx-auto flex w-full gap-16 pb-6 sm:pt-7">
            <div className="max-h-[54rem] bg-[#FFFFFF] max-w-sm hidden md:flex md:flex-col px-6 pt-6 rounded-xl shadow-md mb-6">
              <header className="uppercase font-medium font-sans text-2xl">
                brand
              </header>
              <div className="sm:pt-5">
                <div className="relative flex items-center text-gray-500">
                  <RiSearchLine className="w-5 h-5 absolute ml-3 pointer-events-none" />
                  <input
                    type="search"
                    className="w-full max-w-xs bg-inherit pr-3 pl-10 py-2 font-serif focus:h-12  placeholder:text-gray-500 rounded-lg border-2 border-gray-500 focus:border-none"
                    placeholder="Search "
                  />
                </div>
              </div>
              <div className="md:pt-6 flex flex-col gap-3 px-4">
                <div className="flex gap-4 items-center">
                  <input className="w-6 h-6" type="checkbox" name="" id="" />
                  <label
                    className="text-gray-500 capitalize font-sans text-xl font-extralight tracking-wider"
                    htmlFor=""
                  >
                    phone & tablet
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input className="w-6 h-6" type="checkbox" name="" id="" />
                  <label
                    className="text-gray-500 capitalize font-sans text-xl font-extralight tracking-wider"
                    htmlFor=""
                  >
                    computing
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input className="w-6 h-6" type="checkbox" name="" id="" />
                  <label
                    className="text-gray-500 capitalize font-sans text-xl font-extralight tracking-wider"
                    htmlFor=""
                  >
                    games
                  </label>
                </div>
                <div className="flex gap-4 items-center">
                  <input className="w-6 h-6" type="checkbox" name="" id="" />
                  <label
                    className="text-gray-500 capitalize font-sans text-xl font-extralight tracking-wider"
                    htmlFor=""
                  >
                    electronics
                  </label>
                </div>
              </div>

              <div className="sm:pt-14">
                <header className="uppercase font-medium font-sans text-2xl">
                  price
                </header>
                <div className="pt-6 px-4 flex flex-col gap-4">
                  <div className="flex gap-4 items-center">
                    <input className="w-6 h-6" type="checkbox" name="" id="" />
                    <label
                      className="text-gray-500 capitalize font-sans text-xl font-extralight tracking-wider"
                      htmlFor=""
                    >
                      under ₦ 50,000
                    </label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input className="w-6 h-6" type="checkbox" name="" id="" />
                    <label
                      className="text-gray-500 capitalize font-sans text-xl font-extralight tracking-wider"
                      htmlFor=""
                    >
                      ₦ 50,000 - ₦ 100,000
                    </label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input className="w-6 h-6" type="checkbox" name="" id="" />
                    <label
                      className="text-gray-500 capitalize font-sans text-xl font-extralight tracking-wider"
                      htmlFor=""
                    >
                      ₦ 100,000- ₦ 500,000
                    </label>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input className="w-6 h-6" type="checkbox" name="" id="" />
                    <label
                      className="text-gray-500 capitalize font-sans text-xl font-extralight tracking-wider"
                      htmlFor=""
                    >
                      Above ₦ 500,000
                    </label>
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <div className="">
                  <header className="capitalize font-medium font-sans text-2xl">
                    custom price rage
                  </header>
                </div>
                <div className="flex gap-2 pt-8">
                  <input
                    className="max-w-[6rem] rounded-md"
                    placeholder="Min"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className="max-w-[6rem] rounded-md"
                    placeholder="Max"
                    type="text"
                    name=""
                    id=""
                  />
                  <div className="px-4">
                    <button
                      className="text-xl uppercase hover:bg-black hover:border-black bg-[#0043C6] text-blue-100 px-8 py-2  rounded-lg tracking-wide font-medium"
                      type="submit"
                    >
                      go
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <header className="uppercase font-medium font-sans text-2xl">
                  year
                </header>
                <div className="pt-4 pb-8">
                  <select className="rounded-md py-2 px-8">
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="bg-[#FFFFFF] max-w-[980px] w-full flex justify-between items-center py-2 rounded-sm shadow-sm">
                <header className="capitalize font-medium font-sans text-2xl px-10">
                  shop online in nigeria
                </header>
                <div className="flex gap-1">
                  <h1 className="capitalize font-medium font-sans text-xl">
                    sort by :
                  </h1>
                  <select className="border-none text-gray-500 capitalize font-sans text-xl divide-y font-extralight tracking-wider focus:border-white cursor-pointer">
                    <option>Popularity</option>
                    <option>Newest arrivals</option>
                    <option>low to high</option>
                    <option>high to low</option>
                    <option>product rating</option>
                  </select>
                </div>
              </div>
              {products && products?.length === 0 && (
                <div className="flex flex-col justify-center items-center text-center mt-4 gap-4 sm:gap-6">
                  <div className="bg-white rounded-full">
                    <img
                      src="https://res.cloudinary.com/seeders/image/upload/v1679752991/Blaone/binoculars.389fc56a_qszbiq.svg"
                      alt=""
                    />
                  </div>
                  <h1>
                    There are no results for “{findProducts[1]}”. <br /> - Check
                    your spelling for typing errors <br /> - Try searching with
                    short and simple keywords <br /> - Try searching more
                    general terms - you can then filter the search results
                  </h1>
                  <button
                    onClick={handleRefresh}
                    className="capitalize bg-[#f59e0b] hover:bg-[#d97706] py-2 rounded-md text-yellow-50 px-8 sm:px-10"
                    type="submit"
                  >
                    refresh
                  </button>
                </div>
              )}
              {loading ? (
                <Spinner />
              ) : error ? (
                <div className="mt-4 sm:mt-10 w-full flex items-center justify-center">
                  <Error error={error} />
                </div>
              ) : (
                <div className="pt-5 gap-10 flex flex-col px-4 sm:px-0 sm:flex-row flex-wrap">
                  {products &&
                    products.map((product) => (
                      <PreviewCard key={product.id} product={product} />
                    ))}
                </div>
              )}

              {error ? (
                ""
              ) : (
                <div className="flex justify-center  pt-8">
                  <div className="flex items-center gap-4">
                    <button className=" hover:bg-blue-100 border border-[#0043C6] text-xl text-blue-700 font-light py-2 px-10 rounded-lg tracking-wide font-sans capitalize">
                      previous
                    </button>
                    <span className="text-xl flex items-center justify-center border cursor-pointer hover:border-[#0043C6] w-9 h-9">
                      <p>1</p>
                    </span>
                    <span className="text-white text-xl flex items-center justify-center  bg-[#0043C6] w-9 h-9">
                      <p>2</p>
                    </span>
                    <span className="text-xl flex items-center justify-center border cursor-pointer hover:border-[#0043C6] w-9 h-9">
                      <p>3</p>
                    </span>
                    <span className="text-xl">...</span>
                    <span className="text-xl flex items-center justify-center border cursor-pointer hover:border-[#0043C6] w-9 h-9">
                      <p>20</p>
                    </span>

                    <button className=" hover:bg-blue-100 border border-[#0043C6] text-xl  text-blue-700 font-light py-2 px-10 rounded-lg tracking-wide font-sans capitalize">
                      next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}

export default Preview