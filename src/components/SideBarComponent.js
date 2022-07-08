import TruyenHayComponent from "./TruyenHayComponent";
import TruyenMoiDangComponent from "./TruyenMoiDangComponent";
import './SideBarComponent.scss'
const SideBarComponent = () => {
  return (
    <>
      <div className="toplist-sidebar">
        <TruyenHayComponent />
      </div>
      <div className="newlist-sidebar mt-3">
        <TruyenMoiDangComponent />
      </div>
      <div className="binhluan-sidebar mt-3"></div>
    </>
  );
};

export default SideBarComponent;
