import { createGlobalStyle } from 'styled-components';

const GlobalStyling = createGlobalStyle`

*
{
padding: 0px;
margin: 0px;
// font-family: monospace;
user-select: none;
}


html {
  height: 100vh;
  // width: 50vw;
  scroll-behavior: smooth;
  font-size: 8px;
  // overflow-x:hidden;
  line-height: 1.15;
    text-size-adjust: 100%;
    // border: 5px solid red;
    display:flex;
    justify-content: center;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

#root{
  // border: 5px solid blue;
  min-height:100vh;
  min-width:100vw;
  display: flex;
  justify-content: center;
  // align-items: center;
}

body {
  padding: 0;
  margin: 0;
  // width: 100%;
  height: 100vh;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100px;
  // border: 10px solid pink;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-family: 'Noto Sans JP';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // margin:0 auto;
  // flex-grow: 1;

}
.App {
    text-align: center;
    
  }
  :focus {outline:none;}

  .Header {
    background-color: #282c34;
    height: 8.5rem;
    display: flex;
    align-items: center;
    // border: 5px solid red;
    flex-direction: row;
    overflow: hidden;
    width:100vw;
    align-items: center;
    z-index:3;
    position: fixed;
    top: 0px;
    color: white;
    justify-content: space-between;
  }

  .HeaderText{
      margin: 10px;
      cursor: pointer;
      
  }

  .fa-video{
      cursor: pointer;
  }

  .Searchbox {
    background-color: #282c34;
    height: 8.5rem;
    display: flex;
    flex-direction: row;
    width:100%;
    align-items: center;
    justify-content: center; 
    z-index:3;
    color: white;
    box-shadow: 0 4px 2px -2px gray;
    position: sticky;
    top: 0;
  }
  .HeroContainer{
      height:700px;
      display: flex;
      max-width: 100vw;
      justify-content: center;
      align-items: center;
      position:relative;


  }

  .slider {
    overflow-y: hidden;
    max-height: 500px; /* approximate max height */
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }
  h5{
    font-weight: 100;
    color: white;
    margin: 2px;
  }

  a:visited {
    color: white;
    text-decoration: none;
}

a:link {
  color: white;
  text-decoration: none;
}

.fa-portrait{
  margin-top: 5px;
}

  .slider.closed {
    max-height: 0;
  }

  @media (max-width: 875px) {
    #root::-webkit-scrollbar {
      // display: none;
    }

    #root {
      width: 100vw;
      overflow-x: hidden;
      overflow-y: visible;
    }

    .Header {
      display: flex;
      // border: 5px solid green;
      justify-content: space-between;
      width: 100%;
      overflow-x: hidden;
      overflow-y: hidden;
      position: absolute;
    }
    .HeroContainer{
      position:relative;
      left: 0rem;
      top: 0rem;
      overflow-x: hidden;
      overflow-y: hidden;
    }
    
    html{
      overflow-x: hidden;
      overflow-y: hidden;
    }
    .Searchbox{
      // border: 4px solid blue;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-content: center;
    }



  }

  input:focus::-webkit-input-placeholder { color:transparent; }
input:focus:-moz-placeholder { color:transparent; } /* Firefox 18- */
input:focus::-moz-placeholder { color:transparent; } /* Firefox 19+ */
input:focus:-ms-input-placeholder { color:transparent; } /* oldIE ;) */


  `;

export default GlobalStyling;
