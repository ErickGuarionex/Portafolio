export default function DevInfo(){
    return(
        <>
        {/* DEV INFO */}
        <div className="bg-white h-[70%] w-[100%] absolute bottom-0 z-50 [clip-path:polygon(0_72%,_100%_55%,_100%_100%,_0%_100%)] flex justify-left items-end">
        </div>

        <div className="text-2xl absolute bottom-[35px] left-5 z-50 flex">
            <div className="flex flex-col justify-end">
            <h1>Hola, soy</h1>
            <h1 className="text-4xl font-bold">Erick Guarionex</h1>
            <h1 className="text-[16px] font-bold">Front-end Developer / UI Designer</h1>
            </div>

            {/* DEV SOCIAL MEDIA */}
            <div className="z-50 flex flex-col gap-12 ml-12">
            <img className="w-8" src="../Linkedin.png" alt="" />
            <img src="../Github.png" alt="" />
            <img src="../gmail.png" alt="" />
            </div>
        </div>
        </>
    )
}