import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../../utils/constant";
import { cacheResults } from "../redux/searchSlice";

const NavBar = () => {
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const cacheResult = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheResult[searchQuery]) {
        setSuggestionList(cacheResult[searchQuery]);
      } else getSearchSuggetion();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestionList(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  console.log(suggestionList);

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  const handleSuggetion=(e)=>{
      e.stopProgation();
      console.log("hello")
  }

  return (
    <div className="flex justify-between items-center h-14 shadow-lg sticky top-0 bg-white">
      <div className="flex  pl-6 ">
        <img
          onClick={toggleMenuHandler}
          className="h-8 mt-3 cursor-pointer "
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
        />
        <Link to={"/"}>
          <img
            className="h-14 "
            alt="logo"
            src="data:image/png;base64,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"
          />
        </Link>
      </div>
      <div className="relative">
        <div className=" flex ">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={() => setFocus(!focus)}
            onBlur={() => setFocus(!focus)}
            placeholder="Search"
            type="text"
            className="border pl-8 w-[500px] h-10 rounded-l-3xl"
          />

          <button className="border h-10 pl-5 pr-5 rounded-r-3xl">
            <img
              className="h-8 p-1"
              alt="icon "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAYFBMVEX///+AgIB0dHR9fX15eXl3d3dzc3P4+Pj7+/uNjY3y8vKcnJyHh4eioqK0tLT19fXLy8vi4uLY2Ni8vLzr6+upqamTk5PBwcHs7OzR0dGtra2/v7/c3NzHx8eenp7k5OSbNGvAAAAKeUlEQVR4nO1d22KrKhDdckk0GmO8pdqY/P9fHpM0rYOoCIPiaddL+9AqS4aZxQDDv3/ION3T5DMubmFZBkFZhrcizpr0fsB+zzo4XS9FQAhnjD7gPfH8lTHOSXTM0k0zzZujRx7kvGG0XAm7Xe5rt1UH+6pgnI2x6xJtu/SWbKs/D01JVPn98CRR9rF2yxXhJ/MJftGkJLqc1m7/NM6FJsHv3gzTtTmMI4m4AcEvmty7+GsTGYKfMZMu7IDx2kmT9WPOUAg+QUnhnpvNzI20x9KtvmwYYh/+sIzX5vWDq2eB4QOMJmtze+EUkukuadXpQ54+hSt7/Hj8HBV5L/AgX5tfiwsZbWnLjhMvrC/VNT98hwT/lJ+rJr5FLedxpnS3usEeghEzfejtoE7uY9Eur+KSjApb5p0XoyPDZTfYOMp2QXZVe8z9Mir/drVdFmPYl0Od2BrosdrPelhas8Hww6K1xPp16NMzctPSnNdiyGgpWcfBZjt5c3jUzOvBLqpgwIXxI2LTVRFK7ZSSUHEMDiEv5CxptLTsOXiyhrT6C2Hg7GPpwKRs2YTIWdYKPB3tx9K+3FU4j1dCJRmKlNwQZwr7WsaSZHhvmMBFQpFFyJH6o+T9t/ClImXW16eUN/jvSSUqjy3jXuP+9+WhfrQYQ93/miy08ibhvT2KlFvzBee++16AZL8XWWkzcB3777NNMuu9cmfZ1yU9e7U8JhvxhZQbypppfPTslRUWX9eLizRaInvWm95we7ZzFymy0tq7AApxhFibhpx6n9OmzQD0QvLOUm4gEsYFXzDTkogmxK0481CguKB4bJEKJGlk4SWZYKnk08JLRtAjiR9BzsIrLLq2AYgk0SWyv+JYfKMSHA9BTmQJg9FqFB7EBYYQ5CHZCE9fKC6KqKFPYJizyQO0Eis+TQmCORFEIVnCR/P1lj9F7Yr2YMFSd9Zl+DBEi8Ky1j2kyBaPGl0IznWHlI88AvtYy9+8UcDW4LiGM/xydoTiDMAByVCUAJTi9nI3qhBmeAxhL08CYhJdIi02gRi2CMHtCGHDTpJxHqC17owj2Sf4aDjWbwroIcwnICBurCdwIKCn3xlqczhrJOvuPvjGCbUj4fC+4TTRHPDTm3XkBT7LnW168NsbzfQo3qNw0cAxZKBLKtiNayucLuDXN5DQQfdJLnWjOIqY9nPuwH2ZumhkQI7aCrMG3eiAiusiA43TngyB+M8diY1vwBipm6ODHscRifMDIHZ0vQ5IELmhVLu4wvSE1jP20BjcO3IBKOoNJTBxtLC6YAzodbQS99BUHTwg9AGVucYTfPAEjt5CBACJwjUydJXrpirM33U8KxAA+jrCJvKuZ6XB/AcA0eugV30AeFYyO9UEBvTaeeMh1GZuMTG19SWQgkbOjh4g5e6aVn0DyJT5AxKauo0GYiAyaeV+C8NRGJBzre1qZulLAXiNudMGkEpwMzo+ACPkzGQMdDkunEGUw8TpQClop30YMHE6YP7pXArgByAZMG8vBkiWuCnIXwBzSDZrM8YdjGVn3aowO2Kzdu6m+v+6LM6gM2ZJThh3HMwBvHEAHGctm2emM+ylALIV89Lctb67WhhAj80KkEACODpBfsEDmPOf4UYkgCBWZokAsNFRf+FrAZTaHIOuAehkLhfDTXtUARnosJQTxNystNUfR5egL8o3yvE39OMsn7Mdvxr+xccR3H6BzvkNejXezLxDf3luo/PHWXtPN5MH+NDPA2wnn6O/hPgb8nIbza/OW7j6BXlyg9C6LEzWO37DulXzC9Yfz79gHfk37Acw2zGxGMxauYn9OSez/Tmb2GdVmXmNwxYGpOF+OdM9hYvAdG/m5vavatha6v4+ZLhpXqdmkfv7yUHk0BKcoevGmsPiDDqPgNHDsRNlDyCc7xDO6bjnWWH9Cb3EGjTWC3ILjYFx3ko4N4dXjgcJIJevrcQAR/sFOufhAEqTEN08t9PnWEEqX19sQudM3Mp4gNFoENrAwpdbWgfWSjFYIk3Bx3KozIN4rNxk7gccq0sdCbvRKHgLJSPcqRCAWQrJuUJPLwCnajqIYMkIzNqDJjjgFkKCWseRlY8Qsxt7tT+cUK1X2I3mtVKESpku1JcBLcIoeVPBql0OZOiAxMRZqAjgPG31hXOhNiPKDilYRUdf4WMBWirSNxcqZWqcUcfE0UprfKEK8aordYlQ7xZrMiQ8l6y4X0fIxSF+b6Ee8opD0hOA9+STULp7tdyO8LGxKgU/UblRn7yw6hlu8AMudM2UgMxqnXlR0uGWeFeEeJkPw04wiffMLH8pQv+CJA/b9wmF2BcnKbnHj6L35JGuSbJ32cwT6JP23n06C47Jy8A909hXQu57d2ktVlc3HrxKe4c8a8/FN7FymSMDx5GLprEvbr/27inzFkhH+mN3aePfstX338T6Ivp96up27IsE+2OfWPY8jfwaZmBNyFPa/uWILLA4DfFDya2sfZIR7kp+nyQl1uqWpmMX0nebQHG/s+TKWV5a6Ur/OBgyeiSRL4iWxGNq42a2SrETX0CWPDJdxTxkWZUHKiOxA2TJc5XZEC8RFfLhOHD//FhP4kqeXBazKDkiKYKT9CbvaZK4kuckCvQvljeEoX/QY+jhpyf6Fxe/WJaGmcnzTZehZ0HyyAUIZV6mHUn2TcTlDEcla+ftyJJnUEi2nZnoTEjSGxmgQnklHRySv0SWPP8GhRZlJExm9ea+OvLBePiQi6cpaf5+NbLkaechgy9uaUZxqrT+6V+zgAwHfPq6Lnyv2pPY56dP5Vikbnl6RXMeIbq/J3XU8htpPovecTdQdEboWZ5kwEn88GSElUWWpOf88DVW/NPHPU2yoqRk2EC//r1753uo6HmwszwP5Tz5fSltqXLOyRfaX1nbedP9Iqj9saQHIIkun89zpaUqmCd2SKz4JguJ0YQqfuA5oFzSG0NJSBE2VmQuDJklJbE0xkry5XKSNtbWPjFZtgyHYrl00iN7hJWNC403a1Y7DMayEZ10V02ARFY2TFWlgaB+N41HE/tRDsqSx072N6+ZSWe2quE4fWhWVfLYKxlThSPCbIKgqphXljzW9qD4GjQfBBt1Oa0seWzufUtrT5knZZwW1bxJUaGoBmxkDDs4VK3e5qOC+6HxWt2eaDiH4fU6CPvLpP45qZ/S+6lPu2gFbCvW6+aqO6kdSET0sNAmFD+/Vpe4OIZl0KIMb0X8maS54ZR9VcmzFNQlj8vl4yaQq0oez4U94ppYW/IsgvUlzxJQlTw7h8vkTcIJyWMbypLH0fIxSnBH8liEwuaPJ9bZd4uEP8nTwZ/kcR0H70/y/IBvmKR4/GO4Kzc8JlUljzuHx3WgKHlcOTyuBzXJ48JxXAOoSZ7VT6qaQUnyzK1j6hrOCuaKcOB+XahInm0PyH9KkseRihUG8Cclz/Y5tpJnQg1s3lYfuI2S3LzPeWFU8mw9drwhOcDwDYdKOplhWPKsXawCEYOSh285nyzgLB+TG5fkAuSSh7lXaNUEJ4nkIVte3pGhd0IU+2iWE4h3na6kpPx/GeoX8uPuubmEUkaCTWc5xrCv4jAIyrpzVuE/zmdw/fDzUrwAAAAASUVORK5CYII="
            />
          </button>
        </div>
        {focus && (
          <ul className="fixed w-[482px]  bg-white ml-5 px-5 py-2  shadow-lg rounded-lg bg-red-500">
            {suggestionList.map((item, indx) => (
              <li
                className="hover:bg-gray-200 "
                onBlur={handleSuggetion}
                key={indx}
              >
                {item}{<button onClick={()=>console.log("i m in button")}>Click</button>}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <img
          className="h-8 "
          alt="user-icon "
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default NavBar;
