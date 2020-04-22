import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, openMenu }) => (
  <header
    style={{
      background: `#f18f01`,
      textAlign: 'center',
      position: 'fixed',
      width: '100%',
      display: 'block',
      zIndex: 9
    }}
  >
    <div className="burger-button" onClick={openMenu}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <div className="title-head" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
