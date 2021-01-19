import React, { useContext } from "react";
import Head from "next/head";

import { useQuery } from "react-query";

import PostContext from "../context/context";
import { ADD_POST, REMOVE_POST } from "../context/reducer";

export default function Home({ pre_data }) {
  const { state, dispatch } = useContext(PostContext);

  const [page, setPage] = React.useState(20);

  const { isLoading, error, data } = useQuery(
    ["posts", page],
    async () => {
      const pg = page;
      return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res
          .json()
          .then((posts) =>
            posts.filter((post) => post.id >= pg - 20 && post.id <= pg)
          )
      );
    },

    { initialData: pre_data }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>An error has occurred: {error.message} </h1>;
  }

  const addPostToCart = (post) => {
    setTimeout(() => {
      dispatch({ type: ADD_POST, post: post });
    }, 700);
  };

  return (
    <>
      <Head>
        <title>UseContsext with UseReducer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ margin: "2rem 0" }}>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {data?.map((post) => (
            <div
              key={post.id}
              style={{
                width: "270px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "1rem",
                margin: "0 1rem 1rem 0",
                height: "210px",
              }}
              className="post_box"
            >
              <h3 style={{ marginBottom: "1rem", textTransform: "capitalize" }}>
                <span>{post.id}</span> {post.title.substr(0, 18) + "..."}
              </h3>
              <p>{post.body.substr(0, 95) + " ..."}</p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    margin: "0.5rem 0",
                    padding: "0.5rem",
                    color: "#fff",
                    background: "teal",
                    borderRadius: "5px",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => addPostToCart(post)}
                >
                  Buy Post
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <button
            style={{
              margin: "0.5rem 1rem",
              padding: "0.5rem 2rem",
              color: "#fff",
              background: "teal",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              if (page > 20 && page <= 100) {
                setPage(page - 20);
              }
            }}
          >
            Back
          </button>
          <button
            style={{
              margin: "0.5rem 1rem",
              padding: "0.5rem 2rem",
              color: "#fff",
              background: "teal",
              borderRadius: "5px",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              if (page >= 20 && page < 100) setPage(page + 20);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      pre_data: data,
    },
  };
}
