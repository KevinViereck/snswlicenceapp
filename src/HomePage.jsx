import { Link } from "react-router-dom";
import nswlogo from "./img/nswlogo.png";

export default function HomePage() {
  return (
    <div className="content-center drop-shadow-xl">

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
        <div className="flex items-center justify-center">
          <div
            className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="group"
          >
            <div className="navi">
              {" "}
              <Link to="/"> Home </Link>{" "}
            </div>

            {/* PLACEHOLDER */}

            <div
              className="navi
      "
            >
              {" "}
              <Link to="/register"> Register </Link>{" "}
            </div>

            <div
              className="navi
      "
            >
              {" "}
              <Link to="/login"> Login </Link>{" "}
            </div>
          </div>
        </div>

    </div>
  );
}
