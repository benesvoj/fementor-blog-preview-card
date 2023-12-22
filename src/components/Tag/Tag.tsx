import React from "react";
import styled from "styled-components";

type TagProps = {
    title: string
}

export const Tag = ({title}: TagProps) => {
    return(
        <TagContainer>
            {title}
        </TagContainer>
        )
}

const TagContainer = styled.div`
    border-radius: .5rem;
    background-color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.bold};
    padding: .5rem 1rem;
    align-self: flex-start;
`