import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Shoes Clean",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      image: '/images/wasing-shoe-2.jpg',
      link: "#"
    },
    {
      title: "Shoe Repair",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      image: "/images/shoe-repair.jpg",
      link: "#"
    },
    {
      title: "Deep Clean",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      image: "/images/cleaning-shoe.jpg",
      link: "#"
    }
  ];

  return (
    <section className="relative z-10 py-16">
      <div className=" mx-auto">
        {/* Section Header */}
        <div className="text-center mb-7">
          <h2 className="text-xl font-bold text-sky-400">Our Services</h2>
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div key={index} className="group relative z-20 overflow-hidden rounded-xl">
              {/* Image Container */}
              <div className="aspect-w-16 aspect-h-12 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={10000}
                  height={10000}
                  
                  className="object-cover w-[500px] h-[600px]"
                />
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 transition-colors duration-200 group-hover:bg-[#00A8FF] h-52  " />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end py-10 px-4 text-center text-white">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-200 mb-4">{service.description}</p>
                <Link 
                  href={service.link}
                  className="text-orange-400 hover:text-orange-300 transition-colors inline-flex justify-center items-center text-sm font-medium text-center"
                >
                  Learn More
                 
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

