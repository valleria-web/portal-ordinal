import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
};

const sortByDate = (a: PostMetadata, b: PostMetadata) => {
  const dateA = new Date(a.date.split('/').reverse().join('/')).getTime();
  const dateB = new Date(b.date.split('/').reverse().join('/')).getTime();
  return dateB - dateA;
};

const getPostMetadata = (): PostMetadata[] => {
  const folder = "public/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  //Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`public/posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: getDate(matterResult.data.date),
      subtitle: matterResult.data.subtitle,
      autor: matterResult.data.autor,
      cover_image: matterResult.data.cover_image,
      slug: fileName.replace(".md", ""),
      tags: matterResult.data.tags,
    };
  });

  //Sort posts by date
  posts.sort(sortByDate);

  return posts;
};

export default getPostMetadata;

