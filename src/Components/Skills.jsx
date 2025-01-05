export default function Skills() {
  return (
    <>
      <div className="container">
        <h1 className="text-4xl border-4 border-black text-center mx-auto w-[300px] p-4 my-11 font-bold">
          Skills
        </h1>

        <div className="grid grid-cols-2 mx-10 place-items-center gap-4 mb-4">
          <img
            className="w-[100px]"
            src="/skill-icons_tailwindcss-dark.png"
            alt=""
          />
          <img className="w-[100px]" src="/public/HTML.png" alt="" />
          <img
            className="w-[100px]"
            src="/public/skill-icons_nodejs-dark.png"
            alt=""
          />
          <img className="w-[100px]" src="/public/logos_css-3.png" alt="" />
          <img className="w-[100px]" src="/public/vue.png" alt="" />
          <img className="w-[100px]" src="/public/React.png" alt="" />
        </div>
      </div>
    </>
  );
}
