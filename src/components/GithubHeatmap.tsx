import GitHubCalendar from 'react-github-calendar';

const GithubHeatmap = () => {
  return (
    <section className="mt-16 text-white text-center px-4">
      <h2 className="text-2xl font-semibold mb-4">GitHub Activity</h2>
      <p className="text-white/60 max-w-md mx-auto mb-6">
        A visual snapshot of my recent open source activity.
      </p>
      <div className="flex justify-center overflow-x-auto">
        <GitHubCalendar
          username="H44K0N"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          colorScheme="dark"
        />
      </div>
    </section>
  );
};

export default GithubHeatmap;
