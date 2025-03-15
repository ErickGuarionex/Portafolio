export default function Skills() {
  return (
    <>
      <div className="contenedor">
        <h1 className="text-4xl border-4 border-black text-center mx-auto w-[300px] p-4 my-11 font-bold">
          Skills
        </h1>

        <div className="grid grid-cols-3 mx-auto place-items-center gap-8 mb-4 w-fit">
          <img
            className="w-[90px]"
            src="/skill-icons_tailwindcss-dark.png"
            alt=""
          />
          <img className="w-[90px]" src="/HTML.png" alt="" />
          <img
            className="w-[90px]"
            src="/skill-icons_nodejs-dark.png"
            alt=""
          />
          <img className="w-[90px]" src="/logos_css-3.png" alt="" />
          <img className="w-[90px]" src="/vue.png" alt="" />
          <img className="w-[90px]" src="/React.png" alt="" />
        </div>
      </div>
    </>
  );
}
