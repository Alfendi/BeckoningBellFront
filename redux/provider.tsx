'use client' // A provider for react-redux.

import { makeStore } from "./store"
import { Provider } from "react-redux"

interface Props {
    children: React.ReactNode
}

export default function CustomProvider( { children }: Props) {
    return <Provider store={makeStore()}>{children}</Provider>
}