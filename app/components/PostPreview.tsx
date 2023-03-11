import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import { Tag } from "./Tag";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        src={props.cover_image}
        alt="Post previews imagenes"
        className="rounded-t-lg"
        width={"100%"}
        height={"100%"}
      />
      <Link href={`/posts/${props.slug}`}>
        <h2 className="px-2 mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
          {props.title}
        </h2>
      </Link>
      <p className="px-2 mb-3 text-sm text-gray-700 dark:text-gray-400">
        {props.autor}{" "}
      </p>
      <p className="px-2 mb-3 text-sm text-gray-700 dark:text-gray-400">
      {props.date.toString()}
      </p>
      <p className="text-slate-700 px-4 pb-4">{props.subtitle} </p>

      <div className="flex flex-wrap p-4">
        {props.tags &&
          props.tags.map((tag: Tag) => (
            <span
              key={tag}
              className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 last:mr-0 mr-1"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default PostPreview;
