import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-gray-4: #121214;
        --color-gray-3: #212529;
        --color-gray-2: #343B41;
        --color-gray-1: #868E96;
        --color-gray-0: #F8F9FA;

        --font-size-title-1: 1rem;
        --font-size-text-1: 0.75rem;

        --bold: bold;
        --italic: italic;

        --font-family: 'Inter', sans-serif;
    }
    body{
        width: 100vw;
        height: 100vh;
        background-color: var(--color-gray-4);
    }
    #root{
        width: 100vw;
        height: 100vh;
    }
`;
export default Global;
