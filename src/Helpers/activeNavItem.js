import { activeStyle } from './HeadingStyle';

export default function activeNavItem(location, route) {
    return location.pathname === route ||
        (location.pathname === '/' && route === '/about')
        ? activeStyle
        : { opacity: '0.4' };
}