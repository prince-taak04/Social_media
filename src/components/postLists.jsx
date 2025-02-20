import Post from "./post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store"; // Ensure this path is correct
import WelcomeMessage from "./welcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostLists = () => {
  const postList=useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostLists;
