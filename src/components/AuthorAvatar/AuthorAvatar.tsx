import React from "react";
import styled from "styled-components";

type AuthorAvatarProps = {
    image: string
    alt?: string
    name: string
}

export const AuthorAvatar = ({image, alt, name}: AuthorAvatarProps) => {
    return (
        <Box>
            <Image src={image} alt={alt || 'avatar'}/>
            <AuthorName>{name}</AuthorName>
        </Box>
    )
}

const AuthorName = styled.div`
    font-weight: ${props => props.theme.fontWeights.bold};
    flex: 10;
`

const Image = styled.img`
    flex: 1;
`

const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
`