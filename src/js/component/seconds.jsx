import React, { useEffect, useState } from "react";

const Seconds = () => {
    var [count, setCount] = useState(0);
    var [userInput, setUserInput] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count++);
    }, 1000);
    return () => clearInterval(interval);
    }, []);

    let test = "00000"+count;
    let test1 = test.slice(-6);

    return( 
      <div className="container-fluid">
			  <div className="row d-flex justify-content-center">
        <div className="col d-flex justify-content-center">
               <div className="card-body card-bodycolor card-length">
                  <h1 className="card-title number-size"><i className="fas fa-clock"></i></h1>
              </div>
				  </div>
				  <div className="col d-flex justify-content-center">
              <div className="card-body card-bodycolor card-length">
                  <h1 className="card-title number-size">{test1[0]}</h1>
              </div>
          </div>
          <div className="col d-flex justify-content-center">
               <div className="card-body card-bodycolor card-length">
                  <h1 className="card-title number-size">{test1[1]}</h1>
              </div>
				  </div>
          <div className="col d-flex justify-content-center">
               <div className="card-body card-bodycolor card-length">
                  <h1 className="card-title number-size">{test1[2]}</h1>
              </div>
				  </div>
          <div className="col d-flex justify-content-center">
               <div className="card-body card-bodycolor card-length">
                  <h1 className="card-title number-size">{test1[3]}</h1>
              </div>
				  </div>
          <div className="col d-flex justify-content-center">
               <div className="card-body card-bodycolor card-length">
                  <h1 className="card-title number-size">{test1[4]}</h1>
              </div>
				  </div>
          <div className="col d-flex justify-content-center">
               <div className="card-body card-bodycolor card-length">
                  <h1 className="card-title number-size">{test1[5]}</h1>
              </div>
				  </div>
			  </div>
        <div className="row">
          <div className="col">
            <input type="number" onChange={(e) => {
              setUserInput(e.target.value);
              console.log((parseInt(userInput)));
              if(parseInt(userInput) === count){
                alert("Specified Number has been reached.")
              }
            }} value={userInput} />
          </div>
        </div>
      </div>
  )
}


export default Seconds