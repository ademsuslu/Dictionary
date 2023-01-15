import IconsBar from "@/Components/Icons/IconsBar";
import DictionaryData from "../Data/dictionary";
import { useEffect } from "react";

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
    paths: DictionaryData.map((item) => ({
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
      data: DictionaryData.filter(
        (item) => item.slug === context.params?.slug
      )?.[0],
    },
  };
}

export default Details;
