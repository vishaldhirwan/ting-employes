import React from "react";
import "./team.css";
import { request, gql } from "graphql-request";
import { useState } from "react";

const Team = () => {
  const [print, setPrint] = useState("");

  const query = gql`
    {
      designs {
        picture {
          url
          width
          height
        }
        name
        description
      }
      servicings {
        picture {
          url
          width
          height
        }
        name
        description
      }
      copies {
        picture {
          url
          width
          height
        }
        name
        description
      }
      socialMedias {
        picture {
          url
          width
          height
        }
        name
        description
      }
    }
  `;

  request(
    "https://api-ap-south-1.graphcms.com/v2/cl4f6p4cz1dqr01z42uda9s0p/master",
    query
  ).then((data) => setPrint(data));
  return (
    <>
      <div className="conatainer">
        <div className="design">
          <div className="firstdiv">
            <h1>Design</h1>
            <img src={print && print.designs[0].picture.url} width="200px" />
            <h2>{print && print.designs[0].name}</h2>
            <h3>{print && print.designs[0].description}</h3>
          </div>
          <div className="firstdiv">
            <img src={print && print.designs[1].picture.url} width="200px" />
            <h2>{print && print.designs[1].name}</h2>
            <h3>{print && print.designs[1].description}</h3>
          </div>
        </div>
        <div className="servicing">
          <div className="seconddiv">
            <h1>Servicing</h1>
            <img src={print && print.servicings[0].picture.url} width="200px" />
            <h2>{print && print.servicings[0].name}</h2>
            <h3>{print && print.servicings[0].description}</h3>
          </div>

          <div className="seconddiv">
            <img src={print && print.servicings[1].picture.url} width="200px" />
            <h2>{print && print.servicings[1].name}</h2>
            <h3>{print && print.servicings[1].description}</h3>
          </div>
        </div>
      </div>

      <div className="copy">
        <div className="thirddiv">
          <h1>Copy</h1>
          <img src={print && print.copies[0].picture.url} width="200px" />
          <h2>{print && print.copies[0].name}</h2>
          <h3>{print && print.copies[0].description}</h3>
        </div>

        <div className="thirddiv">
          <img src={print && print.copies[1].picture.url} width="200px" />
          <h2>{print && print.copies[1].name}</h2>
          <h3>{print && print.copies[1].description}</h3>
        </div>

        <div className="social_media">
          <div className="forthdiv">
            <h1>Social Media</h1>
            <img
              src={print && print.socialMedias[0].picture.url}
              width="200px"
            />
            <h2>{print && print.socialMedias[0].name}</h2>
            <h3>{print && print.socialMedias[0].description}</h3>
            {}
          </div>
          <div className="forthdiv">
            <img
              src={print && print.socialMedias[1].picture.url}
              width="200px"
            />
            <h2>{print && print.socialMedias[1].name}</h2>
            <h3>{print && print.socialMedias[1].description}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
