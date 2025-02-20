import { Form, redirect, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostList); // Uncomment and use addPost if needed

  return (
    <Form method="post" action="/create-post" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your UserId
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your user Id"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          name="body"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="number"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
          min="0"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your Tags
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please enter tags separated by spaces"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary post-button">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  const response = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });

  const post = await response.json();

  // Uncomment and use addPost if needed
  // const { addPost } = useContext(PostList);
  // addPost(post);

  return redirect("/");
}

export default CreatePost;
