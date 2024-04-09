import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className = "head" contentEditable = "true" spellCheck = "false">My Favourite Foods</h1>
    <div className = "holder">
      <img src="https://variety.com/wp-content/uploads/2023/05/spider-2.jpg?w=1000" alt="" />
      <img src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1559403469315-IET6YVK2FNDL37CI6RR0/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/a-new-spider-man-far-from-home-trailer-reveals-where-spidey-gets-his-new-red-and-black-suit-social.jpg?format=2500w" alt="" />
      <img src="https://media.revistagq.com/photos/63edfa0ecf53bfbacf6f6580/4:3/w_2884,h_2163,c_limit/spider-man-4-tom-holland.jpg" alt="" />
    </div>
  </div>,
  document.getElementById("root")
);
