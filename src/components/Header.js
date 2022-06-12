import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link, useHistory } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';




const Header = () => {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    roy g. biv
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/page-one" onClick={menuToggleHandler}>
                                Red
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-two" onClick={menuToggleHandler}>
                                Orange
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-three" onClick={menuToggleHandler}>
                                Yellow
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-four" onClick={menuToggleHandler}>
                                Green
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-five" onClick={menuToggleHandler}>
                                Blue
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-six" onClick={menuToggleHandler}>
                                Purple
                            </Link>
                        </li>
                    </ul>
                    <ConnectButton />
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
