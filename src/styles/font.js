import { createGlobalStyle } from "styled-components";

const Font = createGlobalStyle`
    body{
        font-family: var(--font-family);
    }
    h1{
        font-size: var(--font-size-title-1);
        color: var(--color-gray-0);
    }
    p, label{
        font-size: var(--font-size-text-1);
        color: var(--color-gray-0);
    }
`;
export default Font;
