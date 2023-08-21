//import { Button } from "@radix-ui/themes"

const Index = () => {
  return (
    <>
      <section className="h-full" >
        <div className="bg-[#FF595E] py-[300px] w-full mx-auto text-center ">
          <h1 className=" text-8xl font-vt323 ">
            Unravel the <span className="bg-[black] text-[#ff595e] block text-center w-72 mx-auto ">Mystery</span> </h1>
          <button className="font-vt323 text-2xl bg-[#FFCA3A] hover:bg-[#FFBC07] mt-4 px-6 py-2 rounded">Click Me</button>
        </div>
      </section>
      <section className="bg-[#ffca3a] w-full pt-24 pl-24 pb-24  ">
        <div>
          <h1 className="font-vt323 text-7xl pb-16">
            Welcome to the Riddler's world!
          </h1>
        </div>
        <div className="font-manrope text-lg w-[650px]">
          <p className="mb-8">
            Join others in this riveting game of wits, creativity, and quick-thinking. Solve riddles with your friends, form new alliances, and compete with other teams to become the Ultimate Riddle Masters!
          </p>
          <p>
            With endless levels and challenging scenarios, The Riddler offers endless hours of entertainment. Are you ready to test your skills against the most enigmatic puzzles on the planet?
          </p>
        </div>
      </section>
      <section className="bg-black text-white py-24">
        <div className="text-5xl font-goblin-one text-[#FF595E] text-center">
          <h1>Meet the <span className="text-xs font-manrope block text-[#FFCA3A] text-[16px] font-extrabold mt-4">MasterMinds behind the game</span> </h1>
        </div>
        <div className="flex">
          <div className="bg-[#0d0d0d] text-center flex flex-col justify-center items-center py-16 px-14 ">
            <img src="https://avatars.githubusercontent.com/u/106504872?v=4" className="w-[50px] rounded-full my-4" />
            <h1 className="font-goblin-one text-[#ff595e] ">Aryan <span className="block">Bramhane</span> </h1>
            <p className="text-xs text-[#ffca3a]">Frontend Devloper</p>
          </div>
        </div>

      </section>
    </>

  )
}
export default Index
