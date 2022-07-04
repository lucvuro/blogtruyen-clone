import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import './TruyenHayComponent.scss'
const TruyenHayComponent = () => {
    const [showsideBar, setshowsideBar] = useState(true)
    const [hotShow, sethotShow] = useState(0)
    return (
        <>
            <div className="sidebar-tieude">
                <span className="tieude">Truyện hay</span>
                <span className='pull-right icon' onClick={() => setshowsideBar(!showsideBar)}><i class={showsideBar ? "fa-solid fa-minus" : "fa-solid fa-plus"}></i></span>
            </div>
            {showsideBar && <div className="sidebar-content">
                <div className="top">
                    <div className={hotShow === 0 ? "top-item active" : "top-item"} onClick={() => sethotShow(0)}>
                        TOP HOT
                    </div>
                    <div className={hotShow === 1 ? "top-item active" : "top-item"} onClick={() => sethotShow(1)}>
                        TOP WEEK
                    </div>
                    <div className={hotShow === 2 ? "top-item active" : "top-item"} onClick={() => sethotShow(2)}>
                        TOP ALL
                    </div>
                </div>
                <div className='top-content'>
                    {hotShow === 0 && <div className="top-hot">
                        <div className="item">
                            <div className="index">
                                1.
                            </div>
                            <div className="name">
                                DETECTIVE CONAN
                            </div>
                            <div className="views">
                                15000 views
                            </div>
                        </div>
                        <div className="item">
                            <div className="index">
                                1.
                            </div>
                            <div className="name">
                                DETECTIVE CONAN
                            </div>
                            <div className="views">
                                20000000000 views
                            </div>
                        </div>
                    </div>}
                    {hotShow === 1 && <div className="top-hot-week">
                        <div className="item">
                            <div className="index">
                                1.
                            </div>
                            <div className="name">
                                TO LOVE RU
                            </div>
                            <div className="views">
                                15000 views
                            </div>
                        </div>
                        <div className="item">
                            <div className="index">
                                1.
                            </div>
                            <div className="name">
                                DETECTIVE CONAN
                            </div>
                            <div className="views">
                                20000000000 views
                            </div>
                        </div>
                    </div>}
                    {hotShow === 2 && <div className="top-hot-all">
                        <div className="item">
                            <div className="index">
                                1.
                            </div>
                            <div className="name">
                                DETECTIVE CONAN
                            </div>
                            <div className="views">
                                15000 views
                            </div>
                        </div>
                        <div className="item">
                            <div className="index">
                                1.
                            </div>
                            <div className="name">
                                DETECTIVE CONAN
                            </div>
                            <div className="views">
                                20000000000 views
                            </div>
                        </div>
                    </div>}
                </div>
            </div>}
        </>
    )
}
export default TruyenHayComponent;