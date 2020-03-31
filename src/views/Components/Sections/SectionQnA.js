import React from "react";
// plugin that creates slider
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
// @material-ui/icons
// core components
// import 'assets/scss/qAndA.scss';
import DropDownTable from "components/DropDownTable/DropDownTable.js";
import data from "components/DropDownTable/DropDownTableDataInput.js";
// import input data - change file "DropDownTableDataInput.js" to update data displayed!!


const useStyles = makeStyles(styles);
export default function SectionQnA() {
    const classes = useStyles();

    let items = data.map((item, idx) =>
        <DropDownTable
            color="rose"
            a={item.question}
            b={item.answer}
        />
    );

    return (
        <div className={classes.sections}>

            <div className={classes.container}>
                <div className={classes.title}>
                    <h2>Q & A</h2>
                </div>
            </div>
            <div id="navbar" className={classes.navbar}>
                <div className={classes.navigation}>
                    {items}
                </div>
            </div>
        </div>
    )

}