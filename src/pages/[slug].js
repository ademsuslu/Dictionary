import DictionaryData from "../Data/dictionary";

const Details = ({ data }) => {
  return (
    <div>
      {data?.name}

      <script
        async
        src="https://comments.app/js/widget.js?3"
        data-component-app-website="8lLlUBuH"
        data-limit="5"
      />
    </div>
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
