import Link from "next/link";
import React from "react";
import IconsBar from "../Icons/IconsBar";

export default function SearchItem({ item }) {
  return (
    <Link href={`/${item?.slug}`} className="DataItem">
      <div className="nameVersion">
        <h3 className="ItemName">{item?.name}</h3>
        <p className="ItemVersion">{item?.wordVersion}</p>
      </div>
      <span className="ItemDesc">{item?.description?.slice(0, 50)}..</span>
    </Link>
  );
}
