import { Outlet } from 'react-router-dom';
import '../App.css';
import VerticalNav from "./VerticalNav";
function UserRoot() {
  return (
<div className='wrapper d-flex'>   
< VerticalNav />
<div><Outlet /></div>
</div>
  );
}

export default UserRoot;
