import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigBall1, bigBall2, bigBall3, customer1, customer2, ball4, ball5, ball6, ball7, thumbnailBall1, thumbnailBall2, thumbnailBall3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const balls = [
    {
        thumbnail: thumbnailBall1,
        bigBall: bigBall1,
    },
    {
        thumbnail: thumbnailBall2,
        bigBall: bigBall2,
    },
    {
        thumbnail: thumbnailBall3,
        bigBall: bigBall3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: ball4,
        name: "Blitz Pro Series Basketball",
        price: "$129.99",
        rating: "4.8",
    },
    {
        imgURL: ball5,
        name: "Blitz Hyper Performance Basketball",
        price: "$99.99",
        rating: "4.7",
    },
    {
        imgURL: ball6,
        name: "Blitz All-Star Recreational Basketball",
        price: "$119.99",
        rating: "4.2",
    },
    {
        imgURL: ball7,
        name: "Blitz Mini Youth Basketball",
        price: "$69.99",
        rating: "4.5",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Basketballs", link: "/" },
            { name: "Basketball Apparel", link: "/" },
            { name: "Basketball Gear", link: "/" },
            
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@blitz.com", link: "mailto:customer@blitz.com" },
            { name: "+0123 123 123", link: "tel:+0123 123 123" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];