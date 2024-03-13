import React from "react";
import Button from "../button/Button";

const ButtonList = () => {
  const List = [
    "All",
    "Movies",
    "Kapil Sharma",
    "Akshy saini",
    "Movies Tailers",
    "Best Movies",
    "All",
    "Movies",
    "Kapil Sharma",
    "Akshy saini",
  ];
  return (
    <div>
      {List.map((item, indx) => <Button key={indx} name={item} />)}
    </div>
  );
};

export default ButtonList;
