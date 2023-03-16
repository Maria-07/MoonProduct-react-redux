import React from "react";

const Cart = () => {
  return (
    <div>
      {/* {" "}
      <div className={sideFixed ? "slide mx-5 w-[87vw]" : "slide"}>
        <div className={!sideFixed ? "lg:ml-[98px] lg:mr-[22px] mx-2" : ""}>
          <NavigationBar
            handleSIdebar={handleSIdebar}
            handle={handle}
          ></NavigationBar>
        </div>
        <main
          className={
            sideFixed
              ? "font-medium  main bg-white shadow-md rounded-3xl w-auto mt-2"
              : "font-medium  main bg-white shadow-md rounded-3xl w-auto mt-2 mx-2 lg:ml-[98px] lg:mr-[22px] "
          }
        >                
        +      
          <Outlet />
        </main>
        <Footer></Footer>
      </div> */}
    </div>
  );
};

export default Cart;
