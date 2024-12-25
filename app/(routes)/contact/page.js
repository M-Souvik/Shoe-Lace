'use client'

import React, { useState } from "react";
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  return (
    <div className="relative pb-96">
    <div className="container mx-auto px-40 py-12 relative z-20">
      <div className="grid lg:grid-cols-2 gap-12 content-center">
      <div className="mb-8">
        <h4 className="font-medium mb-2 text-blue-500">Contact Us</h4>
        <h1 className="text-5xl font-bold mb-2">Get In Touch</h1>
        <p className="text-base-content/70 max-w-2xl my-4">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Denpasar, Bali</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-primary mt-1 " color="orange"/>
                <p className="text-base-content/70">
                  Jl. Raya Puputan No 142, Sumerta Kelod, Bali - 80234
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 " fill="orange" color="orange"/>
                <p className="text-base-content/70">(+62) 361 876 4562</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" color="orange"/>
                <p className="text-base-content/70">contact@domain.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Canggu, Bali</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 mt-1" color="orange" />
                <p className="text-base-content/70">
                  Jl. Pantai Batu Bolong 69, Canggu, Bali - 80351
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" fill="orange" color="orange"/>
                <p className="text-base-content/70">(+62) 361 876 4562</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" color="orange"/>
                <p className="text-base-content/70">contact@domain.com</p>
              </div>
            </div>
          </div>

          {/* <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2025477905427!2d115.22288731478386!3d-8.672427393766792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374f!2sLapangan%20Niti%20Mandala%20Renon!5e0!3m2!1sen!2sid!4v1679904256596!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div> */}
        </div>

        <div className="card bg-base-100 shadow-xl border">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  disabled={loading}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                  disabled={loading}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="input input-bordered w-full"
                  disabled={loading}
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered min-h-[150px] w-full"
                  disabled={loading}
                  required
                />
              </div>
              <button 
                type="submit" 
                className={`btn bg-orange-400 font-normal hover:bg-orange-400 hover:-translate-y-2 text-[16px] w-52 h-16 text-white ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
      <div className="w-full h-[34rem] bottom-0 rounded-lg absolute z-0  overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2025477905427!2d115.22288731478386!3d-8.672427393766792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374f!2sLapangan%20Niti%20Mandala%20Renon!5e0!3m2!1sen!2sid!4v1679904256596!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
  </div>
  );
}