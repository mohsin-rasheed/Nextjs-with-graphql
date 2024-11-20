import Link from 'next/link';

export default function Sidebar() {
  return (

            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Home
                            </a>
                            <a className="nav-link" href="/todos">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Todos
                            </a>
                            
                            
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Admin
                    </div>
                </nav>
            </div>
        );
        }
        