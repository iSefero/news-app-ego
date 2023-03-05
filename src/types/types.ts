import React from "react"

export interface IPost {
    author?: string,
    content?: string,
    description?: string,
    publishedAt?: string,
    source?: {
        id?: string,
        name?: string,
    },
    title: string,
    url?: string,
    urlToImage: string,
}

interface ButtonStyle {
    margin?: string,
    bg?: string
    fontSize?: string,
    color?: string,
}

export interface IButton extends ButtonStyle {
    sx?: ButtonStyle,
    text: React.ReactNode[] | string | null,
    onClick?: any,
    type?: string,
}

export interface ILocalStorageData {
    username: string,
    password: string
}


