import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const MainContent = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const validateImages = async (array) => {
    let result;

    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i].images) && !array[i].length) {
        for (let j = 0; j < array[i].images.length; j++) {
          if (array[i].images[j].is_main) {
            const response = await axios.get(
              `https://wger.de/api/v2/exerciseimage/${array[i].images[j].id}/thumbnails?format=json`
            );

            array[i].image = "https://wger.de/" + response.data.small.url;
          }
        }
      }
    }

    return array;
  };

  const languageFilter = (array, languageId) => {
    const  newArr = array.filter((item) => item.language.id == languageId);
    return newArr;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://wger.de/api/v2/exerciseinfo/?format=json`,
          {
            params: {
              language: 2,
              limit: 20,
              offset: 40,
            },
          }
        );
        const alldat = await validateImages(response.data.results)
        setData(languageFilter(alldat,2));

        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {loading && <div>A moment please...</div>}
          {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
          )}

          {data &&
            data.map(({ id, name, category, image }) => (
              <a key={id} className="group">
                <Card muscle={category.name} name={name} imageSrc={image} />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
