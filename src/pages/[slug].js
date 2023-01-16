import IconsBar from "@/Components/Icons/IconsBar";
import DictionaryData from "../Data/dictionary";
import { useEffect } from "react";
import MD5 from "crypto-js/md5";

export const generatedData = DictionaryData.map((item) => ({
  ...item,
  md5: MD5(item?.name + item?.description + item?.wordVersion).toString(),
}));

const Details = ({ data }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://comments.app/js/widget.js?3";
    script.setAttribute("data-comments-app-website", "8lLlUBuH");
    script.setAttribute("data-limit", "5");
    document.getElementById("comments-container").appendChild(script);
  }, []);

  return (
    <>
      <div className="Detay">
        <h1 className="DetayHead">{data?.name}</h1>
        <p className="DetayVersion">{data?.wordVersion}</p>
      </div>
      <div className="Detay">
        <span>{data?.md5}</span>
      </div>

      <div>
        <p>{data?.description}</p>
      </div>
      <div className="DetayIconBar">
        <IconsBar
          likeLink={data?.likeLink}
          saveLink={data?.saveLink}
          whiteBackground
        />
      </div>
      <div style={{ marginTop: "2rem" }} id="comments-container"></div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: generatedData.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      data: generatedData.filter(
        (item) => item.slug === context.params?.slug
      )?.[0],
    },
  };
}

export default Details;
