import React from "react";

const About = () => {
  return (
    <>
      {/* Heading */}
      <div className="flex text-3xl font-semibold mb-8">
        <p className="mx-auto">About 100xDevs</p>
      </div>

      {/* Content Wrapper */}
      <div className="px-4 md:px-10 mb-16">
        <div className="px-5 py-6 md:px-10 md:py-8 
                        bg-gradient-to-r from-[#DED3F2] to-[#DFB790] 
                        rounded-3xl">
          
          <p className="mb-4">Welcome to 100xdevs.</p>

          <p className="mb-4">
            This is an initiative by <b>Harkirat Singh</b> to personally mentor
            folks in the field of Programming.
          </p>

          <p className="mb-4">
            Harkirat strongly feels that today you are either a 1x engineer or a
            100x engineer and nothing in the middle, and his hope is to take
            everyone in this community to be a <b>100x Engineer.</b>
          </p>

          <p>
            Join him in his first course on Full Stack development with a heavy
            focus on Open source projects to learn programming practically.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
