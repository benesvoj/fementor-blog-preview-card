import {CardProps} from "../components/Card/Card";
import {images} from "../assets";

export const mockData: CardProps[] = [{
    imageUrl: images.illustrationArticle,
    imageAlt: 'illustration article',
    tag: 'Learning',
    publishedDate: '21 Dec 2023',
    title: 'HTML & CSS foundations',
    description: 'These languages are the backbone of every website, defining structure, content, and presentation',
    author: 'Greg Hooper',
    authorAvatar: images.imageAvatar,
    authorAvatarAlt: 'Author'
}]