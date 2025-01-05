export default function MainImage(){

    const imagen = "/ERICKGUARIONEX-CURRICULUM (2).svg";

    return(
        <div className="h-100vh">
              <img width={'700px'} className="absolute right-[0px] bottom-[150px] z-50" src={imagen} alt="Imagen principal" />
        </div>
    )
}