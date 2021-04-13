import React, { useState, useEffect } from 'react'
import { Tile } from '../Tile/Tile';
import { ButtonComponent } from '../Button/Button';
import { Searchbox } from '../Searchbox/Searchbox';
import { getPosts } from "../API/constants";


export const MainPage = ({ setPostId, handleLogout }) => {
    const [posts, setPosts] = useState([]);
    const [postsFiltered, setPostsFiltered] = useState([]);

    const wrapperfunc = (startPosts) => {
        setPosts(startPosts);
        setPostsFiltered(startPosts);
    }

    useEffect(() => {
        getPosts(wrapperfunc);
    }, []);


    const filter = (text) => {
        const myPostsFiltered = posts.filter((el) => el.title.includes(text) || el.body.includes(text));
        setPostsFiltered(myPostsFiltered);
    }

    return (
        <>
            <ButtonComponent variant='dark' children="Log out" onClick={handleLogout}></ButtonComponent>
            <Searchbox onSearchboxChange={filter} />
            <div>
                {postsFiltered.map((item, index) => {
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
