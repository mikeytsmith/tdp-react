import { Compnent } from "react";

const Styles = styled.div`
  .p{
    background-color: #222;
    fontsize: 15px;
  }
`;

class someComponent extends Component {
  render() {
    return(
      <div>
        <h2> Henlo frens</h2>
        <p>It me</p>
      </div>
    );
  }
}

export default someComponent; 