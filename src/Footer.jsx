import React from "react";
import ReactDOM from "react";

function Footer(){
      const date = new Date();
        return (<footer>
            <p>
                  Copy right © {date.getFullYear()}
            </p>
        </footer>);
}

export default Footer;