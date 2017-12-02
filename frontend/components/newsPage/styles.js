import React from 'react';
import backgroundTheme from '../../themes/containerBackgroundColor';
import itemTheme from '../../themes/itemTheme';
import tabTheme from '../../themes/tabTheme';
import headerTheme from '../../themes/headerTheme';

const styles = {
    container: {
        backgroundColor: backgroundTheme.backgroundColor,
        height: 600
    },
    header: {
        height: itemTheme.height,
        backgroundColor: itemTheme.backgroundColor,
        paddingBottom: itemTheme.paddingBottom
    },
    title: {
        fontSize: itemTheme.titleFontSize,
        width: 275,
        textAlign: 'center',
        fontWeight: itemTheme.titleFontWeight,
        color: itemTheme.textColor,
        paddingTop: 15
    },
    subheading: {
        fontSize: itemTheme.subheadingFontSize,
        width: 275,
        textAlign: 'center',
        color: itemTheme.textColor,
        fontWeight: itemTheme.subheadingFontWeight,
        paddingTop: itemTheme.subheadingPaddingTop,
        paddingBottom: itemTheme.paddingBottom,
        opacity: 0.7
    },
    backArrow: {
        color: itemTheme.textColor,
        paddingBottom: itemTheme.backArrowPaddingBottom,
        fontSize: itemTheme.backArrowFontSize,
        paddingTop: 13
    },
    tabText: {
        color: tabTheme.textColor,
        fontSize: tabTheme.fontSize
    },
    tabBackground: {
        backgroundColor: tabTheme.backgroundColor
        // height: tabTheme.height
    },
    tabUnderline: {
        backgroundColor: headerTheme.backgroundColor,
        // width: 187.5,
    },
    buttonStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    sliderContainer: {
        flex: 1,
        width: 50,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
    }
};

export default styles

