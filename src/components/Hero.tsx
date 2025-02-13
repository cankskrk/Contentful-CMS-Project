import heroImage from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl mx-auto px-6 py-12 gap-8">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contentful CMS</h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam
          quia id, quasi magnam, blanditiis aliquam itaque laborum tempora
          delectus consequuntur numquam, dolor deserunt minima? Quis ea
          voluptatibus similique quo necessitatibus cumque deserunt assumenda
          quisquam incidunt odio quae illum, possimus iusto mollitia dicta nihil
          consequuntur explicabo delectus neque nulla dolorum.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={heroImage}
          alt="woman and the browser"
          className="max-w-xs md:max-w-sm"
        />
      </div>
    </section>
  );
};

export default Hero;
