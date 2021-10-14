import React from "react";
import Post from "../post/Post";

const posts = [
  {
    id: "123",
    username: "Josimar Dev",
    userImg:
      "https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD10003194/1g2a7958d1c77c11f0bbee72e59fa8455c864c5b_thumb.jpg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfK1gXuKrvR3rXpN_SYzhbgVOJqBDEOSLG5-kf4pnjRVLKb9MiPLEIe9sG7vkso8QM_QE&usqp=CAU",
    caption: "SUBCRIBE AND DESTROY THE LIKE BUTTON for the TY algorithm",
  },
  {
    id: "124",
    username: "Harry Dev",
    userImg:
      "https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD10003194/1g2a7958d1c77c11f0bbee72e59fa8455c864c5b_thumb.jpg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfK1gXuKrvR3rXpN_SYzhbgVOJqBDEOSLG5-kf4pnjRVLKb9MiPLEIe9sG7vkso8QM_QE&usqp=CAU",
    caption: "SUBCRIBE AND DESTROY THE LIKE BUTTON for the TY algorithm",
  },
];
export default function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
