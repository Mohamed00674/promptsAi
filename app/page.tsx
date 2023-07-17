import Feed from "../components/Feed"
function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden " />
        <span className="text-center orange_gradient" >AI Prompts</span>
      </h1>
      <p className="desc text-center" >This project is an open source and it is a tool for modern world to discover,create and share creative prompts</p>
      <Feed/>
    </section>
  );
}

export default Home;
