import React from "react";
// import "../../styles.css";
// import logo from "../../images/flairlogo.png";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// import { updateResult } from "../../reducers/searchresultreducer";
import { useAuth0 } from "@auth0/auth0-react";
import { Accounticon, Carticon, Closeicon, Menuicon } from "../../assets/icons";
import { setUser } from "../../reducers/user";

export const Navbar = () => {
  // const navigate = useNavigate();

  const {
    loginWithRedirect,
    isAuthenticated,
    user,
    getAccessTokenSilently,
    logout,
  } = useAuth0();
  const [searchText, setSearchText] = useState("");
  const [searchResultList, setSearchresultList] = useState([]);
  const [enterClicked, setEnterClicked] = useState(false);

  //This state determines whether to reveal the nav items or not
  const [reveal, setReveal] = useState(false);

  //Defining a state to store the total number of items in the cart
  const [cartLength, setCartLength] = useState(0);
  const dispatch = useDispatch();

  //Access the user reducer to get the number of cart items in the list
  // const userdetails = useSelector((state: any) => state.userdata.value);

  //Accessing the product details list state from redux store
  //const productList = useSelector((state: any) => state.product.value);

  //Access the search result list
  // const searchResults = useSelector((state: any) => state.searchresult.value);

  //update the redux store with the search result list
  // useEffect(() => {
  //   dispatch(updateResult([...searchResultList]));
  // }, [searchResultList, dispatch]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      //Check whether the user exists or not If not exists then signup
      const res = await fetch(
        `http://localhost:4000/signup?email=${user?.email}`
      );
      const accessToken = await getAccessTokenSilently();
      console.log(res);
      dispatch(setUser({ emailId: "asfkaskfjy" }));
    };

    if (isAuthenticated) {
      //Check if the user already exists in the DB

      fetchUserDetails();
    }
  }, [isAuthenticated]);

  const toggleReveal = (e: any) => {
    setReveal(!reveal);
  };

  return (
    <nav>
      <div className="navbar">
        {/*Nav Links*/}
        {/* <Link to={"/"}> */}
        <button className="menu-icon" onClick={toggleReveal}>
          <Menuicon />
        </button>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAeCAYAAABQdCKyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVZSURBVHgB7ZpraBxVFMf/M/uqtdo1adTYRNJSaw2IsS0q2tLoB61Sy0qCCoqCioiC9YFaH8iq6Ac/FN8axaL4QWtKKDSYilHXiiiklSj4QtGoaX2kpW2adjfb3R3/Z+9sczP7aLab3Rmtf/gxe+/cmZ09c+bcc8+sgSPIAswDq1c3hPz+Bel0us5vmmbKstLc7Aokkz8Zvb278L+yMgp1Wq2twVRr63Irnb4BhrGSXScXOwGNPWwYRsy0rF5fMrmZxj2If4dmkTYyRIYxDcozZjISaTNM80kaaSksq4HGNKZ4rv3ky0wm81Sora3fiEYzdn89uY/MsNtbbNzUYvI6aSF7yL1kE7K+cfTy643xSORqGu9FnnFOtmPKdszqBLLCZ5qfcduv9R9H7oDyBNFeuG/Mx6C8UhQmD5MBVOihh42Z6ujoyFjWa/x4oj6Ahv2Nm20m8I2lviwpx9FhT7EsayE5l5/Pzg42jATdcYPmlV5VvaN9vE1Fyhrz4KpVp9OQ4va6IeN8zF9h3HxpJBTa0dzdHXcebEWj5r6BgdmhUGgJY+YaOV/Q5/se3tcbZAkJErnx3eRXVKisMQPB4N30utlaf5zGXRtKJLqMvr7xYgfbHigxp9+KRLYlLCts9PQk4X2tJzugYud3UPEyhQplWO3tMw7V1f0BFTtUJ/CQPx5fV8qQZagJ6oJzMVPiVRT/QZmJcPgCTDbkyHgqtX6aDHlMye/z+RYxNh7u4OM9ODI6ug/ek4QkyQx8UHFOYvghxxjZp6cgaRROdwx77JHGOc+ZsdEVsK9r1M9RjfpZmGPubInFvOKVMkHMJxEiT5AsHmYSuT6JeZ+TXvID1I+Ucdfax4qxo+TnAudtIU9r7efIpwXGhaDSprPs9kfkZSgDn0GuIOeRRrLGz9RmUirE9GbUqDB5nQYxE8tODveQqzCR8Dsl+x6FSsCjpJl02vskn11X5LjZ2jiR3JBCxhSvu5gss9tj5E1yp02jNjbsdx5tKJd3U3LXZQn7DFng2CeZQsL+LB4q1y8Tm6Rli8jXqK7k+54nNxXb6TWdCfXYzdf6xCM2k08wkQ/KuCvJCqjfcRm5CNWVeGiL1v6byIrvdzKcZ0yurZvikUg7yhAnsbHA7t2DRixWaa5WR7ow2ZBysdchP6mWJemzZDnUYy4xbBaqqxZ7K/H4CSgvHcvtLPSYd3J93YlylMkMIhyW2LIXlelGqIkmp4/JNWSkxDES68QrxWubUX1JmOmAupmT5hYT3pHM3Ldg4gb/SW5HaUPm9At5HBPxtJqSWN6HApO0l4wpk81crf0BCqc1xZRLkaqtt4rtyHvMmSptgWl2oQwx0d8TCAT2ozJJnJyptWNQs/dUJZ68lZyD6knCWNFCTp4xTVZ9Ahs3bkLtJWWxgNY+mirOEKorKUcWLS966TF3VqLdzncLqWSd1kvGlHdH+lp7DspXPVyUl4wpMe+A1r4Q5UmygaVwUV4y5lfkL619OcrLGy/FMWjMYkULKftt1doLydoS43VJSHgQagXlmmphTJlIRrX24hLfKynZTvuzjJGCwgNwvORz6DSo6tD5cFm1MKasXb/V2peQm6G8SdbSDZhIibZDvWPPTUTilY+QDVBFjSb7OGEeuZX0kOuhqk2uvn+qRdVIkvm3oao7YjT50a+S+6EmnVOhSmjv2ePfISdBeVvQvsaVNnJjcsvLufb+nAbJF+Q2uKRaxcx3yYeOPlk+LrO3eqyTXE4ed/mXhbNwIp48z0Y35I9QXvo+XFStjCkeJVVxeQUw5NhX6P2LlPJegCqrycSyHflJvIyRDOAuqDg8AJf1DzrbYXEuD3MjAAAAAElFTkSuQmCC"
          alt="Logo"
          className="logo"
        />
        {/* </Link> */}
        <div className={`nav-list-items ${reveal ? "reveal" : ""}`}>
          {/*This button should be hidden until the screen size is */}
          <button className={`close-icon ${reveal}`} onClick={toggleReveal}>
            <Closeicon />
          </button>
          <a href="">Categories</a>
          <a href="">Deals</a>
          <a href="">What's New</a>
        </div>
        {/*Search bar*/}
        <input
          type="text"
          placeholder="Search Product"
          //Onchange, the search text is updated
          className="searchbar"
          onChange={(e) => {
            setSearchText(e.target.value.toLowerCase());
            console.log(searchText);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("Enter key pressed");
              //As soon the enter is pressed, the search result list is updated
              //Search result list is an array of product ids
              // setSearchresultList(
              //   productList
              //     .filter((obj: { productName: string }) =>
              //       obj.productName.toLowerCase().includes(searchText)
              //     )
              //     .map((obj: { productId: any }) => obj.productId)
              // );
              //dispatch(updateResult([...searchResultList]));
              // Perform search or other action here
              setEnterClicked(true);
              // navigate("/searchpage");
            }
          }}
        />
        {/*Login/Logout button*/}
        {isAuthenticated ? (
          <div className="login-logout" onClick={() => logout()}>
            Logout
          </div>
        ) : (
          <div
            className="login-logout"
            onClick={() => {
              console.log("LOGIN");
              loginWithRedirect();
              // navigate("/loginform");
            }}
          >
            Login
          </div>
        )}
        {/* Account/Cart Icons*/}
        <div className="icons">
          <div
            className="icon-container "
            onClick={() => console.log("ACCOUNT ICONS")}
          >
            <Accounticon />
          </div>
          {/* <div className="cart-icon" onClick={(e) => navigate("/mycart")}> */}
          <div className="icon-container mg-left-2">
            <Carticon />
            {/*Display the total number of items in the cart*/}
            {/* {userdetails.cartLength > 0 && (
            <div className="totalcartitems">{userdetails.cartLength}</div>
          )} */}
          </div>
        </div>
      </div>
    </nav>
  );
};
