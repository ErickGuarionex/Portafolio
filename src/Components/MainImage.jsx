export default function MainImage(){

    const imagen = "/ERICKGUARIONEX-CURRICULUM (2).svg";
    ScrollReveal().reveal('.imagen-principal', {delay: 500});

    return(
        <div className="h-100vh imagen-principal">
              <img width={'500px'} className="absolute right-[0px] bottom-[150px] z-50" src={imagen} alt="Imagen principal" />
        </div>
    )
}