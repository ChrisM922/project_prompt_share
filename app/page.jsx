import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center max-sm:whitespace-normal mx-5'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center max-sm:whitespace-normal mx-5'>
          AI-Powered Promps
        </span>
      </h1>
      <p className='mt-10'>
        PromptShare is an open-source AI prompting tool for the world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
