export default function Profile(){
    return(
        <>
        <h1 className="text-2xl texe-white-500 text-center bg-red-900">Profile</h1>
        <div className="p-10 bg-red-100 rounded">
            <img src="/imges/Orca.jpg" className="rounded-full w-32 shadow-lg border-4 border-neuteral-100 mx-auto p-5"/>
            <h2 className="text-xl text-center text-red-900">About Me</h2>
            <p className="text-center "> นาย ภาสกร เมฆปั้น นักศึกษาชั้นปรินญาตรี ปีที่ 2 อายุ 22 ปี</p>
        </div>
         </>
    );

}