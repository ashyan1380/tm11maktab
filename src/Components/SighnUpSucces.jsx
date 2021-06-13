import React from "react";

const SighnUpSucces = ({name,lName,email,password,tahsil,tahsilLocation,bornLocation,city,...props}) => {
    return(
        <div>
            <h1>ثبت نام موفقیت آمیز بود</h1>
            <table>
                <tr>
                    <td>نام شما</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>نام خانوادگی شما</td>
                    <td>{lName}</td>
                </tr>
                <tr>
                    <td>پست الکترونیک شما</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>رمز عبور شما</td>
                    <td>{password}</td>
                </tr>
                <tr>
                    <td>تحصیلات شما</td>
                    <td>{tahsil}</td>
                </tr>
                <tr>
                    <td>محل تحصیلات شما</td>
                    <td>{tahsilLocation}</td>
                </tr>
                <tr>
                    <td>محل تولد شما</td>
                    <td>{bornLocation}</td>
                </tr>
                <tr>
                    <td>شهر محل تولد شما</td>
                    <td>{city}</td>
                </tr>
                
            </table>
        </div>
    )
}
export default SighnUpSucces;