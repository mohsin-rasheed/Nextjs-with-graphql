
        import Link from 'next/link';

        export default function Navbar() {
          return (
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
           
            <a className="navbar-brand ps-3" href="/dashboard">Todo App</a>
           
            
          
            
           
            <ul className="navbar-nav ms-auto ms-auto me-0 me-md-3 my-2 my-md-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/dashboard">Home</a></li>
                        <li><a className="dropdown-item" href="/todos">Todos</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
          );
        }
        