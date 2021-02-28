import { BlogsProvider } from "./BlogsContext";
import { BlogsList } from "./BlogsList";

export const Blogs = () => {
  return (
    <BlogsProvider>
      <BlogsList />
    </BlogsProvider>
  );
};
