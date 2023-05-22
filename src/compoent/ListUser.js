import React, { useEffect, useState } from "react";
import { urlliste } from "../url";
import axios from "axios";
import "./ListUser.css";
export default function UserList() {
  const [elfilter, setelfilter] = useState("first names");
  const [ellista, setellista] = useState(null);
  useEffect(() => {
    axios.get(urlliste).then((response) => {
      setellista(response.data);
    });
  }, []);
  if (!ellista) return null;
  return (
    <div>
      {ellista &&
        ellista
          .filter((el) => el.name === elfilter || elfilter === "first names")
          .map((el) => (
            <div className="elkoll">
              <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
              />
              <div id="home" className="first_page">
                <div className="wrapper">
                  <div className="content-splitter">
                    <div className="nav">
                      <ul className="navbar">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/">About</a>
                        </li>
                        <li>
                          <a href="/">contact</a>
                        </li>
                        <li>
                          <select
                            className="selecter"
                            onChange={(element) => {
                              setelfilter(element.target.value);
                            }}
                            name="pets"
                            id="pet-select"
                          >
                            {ellista &&
                              ellista.map((elll) => (
                                <option value={elll.name}>{elll.name}</option>
                              ))}
                          </select>
                        </li>
                      </ul>
                    </div>
                    <div className="left">
                      <div className="block">
                        <div className="header">Hi, I'm {el.name}</div>
                        <div className="content">
                          <p>User name:{el.username}</p>
                          <p>Email:{el.email}</p>
                          <p>
                            Adress: Street:{el.address.street}, Suite:
                            {el.address.suite}, City:{el.address.city}
                          </p>
                          <p>
                            Contact:Phone:{el.phone} & Website:{el.website}
                          </p>
                        </div>
                      </div>
                      <div className="c2a">Contact me!</div>
                    </div>
                  </div>
                  <div className="right">
                    <img src="./img/man.png" alt="" height={420} width={300} />
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
