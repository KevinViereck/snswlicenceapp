import { Link } from "react-router-dom";
import nswlogo from "./img/nswlogo.png";

export default function HomePage() {
  return (
    <div class="content-center">
      <section>
        <img
          className="nsw-logo"
          src={nswlogo}
          width={200}
          height={200}
          alt="NSW Government"
        />
      </section>
      <br></br>
      <div class="flex items-center justify-center">
        <div
          class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <a
            href="#"
            aria-current="page"
            class="
        rounded-l
        px-6
        py-2.5
        bg-blue-900
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-blue-700
        focus:bg-blue-700 focus:outline-none focus:ring-0
        active:bg-blue-800
        transition
        duration-150
        ease-in-out
      "
          >
             
              {" "}
              <Link to="/"> Home </Link>{" "}
            
          </a>
          <a
            href="#"
            class="
        px-6
        py-2.5
        bg-blue-900
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-blue-700
        focus:bg-blue-700 focus:outline-none focus:ring-0
        active:bg-blue-800
        transition
        duration-150
        ease-in-out
      "
          >
          
              {" "}
              <Link to="/register"> Register </Link>{" "}
           
          </a>
          
          <a
            href="#"
            class="
        rounded-r
        px-6
        py-2.5
        bg-blue-900
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-blue-700
        focus:bg-blue-700 focus:outline-none focus:ring-0
        active:bg-blue-800
        transition
        duration-150
        ease-in-out
      "
          >
              
              {" "}
              <Link to="/login"> Login </Link>{" "}
            
          </a>
        </div>
      </div>

    </div>
  );
}
