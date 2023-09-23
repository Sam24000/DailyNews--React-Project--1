import React, { useEffect, useState } from "react";
import axios from "axios";
// require('dotenv').config();

const FetchApi = ({ cat }) => {
    const [news, setnews] = useState([]);
    const [categ, setcateg] = useState(cat);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                cat
                    ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=${process.env.REACT_APP_kEY}`
                    : `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${process.env.REACT_APP_kEY}`
            );
            setnews(response.data.articles);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
        setcateg(cat);
    }, [cat, fetchData, setcateg]);

    return (
        <>
            <div className="container my-3">
                <h1>Top HEADLINES - <span style={{ textTransform: "capitalize" }}>{categ}</span></h1>
                <div className="container d-flex my-3 justify-content-center align-items-center flex-column " style={{ minHeight: "100vh" }}>
                    {news.length > 0 ? (
                        news.map((item, index) => (
                            <div className="container my-3 p-3" style={{ width: "100%", boxShadow: "2px 1px 10px green" }} key={index}>
                                <div className="container d-flex flex-row">
                                    <div className="container d-flex my-5">
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className="container">
                                        <img src={item.urlToImage} alt="/" className="img-fluid" style={{ width: "auto%", height: "300px", objectFit: "cover" }} />
                                    </div>
                                </div>
                                <p>{item.content} <a href={item.url} target="blank">Read More</a></p>
                            </div>
                        ))
                    ) : (
                        "Loading...."
                    )}
                </div>
            </div>
        </>
    );
};

export default FetchApi;
