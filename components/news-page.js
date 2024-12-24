import BlogCard from "./blog-card"


const posts = [
  {
    category: "News",
    title: "Eli Manning Goes Sneaker Shopping With Complex",
    date: "October 26, 2021",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus...",
    image: "/images/news-1.jpg",
    slug: "eli-manning-goes-sneaker-shopping"
  },
  {
    category: "News",
    title: "Bodega Teases Upcoming New Balance Collab",
    date: "October 26, 2021",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus...",
    image: "/images/news-2.jpg",
    slug: "bodega-teases-new-balance-collab"
  },
  {
    category: "Shoe",
    title: "Yeezy To New YZY NSLTD Boot In 'Khaki' This November",
    date: "October 26, 2021",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus...",
    image: "/images/news-3.jpg",
    slug: "yeezy-nsltd-boot-khaki"
  }
]

export default function NewsBlog() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-sky-500 tracking-wider">
              Our News
            </h3>
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
              News & Blog
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

