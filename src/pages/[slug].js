import IconsBar from "@/Components/Icons/IconsBar";
import DictionaryData from "../Data/dictionary";

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
      <div id="comments">
        <script
          async
          src="https://comments.app/js/widget.js?3"
          data-comments-app-website="8lLlUBuH"
          data-limit="5"
          data-page-id="Home Page"
        />
      </div>
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
