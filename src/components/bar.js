import { NavDropdown } from "react-bootstrap";

export default function Bar(){
    const dropdownItems = [
        {
          href: '#SF340',
          title: 'SF340',
        },
        {
          href: '#SF340',
          title: 'SF340',
        },
        {
          href: '#SF340',
          title: 'SF340',
        },
        {
          href: '#SF340',
          title: 'SF340',
        },
      ];
    return(                        
        <nav className="navbar navbar-expand navbar-light bg-light justify-content-center p-0 border-bottom">
            <ul className="navbar-nav">
                <li>
                <a className="navbar-brand mb-0 h1 ms-5 d-none d-md-inline" href="#All">
                    <span>All</span>
                </a>
                </li>
                <li>
                <a className="navbar-brand mb-0 h1 ms-5 d-none d-md-inline" href="#Answers">
                    <span>Answers</span>
                </a>
                </li>
                <li className="navbar-brand mb-0 h1 ms-5 d-none d-md-inline">
                <NavDropdown title="Question" id='dropdown'>
                    {dropdownItems.map(({ href, title }) => (
                    <NavDropdown.Item>
                        <a
                            className='nav-link px-auto text-dark border border-dark border-1 rounded-2' href={href}
                        >
                        <span className="ms-2">{title}</span>
                        </a>
                    </NavDropdown.Item>
                    ))}
                </NavDropdown>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li>
                <a className="navbar-brand ms-0 d-inline  d-md-none" href="#All">
                    <span>All</span>
                </a>
                </li>
                <li>
                <a className="navbar-brand ms-0 d-inline  d-md-none" href="#All">
                    <span>Teacher</span>
                </a>
                </li>
                <li>
                <a className="navbar-brand ms-0 d-inline  d-md-none" href="#All">
                    <span>Other</span>
                </a>
                </li>
                <li>
                <a className="navbar-brand ms-0 d-inline  d-md-none" href="#Answers">
                    <span>You</span>
                </a>
                </li>
                <li>
                <a className="navbar-brand ms-0 d-inline  d-md-none" href="#All">
                    <span>Like</span>
                </a>
                </li>
            </ul>
        </nav>
    );
}