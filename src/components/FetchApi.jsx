import React, { useEffect, useState } from "react";
import axios from "axios";


const FetchApi = ({ cat }) => {
    const [news, setnews] = useState();

    const fetch = async () => {
        await axios.get(
            cat ? `
            https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=8362053158e04193b1c2eb350ce4df85`
                :
                "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8362053158e04193b1c2eb350ce4df85").then((res) =>


                    setnews(res.data.articles),

                )
            .catch((err) =>
                console.log(err))
    }

    useEffect(() => {
        fetch();
        setcateg(cat);
    }, [cat])

    const [categ, setcateg] = useState();


    return (<>
        <div className="container my-3"><h1>Top HEADLINES - <span style={{ textTransform: "capitalize" }}>{categ} </span></h1>
            <div className="container d-flex my-3 justify-content-center align-items-center flex-column " style={{ minHeight: "100vh" }}>{news ? news.map((items, index) => <>

                <div className="container my-3 p-3" style={{ width: "100%", boxShadow: "2px 1px 10px green" }}>

                    <div className="container d-flex flex-row ">
                        <div className="container d-flex my-5 ">
                            <h5 className="">{items.title}</h5>
                        </div>
                        <div className="container">
                            <img src={items.urlToImage} alt="/" className="img-fluid" style={{
                                width
                                    : "auto%", height: "300px", objectFit: "cover"
                            }}></img>
                        </div>

                    </div>
                    <p>{items.content}
                        <a href={items.url} target="blank"> Read More</a></p>
                </div>


            </>

            ) : "Loading...."}</div>
        </div>

    </>
    );
};
export default FetchApi;