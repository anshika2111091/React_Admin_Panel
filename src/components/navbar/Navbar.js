import { ChatBubble, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined  } from "@mui/icons-material";
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import person from "./person.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
       <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchIcon/>
       </div>
      <div className="items">
        <div className="item">
          <LanguageOutlined className="icon"/>
          English
        </div>
        <div className="item">
          <DarkModeOutlined className="icon"/>
        </div>
        <div className="item">
          <FullscreenExitOutlined className="icon"/>
        </div>
        <div className="item">
          <NotificationsNoneOutlined className="icon"/>
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ChatBubble className="icon"/>
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ListOutlined className="icon"/>
        </div>
        <div className="item">
         <img src={person} className="avatar" alt="" />
        </div>
      </div>
      </div>

      
    </div>
  )
}

export default Navbar
