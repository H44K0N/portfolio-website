import AnimatedPage from '../AnimatedPage';
import GithubHeatmap from '../GithubHeatmap';

const Home = () => {
  return (
    <AnimatedPage>
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4">
        <img
  src="/profile-picture.webp"
  alt="Profile"
  className="w-64 h-64 sm:w-64 sm:h-64 md:w-64 md:h-64 rounded-full border-4 border-white/20 mb-6 object-cover"
/>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Hi, I'm Haakon</h1>
        <p className="text-lg text-white/80 mb-4">
          Aspiring Software Developer · Student of Applied Computer Technology at OsloMet
        </p>
        <p className="text-white/70 max-w-xl mb-6">
          Curious by nature, fast learner by habit. I take pride in writing clean, maintainable code —
          and enjoy making tech feel approachable and fun.
        </p>
        <div className="flex gap-3 flex-wrap justify-center mb-8">
          {['JavaScript', 'Java', 'SQL', 'Spring Boot', 'React', 'Tailwind', 'TypeScript'].map(skill => (
            <span key={skill} className="text-sm bg-white/10 text-white px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <GithubHeatmap />
      </section>
    </AnimatedPage>
  );
};

export default Home;
