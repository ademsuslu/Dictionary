import IconsBar from "@/Components/Icons/IconsBar";
import dynamic from "next/dynamic";
import DictionaryData from "../Data/dictionary";

const Comments = dynamic(() => import("@/Components/Comments"), {
  ssr: false,
});

const Details = ({ data }) => {
  return (
    <>
      <div className="Detay">
        <h1 className="DetayHead">{data?.name}</h1>
      </div>
      <div>
        <p>{data?.description}</p>
      </div>
      <div className="DetayIconBar">
        <IconsBar whiteBackground />
      </div>
      <Comments />
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
