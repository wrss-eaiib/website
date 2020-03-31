import React from "react";
// nodejs library that concatenates classes
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
// import {makeStyles} from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// @material-ui/icons
// core components
// import styles from "assets/jss/material-kit-react/components/dropDownTableStyle.js";
import {Container, Navbar, NavbarBrand} from "reactstrap";

// const useStyles = makeStyles(styles);

export default function DropDownTable(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const {a, b, colorA, colorB} = props;

    let answerColor = colorA;
    let questionColor = colorB;


    if (colorA == undefined) answerColor = "navbar-transparent";
    if (colorB == undefined) questionColor = "bg-info";


    const rowItem = <RowItem q={a} a={b} answerColor={answerColor} questionColor={questionColor}/>;

    return (
        <div>{rowItem}</div>
    );
}

DropDownTable.defaultProp = {
    colorA: "navbar-transparent",
    colorB: "bg-info"
};

DropDownTable.propTypes = {
    colorA: PropTypes.oneOf([
        "navbar-transparent",
        "bg-danger",
        "bg-warning",
        "bg-success",
        "bg-info",
        "bg-primary"
    ]),
    colorB: PropTypes.oneOf([
        "navbar-transparent",
        "bg-danger",
        "bg-warning",
        "bg-success",
        "bg-info",
        "bg-primary"
    ]),
    a: PropTypes.string,
    b: PropTypes.string
};

class RowItem extends React.Component {

    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    toggleRow(e) {
        console.log('toggleRow');

        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div>
                <Navbar className={this.props.questionColor} expand="lg"
                        style={{cursor: "pointer", marginBottom: "0px", marginTop: "20px"}}
                        onClick={this.toggleRow.bind(this)}>
                    <Container>
                        <div className="navbar-translate">
                            <NavbarBrand href="#pablo">
                                {this.props.q}
                            </NavbarBrand>
                        </div>
                    </Container>
                </Navbar>
                {this.state.open === true ? (
                    <Navbar className={this.props.answerColor} expand="lg">
                        <Container>
                            <div className="text-muted" style={{textAlign: "justify"}}>
                                {this.props.a}
                            </div>
                        </Container>
                    </Navbar>
                ) : (<p></p>
                )}
            </div>
        )
    }
}

