import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Navbar from "./componenents/Nav/Nav";
import Footer from "./componenents/Footer/Footer";
import Contact from "./pages/Contact";
import Social from "./pages/Products";
import Web from "./pages/Web";

const httpLink = createHttpLink({
    uri: "/graphql",
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/products"} element={<Social />} />
                    <Route path={"/web"} element={<Web />} />
                    <Route path={"/contact"} element={<Contact />} />
                    <Route path={"*"} element={<h1>No Content Found</h1>} />
                </Routes>
                <Footer />
            </Router>
            
        </ApolloProvider>
    );
}

export default App;