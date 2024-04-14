import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { RootState, useAppDispatch, useAppSelector } from "../../../app/redux/store";
import { userCheck } from "../../Auth/authSlice";

// Компонент главной страницы
function Main(): JSX.Element {
    const user = useAppSelector((store: RootState) => store.auth.user);
    const dispatch = useAppDispatch()
    const checkUser = async (): Promise<void> => {
        dispatch(userCheck());
      }
    useEffect(() => {
        checkUser()
    }, [])
    return (
    <div className="wrapper">
        <Navbar />
        <Outlet/>
    </div>
    );
   }

export default Main