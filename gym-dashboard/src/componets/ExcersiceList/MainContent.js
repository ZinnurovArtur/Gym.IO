import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const MainContent = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const validateImages = (array) => {
    let result;

    for (let i = 0; i < array.length; i++) {
      
      if (Array.isArray(array[i].images) && !array[i].length) {
        for (let j = 0; j < array[i].images.length; j++) {
          if (array[i].images[j].is_main) {
            array[i].image = array[i].images[j].image;
           
          }
        }
      }
    }
    return array;
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://wger.de/api/v2/exerciseinfo/?format=json`,
          {
            params: {
              language: 2,
              limit:20,
              offset:40
            },
          }
        );

        setData(validateImages(response.data.results));

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
