import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

function BlogCard({ post }) {
  return (
    <div className="group flex flex-col space-y-3 lg:w-96">
      <div className=" rounded-lg relative z-0">
        <img
          src={post.image}
          alt={post.title}
          className="relative z-0 aspect-[4/3] h-full w-full object-cover"
        />
      <div className="w-fit bg-white absolute z-20 bottom-0 px-4 py-2 text-blue-500 font-semibold">
        {post.category}
      </div>
      </div>
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <time className="text-sm text-muted-foreground">{post.date}</time>
      <p className="text-muted-foreground">{post.description}</p>
      <Link
        href={`/`}
        className="inline-flex items-center hover:text-sky-500 text-yellow-500"
      >
        Read More
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}

export default BlogCard;