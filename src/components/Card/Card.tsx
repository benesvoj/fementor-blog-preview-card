import {images} from "../../assets";
import React from "react";
import styled from "styled-components";
import {Tag} from "../Tag/Tag";
import {AuthorAvatar} from "../AuthorAvatar/AuthorAvatar";

export type CardProps = {
    imageUrl: string
    imageAlt?: string
    tag: string
    publishedDate: string
    title: string
    description: string
    author: string
    authorAvatar: string
    authorAvatarAlt?: string
}

export const Card = (props: CardProps) => {
    return (
        <CardContainer>
            <img src={props.imageUrl} alt={props.imageAlt || 'image'}/>
            <Tag title={props.tag}/>
            <div>
                Published {props.publishedDate}
            </div>
            <Heading>
                {props.title}
            </Heading>
            <Paragraph>
                {props.description}
            </Paragraph>
            <AuthorAvatar alt={props.authorAvatarAlt} image={props.authorAvatar} name={props.author} />
        </CardContainer>
    )
}

const Paragraph = styled.div`
    color: ${props => props.theme.colors.neutral.grey};
    font-size: ${props => props.theme.fontSizes.paragraph};
    line-height: 2rem;
`

const Heading = styled.div`
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.heading};
`

const CardContainer = styled.div`
    width: 400px;
    border: 2px solid ${props => props.theme.colors.neutral.black};
    border-radius: 40px;
    background-color: ${props => props.theme.colors.neutral.white};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    img {
        border-radius: 1rem;
        width: 100%;
    }
    
    box-shadow: .25rem .25rem 0 ${props => props.theme.colors.neutral.black};
    
    &:hover {
        cursor: pointer;
        box-shadow: 1rem 1rem 0 ${props => props.theme.colors.neutral.black};
        
        ${Heading} {
            color: ${props => props.theme.colors.primary};
        }
    }
    
`