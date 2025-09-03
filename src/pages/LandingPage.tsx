import '../index.css'

function LandingPage() {
    return (
        <div className="flex flex-col gap-10 border-1 px-30 mx-10 my-10 py-10">
            <h1 className="text-center text-4xl font-[TASA Orbiter]">Gage Witcig's Portfolio</h1>
            <div className="flex flex-row gap-20">
                <img
                    src="../src/assets/ML6A4928.jpg"
                    alt="Picture of Gage Witcig at the University of Nebraska-Lincoln's Love Library"
                    className="h-200"
                ></img>
                <div className="flex justify-center items-center">
                    <h1 className="text-3xl font-[TASA Orbiter]">Under construction...</h1>
                </div>
            </div>

        </div>
    )
}

export default LandingPage