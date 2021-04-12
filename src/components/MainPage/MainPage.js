import React, { useState, useEffect } from 'react'
import { Tile } from '../Tile/Tile';
import { ButtonComponent } from '../Button/Button';
import { Searchbox } from '../Searchbox/Searchbox';
import { getPosts } from "../API/constants";


export const MainPage = ({setPostId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(setPosts);
    }, []);


    return (
        <>
            <ButtonComponent variant='dark' children="Log out"></ButtonComponent>
            <Searchbox />
            <div>
                {posts.map((item, index) => {
                    return (
                        <Tile
                            userId={item.userId}
                            title={item.title}
                            postId={item.id}
                            onTileClick={setPostId}
                        />
                    )
                })
                }
            </div>
        </>
    )
}
