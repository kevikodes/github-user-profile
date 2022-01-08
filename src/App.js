import "./App.css";

// #1 npm install axios
// #2 import axios from './axios'
// #3 import useEffect hook
// #4 Make an get request to the github api using axios
// #5 How do we get reference of the input value?
// #6 import useRef and get the ref of the search input
// #7 On click of the search update the user state with the ref
// #8 After finish search functionality how do you map the response into the code?
// #9 Get the theme switcher to work
// #10 Turn reusable sections of the app to components (Finish rest of hw)

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Container from "./components/Container";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/userSlice";
import { setSearch } from "./store/searchSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const searchRef = useRef();
  const search = useSelector((state) => state.search.value);
  const dark = useSelector((state) => state.theme.darkMode);

  // const [user, setUser] = useState({});
  // const [query, setQuery] = useState("octocat");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearch(searchRef.current.value));
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${search}`);
        if (res) {
          console.log(res.data);
          dispatch(setUser(res.data));
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    return fetchUser();
  }, [search, dispatch]);

  return (
    <div className={`App ${dark && "dark"}`}>
      <Container
        handleSearch={handleSearch}
        searchRef={searchRef}
        user={user}
      />
    </div>
  );
}

export default App;

/**
 * Store - Where the data is stored in Redux.
 *
 * Action - Describes what we want to do with the state.
 * (Increment, Decrement eg. Counter app),
 * (github user app - setUser)
 *
 * Reducer - Describes HOW the state changes
 *
 * Dispatch - How execution of our action runs.
 *
 * Redux Toolkit - Easier way to integrate Redux to our app.
 *
 * Slice - Section of the state.
 */
