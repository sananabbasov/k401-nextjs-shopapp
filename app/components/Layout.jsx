import Provider from "../Provider";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
            <Provider>
                <Header />
                <main>{children}</main>
                <h1>Footer</h1>
            </Provider>
        </>
    )
}