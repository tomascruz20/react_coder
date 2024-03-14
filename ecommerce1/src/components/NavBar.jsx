 import { CartWidget } from "./CartWidget"
 
 
 export const Navbar=()=>{
    return(
<> 
<h3>grow shop</h3>
<ul>
    <li>
<a href="#"> plantas</a>
    </li>
    <li>
    <a href="#">masetas</a>
    </li>
    <li>
    <a href="#"> tierra</a>
    </li>
</ul>
<CartWidget/>
</>
    )
}