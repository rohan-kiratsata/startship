import Image from "next/image";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className="hero py-32">
        <div className="hero-content text-center">
          <div className="max-w-6xl">
            <h1 className="text-7xl font-bold">
              {/*  */}
              Launch your SaaS product within hours with this boilerplate
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="py-6 text-lg font-medium text-neutral-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ducimus rerum debitis quidem quaerat pariatur earum
                corporis accusamus, cumque placeat?
              </p>
              <div>
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <button className="btn btn-primary ml-2">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
