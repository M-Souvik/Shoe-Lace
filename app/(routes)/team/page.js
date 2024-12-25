import { Badge, Leaf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TeamSection() {
  return (
    <section className="container mx-auto px-4 py-16 lg:px-40">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-blue-500 font-medium">Our Team</span>
            <h2 className="text-4xl font-bold">Meet The Expert Team</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
              eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <Badge className="w-8 h-8 text-blue-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Certified Team</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                  luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <Leaf className="w-8 h-8 text-blue-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Clean & Hygiene</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                  luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>

          <Button 
            variant="default" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
          >
            Contact Us
          </Button>
        </div>

        <div className="relative">
          <Image
            src="/images/team-1.jpg"
            alt="Cleaning Professional"
            width={600}
            height={800}
            className="rounded-lg object-cover"
          />
          <div className="absolute bottom-0 left-20 right-20 bg-blue-500 text-white p-6 text-center rounded-xl">
            <h3 className="text-2xl font-semibold">Eve Stevens</h3>
            <p className="text-blue-100">Shoelace CEO</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 pt-10">
      <div className="relative">
          <Image
            src="/images/team-2.jpg"
            alt="Cleaning Professional"
            width={600}
            height={800}
            className="rounded-lg object-cover"
          />
          <div className="absolute bottom-0 lg:left-20 lg:right-20 bg-blue-500 text-white p-6 text-center rounded-xl">
            <h3 className="text-2xl font-semibold">Debra Martin</h3>
            <p className="text-blue-100">Expert Staff</p>
          </div>
        </div>
      <div className="relative">
          <Image
            src="/images/team-3.jpeg"
            alt="Cleaning Professional"
            width={600}
            height={800}
            className="rounded-lg object-cover"
          />
          <div className="absolute bottom-0 lg:left-20 lg:right-20 bg-blue-500 text-white p-6 text-center rounded-xl">
            <h3 className="text-2xl font-semibold">Emily Stewart</h3>
            <p className="text-blue-100">Expert Staff</p>
          </div>
        </div>
      <div className="relative">
          <Image
            src="/images/team-4.jpeg"
            alt="Cleaning Professional"
            width={600}
            height={800}
            className="rounded-lg object-cover"
          />
          <div className="absolute bottom-0 lg:left-20 lg:right-20 bg-blue-500 text-white p-6 text-center rounded-xl">
            <h3 className="text-2xl font-semibold">Eve Sevens</h3>
            <p className="text-blue-100">Expert Staff</p>
          </div>
        </div>
      </div>
    </section>
  )
}

