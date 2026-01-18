
import BlogCard from "@/components/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function Home() {
  const {data}=await blogService.getBlogPosts();
  // console.log(data);
  return (
    <div className="grid grid-cols-4 gap-4 px-4 w-10/12 mx-auto">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
