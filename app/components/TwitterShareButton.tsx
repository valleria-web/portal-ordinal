import { createShareButton } from 'react-share';
import { TwitterIcon } from 'react-share';

const TwitterShareButton = createShareButton('twitter');

function MyComponent() {
  return (
          <TwitterShareButton url={`https://your-blog-url/posts/${props.slug}`}>
           <TwitterIcon size={24} round={true} />
        </TwitterShareButton>
  );
}
