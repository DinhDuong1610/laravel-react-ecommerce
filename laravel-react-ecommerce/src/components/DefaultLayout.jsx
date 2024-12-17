import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/Contextprovider";

function DefaultLayout() {
    const { user, token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }

    const onLogout = (e) => {
        e.preventDefault();
    }

    return (
        <div id="defaultLayout">
            <div className="content">
              <header>
                <div>
                  header
                </div>
                <div>
                  {user.name}
                  <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                </div>
              </header>
              <main>
                <Outlet />
              </main>
            </div>
        </div>
    );
}

export default DefaultLayout;
