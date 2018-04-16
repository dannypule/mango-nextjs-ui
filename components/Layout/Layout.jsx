import Head from 'next/head'
import TopBar from './TopBar'
import SideMenu from './SideMenu'

export default ({ children, title = 'This is the default title' }) => (
  <div className="Layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <TopBar />
    <SideMenu />

    <div className="layout-body">{children}</div>

    {/* <footer>I`m here to stay</footer> */}
  </div>
)

// width: 60px;
// height: 100%;
// display: flex;
// align-items: center;
// justify-content: center;
