import React, { Component } from 'react'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from "./sidebar"
import "./layout.css"

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

class Layout extends Component {
  state = {
    isMenu: false
  }
  closeMenu = () => {
    this.setState({
      isMenu: false
    })
  }
  openMenu = () => {
    this.setState({
      isMenu: true
    })
  }
  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={query}
        render={data => (
          <>
            <Header
              siteTitle={data.site.siteMetadata.title}
              openMenu={this.openMenu}
            />
            <Sidebar
              menuStatus={this.state.isMenu}
              closeMenu={this.closeMenu}
            />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 860,
                padding: `7rem 2rem 3rem`,
              }}
            >
              <main>{children}</main>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
