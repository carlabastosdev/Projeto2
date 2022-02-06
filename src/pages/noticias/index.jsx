import React, { useState, useEffect } from "react";
import { requestGet } from "../../service/request";
import Loader from "../../components/loader";
import Card from "../../components/card-noticia";

const Noticias = () => {
  const [noticias, setNoticias] = useState();

  useEffect(() => {
    requestGet("/latestnews").then((response) => {
      setNoticias(response.data);
    });
  }, []);

  if (!noticias) {
    return <Loader />;
  }

  return (
    <div>
      {noticias.map(
        ({ thumbnail, title, short_description, article_url }, index) => {
          return (
            <Card
              key={index}
              thumbnail={thumbnail}
              title={title}
              short_description={short_description}
              article_url={article_url}
            />
          );
        }
      )}
    </div>
  );
};

export default Noticias;
