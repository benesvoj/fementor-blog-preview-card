import React from 'react';
import styled from "styled-components";
import {Card} from "./components/Card/Card";
import {mockData} from "./api/mockData";

export const App = () => {
    return (
        <StyledContainer>
            {mockData.map((item, index) => (
                <Card
                    key={index}
                    imageUrl={item.imageUrl}
                    imageAlt={item.imageAlt}
                    tag={item.tag}
                    publishedDate={item.publishedDate}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    authorAvatar={item.authorAvatar}
                    authorAvatarAlt={item.authorAvatarAlt}
                />)
            )}
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`