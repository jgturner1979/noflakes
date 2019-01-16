import React from "react";
import "./Profile.css";

export function AboutMe(props) {
    return (
        <div className="container" id="profileInfo">
            <div className="row">
                <div className="col-lg-3">
                    <h4 {...props}>{props.children}</h4>
                </div>
                <div className="col-lg-3">
                    <p {...props}>{props.children}</p>
                </div>
            </div>
        </div>
    )
}

// export function Input(props) {
//     return (
//         <div className="form-group">
//             <div className="col-lg">
//                 <input className="form-control" {...props}/>
//             </div>
//         </div>
//     )
// }

// export function Label(props) {
//     return (
//         <div>
//             <label {...props}>{props.children}</label>
//         </div>
//     );
// }

// export function TextArea(props) {
//     return (
//         <div className="form-group">
//             <textarea className="form-control" rows="5" {...props}/>
//         </div>
//     );
// }

// export function CheckBox(props) {
//     return (
//         <div className="form-check form-check-inline">
//             <input
//                 className="form-check-input"
//                 type="checkbox"
//                 {...props}/>
//         </div>

//     );
// }

// export function LabelChoices(props) {
//     return (
//         <div className="form-check form-check-inline">
//             <label className="form-check-label" {...props}>{props.children}</label>
//         </div>
//     );
// }

// export function RadioBtn(props) {
//     return (
//         <div className="form-check form-check-inline">
//             <input className="custom-control custom-radio custom-control-inline" type="radio" {...props}/>
//         </div>
//     )
// }

// export function RangeSlider(props) {
//     return (
//         <div className="slidecontainer">
//             <input {...props} className="slider" />
//         </div>
//     )
// }

// export function FormBtn(props) {
//     return (
//         <button {...props} className="btn btn-lg">
//             {props.children}
//         </button>
//     );
// }