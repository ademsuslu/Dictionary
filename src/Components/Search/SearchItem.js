import Link from "next/link";
import React from "react";
import IconsBar from "../Icons/IconsBar";

export default function SearchItem({ item }) {
  return (
    <div className="DataItem">
      <div className="nameVersion">
        <h3 className="ItemName">{item?.name}</h3>
        <p className="ItemVersion">1.1.3</p>
      </div>
      <span className="ItemDesc">{item?.description?.slice(0, 50)}..</span>
      <div className="DataItemFooter">
        <div className="ReadMore">
          <a href={`/${item?.slug}`}>
            <button className="ReadMoreBtn">Read more</button>
          </a>
        </div>
        <div className="ReadMores">
          <IconsBar />
        </div>
      </div>
    </div>
  );
}
