import useFetch from "../fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetch();

  if (loading) {
    return (
      <section className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-gray-600">Loading...</h2>
      </section>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 py-10">
      <h3 className="text-4xl font-bold mb-10 text-gray-800">Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 w-full max-w-6xl">
        {projects.map((project) => {
          const { id, image, url, title } = project;

          return (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {title}
                </h4>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
