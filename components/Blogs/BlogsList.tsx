import { FancyHeading } from "../Typography";
import { useBlogs } from './BlogsContext';

export const BlogsList = () => {
  const blogs = useBlogs();

  return <FancyHeading size="lg">Blogs</FancyHeading>;
};
