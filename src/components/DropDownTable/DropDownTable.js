import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// @material-ui/icons
// core components
import styles from "assets/jss/material-kit-react/components/dropDownTableStyle.js";

const useStyles = makeStyles(styles);

export default function DropDownTable(props) {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    React.useEffect(() => {
        if (props.changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChangeOpen);
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.removeEventListener("scroll", headerColorChangeOpen);
            }
        };
    });
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const headerColorChangeOpen = () => {
        const {color, changeColorOnScroll} = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[changeColorOnScroll.color]);
        }
    };
    const {color, a, b, fixed, absolute} = props;
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed
    });

    const appBarClassesClosed = classNames({
        [classes.appBarClosed]: true,
        [classes['white']]: 'white',
        [classes.absolute]: absolute,
        [classes.fixed]: fixed
    });

    const rowItem = <RowItem q={a} a={b} open={appBarClasses} close={appBarClassesClosed}/>;

    return (
        <div>{rowItem}</div>
    );
}

DropDownTable.defaultProp = {
    color: "white"
};

DropDownTable.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    a: PropTypes.string,
    b: PropTypes.string,
    fixed: PropTypes.bool,
    absolute: PropTypes.bool,
    // this will cause the sidebar to change the color from
    // props.color (see above) to changeColorOnScroll.color
    // when the window.pageYOffset is heigher or equal to
    // changeColorOnScroll.height and then when it is smaller than
    // changeColorOnScroll.height change it back to
    // props.color (see above)
    changeColorOnScroll: PropTypes.shape({
        height: PropTypes.number.isRequired,
        color: PropTypes.oneOf([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "transparent",
            "white",
            "rose",
            "dark"
        ]).isRequired
    })
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
                <AppBar className={this.props.open}>
                    <Toolbar style={{cursor: "pointer"}} onClick={this.toggleRow.bind(this)}>
                        <div>
                            {this.props.q}
                        </div>

                    </Toolbar>
                </AppBar>
                {this.state.open === true ? (
                    <AppBar className={this.props.close}>
                        <div style={{padding:"0 3%"}}>{this.props.a}</div>
                    </AppBar>
                ) : (<p></p>
                )}

            </div>
        )
    }


}

