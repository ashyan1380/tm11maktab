import React,{useState} from 'react';
import style from './SighnUp.css';
import SighnUpSucces  from "./SighnUpSucces";
const SighnUp = () => {
    const [showSelectTahsil, setShowSelectTahsil] = useState(false);
    const [displayLocationSelect, setdisplayLocationSelect] = useState(false);
    // set information of users
    const [name, setName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEail] = useState("");
    const [password, setPassword] = useState("");
    const [tahsil, setTahsil] = useState("");
    const [tahsilLocation, setTahsilLocation] = useState("");
    const [bornLocation, setBornLocation] = useState("");
    const [city, setCity] = useState("");
    // console.log(name, lName, email, password, tahsil, tahsilLocation, bornLocation, city);
    const [submit, setSubmit] = useState(true);
    const showTahsil = (e) => {
        setTahsil(e.target.value);
        // چک کردن اینکه با انتخاب فیلد تحصیل اینپوت باز  نشه
        e.target.value != "تحصیلات" ? setShowSelectTahsil(true) : setShowSelectTahsil(false);
    }
    const showLocation = (e) => {
        e.target.value != "محل تولد" ? setdisplayLocationSelect(true) : setdisplayLocationSelect(false);
        // setCity(e.target.value);
        setBornLocation(e.target.value);
    }
    return(
        <div className={"sighnup"}>
            <h1>رایگان ثبت نام کنید</h1>
            {submit ? 
            <form onSubmit={()=>setSubmit(false)}>
                <input placeholder={"نام"} type={"text"} onChange={()=>setName()} required/><br/>
                <input placeholder={"نام خانوادگی"} type={"text"} onChange={()=>setLName()} required/><br/>
                <input placeholder={"پست الکترونیک"} type="email" onChange={()=>setEail()} required/><br/>
                <input placeholder={"رمز عبور"} type="text" onChange={()=>setPassword()} required/><br/>
                <select onChange={(e) => showTahsil(e)} required>
                    <option>تحصیلات</option>
                    <option>ابتدایی</option>
                    <option>دیپلم</option>
                    <option>کارشناسی</option>
                    <option>کارشناسی ارشد</option>
                    <option>دکترا</option>
                </select><br/>
                {showSelectTahsil ? <input type="text" placeholder="محل تحصیل" onChange={setTahsilLocation} required ></input>:<p></p>}<br/>
                <select onChange={(e)=>showLocation(e)} required>
                    <option>محل تولد</option>
                    <option>تهران</option>
                    <option>یزد</option>
                    <option>کرمان</option>
                    <option>گلستان</option>
                    <option>کرمانشاه</option>
                    <option>خوزستان</option>
                    <option>مازندران</option>
                    <option>خراسان</option>
                    <option>آذربایجان</option>
                    <option>اردبیل</option>
                </select> 
                <br/>
                {bornLocation ==="تهران" ?<select onChange={()=>setCity()}> <option>تهران 1 </option> <option>تهران 2</option></select> : <p></p>}
                {bornLocation ==="یزد" ?<select onChange={()=>setCity()}> <option>یزد 1 </option> <option>یزد 2</option></select> : <p></p>}
                {bornLocation ==="کرمان" ?<select onChange={()=>setCity()}> <option>کرمان 1 </option> <option>کرمان 2</option></select> : <p></p>}
                {bornLocation ==="گلستان" ?<select onChange={()=>setCity()}> <option>گلستان 1 </option> <option>گلستان 2</option></select> : <p></p>}
                {bornLocation ==="کرمانشاه" ?<select onChange={()=>setCity()}> <option>کرمانشاه 1 </option> <option>کرمانشاه 2</option></select> : <p></p>}
                {bornLocation ==="خوزستان" ?<select onChange={()=>setCity()}> <option>خوزستان 1 </option> <option>خوزستان 2</option></select> : <p></p>}
                {bornLocation ==="مازندران" ?<select onChange={()=>setCity()}> <option>مازندران 1 </option> <option>مازندران 2</option></select> : <p></p>}
                {bornLocation ==="خراسان" ?<select onChange={()=>setCity()}> <option>خراسان 1 </option> <option>خراسان 2</option></select> : <p></p>}
                {bornLocation ==="آذربایجان" ?<select onChange={()=>setCity()}> <option>آذربایجان 1 </option> <option>آذربایجان 2</option></select> : <p></p>}
                {bornLocation ==="اردبیل" ?<select onChange={()=>setCity()}> <option>اردبیل 1 </option> <option>اردبیل 2</option></select> : <p></p>}<br/>
                <button type={"submit"}>ثبت نام</button>
            </form>
            : <SighnUpSucces name={name} lName={lName} email={email} password={password} tahsil={tahsil} tahsilLocation={tahsilLocation} bornLocation={bornLocation} city={city}/>}
        </div>
    );
};
export default SighnUp;