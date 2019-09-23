import React, { Component } from "react";

interface Props {

}

interface State {

}

class MainContent extends Component<Props, State> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<main className="Main-Container">
            Main-Container
        </main>);
    }
}

export default MainContent;

