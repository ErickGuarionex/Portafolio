export default function DevInfo(){
    return(
        <>
        {/* DEV INFO */}
        <div className="bg-white h-[70%] w-full absolute bottom-[-1px] z-50 [clip-path:polygon(0_70%,_100%_55%,_100%_100%,_0%_100%)] flex justify-left items-end sm:[clip-path:polygon(0_65%,_100%_50%,_100%_100%,_0%_100%)]">
        </div>

        <div className="text-2xl sm:text-4xl absolute bottom-[0px] left-5 z-50 flex justify-between w-[90%] sm:ml-12">
            <div className="flex flex-col justify-end mb-7">
            <h1>Hola, soy</h1>
            <h1 className="text-2xl font-bold">Erick Guarionex</h1>
            <h1 className="text-[14px] font-bold">Front-end Developer / UI Designer</h1>
            </div>

            {/* DEV SOCIAL MEDIA */}
            <div className="z-50 flex flex-col gap-10 ml-12 mb-3 sm:mr-10">
            <img className="w-8" src="../Linkedin.png" alt="" />
            <img src="../Github.png" alt="" />
            <img src="../gmail.png" alt="" />
            </div>
        </div>
        </>
    )
}