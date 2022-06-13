import {Component } from "react";

const Styles = styled.div`
.p {
    background-color: #222;
    font-size: 15px;
}
`;

class SomeComponent extends Component {
    render() {
        return(
            <div> 
                <h2> Henlo frens</h2>
                <p>It me</p>
            </div>
        );
    }
}
export default SomeComponent;