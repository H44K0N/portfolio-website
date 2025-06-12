import AnimatedPage from '../AnimatedPage';

const Home = () => {
  return (
    <AnimatedPage>
      <h1 className="text-2xl font-bold">Home</h1>
      <div className="bg-green-500 text-white p-4">
  If you see green, Tailwind is working!
</div>
    </AnimatedPage>
  );
};

export default Home;
