import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsShare } from "react-icons/bs";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export default function IconsBar({ whiteBackground, likeLink, saveLink }) {
  const { asPath } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}${asPath}`;

  function copyToClipboard() {
    navigator.clipboard.writeText(URL);
    toast.success("Page url copied successufully!");
  }

  return (
    <ul className="IconList">
      <li className={`IconListItem ${whiteBackground && "IconListItemWhite"}`}>
        <a href={likeLink}>
          <AiOutlineHeart className="IconListItemIcon heart" />
        </a>
      </li>
      <li className={`IconListItem ${whiteBackground && "IconListItemWhite"}`}>
        <a href={saveLink} target="_blank" rel="noreferrer">
          <BsBookmark className="IconListItemIcon" />
        </a>
      </li>
      <li
        className={`IconListItem ${whiteBackground && "IconListItemWhite"}`}
        onClick={copyToClipboard}
      >
        <BsShare className="IconListItemIcon" />
      </li>
    </ul>
  );
}
