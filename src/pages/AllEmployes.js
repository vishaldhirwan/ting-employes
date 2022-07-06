import React, { useEffect } from "react";
import { request, gql } from "graphql-request";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const AllEmployes = () => {
  const [single, setSingle] = useState("");

  const location = useLocation();

  const path = location.pathname.split("/")[2];
  console.log(path);

  useEffect(() => {
    const query = gql`
      {
        employes(where: { slug: "${path}" }) {
          name
          picture {
            url
            width
          }
          description
        }
      }
    `;
    request(
      "https://api-ap-south-1.graphcms.com/v2/cl4i5dmfc3clo01xogrk14ny9/master",
      query
    ).then((data) => {{setSingle(data)}
    });
  }, []);

  // console.log(single);
  return (
    <>
     <img src={single && single.employes[0].picture.url} width="250px" alt="" />
     <h1>{single && single.employes[0].name}</h1>
      <h3>{single && single.employes[0].description}</h3>
    </>
  );
};

export default AllEmployes;
