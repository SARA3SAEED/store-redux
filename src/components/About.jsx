import React from "react";

function About() {
  return (
    <div className="container p-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="mb-6 md:mb-0">
          <h5 className="mb-2 font-medium uppercase">Our Mission</h5>
          <p className="mb-4 text-justify p-6">
            Our mission is to make shopping easy, enjoyable, and rewarding. We
            are committed to offering exceptional products and outstanding
            customer service. Whether you're shopping for yourself or looking
            for the perfect gift, we are here to help.
          </p>
        </div>
        <div className="mb-6 md:mb-0 ml-7">
          <h5 className="mb-2 font-medium uppercase">About Our Store</h5>
          <p className="mb-4 text-justify p-6">
            Our store offers a wide variety of products from top brands at
            competitive prices. We are committed to ensuring you have a seamless
            shopping experience from start to finish. Whether you're looking for
            the latest tech gadgets, home essentials, fashion trends, or outdoor
            equipment, we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
