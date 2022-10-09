import { Link, useNavigate } from "react-router-dom";
import nswlogo from "./img/nswlogo.png";
import { getLogin } from "./web-helpers";

export default function HomePage() {
  const token = getLogin();
  const navigate = useNavigate();
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

          {token ? (
            <button onClick={() => navigate("/loginAsCustomer")}>
              Logbook
            </button>
          ) : (
            <>
              {" "}
              <div className="navi">
                <Link to="/register"> Register </Link>{" "}
              </div>
              <div className="navi">
                <Link to="/login"> Login </Link>{" "}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}