import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsShare } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export default function IconsBar({ whiteBackground }) {
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
        <AiOutlineHeart className="IconListItemIcon" />
      </li>
      <li className={`IconListItem ${whiteBackground && "IconListItemWhite"}`}>
        <BsBookmark className="IconListItemIcon" />
      </li>
      {/*       <li className={`IconListItem ${whiteBackground && "IconListItemWhite"}`}>
          <BiMessageRounded className="IconListItemIcon" />
      </li> */}
      <li
        className={`IconListItem ${whiteBackground && "IconListItemWhite"}`}
        onClick={copyToClipboard}
      >
        <BsShare className="IconListItemIcon" />
      </li>
    </ul>
  );
}
