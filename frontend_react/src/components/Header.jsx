import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  }

  return (
    <header className="header">
      <h1 
        className="logo"
        onClick={() => navigateTo('/') }
        style={{ cursor: 'pointer',
                 userSelect: 'none',
                 transition: 'color 0.3s',
              }}
        >
          My Website
        </h1>
        <nav className="header__nav">

          <div className="nav-item">
            <p className="nav-menu">
              Madrid Financial Hub
            </p>

            <div className="submenu">
              <span className="menu-item"
                    onClick={() => navigateTo('/proximity-to-key-markets')}
                    style={{ cursor: 'pointer',
                      userSelect: 'none',
                      transition: 'color 0.3s',
                  }}
              >
                Proximity to Key Markets
              </span>
              <span className="menu-item"
                  onClick={() => navigateTo('/bussiness-ecosystem-and-governemnt-support')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
              >
                Bussiness Ecosystem and Government Support
              </span>
              <span className="menu-item"
                  onClick={() => navigateTo('/advanced-technological-infrastructure')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
              >
                Advanced Technological Infrastructure
              </span>
              <span className="menu-item"
                  onClick={() => navigateTo('/quality-of-life-and-cultural-attractions')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
              >
                Quality of Life and Cultural Attractions
              </span>
            </div>
          </div>

          <div className="nav-item">
            <p className="nav-menu">
              Competitive Advantages
            </p>

            <div className="submenu">
              <span className="menu-item"
                    onClick={() => navigateTo('/favorable-regulatory-environment')}
                    style={{ cursor: 'pointer',
                      userSelect: 'none',
                      transition: 'color 0.3s',
                  }}
              >
                Favorable Regulatory Environment
              </span>
              <span className="menu-item"
                  onClick={() => navigateTo('/world-class-infrastructure')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
              >
                World-Class Infrastructure
              </span>
              <span className="menu-item"
                  onClick={() => navigateTo('/international-talent')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
              >
                International Talent
              </span>
              <span className="menu-item"
                  onClick={() => navigateTo('/global-connectivity')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
              >
                Global Connectivity
              </span>
            </div>
          </div>


          <div className="nav-item">
            <span className="nav-button"
                  onClick={() => navigateTo('/item2')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
              >
                Testimonials
              </span>
          </div>
              


          <div className="nav-item">
          <span className="nav-button"
                  onClick={() => navigateTo('/item2')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
              >
                Contact
              </span>
          </div>
          
          <span className="join-us-button"
                onClick={() => navigateTo('/join-us')}
                style={{ cursor: 'pointer',
                  userSelect: 'none',
                  transition: 'color 0.3s',
               }}
          >
            Join Us
          </span>
        </nav>
    </header>
  );
};

export default Header;
