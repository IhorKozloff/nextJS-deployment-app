import { MainNavigation } from '../layout/MainNavigation';

export const Layout = ({children}) => {

    return (
        <>
            <MainNavigation/>
            <main>
                {children}
            </main>
        </>
    )
}