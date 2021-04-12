import React from 'react'
import { Tile } from '../Tile/Tile';
import { ButtonComponent } from '../Button/Button';
import { Searchbox } from '../Searchbox/Searchbox';


export const MainPage = () => {
    return (
        <div>
            <ButtonComponent variant='dark' children="Log out"></ButtonComponent>
            <Searchbox/>
            <Tile />
        </div>
    )
}
