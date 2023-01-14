import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsShare } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { useRouter } from "next/router";

export default function DataItem({ item }) {
  const { asPath } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}${asPath}`;

  function copyToClipboard() {
    navigator.clipboard.writeText(URL);
    alert("Copied the text: " + URL);
  }

  return (
    <div className="DataItem">
      <div className="nameVersion">
        <h3 className="ItemName">{item?.name}</h3>
        <p className="ItemVersion">1.1.3</p>
      </div>
      <span className="ItemDesc">{item?.description?.slice(0, 50)}..</span>
      <div className="DataItemFooter">
        <div className="ReadMore">
          <Link href={`/${item?.slug}`}>
            <button className="ReadMoreBtn">Read more</button>
          </Link>
        </div>
        <div className="ReadMores">
          <ul className="IconList">
            <li className="IconListItem">
              <AiOutlineHeart className="IconListItemIcon" />
            </li>
            <li className="IconListItem">
              <BsBookmark className="IconListItemIcon" />
            </li>
            <li className="IconListItem">
              <BiMessageRounded className="IconListItemIcon" />
            </li>
            <li className="IconListItem" onClick={copyToClipboard}>
              <BsShare className="IconListItemIcon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
