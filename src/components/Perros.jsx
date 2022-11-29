import React from "react";

const Perros = ({ dog }) => {
  
  return (
    <div className="row">
   
        <div  className="col">
          <div className="card">
            <img style={{height:200, width:200}} src={dog} alt="" />
          </div>
        </div>
      
    </div>
  );
};

export default Perros;
