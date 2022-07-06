import React, { useEffect } from "react";
import "./team.css";
import { request, gql } from "graphql-request";
import { useState } from "react";
import { Link } from "react-router-dom";

const Team = () => {
  const [posi, setPosi] = useState("");

  useEffect(() => {
    const query = gql`
      {
        positions {
          slug
          position
          employes {
            slug
            name
            description
            picture {
              url
              width
              height
            }
          }
        }
      }
    `;
    request(
      "https://api-ap-south-1.graphcms.com/v2/cl4i5dmfc3clo01xogrk14ny9/master",
      query
    ).then((data) => {
      setPosi(data.positions);
      console.log(data.positions);
    });
  }, []);

  return (
    <>
      <div className="conatainer">
        {posi &&
          posi.map((curEl, id) => {
            return (
              <div key={id} className="design">
                <div className="firstdiv">
                  <h1>{curEl.position}</h1>
                  <div className="flex">
                    {curEl.employes.map((el, id) => {
                      return (
                        <div key={id}>
                          <Link to={`employes/${el.slug}`}>
                            <img src={el.picture.url} alt="" width="200px" />
                            <h2>{el.name}</h2>
                            <h3>{el.description}</h3>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Team;
