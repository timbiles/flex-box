import React, { Component } from 'react';
import { Grid, SideNav, Main } from '../styles/gridStyles'; 

class grid extends Component {
    render() {
        return (
            <>
                <Grid>
                    <SideNav>Side nav</SideNav>
                    <Main>Main</Main>
                </Grid>

            </>
        );
    }
}

export default grid;