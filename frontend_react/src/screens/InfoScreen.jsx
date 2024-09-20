import React from 'react';
import './InfoScreen.css';
import { useNavigate } from 'react-router-dom';

const InfoScreen = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  }
  
  return (
    <div className="info-screen">
      <div className="financial-hub">
        <h2>Madrid Financial Hub</h2>
        <ul>
          <li onClick={() => navigateTo('/proximity-to-key-markets')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
          >
            Proximity to key markets
          </li>
          <li onClick={() => navigateTo('/bussiness-ecosystem-and-governemnt-support')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
          >
            Business ecosystem and government support
          </li>
          <li onClick={() => navigateTo('/advanced-technological-infrastructure')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
          >
            Advanced technological infrastructure
          </li>
          <li onClick={() => navigateTo('/quality-of-life-and-cultural-attractions')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
          >
            Quality of life and cultural attractions
          </li>
        </ul>
      </div>

      <div className="competitive-advantages">
        <h2>Competitive Advantages</h2>
        <ul>
          <li onClick={() => navigateTo('/favorable-regulatory-environment')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
          >
            Favorable Regulatory Environment
          </li>
          <li onClick={() => navigateTo('/world-class-infrastructure')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
          >
            World-Class Infrastructure
          </li>
          <li onClick={() => navigateTo('/international-talent')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
          >
            International Talent
          </li>
          <li onClick={() => navigateTo('/global-connectivity')}
                  style={{ cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s',
                }}
          >
            Global Connectivity
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoScreen;
