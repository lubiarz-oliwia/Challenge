import React, { useState, useEffect } from 'react'
import { Tile } from '../Tile/Tile';
import { ButtonComponent } from '../Button/Button';
import { Searchbox } from '../Searchbox/Searchbox';
import { getPosts } from "../API/constants";
import { Error } from '../Error/Error';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const MainPage = ({ setPostId, handleLogout }) => {
    const [posts, setPosts] = useState([]);
    const [postsFiltered, setPostsFiltered] = useState([]);

    const wrapperfunc = (startPosts) => {
        setPosts(startPosts);
        setPostsFiltered(startPosts);
    }

    const [isErrorPresent, failCallback] = useState(false)


    useEffect(() => {
        getPosts(wrapperfunc, failCallback);
        console.log(wrapperfunc);
    }, []);

    const filter = (text) => {
        const myPostsFiltered = posts.filter((el) => el.title.includes(text) || el.body.includes(text));
        setPostsFiltered(myPostsFiltered);
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center" style={{ marginBottom: "10px" }}>
                    <Col lg={4} md={6} style={{ marginTop: "10px" }}>
                        <ButtonComponent variant='dark' children="Log out" onClick={handleLogout}></ButtonComponent>
                    </Col>
                    <Col lg={8} md={6} style={{ marginTop: "10px" }} >
                        <Searchbox onSearchboxChange={filter} />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    {postsFiltered.map((item, index) => {
                        return (
                            <Col lg={4} md={6}>
                                <Tile
                                    userId={item.userId}
                                    title={item.title}
                                    postId={item.id}
                                    onTileClick={setPostId}

                                />
                            </Col>
                        )
                    })
                    }
                </Row>
                {isErrorPresent ? <Row className="justify-content-md-center"><Col lg={12}><Error></Error></Col></Row> : null}

            </Container>
           
        </>
    )
}
